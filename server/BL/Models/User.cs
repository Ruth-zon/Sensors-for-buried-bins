using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public enum Job
    {
        Manager, MunicipalityWorker, TruckWorker
    }
    public class User
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public int Password { get; set; }
        [Required]
        public Job Job { get; set; }
        [Required]
        public string Area { get; set; }
        public string Phone { get; set; }
        public User()
        {

        }
        public User(string id, string lastName,string firstName, int password, Job job,string area, string phone)
        {
            Id = id;
            LastName = lastName;
            FirstName = firstName;
            Password = password;
            Job = job;
            Phone = phone;
            Area = area;
        }
    }
}
