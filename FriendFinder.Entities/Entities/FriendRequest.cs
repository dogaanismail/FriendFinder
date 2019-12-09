using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class FriendRequest : BaseEntity
    {
        [Required]
        [ForeignKey("FutureUser")]
        public int FutureFriendId { get; set; }

        [Required]
        [ForeignKey("FriendUser")]
        public int UserId { get; set; }

        public bool IsAccepted { get; set; }
        public bool IsPending { get; set; }
        public bool IsRejected { get; set; }

        [MaxLength(150)]
        public string RequestMessage { get; set; }

        public DateTime SentDate { get; set; }

        public virtual AppUser FutureUser { get; set; }
        public virtual AppUser FriendUser { get; set; }
    }
}
