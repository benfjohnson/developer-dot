---
layout: post
title: Avatax Connector App
date: 2016-11-22 11:00
author: Anagha Sulakhe
comments: true
categories: [Sales Tax APIs]
product: blog
doctype: blog
disqus: 1
---

# Using The REST API To Build a Connector

Avalara’s new [REST API
v2 ](https://sandbox-rest.avatax.com/swagger/ui/index.html)now offers a
wide variety of functionality for integrating ERP systems with AvaTax.
In the new REST API, you can now add companies, estimate tax on the fly,
validate address, and more! For today’s article, we will focus on
building a web application to showcase how to use the new REST API to
build a connector.

## Core Functionality

I am writing today’s example using Microsoft’s C\# and MVC40 libraries
to demonstrate the following features of AvaTax

1.  Basic Authentication

2.  Address Validation

3.  Generate Tax on an Invoice

I will be using two open source libraries, the Newtonsoft Json.Net
library to parse JSON results, and the RestSharp library to make REST
API calls. 

## Basic Authentication

To get started, let’s
[authenticate ](http://developer.avalara.com/avatax/authentication-in-rest/)
against the API. We will need an account ID and license key from AvaTax.
We can get the license key on the [Avalara Admin Console
website](https://admin-avatax.avalara.net/login.aspx?ReturnUrl=%2f) as
seen in this screenshot:

<img src="https://github.com/JoeSava/developer-dot/blob/avaconnector/_blogpostimages/ResetLisenceKey.tif" width="102" height="88" alt="Reset Lisence Key" />

We will also need Account Number, which is located on top right corner
of the application:

![](media/image2.tiff){width="2.1944444444444446in" height="1.5in"}

We will put our account ID and license key in a configuration file and
retrieve them using C\#’s ConfigurationManager class:

#### Basic Authentication C\# Collapse source

```c#
  1   private static HttpBasicAuthenticator GetAuthentication()

  2          {

  3              string AccountNumber = ConfigurationManager.AppSettings\["AccountNumber"\];

  4              string APIKey = ConfigurationManager.AppSettings\["APIKey"\];

  5              if (string.IsNullOrEmpty(AccountNumber) || string.IsNullOrEmpty(APIKey))

  6                  return null;

  7              HttpBasicAuthenticator a = new HttpBasicAuthenticator(AccountNumber,APIKey);

  8                  return a;

  9          }
```
Now that we have the ability to get our authentication from the
configuration file, let’s write some very small helper functions to
perform GET and POST API calls using this authentication.

#### RestSharp Get call Collapse source

  ```c#
  1    public static string Get(string urlSegment)

  2           {

  3               var client = new RestClient(requestUri);           

  4               client.Authenticator = GetAuthentication();

  5               var request = new RestRequest(urlSegment, Method.GET);

  6               request.AddHeader("X-Avalara-Client", "Connector Test Harness");

  7               IRestResponse response = client.Execute(request);

  8               var content = response.Content;

  9               return content;

  10          }
```

#### RestSharp Post call Collapse source

```c#
  1    public static string Post(string postData, string urlSegment)

  2           {

  3               var client = new RestClient(requestUri);

  4               client.Authenticator = GetAuthentication();

  5                

  6               var request = new RestRequest(urlSegment, Method.POST);

  7               request.AddHeader("Content-type", "application/json");

  8               request.RequestFormat = DataFormat.Json;

  9               request.AddParameter("application/json", postData, ParameterType.RequestBody);

  10              request.AddHeader("X-Avalara-Client", "Connector Test Harness");

  11              IRestResponse response = client.Execute(request);

  12              var content = response.Content;

  13              return content;

  14          }
```

## Address Validation

Now we’re ready to begin work. This is one of the most important steps
for ERP integration. Simply speaking, for accurate tax calculation, we
need accurate addresses - Source and Destination addresses. But AvaTax
doesn't stop at two address locations - now that technology is pushing
the boundaries of online businesses, REST API also offers multiple
addresses tax calculation on each line item of an invoice.

To get there, we first need to validate the address with AvaTax engine
and confirm that the address is "real" address – because a simple
mistake in the address can easily result in incorrect tax calculation.
I’ve written this function using a ‘ref’ parameter so that I can simply
call it and it will fix up my address for me.

#### Address Validation Post Collapse source

```c#
  1     /// &lt;summary&gt;

  2            /// Validate address using AvaTax Engine

  3            /// &lt;/summary&gt;

  4            /// &lt;param name="a"&gt;Address&lt;/param&gt;

  5    private void ValidateAddress(ref AddressModel a)

  6          {

  7              string urlSegment = "addresses/resolve";

  8              string data = JsonConvert.SerializeObject(a, Formatting.None);

  9              string response = HttpUtil.Post(data, urlSegment);

  10              

  11             if(response.Contains("error"))

  12             {

  13                 return;

  14             }

  15             JToken j = JObject.Parse(response).SelectToken("validatedAddresses");

  16             if (j != null)

  17             {

  18                 if (j.Type == JTokenType.Array && j.HasValues)

  19                 {

  20                     response = j.First.ToString();

                     }

                 }

                 a = JsonConvert.DeserializeObject&lt;AddressModel&gt;(response);

             }
```

## Calculate Tax on an Invoice

Using the same credentials now we can send tax calculation parameters.
I've created a class, called InvoiceModel, to replicate the object I'd
like to post. Here’s what it looks like:

#### InvoiceModel Collapse source
```c#
  1    public class InvoiceModel

  2     {

  3         public string CustomerAccountNumber { get; set; }

  4         public DateTime Date { get; set; }

  5     

  6         public Addresses Addresses { get; set; }

  7          

  8         \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  9         public AddressModel PointOfOrderAcceptance { get; set; }

  10        public Items\[\] Lines { get; set; }

  11         

  12        \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  13        public TaxDetails TaxItems { get; set;}

  14         

  15        \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  16        public double TotalTax { get; set; }

  17        public double SubTotal { get; set; }

  18        public double Total { get; set; }

  19    

  20        //some AvaTax related parameters

  21        public string Code { get; set; } //TransactionCode

  22        public string CompanyCode { get; set; }

  23        public string Type { get; set; }

  24        public string CustomerCode { get; set; }        

  25    }
```

#### AddressModel Collapse source

```c#
  1    public class Addresses

  2    {

  3        public AddressModel ShipFrom;

  4        public AddressModel ShipTo;

  5        \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  6        public AddressModel PointOfOrderOrigin;

  7        \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  8        public AddressModel PointOfOrderAcceptance;

  9    }

  10    

  11   public class AddressModel

  12   {

  13       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  14       public string Line1 {get; set;}

  15    

  16       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  17       public string Line2 { get; set; }

  18    

  19       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  20       public string Line3 { get; set; }

  21    

  22       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  23       public string City { get; set; }

  24    

  25       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  26       public string Region { get; set; }

  27    

  28       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  29       public string PostalCode { get; set; }

  30    

  31       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  32       public string Country { get; set; }

  33    

  34       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  35       public string Latitude { get; set; }

  36    

  37       \[JsonProperty(NullValueHandling = NullValueHandling.Ignore)\]

  38       public string Longitude { get; set; }

  39   }
```

#### ItemsModel Collapse source

  ```c#
  1    public class Items

  2     {

  3         public int Number { get; set; }

  4         public double Rate { get; set; }

  5         public string Description { get; set; }

  6         public double Quantity { get; set; }

  7         public double Discount { get; set; }

  8         public double Amount { get; set; }   

  9     

  10        //response

  11        public double Tax { get; set; }        

  12    }
```

Now that we have defined our models, all that remains is to fill-in the data and post the query to AvaTax. For my project today, I will limit my tax calculations to one line item per invoice; but you can easily change this by adding values to the array.

#### InvoiceController Collapse source
```c#
  1    public ActionResult Index(string txtShipFrom, string txtShipTo, InvoiceModel i)

  2         {

  3     

  4             if (!string.IsNullOrEmpty(txtShipFrom) && !string.IsNullOrEmpty(txtShipTo))

  5             {

  6      //Validate addresses

  7                 i.Addresses = new Addresses();

  8                 i.Addresses.ShipFrom = getAddressFormat(txtShipFrom);              

  9                 ValidateAddress(ref i.Addresses.ShipFrom);

  10    

  11                i.Addresses.ShipTo = getAddressFormat(txtShipTo);

  12                ValidateAddress(ref i.Addresses.ShipTo);

  13                i.SubTotal = i.Lines\[0\].Amount;

  14                 

  15   //Set Invoice object fields. Note – CompanyCode need to match with CompanyCode in AvaTax application.

  16                string urlSegment = "transactions/create";

  17                i.CustomerCode = "onlineCustomer";

  18                i.CompanyCode = "ABC123";

  19                i.Date = DateTime.Now;

  20                i.CustomerAccountNumber = "0001";

  21                i.Code = "1234";

  22                i.Type = "SalesInvoice";

  23                i.Lines\[0\].Number = 1;

  24    

  25   //Post Json format data

  26   string data = JsonConvert.SerializeObject(i, Formatting.None);

  27     string s = HttpUtil.Post(data, urlSegment);

  28   //Parse response and return values accordingly

  29                if(s.Contains("error"))

  30                {

  31                    ViewBag.Message = s.ToString();

  32                    return View();

  33                }

  34                

  35                JObject o = JObject.Parse(s);

  36                JObject tax = (JObject)o\["summary"\]\[0\];

  37                

  38                i.Lines\[0\].Tax = (double)tax\["tax"\];

  39                i.Total = i.Lines\[0\].Tax + i.SubTotal;

  40                return View(i);

  41            }

  42            else

  43            {

  44   //Pre-set some sample data

  45   ViewBag.ShipFrom = "1500 109th Ave NE, Blaine, MN, US";

  46   ViewBag.ShipTo = "1100 2nd Ave \#300, Seattle, WA, US";

  47   ViewBag.OrderOrigin = "2511 Laguna Blvd, Elk Grove, CA,  

  48   US, 95758";

  49   ViewBag.OrderAcceptance = "100 Market Street, San

  50   Francisco, CA, US";         } 
```

Now that you’ve seen the key parts of my software, you can download the full library by visiting GitHub here. (LINK TBD)
