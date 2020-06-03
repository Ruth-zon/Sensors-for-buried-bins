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
    public class DirectionController : ApiController
    {
        // GET: api/Direction
        public string GetOrigin()
        {
            return DirectionBL.GetOrigin();
        }
        // GET: api/Direction
        public string GetDestination()
        {
            return DirectionBL.GetDestination();
        }

        // PUT: api/Direction/5
        public void PutOrigin(string origin)
        {
            DirectionBL.setOrigin(origin);
        }
        public void PutDestination(string destination)
        {
            DirectionBL.setDestination(destination);
        }
        // PUT: api/Direction
        public void PutDefultSettings()
        {
            DirectionBL.SetDefultSettings();
        }
       
    }
}
