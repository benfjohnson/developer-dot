---
layout: post
title: Avatax Connector App
date: 2016-12-05 1:00
author: Anagha Sulakhe
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
imgsrc: /public/images/blog/DevDot_ResetLisenceKey.png
---

# Using The REST API To Build a Connector

Avalara’s new [REST API
v2 ](https://developer.avalara.com/api-reference/avatax/rest/v2/)now offers a
wide variety of functionality for integrating ERP systems with AvaTax.
In the new REST API, you can now add companies, estimate tax on the fly,
validate addresses, and more! For today’s article, we will focus on
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


<img src="/public/images/blog/DevDot_ResetLisenceKey.png" alt="Admin console View" />

We will also need Account Number, which for privacy purposes is blacked out, but is located on the top right corner
of the page:

<img src="/public/images/blog/DevDot_AccountNumber2.png" alt="Account Number View" />

We will put our account ID and license key in a configuration file and
retrieve them using `C#` ConfigurationManager class:

#### Basic Authentication `C#`

```c#
private static HttpBasicAuthenticator GetAuthentication()
{
    string AccountNumber = ConfigurationManager.AppSettings["AccountNumber"];
    string APIKey = ConfigurationManager.AppSettings["APIKey"];
    if (string.IsNullOrEmpty(AccountNumber) || string.IsNullOrEmpty(APIKey))
        return null;
    HttpBasicAuthenticator a = new HttpBasicAuthenticator(AccountNumber,APIKey);
        return a;
}
```
Now that we have the ability to get our authentication from the
configuration file, let’s write some very small helper functions to
perform GET and POST API calls using this authentication.

#### RestSharp Get call

```c#

public static string Get(string urlSegment)
{
    //RestSharp
    var client = new RestClient(requestUri);
    client.Authenticator = GetAuthentication();
    var request = new RestRequest(urlSegment, Method.GET);
    request.AddHeader("X-Avalara-Client", "Connector Test Harness");
    IRestResponse response = client.Execute(request);
    var content = response.Content;
    return content;
}

```

#### RestSharp Post call

```c#
public static string Post(string postData, string urlSegment)
{
   //RestSharp
   var client = new RestClient(requestUri);
   client.Authenticator = GetAuthentication();

   var request = new RestRequest(urlSegment, Method.POST);
   request.AddHeader("Content-type", "application/json");
   request.RequestFormat = DataFormat.Json;
   request.AddParameter("application/json", postData, ParameterType.RequestBody);
   request.AddHeader("X-Avalara-Client", "Connector Test Harness");
   IRestResponse response = client.Execute(request);
   var content = response.Content;
   return content;
}

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

#### Address Validation Post

```c#

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
```

## Calculate Tax on an Invoice

Using the same credentials now we can send tax calculation parameters.
I've created a class, called InvoiceModel, to replicate the object I'd
like to post. Here’s what it looks like:

#### InvoiceModel

```c#
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
```

#### AddressModel

```c#
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
```

#### ItemsModel

```c#
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
```

Now that we have defined our models, all that remains is to fill-in the data and post the query to AvaTax. For my project today, I will limit my tax calculations to one line item per invoice; but you can easily change this by adding values to the array.

#### InvoiceController

```c#
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
```

Now that you’ve seen the key parts of my software, you can download the full library by visiting [GitHub here](https://github.com/Avalara/developer-dot/tree/master/public/code/blog/avatax-connector-app).
