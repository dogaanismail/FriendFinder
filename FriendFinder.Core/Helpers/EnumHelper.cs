using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace FriendFinder.Core.Helpers
{
    public static class EnumHelper
    {

        /// <summary>
        /// Returns the detail of an enum.
        /// </summary>
        /// <param name="e">Enumeration.</param>
        /// <returns></returns>
        public static string GetDetail(Enum e)
        {
            return Convert.ToString(typeof(EnumHelper).GetMethod("GetDetail", new Type[] { typeof(int) }).MakeGenericMethod(e.GetType()).Invoke(null, new object[] { Convert.ToInt32(e) }));
        }

        /// <summary>
        /// Returns the detail of an enum.
        /// </summary>
        /// <typeparam name="T">Enumeration type.</typeparam>
        /// <param name="value">Value of the enum.</param>
        /// <returns></returns>
        public static string GetDetail<T>(object value)
        {
            if (value != null && !String.IsNullOrEmpty(value.ToString()))
            {
                return GetDetail<T>(Convert.ToInt32(value));
            }
            else
            {
                return String.Empty;
            }
        }


        /// <summary>
        /// Returns the detail of an enum.
        /// </summary>
        /// <typeparam name="T">Enumeration type.</typeparam>
        /// <param name="value">Value of the enum.</param>
        /// <returns></returns>
        public static string GetDetail<T>(short value)
        {
            return GetDetail<T>(Convert.ToInt32(value));
        }

        /// <summary>
        /// Returns the detail of an enum.
        /// </summary>
        /// <typeparam name="T">Enumeration type.</typeparam>
        /// <param name="value">Value of the enum.</param>
        /// <returns></returns>
        public static string GetDetail<T>(int value)
        {
            foreach (FieldInfo field in typeof(T).GetFields(BindingFlags.Static | BindingFlags.GetField | BindingFlags.Public))
            {
                if (field.GetValue(null).ToString() == Enum.GetName(typeof(T), value))
                {
                    foreach (Attribute attrib in field.GetCustomAttributes(true))
                    {
                        DisplayAttribute detail = (DisplayAttribute)attrib;
                        return detail.Name;
                    }
                }
            }

            return String.Empty;
        }

        /// <summary>
        /// Returns an enum for the given type and value.
        /// </summary>
        /// <typeparam name="T">Type of the enumeration.</typeparam>
        /// <param name="value">Name or value of the enum.</param>
        /// <returns></returns>
        public static T GetEnum<T>(object value)
        {
            try
            {
                return (T)Enum.Parse(typeof(T), value.ToString());
            }
            catch
            {
                Exception ex = new Exception("En error occured while converting value to enumeration.");
                ex.Data.Add("Type", typeof(T));
                ex.Data.Add("Value", value);
                throw ex;
            }
        }
    }
}
