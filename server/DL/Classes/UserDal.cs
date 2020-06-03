using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Classes
{
    public class UserDal : IDisposable
    {
        const string dataBaseName = @"Data Source = MBYSERVER2\PUPILS; Initial Catalog = GarbageCollection; Integrated Security = True;";

        SqlConnection connection;

        public UserDal()
        {
            connection = new SqlConnection(dataBaseName);
            connection.Open();
        }
        public SqlDataReader GetAllUsers()
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetAllUsers";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public SqlDataReader GetUserById(string id)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetUserById";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            SqlParameter p = new SqlParameter("@id", id);
            cmd.Parameters.Add(p);
            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public void AddUser(string id,string firstName, string lastName, string area, string phone, int password,string job)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "AddUser";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@id", id);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@firstName", firstName);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@lastName", lastName);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@phone", phone);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@password", password);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@job", job);
            cmd.Parameters.Add(p);
            cmd.ExecuteNonQuery();
        }
        public void UpdateUser(string id, string firstName, string lastName, string area, string phone, int password, string job)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "UpdateUser";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@id", id);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@firstName", firstName);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@lastName", lastName);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@phone", phone);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@password", password);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@job", job);
            cmd.Parameters.Add(p);
            cmd.ExecuteNonQuery();
        }
        public void DeleteUser(string id)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "DeleteUser";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@id", id);
            cmd.Parameters.Add(p);
            
            cmd.ExecuteNonQuery();
        }
        public void CloseConnection()
        {
            if (connection.State == System.Data.ConnectionState.Open)
                connection.Close();
        }

        public void Dispose()
        {
            CloseConnection();
        }
    }
}
