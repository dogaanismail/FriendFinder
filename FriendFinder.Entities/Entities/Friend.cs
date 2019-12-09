using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class Friend : BaseEntity
    {
        [Required]
        [ForeignKey("FutureFriend")]
        public int FutureFriendId { get; set; }

        [Required]
        [ForeignKey("FriendUser")]
        public int UserId { get; set; }

        public DateTime BecameFriendDate { get; set; }

        public virtual AppUser FutureFriend { get; set; }
        public virtual AppUser FriendUser { get; set; }
    }
}
