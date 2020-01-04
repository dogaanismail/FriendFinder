using FriendFinder.Core.Security.JwtSecurity;
using FriendFinder.Entities.Data;
using FriendFinder.Entities.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace FriendFinder.Api.Configuration
{
    public static class Auth
    {
        /// <summary>
        /// Cors policy processes.
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        public static void AddMyAuth(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddIdentity<AppUser, IdentityRole<int>>(options =>
            {
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = false;

                options.User.RequireUniqueEmail = true;

                //TODO
                //options.User.RequireUniqueEmail = true; 
                //options.SignIn.RequireConfirmedEmail = true;
                //options.Lockout.MaxFailedAccessAttempts = 5;
                //options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(3);

            }).AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie();

            // Uncomment the following lines to enable logging in with third party login providers

            JwtTokenDefinitions.LoadFromConfiguration(configuration);
            services.ConfigureJwtAuthentication();
            services.ConfigureJwtAuthorization();
        }
    }
}
