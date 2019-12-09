using System;

namespace FriendFinder.Domain.Dto
{
    public class MessageDto
    {
        public string Text { get; set; }
        public string SenderName { get; set; }
        public DateTime CreateDate { get; set; }
        public bool IsRead { get; set; }
        public string GroupName { get; set; }
    }
}
