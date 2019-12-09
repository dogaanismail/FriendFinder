using FluentValidation;
using FriendFinder.Domain.Api;
using FriendFinder.Domain.Validation;
using Microsoft.Extensions.DependencyInjection;

namespace FriendFinder.Api.Configuration
{
    public static class Validator
    {
        public static void AddMyValidator(this IServiceCollection services)
        {
            services.AddSingleton<IValidator<LoginApiRequest>, LoginApiRequestValidator>();
            //services.AddSingleton<IValidator<PostCreateApi>, PostCreateApiValidator>();
        }
    }
}
