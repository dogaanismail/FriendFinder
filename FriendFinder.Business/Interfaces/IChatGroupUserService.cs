using FriendFinder.Domain.Common;

namespace FriendFinder.Business.Interfaces
{
    public interface IChatGroupUserService
    {
        /// <summary>
        /// Returns chat groups by user Id.
        /// </summary>
        /// <returns></returns>
        ResultModel GetChatGroupUsers(int userId);
    }
}
