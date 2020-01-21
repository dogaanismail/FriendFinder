using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using FriendFinder.Api.Configuration;
using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Api;
using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Net;
using System.Transactions;
using FriendFinder.Core.Helpers;
using FriendFinder.Domain.Enumerations;
using FriendFinder.Core.Extensions;

namespace FriendFinder.Api.Controllers
{

    public class PostController : BaseController
    {
        #region Ctor
        private readonly IPostService _postService;
        private readonly IPostImageService _postImageService;
        private readonly IPostCommentService _postCommentService;
        private readonly IPostVideoService _postVideoService;
        private readonly IUserService _userService;
        private readonly UserManager<AppUser> _userManager;
        private IOptions<CloudinarySettings> _options;
        private Cloudinary _cloudinary;

        public PostController(IPostService postService,
            IOptions<CloudinarySettings> options, IPostCommentService postCommentService,
            IPostImageService postImageService, IPostVideoService postVideoService, UserManager<AppUser> userManager, IUserService userService)
        {
            _postService = postService;
            _options = options;
            _postImageService = postImageService;
            _postVideoService = postVideoService;
            _postCommentService = postCommentService;
            _userManager = userManager;
            _userService = userService;

            Account account = new Account(
              _options.Value.CloudName,
              _options.Value.ApiKey,
              _options.Value.ApiSecret);

            _cloudinary = new Cloudinary(account);
        }

        #endregion

        [HttpPost("createpost")]
        [Authorize]
        public JsonResult CreatePost([FromForm] PostCreateApi model)
        {
            using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            {
                try
                {
                    if (!string.IsNullOrEmpty(model.Text))
                    {
                        Result.Status = false;
                        Result.Message = "You can not add a post without writing text ! ";
                        return BadResponse(Result);
                    }
                    var appUser = _userService.FindByUserName(User.Identity.Name);
                    if (appUser == null)
                    {
                        return BadResponse(new ResultModel
                        {
                            Status = false,
                            Message = "User not found !"
                        });
                    }

                    bool hasImage = CheckItemType.HasItemImage(model);
                    bool hasVideo = CheckItemType.HasItemVideo(model);
                    var imageUploadResult = new ImageUploadResult();
                    var videoUploadResult = new VideoUploadResult();

                    #region CloudinaryProcess

                    #region ImageUploadingProcess
                    if (hasImage)
                    {
                        using (var stream = model.Photo.OpenReadStream())
                        {
                            var uploadParams = new ImageUploadParams
                            {
                                File = new FileDescription(model.Photo.Name, stream)
                            };

                            imageUploadResult = _cloudinary.Upload(uploadParams);
                            if (imageUploadResult.Error != null)
                            {
                                scope.Dispose();
                                return BadResponse(ResultModel.Error("The upload process can not be done !"));
                            }
                        }
                    }
                    #endregion

                    #region VideoUploadingProcess

                    if (hasVideo)
                    {
                        using (var stream = model.Video.OpenReadStream())
                        {
                            var uploadParams = new VideoUploadParams
                            {
                                File = new FileDescription(model.Video.Name, stream)
                            };

                            videoUploadResult = _cloudinary.Upload(uploadParams);
                            if (videoUploadResult.Error != null)
                            {
                                scope.Dispose();
                                return BadResponse(ResultModel.Error("The upload process can not be done !"));
                            }
                        }
                    }

                    #endregion

                    #endregion

                    #region CRUD

                    var newPost = new Post
                    {
                        Text = model.Text,
                        PostType = hasImage == true ? (int)PostTypeEnum.PostImage
                        : hasVideo == true ? (int)PostTypeEnum.PostVideo
                        : (int)PostTypeEnum.PostText,
                        CreatedBy = appUser.Id
                    };
                    ResultModel postModel = _postService.Create(newPost);

                    if (!postModel.Status)
                    {
                        scope.Dispose();
                        return BadResponse(ResultModel.Error("The upload process can not be done !"));
                    }

                    #region PostImages
                    if (imageUploadResult != null && imageUploadResult.StatusCode == HttpStatusCode.OK)
                    {
                        var postImages = new PostImage
                        {
                            PostId = newPost.Id,
                            ImageUrl = imageUploadResult.Uri.ToString()
                        };
                        ResultModel postImageModel = _postImageService.Create(postImages);

                        if (!postImageModel.Status)
                        {
                            scope.Dispose();
                            return BadResponse(ResultModel.Error("The upload process can not be done !"));
                        }
                    }

                    #endregion

                    #region PostVideos

                    if (videoUploadResult != null && videoUploadResult.StatusCode == HttpStatusCode.OK)
                    {
                        var postVideos = new PostVideo
                        {
                            PostId = newPost.Id,
                            VideoUrl = videoUploadResult.Uri.ToString()
                        };
                        ResultModel postVideoModel = _postVideoService.Create(postVideos);

                        if (!postVideoModel.Status)
                        {
                            scope.Dispose();
                            return BadResponse(ResultModel.Error("The upload process can not be done !"));
                        }
                    }

                    #endregion

                    #endregion

                    scope.Complete();
                    //TODO
                    //There must be an integration that returns the last post that has just been createad.

                    return OkResponse(new PostListDto
                    {
                        Id = newPost.Id,
                        Text = newPost.Text,
                        ImageUrl = imageUploadResult.Uri?.ToString(),
                        CreatedByUserName = appUser.UserName,
                        CreatedByUserPhoto = appUser.UserDetail.ProfilePhotoPath,
                        CreatedDate = newPost.CreatedDate,
                        VideoUrl = videoUploadResult.Uri?.ToString(),
                        PostType = newPost.PostType,
                        Comments = null
                    });
                }
                catch (Exception ex)
                {
                    scope.Dispose();
                    Result.Status = false;
                    Result.Message = ex.ToString();
                    return BadResponse(Result);
                }
            }
        }

