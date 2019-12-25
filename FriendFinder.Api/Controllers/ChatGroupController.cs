using FriendFinder.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
    public class ChatGroupController : BaseController
    {
        #region Ctor
        private readonly IChatGroupService _chatGroupService;

        public ChatGroupController(IChatGroupService chatGroupService)
        {
            _chatGroupService = chatGroupService;
        }
        #endregion

        [HttpGet("GetChatGroups")]
        public JsonResult GetChatGroups()
        {
            var data = _chatGroupService.GetChatGroups(User.Identity.Name);
            return OkResponse(data);
        }

        [HttpGet("GetMemberDetails")]
        public JsonResult GetMemberDetails(string groupName)
        {
            var data = _chatGroupService.GetMemberDetailsByGroupName(groupName, User.Identity.Name);
            return OkResponse(data);
        }


    }
}