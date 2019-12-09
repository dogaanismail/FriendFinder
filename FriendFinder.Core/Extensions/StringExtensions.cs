using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace FriendFinder.Core.Extensions
{
    public static class StringExtensions
    {
        public static string DateFormat(this DateTime? value)
        {
            if (value.HasValue)
            {
                if (value.Value == DateTime.MinValue)
                    return string.Empty;
                return value.Value.ToString("dd/MM/yyyy");
            }
            return null;
        }

        public static string DateFormat(this DateTime value)
        {
            if (value == DateTime.MinValue)
                return string.Empty;
            return value.ToString("dd/MM/yyyy");
        }

        public static string TimeFormat(this DateTime? value)
        {
            if (value.HasValue)
            {
                if (value.Value == DateTime.MinValue)
                    return string.Empty;
                return value.Value.ToString("dd/MM/yyyy HH:mm");
            }
            return null;
        }

        public static string TimeFormat(this DateTime value)
        {
            if (value == DateTime.MinValue)
                return string.Empty;
            return value.ToString("dd/MM/yyyy HH:mm");
        }

        public static string ToTimeString(this int value)
        {
            TimeSpan finalTime = TimeSpan.FromMinutes(value);

            return string.Format("{0} Hour {1} Minute", finalTime.Hours, finalTime.Minutes);
        }

        public static string ToDateString(this int value)
        {
            TimeSpan finalTime = TimeSpan.FromMinutes(value);

            return string.Format("{2} Day {0} Hour {1} Minute", finalTime.Hours, finalTime.Minutes, finalTime.Days);
        }
        public static string ToDateString(this TimeSpan finalTime)
        {
            return string.Format("{2} Day {0} Hour {1} Minute", finalTime.Hours, finalTime.Minutes, finalTime.Days);
        }
        public static string ToOnlyDateString(this TimeSpan finalTime)
        {
            return string.Format("{0} Day", finalTime.Days);
        }
        public static string ToSeoUrl(this string url)
        {
            // make the url lowercase
            string encodedUrl = (url ?? "").ToLower();

            encodedUrl = encodedUrl.Replace("ç", "c").Replace("ı", "i").Replace("ş", "s").Replace("ğ", "g").Replace("ö", "o").Replace("ü", "u");
            // invalid chars, make into spaces
            encodedUrl = Regex.Replace(encodedUrl, @"[^a-z0-9\s-]", "");
            // convert multiple spaces/hyphens into one space       
            encodedUrl = Regex.Replace(encodedUrl, @"[\s-]+", " ").Trim();
            // cut and trim it
            encodedUrl = encodedUrl.Substring(0, encodedUrl.Length <= 100 ? encodedUrl.Length : 100).Trim();
            // hyphens
            encodedUrl = Regex.Replace(encodedUrl, @"\s", "-");

            return encodedUrl;
        }
    
        public static string LongLengthFormat(this string text, int length)
        {
            if (text.Length > length)
            {
                text = text.Substring(0, length - 3) + "...";
            }
            return text;
        }

        public static int ToInt32(this string text, int defaultValue = 0)
        {
            try
            {
                return Convert.ToInt32(text);
            }
            catch
            {
                return defaultValue;
            }
        }

        public static int ToInt32(this int? number, int? defaultValue = null)
        {
            try
            {
                return Convert.ToInt32(number);
            }
            catch
            {
                return defaultValue ?? 0;
            }
        }

        public static DateTime ToDateTime(this DateTime? date, DateTime? defaultValue = null)
        {
            try
            {
                return Convert.ToDateTime(date);
            }
            catch
            {
                return defaultValue ?? DateTime.Now;
            }
        }
    }
}
