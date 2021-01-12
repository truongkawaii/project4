using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Extensions
{
    public static class RequestExtensions
    {

        public static string GetHomeUrl(this HttpRequest request, string path = null)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }

            var baseUrl = string.Format("{0}://{1}", request.Scheme, request.Host.ToString());

            return string.IsNullOrWhiteSpace(path) ? baseUrl : baseUrl + "/" + path.Trim('/');
        }

        public static string GetCurrentUrl(this HttpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }

            return string.Format("{0}://{1}{2}", request.Scheme, request.Host.ToString(), request.Path.ToString());
        }
    }
}
