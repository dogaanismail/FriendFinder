using System.Collections.Generic;

namespace FriendFinder.Domain.Dto
{
    public class ChatDto
    {
        public int ChatGroupId { get; set; }
        public int ChatId { get; set; }
        public int AppUserId { get; set; }
        public List<MessageDto> Messages { get; set; }
    }
}
