using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FriendFinder.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
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
            return null;
        }
    }
}