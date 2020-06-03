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
    public class UserController : ApiController
    {
        // GET: api/User
        public IEnumerable<User> Get()
        {
            return UserBL.GetAll();
        }

        // GET: api/User/5
        public User Get(int password, string id)
        {
            return UserBL.GetById(password, id);
        }

        // POST: api/User
        public void Post(User user)
        {
            UserBL.Add(user);
        }

        // PUT: api/User/5
        public void Put(User user)
        {
            UserBL.Update(user);

        }

        // DELETE: api/User/5
        public void Delete(string id)
        {
            UserBL.Delete(id);

        }
    }
}
