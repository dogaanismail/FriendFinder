using FriendFinder.Business.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace FriendFinder.Api.Hubs
{
    public class ChatHub : Hub
    {
        #region Ctor
        private IChatService _chatService;
        public ChatHub(IChatService chatService)
        {
            _chatService = chatService;
        }

        #endregion

        public async Task PrivateMessage(string username, string message)
        {
            //TODO
            var data = _chatService.GetMessagesByGroupName(message);
            await Clients.User("sfsff").SendAsync("ReceiveMessage", "userConnectionId", message);
        }
    }
}
