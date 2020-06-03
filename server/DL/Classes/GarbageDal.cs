using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Classes
{
    public class GarbageDal : IDisposable
    {
        const string dataBaseName = @"Data Source = MBYSERVER2\PUPILS; Initial Catalog = GarbageCollection; Integrated Security = True;";

        SqlConnection connection;

        public GarbageDal()
        {
            connection = new SqlConnection(dataBaseName);
            connection.Open();
        }
        public SqlDataReader GetAllGarbages()
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetAllGarbages";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public SqlDataReader GetGarbagesByArea(string area)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetGarbagesByArea";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            SqlParameter p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);
            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public void AddGarbage(string city, string area, string street, string sensorName)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "AddGarbage";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@city", city);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@street", street);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@sensorName", sensorName);
            cmd.Parameters.Add(p);
            cmd.ExecuteNonQuery();
        }
        public void UpdateGarbage(string city, string area, string street, string sensorName,int garbageCode)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "UpdateGarbage";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@city", city);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@street", street);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@sensorName", sensorName);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@garbageCode", garbageCode);
            cmd.Parameters.Add(p);
            cmd.ExecuteNonQuery();
        }
        public void DeleteGarbage(int garbageCode)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "DeleteGarbage";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@garbageCode", garbageCode);
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
