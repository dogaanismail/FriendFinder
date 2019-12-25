using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Dto;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using System;

namespace FriendFinder.Api.Hubs
{
    public class ChatHub : Hub
    {
        #region Ctor
        private IChatService _chatService;
        private IUserService _userService;
        public ChatHub(IChatService chatService, IUserService userService)
        {
            _chatService = chatService;
            _userService = userService;
        }

        #endregion

        public async Task PrivateMessage(MessageDto message)
        {
            var user = _userService.FindByUserName(Context.User.Identity.Name);
            message.SenderId = user.Id;
            message.SenderName = Context.User.Identity.Name;
            message.ProfilePhotoUrl = user.UserDetail.ProfilePhotoPath;
            message.CreateDate = DateTime.Now;
            var result = _chatService.Create(message);
            if (result.Status)
            {
                await Clients.All.SendAsync("ReceiveMessage", message);
            }

        }
    }
}
