using System;

namespace FriendFinder.Core.Helpers
{
    public static class Converter
    {
        public static int ToInt32(this string value)
        {
            int.TryParse(value, out int resultValue);
            return resultValue;
        }

        public static DateTime ToDateTime(this string value)
        {
            DateTime.TryParse(value, out DateTime resultValue);
            return resultValue;
        }
    }
}
