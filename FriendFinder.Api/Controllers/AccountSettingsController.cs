using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Api;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FriendFinder.Api.Controllers
{
    //[Authorize]
    public class AccountSettingsController : BaseController
    {
        #region Ctor
        private readonly IUserService _userService;
        private readonly IUserDetailService _userDetailService;
        private readonly UserManager<AppUser> _userManager;
        public AccountSettingsController(IUserService userService,
            IUserDetailService userDetailService, UserManager<AppUser> userManager)
        {
            _userService = userService;
            _userDetailService = userDetailService;
            _userManager = userManager;
        }

        #endregion

        [HttpGet("getdetails")]
        public JsonResult GetUserInformations()
        {
            var data = _userService.GetSignedUserDetail(User.Identity.Name);
            return OkResponse(data);
        }

        [HttpPost("updatebasic")]
        public JsonResult UpdateBasicInformation([FromBody] SignedUserDetailDto detailDto)
        {
            detailDto.UserName = User.Identity.Name;
            var result = _userDetailService.Update(detailDto);
            if (result.Status)
            {
                var data = _userService.GetSignedUserDetail(User.Identity.Name);
                return OkResponse(data);
            }
            else
            {
                return BadResponse(result);
            }

        }

        [HttpPost("updatepassword")]
        public async Task<JsonResult> UpdatePassword([FromBody] ChangePasswordApi model)
        {
            if (User.Identity.IsAuthenticated)
            {
                var getUser = _userService.FindByUserName(User.Identity.Name);
                var result = await _userManager.ChangePasswordAsync(getUser, model.OldPassword, model.NewPassword);
                if (!result.Succeeded)
                {
                    var error = string.Join(", ", result.Errors);
                    Result.Status = false;
                    Result.Message = error;
                    return BadResponse(Result);
                }
                else
                {
                    Result.Status = true;
                    Result.Message = "Password has been changed successfully !";
                    return OkResponse(Result);
                }

            }
            else
            {
                Result.Status = false;
                Result.Message = "You are not authenticated !";
                return BadResponse(Result);
            }

        }
    }
}