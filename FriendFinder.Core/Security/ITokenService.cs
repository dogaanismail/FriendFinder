using FriendFinder.Domain.Api;
using FriendFinder.Domain.Dto;
using System.Collections.Generic;
using System.Security.Claims;

namespace FriendFinder.Core.Security
{
    public interface ITokenService
    {
        TokenUserResponse GenerateToken(AppUserDto appUserDto);

        string GenerateAccessToken(IEnumerable<Claim> claims);
        string GenerateRefreshToken();
    }
}
