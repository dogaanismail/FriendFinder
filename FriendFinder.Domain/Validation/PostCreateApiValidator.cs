using FluentValidation;
using FriendFinder.Domain.Api;

namespace FriendFinder.Domain.Validation
{
    public class PostCreateApiValidator : AbstractValidator<PostCreateApi>
    {
        public PostCreateApiValidator()
        {
            RuleFor(m => m.Text)
                .Equal("undefined").WithMessage(ValidationMessage.Required)
               .NotEmpty().WithMessage(ValidationMessage.Required);
        }      
    }
}
