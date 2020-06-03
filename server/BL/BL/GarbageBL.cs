using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DL.Classes;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace BL.BL
{
    public class GarbageBL
    {
        static List<Garbage> listGarbages;

        static GarbageBL()
        {
            listGarbages = new List<Garbage>();
        }
        public static List<Garbage> GetAll()
        {
            listGarbages.Clear();
            using (GarbageDal dal = new GarbageDal())
            {
                SqlDataReader reader = dal.GetAllGarbages();
                while (reader.Read())
                {
                    Garbage garbage = new Garbage(int.Parse(reader["garbageCode"].ToString()), reader["city"].ToString(), reader["area"].ToString(), reader["street"].ToString(), reader["sensorName"].ToString());
                    listGarbages.Add(garbage);
                }
            }
            return listGarbages;
        }
        public static List<Garbage> GetByArea(string area)
        {
            listGarbages.Clear();
            using (GarbageDal dal = new GarbageDal())
            {
                SqlDataReader reader = dal.GetGarbagesByArea(area);
                while (reader.Read())
                {
                    Garbage garbage = new Garbage(int.Parse(reader["garbageCode"].ToString()), reader["city"].ToString(), reader["area"].ToString(), reader["street"].ToString(), reader["sensorName"].ToString());
                    listGarbages.Add(garbage);
                }
            }
            return listGarbages;
        }
        public static int GetMaxHeight()
        {
            return Garbage.MaxHeight;
        }
        public static int GetHeightOfGarbage()
        {
            return Garbage.HeightOfGarbage;
        }
        public static int GetLengthOfGarbage()
        {
            return Garbage.LengthOfGarbage;
        }
        public static int GetWidthOfGarbage()
        {
            return Garbage.WidthOfGarbage;
        }
        public static void Add(Garbage garbage)
        {
           using (GarbageDal dal = new GarbageDal())
            {
                dal.AddGarbage(garbage.City,garbage.Area,garbage.Street,garbage.SensorName);
            }

        }
        public static void Update( Garbage garbageForUpdate)
        {
            using (GarbageDal dal = new GarbageDal())
            {
                dal.UpdateGarbage(garbageForUpdate.City, garbageForUpdate.Area, garbageForUpdate.Street, garbageForUpdate.SensorName, garbageForUpdate.GarbageCode);
            }
        }
        public static void SetDefultSettings()
        {
            Garbage.SetDefult();
        }

        public static void SetMaxHeight(int maxHeight)
        {
            Garbage.MaxHeight = maxHeight;
        }
        public static void SetHeightOfGarbage(int heightOfGarbage)
        {
            Garbage.HeightOfGarbage = heightOfGarbage;
        }
        public static void SetLengthOfGarbage(int lengthOfGarbage)
        {
            Garbage.LengthOfGarbage = lengthOfGarbage;
        }
        public static void SetWidthOfGarbage(int widthOfGarbage)
        {
            Garbage.WidthOfGarbage = widthOfGarbage;
        }

        public static void Delete(int garbageCode)
        {
            using (GarbageDal dal = new GarbageDal())
            {
                dal.DeleteGarbage(garbageCode);
            }
        }

 

    }
}
