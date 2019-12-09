using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

namespace FriendFinder.Core.Security.JwtSecurity
{
    public class JwtTokenDefinitions
    {

        public static void LoadFromConfiguration(IConfiguration configuration)
        {
            var config = configuration.GetSection("JwtConfiguration");
            Audience = config.GetValue<string>("Audience");
            Issuer = config.GetValue<string>("Issuer");
            TokenExpirationTime = TimeSpan.FromMinutes(config.GetValue<int>("TokenExpirationTime"));
            ValidateIssuerSigningKey = config.GetValue<bool>("ValidateIssuerSigningKey");
            ValidateLifetime = config.GetValue<bool>("ValidateLifetime");
            ClockSkew = TimeSpan.FromMinutes(config.GetValue<int>("ClockSkew"));
            Key = config.GetValue<string>("Key");
        }

        public static string Key;

        public static SecurityKey IssuerSigningKey => new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key));

        public static SigningCredentials SigningCredentials => new SigningCredentials(IssuerSigningKey, SecurityAlgorithms.HmacSha256);

        public static TimeSpan TokenExpirationTime;

        public static TimeSpan RefreshTokenExpirationTime { get; set; } = TimeSpan.FromDays(1);

        public static TimeSpan ClockSkew;

        public static string Issuer;

        public static string Audience;

        public static bool ValidateIssuerSigningKey;

        public static bool ValidateLifetime;

    }
}
