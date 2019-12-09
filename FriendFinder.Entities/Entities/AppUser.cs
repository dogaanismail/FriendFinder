using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class AppUser : IdentityUser<int>, IEntity
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public int? CreatedBy { get; set; }
        public int? ModifiedBy { get; set; }
        public int? StatusId { get; set; }

        [Required]
        [ForeignKey("UserDetail")]
        public int DetailId{ get; set; }
       
        public virtual AppUserDetail UserDetail { get; set; }
    }
}
