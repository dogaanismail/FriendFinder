using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;

namespace FriendFinder.Business.Interfaces
{
    public interface IUserDetailService
    {
        /// <summary>
        /// Creates a user detail
        /// </summary>
        /// <param name="appUserDetail"></param>
        ResultModel Create(AppUserDetail appUserDetail);

        /// <summary>
        /// Returns a user detail by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        AppUserDetailDto GetUserDetailByUsername(string username);

        /// <summary>
        /// Return a user's information like coverPhotoUrl, profilePhotoUrl
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        AppUser GetUserInformationByUsername(string username);

        /// <summary>
        /// Updates signed user detail.
        /// </summary>
        /// <param name="detailDto"></param>
        /// <returns></returns>
        ResultModel Update(SignedUserDetailDto detailDto);

    }
}
