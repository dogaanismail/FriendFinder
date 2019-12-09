using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;

namespace FriendFinder.Business.Interfaces
{
    public interface IUserService
    {
        /// <summary>
        /// Returns a user by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        AppUser FindByUserName(string username);

        /// <summary>
        /// Updates a user
        /// </summary>
        /// <param name="appUser"></param>
        /// <returns></returns>
        ResultModel Update(AppUser appUser);
    }
}
