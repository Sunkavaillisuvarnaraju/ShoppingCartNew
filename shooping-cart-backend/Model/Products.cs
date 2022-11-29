using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shooping_cart_backend.Model
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public decimal ActualPrice { get; set; }
        public decimal DiscountedPrice { get; set; }
    }
}
