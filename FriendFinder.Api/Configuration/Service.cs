using FriendFinder.Business.Interfaces;
using FriendFinder.Business.Services;
using FriendFinder.Core.Security;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using Microsoft.Extensions.DependencyInjection;

namespace FriendFinder.Api.Configuration
{
    public static class Service
    {
        /// <summary>
        /// When the program runs, services are injected.
        /// </summary>
        /// <param name="services"></param>
        public static void AddMyServices(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

            services.AddScoped<IUserDetailService, UserDetailService>();
            services.AddScoped<IPostService, PostService>();
            services.AddScoped<IPostImageService, PostImageService>();
            services.AddScoped<IPostCommentService, PostCommentService>();
            services.AddScoped<IPostVideoService, PostVideoService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IChatService, ChatService>();
            services.AddScoped<IChatGroupService, ChatGroupService>();
            services.AddScoped<IChatGroupUserService, ChatGroupUserService>();


            services.AddScoped<ITokenService, TokenService>();

        }
    }
}
