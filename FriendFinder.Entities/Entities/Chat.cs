using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class Chat : BaseEntity
    {
        [Required]
        public string Text { get; set; }

        [Required]
        [ForeignKey("Sender")]
        public int SenderId { get; set; }

        [Required]
        [ForeignKey("ChatGroup")]
        public int ChatGroupId { get; set; }

        public bool IsRead { get; set; }
        
        public virtual AppUser Sender { get; set; }        
        public virtual ChatGroup ChatGroup { get; set; }
    }
}
