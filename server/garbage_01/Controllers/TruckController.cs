using System;
using BL.BL;
using BL.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace garbage_01.Controllers
{
    public class TruckController : ApiController
    {
        // GET: api/Truck
        public int GetCapacity()
        {
            return TruckBL.GetCapacity();
        }

        // PUT: api/Truck/5
        public void PutCapacity([FromBody]int capacity)
        {
            TruckBL.setCapacity(capacity);
        }
        // PUT: api/Truck
        public void PutDefultSettings()
        {
            TruckBL.SetDefultSettings();
        }
      
    }
}
