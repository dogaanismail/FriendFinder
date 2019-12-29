using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Api;
using FriendFinder.Domain.Dto;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
    //[Authorize]
    public class AccountSettingsController : BaseController
    {
        #region Ctor
        private readonly IUserService _userService;
        private readonly IUserDetailService _userDetailService;
        public AccountSettingsController(IUserService userService, IUserDetailService userDetailService)
        {
            _userService = userService;
            _userDetailService = userDetailService;
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
        public JsonResult UpdatePassword([FromBody] ChangePasswordApi model)
        {
            return null;
        }
    }
}