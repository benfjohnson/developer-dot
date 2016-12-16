using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace AvaTaxConnector.Models
{

    public class Addresses
    {
        public AddressModel ShipFrom;
        public AddressModel ShipTo;
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public AddressModel PointOfOrderOrigin;
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public AddressModel PointOfOrderAcceptance;
    }
    
    public class AddressModel
    {
       
        public AddressModel()
        {
            // TODO: Complete member initialization
        }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Line1 {get; set;}

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Line2 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Line3 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string City { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Region { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string PostalCode { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Country { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Latitude { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public string Longitude { get; set; }
    }
}