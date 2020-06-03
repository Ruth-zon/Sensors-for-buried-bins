using BL.Models;
using System;
using DL.Classes;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace BL.BL
{
    public class MeasurementBL
    {
        static List<Measurement> listMeasurements;
        static MeasurementBL()
        {
            listMeasurements = new List<Measurement>();
        }
        public static List<Measurement> GetAll()
        {
            listMeasurements.Clear();
            using (MeasurementDal dal = new MeasurementDal())
            {
                SqlDataReader reader = dal.GetAllMeasurements();
                while (reader.Read())
                {
                    Measurement measurement = new Measurement(
                        new Garbage(int.Parse(reader["garbageCode"].ToString()),
                        reader["city"].ToString(),
                        reader["area"].ToString(),
                        reader["street"].ToString(),
                        reader["sensorName"].ToString()),
                        DateTime.Parse(reader["measurementTime"].ToString()),
                        decimal.Parse(reader["distance"].ToString()));
                    listMeasurements.Add(measurement);
                }
            }
            return listMeasurements;
        }
        public static List<Measurement> GetUpdateStateGarbages(string area)
        {
            listMeasurements.Clear();

            using (MeasurementDal dal = new MeasurementDal())
            {
                SqlDataReader reader = dal.GetUpdateStateGarbages(area);
                if (listMeasurements.Count > 0)
                    listMeasurements.Clear();
                while (reader.Read())
                {
                    Measurement measurement = new Measurement(
                        new Garbage(int.Parse(reader["garbageCode"].ToString()),
                        reader["city"].ToString(),
                        reader["area"].ToString(),
                        reader["street"].ToString(),
                        reader["sensorName"].ToString()),
                        DateTime.Parse(reader["measurementTime"].ToString()),
                        decimal.Parse(reader["distance"].ToString()));
                    listMeasurements.Add(measurement);
                }
            }
            return listMeasurements;
        }
        public static List<Measurement> GetMeasurementForFullGarbages(string area)
        {
            listMeasurements.Clear();

            using (MeasurementDal dal = new MeasurementDal())
            {
                SqlDataReader reader = dal.GetMeasurementForFullGarbages(Garbage.HeightOfGarbage-Garbage.MaxHeight, area);
                if (listMeasurements.Count > 0)
                    listMeasurements.Clear();
                while (reader.Read())
                {
                    Measurement measurement = new Measurement(
                        new Garbage(int.Parse(reader["garbageCode"].ToString()),
                        reader["city"].ToString(),
                        reader["area"].ToString(),
                        reader["street"].ToString(),
                        reader["sensorName"].ToString()),
                        DateTime.Parse(reader["measurementTime"].ToString()),
                        decimal.Parse(reader["distance"].ToString()));
                    listMeasurements.Add(measurement);
                }
            }
            
            int M = Truck.Capacity/(Garbage.LengthOfGarbage*Garbage.WidthOfGarbage)/10, N = listMeasurements.Count + 1,j,i;
            if (M <= 0)
                listMeasurements.Clear();
            decimal[,] algorithm = new decimal[N, M];
            for (i = 1; i < N; i++)
            {
                for (j = 1; j < M; j++)
                {
                    algorithm[i, j] = algorithm[i-1, j];
                    decimal wi = (Garbage.HeightOfGarbage - listMeasurements[i-1].Distance)/ 10;
                    if (wi <= j)
                    {
                        decimal val =algorithm[i-1, j - Convert.ToInt32(wi)]+ (Garbage.HeightOfGarbage - listMeasurements[i - 1].Distance) / 10;
                        if (val > algorithm[i, j])
                            algorithm[i, j] = val;
                    }
                }
            }
            j = M-1;
            for (i = listMeasurements.Count; i >0 && j>0; i--)
            {
                if (algorithm[i, j] == algorithm[i - 1, j])
                    listMeasurements.RemoveAt(i-1);
                else
                    j -= (Garbage.HeightOfGarbage- Convert.ToInt32(listMeasurements[i - 1].Distance) )/10;
            }
            return listMeasurements;
        }
   

        public static void AddMeasurement(string sensorName, DateTime dateTime, decimal distance)
        {
            using (MeasurementDal dal = new MeasurementDal())
            {
                dal.AddMeasurement(sensorName, dateTime, distance);
            }
        }
        public static void DeleteMeasurementUntilSpecificDate(DateTime dateTime)
        {
            using (MeasurementDal dal = new MeasurementDal())
            {
                dal.DeleteMeasurementUntilSpecificDate(dateTime);
            }
        }

    }
}
