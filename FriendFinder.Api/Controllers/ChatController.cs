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

        public ChatController(IChatService chatService)
        {
            _chatService = chatService;
        }
        #endregion

        [HttpGet("GetAllMessages")]
        public JsonResult GetAllMessages()
        {
            Log.Logger.Information("ChatController - GetAllMessages Logged");

            var data = _chatService.GetAllMessages();
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