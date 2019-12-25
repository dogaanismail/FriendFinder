using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.HubModels;
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

        public async Task PrivateMessage(PrivateMessage message)
        {
            //TODO
            var data = _chatService.GetMessagesByGroupName("sf");
            await Clients.User("sfsff").SendAsync("ReceiveMessage", "userConnectionId", "sfs");
        }
    }
}
