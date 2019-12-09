using System;
using System.Collections.Generic;
using System.Text;

namespace FriendFinder.Domain.Common
{
    public class ResultModel
    {
        public static ResultModel Success()
        {
            return new ResultModel();
        }

        public static ResultModel Error(string message)
        {
            return new ResultModel(false, message);
        }

        public bool Status { get; set; }
        public string Message { get; set; }
        public int Id { get; set; }

        public ResultModel(bool status = true, string message = "")
        {
            this.Status = status;
            this.Message = message;
        }
    }

    public class ResultModel<T> : ResultModel
    {
        public new static ResultModel<T> Success()
        {
            return new ResultModel<T>();
        }

        public new static ResultModel<T> Error()
        {
            return new ResultModel<T>(false);
        }

        public ResultModel(string errorMessage)
        {
            Message = errorMessage;
            Status = false;
        }

        public ResultModel(T value)
        {
            this.Data = value;
        }

        public ResultModel(bool status = true, string message = "")
        {
            Status = status;
            Message = message;
        }

        public T Data { get; set; }
    }
}
