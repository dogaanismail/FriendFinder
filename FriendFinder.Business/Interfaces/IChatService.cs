using FriendFinder.Domain.Dto;
using System.Collections.Generic;

namespace FriendFinder.Business.Interfaces
{
    public interface IChatService
    {
        /// <summary>
        /// Sistemdeki Bütün Mesajları Getir
        /// </summary>
        /// <returns></returns>
        IEnumerable<MessageDto> GetAllMessages();

        /// <summary>
        /// Gelen id'ye göre ilgili chat'i döndürmektedir.
        /// </summary>
        /// <param name="chatId"></param>
        /// <returns></returns>
        MessageDto GetMessageById(int chatId);
      
    }
}
