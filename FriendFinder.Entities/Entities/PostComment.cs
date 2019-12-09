using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class PostComment : BaseEntity
    {
        public string Text { get; set; }

        [Required]
        [ForeignKey("CommentPost")]
        public int PostId { get; set; }
      
        public virtual Post CommentPost { get; set; }
    }
}
