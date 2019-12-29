namespace FriendFinder.Domain.Api
{
    public class ChangePasswordApi
    {
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
