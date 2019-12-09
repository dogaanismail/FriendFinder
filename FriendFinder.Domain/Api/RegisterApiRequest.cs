using System;

namespace FriendFinder.Domain.Api
{
    public class RegisterApiRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }  
        public string Password { get; set; }
        public string RePassword { get; set; }
        public string UserName { get; set; }
    }
}