        [HttpGet("postlist")]
        [AllowAnonymous]
        public JsonResult GetPostList()
        {
            //TODO Getting Post List
            var data = _postService.GetPostList();
            return OkResponse(data);
        }

        [HttpPost("createcomment")]
        [Authorize]
        public JsonResult CreatePostComment([FromBody] PostCommentCreateApi model)
        {
            using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            {
                try
                {
                    if (model.Text == null)
                    {
                        Result.Status = false;
                        Result.Message = "Comment text can not be null ! ";
                        return BadResponse(Result);
                    }
                    else
                    {
                        var commentPost = _postService.GetById(model.PostId);
                        var appUser = _userService.FindByUserName(User.Identity.Name);
                        if (appUser == null)
                        {
                            return BadResponse(new ResultModel
                            {
                                Status = false,
                                Message = "User not found ! "
                            });
                        }

                        PostComment newComment = new PostComment
                        {
                            PostId = model.PostId,
                            Text = model.Text,
                            CreatedBy = appUser.Id
                        };

                        ResultModel result = _postCommentService.Create(newComment);
                        if (result.Status)
                        {
                            scope.Complete();
                            return OkResponse(new PostCommentListDto
                            {
                                Text = newComment.Text,
                                Id = newComment.Id,
                                PostId = newComment.PostId,
                                CreatedDate = newComment.CreatedDate,
                                CreatedByUserName = appUser.UserName,
                                CreatedByUserPhoto = appUser.UserDetail.ProfilePhotoPath
                            });
                        }
                        else
                        {
                            Result.Status = false;
                            Result.Message = "Comment could not be added ! ";
                            return BadResponse(Result);
                        }
                    }
                }
                catch (Exception ex)
                {
                    scope.Dispose();
                    Result.Status = false;
                    Result.Message = ex.ToString();
                    return BadResponse(Result);
                }
            }
        }

        [HttpPost("creategif")]
        public JsonResult CreateGif([FromBody] GifCreateApi model)
        {
            try
            {
                if (!string.IsNullOrEmpty(model.Text) && !string.IsNullOrEmpty(model.GifUrl))
                {
                    Result.Status = false;
                    Result.Message = "You can not add a post without text and gif url ! ";
                    return BadResponse(Result);
                }
                else
                {
                    var appUser = _userService.FindByUserName(User.Identity.Name);
                    if (appUser == null)
                    {
                        return BadResponse(new ResultModel
                        {
                            Status = false,
                            Message = "User not found !"
                        });
                    }

                    var newPost = new Post
                    {
                        Text = model.Text,
                        PostType = (int)PostTypeEnum.PostImage,
                        CreatedBy = appUser.Id
                    };
                    ResultModel postModel = _postService.Create(newPost);

                    if (!postModel.Status)
                    {
                        return BadResponse(ResultModel.Error("The upload process can not be done !"));
                    }

                    return OkResponse(new PostListDto
                    {
                        Id = newPost.Id,
                        Text = newPost.Text,
                        ImageUrl = model.GifUrl,
                        CreatedByUserName = appUser.UserName,
                        CreatedByUserPhoto = appUser.UserDetail.ProfilePhotoPath,
                        CreatedDate = newPost.CreatedDate,
                        PostType = newPost.PostType,
                        Comments = null
                    });
                }
            }
            catch (Exception ex)
            {
                Result.Status = false;
                Result.Message = ex.ToString();
                return BadResponse(Result);
            }
        }

    }
}