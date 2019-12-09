using System;

namespace FriendFinder.Domain.Dto
{
    public class ChatGroupDto
    {
        public int ChatGroupId { get; set; }
        public int AppUserId { get; set; }
        public string ChatGroupName { get; set; }
        public string UserName { get; set; }
        public string ProfilePhotoUrl { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
