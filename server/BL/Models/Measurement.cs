using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class Measurement :IComparable
    {
        [Required]
        public Garbage Garbage { get; set; }
        [Required]
        public DateTime MeasurementTime { get; set; }
        [Required]
        public decimal Distance { get; set; }
        public Measurement()
        {

        }
        public Measurement(Garbage garbage,DateTime measurementTime, decimal distance)
        {
            Garbage = garbage;
            MeasurementTime = measurementTime;
            Distance = distance;
        }

        public int CompareTo(object obj)
        {
            return MeasurementTime.CompareTo(((Measurement)obj).MeasurementTime);
        }
    }
}
