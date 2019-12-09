using System.Collections.Generic;

namespace FriendFinder.Entities.Entities
{
    public class Post : BaseEntity
    {
        public Post()
        {
            PostImages = new HashSet<PostImage>();
            PostComments = new HashSet<PostComment>();
            PostVideos = new HashSet<PostVideo>();
        }
        public string Text { get; set; }
        public int? PostType { get; set; }

        public virtual ICollection<PostComment> PostComments { get; set; }
        public virtual ICollection<PostImage> PostImages { get; set; }
        public virtual ICollection<PostVideo> PostVideos { get; set; }
    }
}
