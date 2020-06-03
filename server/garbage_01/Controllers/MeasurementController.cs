using BL.BL;
using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace garbage_01.Controllers
{
    public class MeasurementController : ApiController
    {
        // GET: api/Measurement
        public IEnumerable<Measurement> GetAll()
        {
            return MeasurementBL.GetAll();
        }

        // GET: api/Measurement
        public IEnumerable<Measurement> GetUpdatedStateGarbages(string area)
        {
            return MeasurementBL.GetUpdateStateGarbages(area);
        }
        public IEnumerable<Measurement> GetMeasurementForFullGarbages(string area)
        {
            return MeasurementBL.GetMeasurementForFullGarbages(area);
        }

        // POST: api/Measurement
        public void Post(string sensorName, decimal distance)
        {
            DateTime dateTime =DateTime.Now;
             MeasurementBL.AddMeasurement(sensorName,dateTime,distance);
            
        }
        public void Post()
        {
            
        }

        // DELETE: api/Measurement/5
        public void Delete(DateTime dateTime)
        {
            MeasurementBL.DeleteMeasurementUntilSpecificDate(dateTime);
        }
    }
}
