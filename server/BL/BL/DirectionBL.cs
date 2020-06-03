using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.BL
{
    public class DirectionBL
    {
        public static string GetOrigin()
        {
            return Direction.Origin;
        }
        public static void setOrigin(string origin)
        {
            Direction.Origin = origin;
        }
        public static string GetDestination()
        {
            return Direction.Destination;
        }
        public static void setDestination(string destination)
        {
             Direction.Destination = destination;
        }
        public static void SetDefultSettings()
        {
            Direction.SetDefult();
        }
    }
}
