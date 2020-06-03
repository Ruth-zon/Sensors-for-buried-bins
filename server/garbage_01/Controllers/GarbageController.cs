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
    public class GarbageController : ApiController
    {
        // GET: api/Garbage
        public IEnumerable<Garbage> GetAll()
        {
            return GarbageBL.GetAll();
        }
        // GET: api/Garbage/5
        public IEnumerable<Garbage> GetByArea(string area)
        {
            return GarbageBL.GetByArea(area);
        }
        public int GetMaxHeight()
        {
            return GarbageBL.GetMaxHeight();
        }
        public int GetHeightOfGarbage()
        {
            return GarbageBL.GetHeightOfGarbage();
        }
        public int GetLengthOfGarbage()
        {
            return GarbageBL.GetLengthOfGarbage();
        }
        public int GetWidthOfGarbage()
        {
            return GarbageBL.GetWidthOfGarbage();
        }
        // POST: api/Garbage
        public void Post(Garbage garbage)
        {
            GarbageBL.Add(garbage);
        }

        // PUT: api/Garbage/5
        public void Put(Garbage garbage)
        {
            GarbageBL.Update(garbage);

        }

        //
        public void PutDefultSettings()
        {
            GarbageBL.SetDefultSettings();
        }

        public void PutMaxHeight(int maxHeight)
        {
            GarbageBL.SetMaxHeight(maxHeight);
        }
        public void PutHeightOfGarbage(int heightOfGarbage)
        {
            GarbageBL.SetHeightOfGarbage(heightOfGarbage);
        }
        public void PutLengthOfGarbage(int lengthOfGarbage)
        {
            GarbageBL.SetLengthOfGarbage(lengthOfGarbage);
        }
        public void PutWidthOfGarbage(int widthOfGarbage)
        {
            GarbageBL.SetWidthOfGarbage(widthOfGarbage);
        }

        // DELETE: api/Garbage/5
        public void Delete(int id)
        {
            GarbageBL.Delete(id);
        }
    }
}
