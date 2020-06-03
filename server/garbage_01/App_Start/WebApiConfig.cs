using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace garbage_01
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
              name: "RouteApi",
              routeTemplate: "api/{controller}/{action}/{id}",
              defaults: new { id = RouteParameter.Optional, action = RouteParameter.Optional }
          );
        }
    }
}
