using Newtonsoft.Json;
using RestSharp;
using RestSharp.Authenticators;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Text;
using System.Web;

namespace AvaTaxConnector.Models
{
    public class InvoiceModel
    {
        public string CustomerAccountNumber { get; set; }
        public DateTime Date { get; set; }

        public Addresses Addresses { get; set; }
        
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public AddressModel PointOfOrderAcceptance { get; set; }
        public Items[] Lines { get; set; }
        
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public TaxDetails TaxItems { get; set;}
        
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double TotalTax { get; set; }
        public double SubTotal { get; set; }
        public double Total { get; set; }

        //some AvaTax related parameters
        public string Code { get; set; } //TransactionCode
        public string CompanyCode { get; set; }
        public string Type { get; set; }
        public string CustomerCode { get; set; }          

    }
     

    public class InvoiceDatabase
    {
        public List<InvoiceModel> Invoices = new List<InvoiceModel>();
        
      

        public void AddInvoice(InvoiceModel i)
        {
            i.Lines[0].Amount = i.Lines[0].Quantity * i.Lines[0].Rate;
            i.TaxItems = new TaxDetails();
            
            Invoices.Add(i);
        }
    }
}