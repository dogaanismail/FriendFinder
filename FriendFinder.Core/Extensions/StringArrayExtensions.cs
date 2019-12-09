using System;
using System.Collections.Generic;

namespace FriendFinder.Core.Extensions
{
    public static class StringArrayExtensions
    {
        public static readonly Random _random = new Random((int)DateTime.Now.Ticks);
        internal static string Random(this IReadOnlyList<string> array) => array[_random.Next(array.Count)];
    }
}
