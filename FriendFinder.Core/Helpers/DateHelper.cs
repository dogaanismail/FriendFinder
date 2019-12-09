using FriendFinder.Domain.Models;
using System;
using System.Collections.Generic;

namespace FriendFinder.Core.Helpers
{
    public static class DateHelper
    {
        public static List<KeyValuePair<DateTime, string>> GetDatesByBetweenDates(DateTime startDate, DateTime endDate)
        {
            List<KeyValuePair<DateTime, string>> dates = new List<KeyValuePair<DateTime, string>>();

            for (int i = 0; i <= (endDate - startDate).Days; i++)
            {
                DateTime date = startDate.AddDays(i);
                dates.Add(new KeyValuePair<DateTime, string>(date, date.ToString("dd MMMM")));
            }
            return dates;
        }
        public static List<MonthModel> GetMonthsByBetweenDates(DateTime startDate, DateTime endDate)
        {
            List<MonthModel> dates = new List<MonthModel>();

            var monthDiff = (endDate - startDate).Days / 30;

            for (int i = 0; i <= monthDiff; i++)
            {
                DateTime date = startDate.AddMonths(i);
                dates.Add(new MonthModel { Month = date.Month, Year = date.Year, Text = date.ToString("MMMM yy") });
            }

            return dates;
        }
    }
}
