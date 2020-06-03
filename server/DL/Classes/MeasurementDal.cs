using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Classes
{
    public class MeasurementDal : IDisposable
    {
        const string dataBaseName = @"Data Source = MBYSERVER2\PUPILS; Initial Catalog = GarbageCollection; Integrated Security = True;";

        SqlConnection connection;

        public MeasurementDal()
        {
            connection = new SqlConnection(dataBaseName);
            connection.Open();
        }
        public SqlDataReader GetAllMeasurements()
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetAllMeasurements";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public SqlDataReader GetUpdateStateGarbages(string area)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetUpdateStateGarbages";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);

            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public SqlDataReader GetMeasurementForFullGarbages(decimal maxDistanceFromTop,string area)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "GetMeasurementForFullGarbages";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@maxDistanceFromTop", maxDistanceFromTop);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@area", area);
            cmd.Parameters.Add(p);
            SqlDataReader reader = cmd.ExecuteReader();
            return reader;
        }
        public void AddMeasurement(string sensorName,DateTime time,decimal distance)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "AddMeasurement";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@sensorName", sensorName);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@time", time);
            cmd.Parameters.Add(p);
            p = new SqlParameter("@distance", distance);
            cmd.Parameters.Add(p);

            cmd.ExecuteNonQuery();
        }
        public void DeleteMeasurementUntilSpecificDate(DateTime dateTime)
        {
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "DeleteMeasurementUntilSpecificDate";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter p = new SqlParameter("@date", dateTime);
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
