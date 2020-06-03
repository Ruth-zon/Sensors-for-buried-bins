using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class Garbage
    {
        [Required]
        public int GarbageCode { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Area { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string SensorName { get; set; }

        public static int HeightOfGarbage { get; set; }
        public static int WidthOfGarbage { get; set; }
        public static int LengthOfGarbage { get; set; }
        public static int MaxHeight { get; set; }

        public static void SetDefult()
        {
            HeightOfGarbage = 250;
            WidthOfGarbage = 100;
            LengthOfGarbage = 100;
            MaxHeight = 150;

        }

        static Garbage()
        {
            SetDefult();
        }
        public Garbage(int garbageCode, string city, string area, string street, string sensorName)
        {
            GarbageCode = garbageCode;
            City = city;
            Area = area;
            Street = street;
            SensorName = sensorName;
        }
    }
}
