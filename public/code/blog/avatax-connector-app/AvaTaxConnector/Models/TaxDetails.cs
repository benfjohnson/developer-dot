using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AvaTaxConnector.Models
{
    public class TaxDetails
    {
        public string TaxType { get; set; }
        public string TaxName { get; set; }
        public double TaxableAmount { get; set; }
        public double Total { get; set; }
    }   
}