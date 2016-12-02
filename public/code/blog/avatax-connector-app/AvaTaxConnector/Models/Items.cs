using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AvaTaxConnector.Models
{
    public class Items
    {
        public int Number { get; set; }
        public double Rate { get; set; }
        public string Description { get; set; }
        public double Quantity { get; set; }
        public double Discount { get; set; }
        public double Amount { get; set; }    
  
        //response
        public double Tax { get; set; }         
    }
}