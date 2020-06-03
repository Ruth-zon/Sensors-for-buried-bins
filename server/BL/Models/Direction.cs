using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class Direction
    {
        public static string Origin { get; set; }
        public static string Destination { get; set; }
        static Direction()
        {
            SetDefult();
        }
        public static void SetDefult()
        {
            Origin = "31.795823,35.219919";
            Destination = "31.795667,35.219813";
        }
    }
}
