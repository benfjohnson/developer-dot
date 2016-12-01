using AvaTaxConnector.Models;
using AvaTaxConnector.Utilities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace AvaTaxConnector.Controllers
{
    public class InvoiceController : Controller
    {       
       
        public ActionResult Index(string txtShipFrom, string txtShipTo, string txtOrderOrigin, string txtOrderAcceptance, InvoiceModel i)
        {

            if (string.IsNullOrEmpty(txtShipFrom)==false && string.IsNullOrEmpty(txtShipTo)==false)
            {
                //Validate addresses
                i.Addresses = new Addresses();
                i.Addresses.ShipFrom = GetAddressFormat(txtShipFrom);               
                ValidateAddress(ref i.Addresses.ShipFrom);

                i.Addresses.ShipTo = GetAddressFormat(txtShipTo);
                ValidateAddress(ref i.Addresses.ShipTo);
                i.SubTotal = i.Lines[0].Amount;

                if (string.IsNullOrEmpty(txtOrderOrigin)==false)
                    i.Addresses.PointOfOrderOrigin = GetAddressFormat(txtOrderOrigin);

                if (string.IsNullOrEmpty(txtOrderAcceptance) == false)
                    i.Addresses.PointOfOrderAcceptance = GetAddressFormat(txtOrderAcceptance);
                
                //Set Invoice object fields
                string urlSegment = "transactions/create";
                i.CustomerCode = "OnlineCustomer";
                i.CompanyCode = "ABC123";
                i.Date = DateTime.Now;
                i.CustomerAccountNumber = "0001";
                i.Code = "1234";
                i.Type = "SalesInvoice";
                i.Lines[0].Number = 1;

                //Post Json format data
                string data = JsonConvert.SerializeObject(i, Formatting.None);
                string s = HttpUtil.Post(data, urlSegment);

                //Parse response and return values accordingly
                if (s.Contains("error"))
                {
                    ViewBag.Message = s.ToString();
                    return View();
                }
               
                JObject o = JObject.Parse(s);
                JObject tax = (JObject)o["summary"][0];
                ViewBag.Message =  tax.ToString();

                i.Lines[0].Tax = (double)tax["tax"];
                i.Total = i.Lines[0].Tax + i.SubTotal;
                return View(i);
            }
            else
            {
                //Pre-set some sample data
                ViewBag.ShipFrom = "1500 109th Ave NE, Blaine, MN, US";
                ViewBag.ShipTo = "1100 2nd Ave #300, Seattle, WA, US";
                ViewBag.OrderOrigin = "2511 Laguna Blvd, Elk Grove, CA, US, 95758";
                ViewBag.OrderAcceptance = "100 Market Street, San Francisco, CA, US";
                return View();
            }  
        }
      
        /// <summary>
        /// Returns AvaTax acceptable format of address object
        /// </summary>
        /// <param name="s">Address</param>
        /// <returns></returns>
        private AddressModel GetAddressFormat(string s)
        {
            var vals = s.Split(new char[] { ',' },StringSplitOptions.RemoveEmptyEntries);
            if (vals.Length < 3)
            {
                ViewBag.Message = "Invalid Format";
                return null;
            }
                
            if (vals.Length == 3)
            {
                return new AddressModel { Line1 = vals[0].Trim(), City = vals[1].Trim(), Region = vals[2].Trim() };
            }
            else
                if (vals.Length == 4)
                {
                    return new AddressModel { Line1 = vals[0].Trim(), City = vals[1].Trim(), Region = vals[2].Trim(), Country = vals[3].Trim() };
                }
                else
                    if (vals.Length == 5)
                    {
                        return new AddressModel { Line1 = vals[0].Trim(), City = vals[1].Trim(), Region = vals[2].Trim(), Country = vals[3].Trim(), PostalCode = vals[4].Trim() };
                    }
                        return null;
        }

        public ActionResult AddressValidation(AddressModel address)
        {
            if(string.IsNullOrEmpty(address.Line1))
            {
                return View();
            }
            ValidateAddress(ref address);           
          
            return View(address);
        }

        /// <summary>
        /// Validate address using AvaTax Engine
        /// </summary>
        /// <param name="a">Address</param>
        private void ValidateAddress(ref AddressModel a)
        {
            string urlSegment = "addresses/resolve";
            string data = JsonConvert.SerializeObject(a, Formatting.None);
            string response = HttpUtil.Post(data, urlSegment);
            
            if(response.Contains("error"))
            {
                ViewBag.Message = response.ToString();
                return;
            }
            JToken j = JObject.Parse(response).SelectToken("validatedAddresses");
            if (j != null)
            {
                if (j.Type == JTokenType.Array && j.HasValues)
                {
                    response = j.First.ToString();
                }
            }
            a = JsonConvert.DeserializeObject<AddressModel>(response);
        }
       
    }
}
