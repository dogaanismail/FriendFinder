using System;

namespace FriendFinder.Domain.Dto
{
    public class SignedUserDetailDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Email { get; set; }
        public string Sex { get; set; }
        public string AboutMe { get; set; }
        public string UniversityName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? FinishUpDate { get; set; }
        public bool? HasGraduated { get; set; }
        public string UniversityDesc { get; set; }
        public string CompanyName { get; set; }
        public string Designation { get; set; }
    }
}
