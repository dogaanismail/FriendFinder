using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Extensions;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FriendFinder.Business.Services
{
    public class PostService : IPostService
    {
        #region Ctor
        private readonly IRepository<Post> _postRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PostService(IUnitOfWork unitOfWork,
            IRepository<Post> postRepository)
        {
            _postRepository = postRepository;
            _unitOfWork = unitOfWork;
        }

        #endregion

        public ResultModel Create(Post createPost)
        {
            try
            {
                _postRepository.Create(createPost);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Create Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
            }
        }

        public Post GetById(int id)
        {
            return _postRepository.GetById(id);
        }

        public PostListDto GetByIdAsDto(int id)
        {
            Post getPost = _postRepository.GetById(id, x => x.Include(y => y.PostImages)
             .Include(a => a.PostVideos).Include(comment => comment.PostComments)
             .Include(s => s.CreatedUser).ThenInclude(t => t.UserDetail));

            PostListDto postListDto = new PostListDto
            {
                Id = getPost.Id,
                Text = getPost.Text,
                CreatedDate = getPost.CreatedDate,
                ImageUrl = getPost.PostImages.Count() == 0 ? "" : getPost.PostImages.FirstOrDefault().ImageUrl, //TODO It can be more photos of the post
                VideoUrl = getPost.PostVideos.Count() == 0 ? "" : getPost.PostVideos.FirstOrDefault().VideoUrl, //TODO It can be more videos of the post
                CreatedByUserName = getPost.CreatedUser == null ? "" : getPost.CreatedUser.UserName,
                CreatedByUserPhoto = getPost.CreatedUser.UserDetail.ProfilePhotoPath,
                PostType = getPost.PostType,
                Comments = getPost.PostComments.ToList().Select(y => new PostCommentListDto
                {
                    Text = y.Text,
                    CreatedDate = y.CreatedDate,
                    Id = y.Id,
                    CreatedByUserName = y.CreatedUser.UserName,
                    CreatedByUserPhoto = y.CreatedUser.UserDetail.ProfilePhotoPath,
                    PostId = y.PostId
                }).ToList()
            };

            return postListDto;
        }

        public IEnumerable<PostListDto> GetPostList()
        {
            IEnumerable<PostListDto> data = _postRepository.GetList(null, x => x.Include(y => y.PostImages)
            .Include(a => a.PostVideos).Include(comment => comment.PostComments)
            .Include(s => s.CreatedUser).ThenInclude(t => t.UserDetail))
                .Select(p => new PostListDto
                {
                    Id = p.Id,
                    Text = p.Text,
                    CreatedDate = p.CreatedDate,
                    ImageUrl = p.PostImages.Count() == 0 ? "" : p.PostImages.FirstOrDefault().ImageUrl, //TODO It can be more photos of the post
                    VideoUrl = p.PostVideos.Count() == 0 ? "" : p.PostVideos.FirstOrDefault().VideoUrl, //TODO It can be more videos of the post
                    CreatedByUserName = p.CreatedUser == null ? "" : p.CreatedUser.UserName,
                    CreatedByUserPhoto = p.CreatedUser == null ? "" : p.CreatedUser.UserDetail.ProfilePhotoPath,
                    PostType = p.PostType,
                    Comments = p.PostComments.ToList().Select(y => new PostCommentListDto
                    {
                        Text = y.Text,
                        CreatedDate = y.CreatedDate,
                        Id = y.Id,
                        CreatedByUserName = y.CreatedUser.UserName,
                        CreatedByUserPhoto = y.CreatedUser.UserDetail.ProfilePhotoPath,
                        PostId = y.PostId
                    }).ToList()

                    //TODO
                }).OrderByDescending(sa => sa.CreatedDate).AsEnumerable();

            return data;
        }

        public IEnumerable<Post> GetUserPostsByUserId(int userId)
        {
            return _postRepository.Find(x => x.CreatedBy == userId, x => x.Include(y => y.PostImages)
            .Include(a => a.PostVideos).Include(b => b.PostComments)
            .Include(t => t.CreatedUser).ThenInclude(e => e.UserDetail)).ToList();
        }

        public IEnumerable<PostListDto> GetUserPostsWithDto(int userId)
        {
            IEnumerable<PostListDto> data = _postRepository.GetList(y => y.CreatedBy == userId, x => x.Include(y => y.PostImages)
              .Include(a => a.PostVideos).Include(comment => comment.PostComments)
              .Include(s => s.CreatedUser).ThenInclude(t => t.UserDetail))
              .Select(p => new PostListDto
              {
                  Id = p.Id,
                  Text = p.Text,
                  CreatedDate = p.CreatedDate,
                  ImageUrl = p.PostImages.Count() == 0 ? "" : p.PostImages.FirstOrDefault().ImageUrl, //TODO It can be more photos of the post
                  VideoUrl = p.PostVideos.Count() == 0 ? "" : p.PostVideos.FirstOrDefault().VideoUrl, //TODO It can be more videos of the post
                  CreatedByUserName = p.CreatedUser == null ? "" : p.CreatedUser.UserName,
                  CreatedByUserPhoto = p.CreatedUser == null ? "" : p.CreatedUser.UserDetail.ProfilePhotoPath,
                  PostType = p.PostType,
                  Comments = p.PostComments.ToList().Select(y => new PostCommentListDto
                  {
                      Text = y.Text,
                      CreatedDate = y.CreatedDate,
                      Id = y.Id,
                      CreatedByUserName = y.CreatedUser.UserName,
                      CreatedByUserPhoto = y.CreatedUser.UserDetail.ProfilePhotoPath,
                      PostId = y.PostId
                  }).ToList()

                  //TODO
              }).OrderByDescending(sa => sa.CreatedDate).AsEnumerable();

            return data;
        }
    }
}
