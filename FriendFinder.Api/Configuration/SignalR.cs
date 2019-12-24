using FriendFinder.Api.Hubs;
using Microsoft.AspNetCore.Builder;

namespace FriendFinder.Api.Configuration
{
    public static class SignalR
    {
        public static IApplicationBuilder UseSignalRHubs(this IApplicationBuilder app)
        {
            app.UseSignalR(routes =>
            {
                routes.MapHub<VideoNotificationHub>("/notificationHub");
                routes.MapHub<ChatboxHub>("/chatboxHub");
                routes.MapHub<ChatHub>("/chatHub");
            });

            return app;
        }
    }
}
