using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shooping_cart_backend.Model
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<Products> listproducts { get; set; }
    }
}
