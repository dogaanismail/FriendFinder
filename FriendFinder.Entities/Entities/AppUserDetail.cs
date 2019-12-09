using System;
using System.ComponentModel.DataAnnotations;

namespace FriendFinder.Entities.Entities
{
    public class AppUserDetail : IEntity
    {
        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? CreatedBy { get; set; }
        public int? ModifiedBy { get; set; }
        public int? StatusId { get; set; }

        [MaxLength(50)]
        public string FirstName { get; set; }

        [MaxLength(50)]
        public string LastName { get; set; }

        public DateTime? BirthDate { get; set; }

        [MaxLength(100)]
        public string ProfilePhotoPath { get; set; }

        [MaxLength(100)]
        public string CoverPhotoPath { get; set; }

        [MaxLength(39)]
        public string City { get; set; }

        [MaxLength(35)]
        public string Country { get; set; }

       
    }
}
