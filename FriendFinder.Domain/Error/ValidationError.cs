using FriendFinder.Domain.Common;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
using System.Linq;

namespace FriendFinder.Domain.Error
{
    public class ValidationError
    {
        public string Message { get; set; }
        public List<ValidationErrorDetail> Details { get; set; }

        public ValidationError(ModelStateDictionary modelState)
        {
            Message = "Validation Failed";
            Details = modelState.Keys
                .SelectMany(key =>
                    modelState[key].Errors.Select(x =>
                    new ValidationErrorDetail(key, x.ErrorMessage))).ToList();
        }

        public ValidationError(ResultModel resultModel)
        {
            Message = resultModel.Message;
            Details = new List<ValidationErrorDetail>();
        }
    }
}
