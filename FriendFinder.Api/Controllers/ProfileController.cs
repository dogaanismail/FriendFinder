using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using FriendFinder.Api.Configuration;
using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Api;
using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net;

namespace FriendFinder.Api.Controllers
{
    public class ProfileController : BaseController
    {
        #region Ctor
        private readonly UserManager<AppUser> _userManager;
        private readonly IUserDetailService _userDetailService;
        private readonly IUserService _userService;
        private Cloudinary _cloudinary;
        private readonly IOptions<CloudinarySettings> _options;

        public ProfileController(UserManager<AppUser> userManager, IOptions<CloudinarySettings> options, IUserService userService,
            IUserDetailService userDetailService)
        {
            _userManager = userManager;
            _userDetailService = userDetailService;
            _userService = userService;
            _options = options;

            Account account = new Account(
             _options.Value.CloudName,
             _options.Value.ApiKey,
             _options.Value.ApiSecret);

            _cloudinary = new Cloudinary(account);
        }
        #endregion

        [HttpGet("getuser")]
        public JsonResult GetUser(string username)
        {
            var data = _userDetailService.GetUserDetailByUsername(username);
            return OkResponse(data);
        }

        [HttpPost("changephoto")]
        public JsonResult ChangeProfilePhoto([FromForm]PhotoChangeApi model)

        {
            if (model.ProfilePhoto != null)
            {
                AppUser appUser = _userService.FindByUserName(User.Identity.Name);
                var imageUploadResult = new ImageUploadResult();

                #region ImageUploadingProcess

                using (var stream = model.ProfilePhoto.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(model.ProfilePhoto.Name, stream)
                    };

                    imageUploadResult = _cloudinary.Upload(uploadParams);
                    if (imageUploadResult.Error != null)
                    {
                        return BadResponse(new ResultModel(false, "The upload process could not be done !"));
                    }
                }

                #endregion

                if (imageUploadResult.StatusCode == HttpStatusCode.OK)
                {
                    appUser.UserDetail.ProfilePhotoPath = imageUploadResult.Uri.ToString();
                    var result = _userService.Update(appUser);
                    if (result.Status)
                        return OkResponse(appUser.UserDetail.ProfilePhotoPath);
                    else
                        return BadResponse(new ResultModel(false, "File could not be uploaded !"));
                }
            }
            return BadResponse(new ResultModel(false, "File can not be null or empty !"));
        }

        [HttpPost("changecover")]
        public JsonResult ChangeCoverPhoto([FromForm]PhotoChangeApi model)
        {
            if (model.CoverPhoto != null)
            {
                AppUser appUser = _userService.FindByUserName(User.Identity.Name);
                var imageUploadResult = new ImageUploadResult();

                #region ImageUploadingProcess

                using (var stream = model.CoverPhoto.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(model.CoverPhoto.Name, stream)
                    };

                    imageUploadResult = _cloudinary.Upload(uploadParams);
                    if (imageUploadResult.Error != null)
                    {
                        return BadResponse(new ResultModel(false, "The upload process could not be done !"));
                    }
                }

                #endregion

                if (imageUploadResult.StatusCode == HttpStatusCode.OK)
                {
                    appUser.UserDetail.CoverPhotoPath = imageUploadResult.Uri.ToString();
                    var result = _userService.Update(appUser);
                    if (result.Status)
                        return OkResponse(appUser.UserDetail.CoverPhotoPath);
                    else
                        return BadResponse(new ResultModel(false, "File could not be uploaded !"));
                }
            }
            return BadResponse(new ResultModel(false, "File can not be null or empty !"));
        }
    }
}