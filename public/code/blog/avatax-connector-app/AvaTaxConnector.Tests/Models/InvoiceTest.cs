using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AvaTaxConnector.Models;
using System.Net.Http;
using Newtonsoft.Json;
using AvaTaxConnector.Utilities;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Collections.Generic;
using System.Configuration;

namespace AvaTaxConnector.Tests.Models
{
    [TestClass]
    public class InvoiceTest
    {
        private void SetAuthentication()
        {
            ConfigurationManager.AppSettings["AccountNumber"] = "2000189326";
            ConfigurationManager.AppSettings["APIKey"] = "BD6B7F5E3CC02840";
        }

        [TestMethod]
        public void GetAccount()
        {
            //Arrange
            SetAuthentication();
            string urlSegment = "accounts/2000189326";

            //Act
            string s = HttpUtil.Get(urlSegment);
            Account a = JsonConvert.DeserializeObject<Account>(s);
            
            // Assert
            //Assert.IsNotNull(a.id);
            Assert.AreEqual(a.id, "2000189326");        
        }

        [TestMethod]
        public void GetTax()
        {
            //Arrange
            SetAuthentication();
            string urlSegment = "transactions/create";
            string data = string.Empty;

            /*data = @" {
    'companyCode': 'ABC123',
    'type': 'SalesInvoice',
    'code': '20160830-001',
    'customerCode': 'OnlineCustomer',
    'date': '2016-10-28T15:28:09.875Z',
    'addresses': {
      'ShipFrom': {
        'line1': '123 Main Street',
        'city': 'Irvine',
        'region': 'CA',
        'country': 'US',
        'postalCode': '92615',
      },
      'ShipTo': {
        'line1': '4456 W 76TH ST',
        'city': 'Edina',
        'region': 'MN',
        'country': 'US',
        'postalCode': '55435',
      },
    },
    'lines': [
      {
        'number': '1',
        'quantity': 2,
        'amount': 27.50,
        'description': 'Starry Night Mug'
      },
      {
        'number': '2',
        'quantity': 1,
        'amount': 149.99,
        'description': 'Floor Standing Vase'
      }
    ]
  }";*/
            JObject o1 = JObject.Parse(File.ReadAllText(@"C:\Connectors\AvaTaxConnector\AvaTaxConnector.Tests\TestData\Invoice.json"));
            string s1 = o1.ToString();
            //using (StreamReader r = new StreamReader(@"C:\Connectors\AvaTaxConnector\AvaTaxConnector.Tests\TestData\Invoice.json"))
            //{
            //    data = r.ReadToEnd();
            //}
            data = JsonConvert.SerializeObject(o1, Formatting.None);
            
            //Act
            string s = HttpUtil.Post(data, urlSegment);
            InvoiceModel i = JsonConvert.DeserializeObject<InvoiceModel>(s);            

            //Assert
            Assert.IsNotNull(i);
            //Assert.AreEqual(tax[0].TaxType, "Sales");
        }

        [TestMethod]
        public void AddressValidationIsNotNull()
        {
            //Arrange
            SetAuthentication();
            string urlSegment = "/addresses/resolve";
            AddressModel address = new AddressModel();
            address.Line1 = "4655 W 77th St";
            address.Region = "MN";
            address.City = "Edina";
            address.Country = "US";
            address.PostalCode = "55435";

            string data = JsonConvert.SerializeObject(address, Formatting.None);

            //Act
            string s = HttpUtil.Post(data, urlSegment);
            JToken j = JObject.Parse(s).SelectToken("validatedAddresses");
            if(j.Type==JTokenType.Array && j.HasValues)
            {
                s = j.First.ToString();
            }
           // s = JObject.Parse(s).SelectToken("validatedAddresses").ToString();            
            //s = s.Replace("[", "");
           // s = s.Replace("]", "");
            address = JsonConvert.DeserializeObject<AddressModel>(s);

            //Assert
            Assert.IsNotNull(address.PostalCode);
        }

        [TestMethod]
        public void AddressValidationZipCode()
        {
            //Arrange
            SetAuthentication();
            string urlSegment = "/addresses/resolve";
            AddressModel address = new AddressModel();
            address.Line1 = "4655 W 77th St";
            address.Region = "MN";
            address.City = "Edina";
            address.Country = "US";
            address.PostalCode = "55435";

            string data = JsonConvert.SerializeObject(address, Formatting.None);

            //Act
            string s = HttpUtil.Post(data, urlSegment);
            
            JToken j = JObject.Parse(s).SelectToken("validatedAddresses");
            if (j.Type == JTokenType.Array && j.HasValues)
            {
                s = j.First.ToString();
            }            
            address = JsonConvert.DeserializeObject<AddressModel>(s);
            // s = JObject.Parse(s).SelectToken("validatedAddresses").ToString();            
            //s = s.Replace("[", "");
            // s = s.Replace("]", "");
            //address = JsonConvert.DeserializeObject<AddressModel>(s);

            //Assert
            Assert.AreEqual(address.PostalCode, "55435");
        }
    }
}
