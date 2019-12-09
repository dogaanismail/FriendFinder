using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class ChatGroupUser : BaseEntity
    {
        [Required]
        [ForeignKey("ChatGroup")]
        public int ChatGroupId { get; set; }

        [Required]
        [ForeignKey("GroupMember")]
        public int MemberId { get; set; }

        public virtual AppUser GroupMember { get; set; }
        public virtual ChatGroup ChatGroup { get; set; }
    }
}
