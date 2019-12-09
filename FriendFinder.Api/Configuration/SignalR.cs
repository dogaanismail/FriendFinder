using FriendFinder.Api.Hubs;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace FriendFinder.Api.Configuration
{
    public static class SignalR
    {
        public static IApplicationBuilder UseSignalRHubs(this IApplicationBuilder app)
        {
            app.UseSignalR(routes =>
            {
                routes.MapHub<VideoNotificationHub>("/notificationHub");
            });

            return app;
        }
    }
}
