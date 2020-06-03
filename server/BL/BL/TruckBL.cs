using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.BL
{
    public class TruckBL
    {
        public static int GetCapacity()
        {
            return Truck.Capacity;
        }
        public static void setCapacity(int capacity)
        {
            Truck.Capacity = capacity;
        }
        public static void SetDefultSettings()
        {
            Truck.SetDefultCapacity();
        }
    }
}
