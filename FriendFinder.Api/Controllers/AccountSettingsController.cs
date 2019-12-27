using FriendFinder.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
    //[Authorize]
    public class AccountSettingsController : BaseController
    {
        #region Ctor
        private readonly IUserService _userService;

        public AccountSettingsController(IUserService userService)
        {
            _userService = userService;
        }

        #endregion

        [HttpGet("getuserinformations")]
        public JsonResult GetUserInformations()
        {
            var data = _userService.GetSignedUserDetail(User.Identity.Name);
            return OkResponse(data);
        }
    }
}