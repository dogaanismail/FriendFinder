using FriendFinder.Business.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FriendFinder.Api.Controllers
{
    //[Authorize]
    public class ChatController : BaseController
    {
        #region Constructor
        private readonly IChatService _chatService;
        private readonly IChatGroupService _chatGroupService;
        public ChatController(IChatService chatService, IChatGroupService chatGroupService)
        {
            _chatService = chatService;
            _chatGroupService = chatGroupService;
        }
        #endregion

        [HttpGet("getgroupmessages")]
        public JsonResult GetMessagesByGroupName(string groupName)
        {
            Log.Logger.Information("ChatController - GetMessagesByGroupName Logged");

            var data = _chatService.GetMessagesByGroupName(groupName);
            return OkResponse(data);
        }

        [HttpGet("GetChatById")]
        public JsonResult GetChatById(int chatId)
        {
            //Log.Logger.Information("ChatController - GetChatById Logged");

            var data = _chatService.GetMessageById(chatId);
            return OkResponse(data);
        }
    }
}