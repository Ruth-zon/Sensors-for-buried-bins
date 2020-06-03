using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class Truck
    {


        public static int Capacity { get;set;  }

        static Truck()
        {
            SetDefultCapacity();
        }
        public static void SetDefultCapacity()
        {
            Capacity = 50000000;
        }
    }


}
