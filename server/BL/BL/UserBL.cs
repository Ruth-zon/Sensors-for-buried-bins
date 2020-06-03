using BL.Models;
using DL.Classes;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.BL
{
    public class UserBL
    {
        static List<User> listUsers;

        static UserBL()
        {
            listUsers = new List<User>();
        }
        public static List<User> GetAll()
        {
            listUsers.Clear();
            using (UserDal dal = new UserDal())
            {
                SqlDataReader reader = dal.GetAllUsers();
                while (reader.Read())
                {
                    User user = new User(reader["id"].ToString(), reader["lastName"].ToString(),
                        reader["firstName"].ToString(), int.Parse(reader["password"].ToString()),
                        reader["jobName"].ToString() == "manager" ? Job.Manager :
                        reader["jobName"].ToString() == "municipality worker" ? Job.MunicipalityWorker :
                        Job.TruckWorker,
                        reader["area"].ToString(),
                        reader["phone"].ToString());
                    listUsers.Add(user);
                }
            }
            return listUsers;
        }
        public static User GetById(int password, string id)
        {
            listUsers.Clear();
            using (UserDal dal = new UserDal())
            {
                SqlDataReader reader = dal.GetUserById(id);
                while (reader.Read())
                {
                    User user = new User(reader["id"].ToString(), reader["lastName"].ToString(), reader["firstName"].ToString(),
                        int.Parse(reader["password"].ToString()),
                        reader["jobName"].ToString() == "manager" ? Job.Manager :
                        reader["jobName"].ToString() == "municipality worker" ? Job.MunicipalityWorker :
                        Job.TruckWorker,
                        reader["area"].ToString(),
                        reader["phone"].ToString());
                    listUsers.Add(user);
                }
            }

            if (listUsers.Count > 0 && listUsers[0].Password == password)
                return listUsers[0];
            else
                return null;

        }
        public static void Add(User user)
        {
            using (UserDal dal = new UserDal())
            {
                dal.AddUser(user.Id, user.FirstName, user.LastName, user.Area, user.Phone, user.Password, user.Job == Job.Manager ? "manager" : user.Job == Job.MunicipalityWorker ? "municipality worker" : "truck worker");
            }

        }
        public static void Update(User user)
        {
            using (UserDal dal = new UserDal())
            {
                dal.UpdateUser(user.Id, user.FirstName, user.LastName, user.Area, user.Phone, user.Password, user.Job == Job.Manager ? "manager" : user.Job == Job.MunicipalityWorker ? "municipality worker" : "truck worker");
            }
        }
        public static void Delete(string id)
        {
            using (UserDal dal = new UserDal())
            {
                dal.DeleteUser(id);
            }
        }
    }
}
