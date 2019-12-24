using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using System.Collections.Generic;

namespace FriendFinder.Business.Interfaces
{
    public interface IChatGroupService
    {
        /// <summary>
        /// Creates a chat group.
        /// </summary>
        /// <returns></returns>
        ResultModel CreateChatGroup();

        /// <summary>
        /// Returns chat groups by username.
        /// </summary>
        /// <returns></returns>
        IEnumerable<ChatGroupDto> GetChatGroups(string username);

    }
}
