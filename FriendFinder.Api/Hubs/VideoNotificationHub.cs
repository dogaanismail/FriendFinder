using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace FriendFinder.Api.Hubs
{
    public class VideoNotificationHub : Hub
    {
        public async Task RoomsUpdated(bool flag)
           => await Clients.Others.SendAsync("RoomsUpdated", flag);
    }
}
