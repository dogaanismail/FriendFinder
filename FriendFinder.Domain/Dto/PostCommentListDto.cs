using System;

namespace FriendFinder.Domain.Dto
{
    public class PostCommentListDto
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string CreatedByUserName { get; set; }
        public string CreatedByUserPhoto { get; set; }
        public DateTime CreatedDate { get; set; }
        public int PostId { get; set; }
    }
}
