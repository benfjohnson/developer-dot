---
layout: post
title: Point-of-Sale Data API
description: ...
date: 2016-11-28 11:00
author: Kevin Hess
comments: true
categories: [avatax, tax content]
product: blog
doctype: blog
disqus: 1
---

One of the most common questions we get from our point-of-sale customers is about the need to operate in a disconnected environment, while maintaining the same level of accuracy of a connected environment. Many businesses can face periods of intermittent internet connectivity, preventing live calls to our tax engine. Some businesses wish to operate entirely disconnected. In either scenario, businesses require the means to calculate tax locally.

Today, we'll walk through a new API launching in the [AvaTax 2.16.12 release](http://developer.avalara.com/blog/2016/11/22/rest-v2-16-12-patch-notes/) - an API that generates a tax content file that can be consumed by a merchant's point-of-sale (POS) application, supporting its native tax functionality. The data in the API response, at a minimum, will contain tax jurisdiction, tax rate and product/service taxability information for each Tax Code and brick & mortar store Location configured in your AvaTax account.

### The Point-of-Sale Tax Content File

To begin, let's take a look at the template for the point-of-sale tax content file. Here are the details for each field included in the tax content file:
<div class="mobile-table">

<table class="styled-table">

<tbody>

<tr>

<th>Field Name</th>

<th>Field Description</th>

<th>Sample Data</th>

</tr>

<tr>

<td>ScenarioId</td>

<td>This field is used to group tax scenarios together. A tax scenario will consist of a single Location and single Tax Code</td>

<td>1</td>

</tr>

<tr>

<td>EffDate</td>

<td>The date the tax information becomes effective</td>

<td>01/01/2015</td>

</tr>

<tr>

<td>EndDate</td>

<td>The date the tax information is no longer effective. Tax data is effective on this date, but is not effective on the following date</td>

<td>12/31/9999</td>

</tr>

<tr>

<td>LocationCode</td>

<td>Unique location identifier</td>

<td>001</td>

</tr>

<tr>

<td>TaxCode</td>

<td>Avalara System Tax Code or Custom Tax Code</td>

<td>P0000000</td>

</tr>

<tr>

<td>ShipToCity</td>

<td>The ship-to city</td>

<td>Durham</td>

</tr>

<tr>

<td>ShipToCounty</td>

<td>The ship-to county</td>

<td>Durham</td>

</tr>

<tr>

<td>ShipToState</td>

<td>The ship-to state</td>

<td>NC</td>

</tr>

<tr>

<td>ShipToPostalCode</td>

<td>Postal code associated with the location address</td>

<td>27707-1764</td>

</tr>

<tr>

<td>ShipToCountry</td>

<td>The ship-to country</td>

<td>US</td>

</tr>

<tr>

<td>JurisType</td>

<td>The jurisdiction type. There are five supported values - Country, State, County, City, Special</td>

<td>State</td>

</tr>

<tr>

<td>JurisCode</td>

<td>Unique numeric, alpha, or alphanumeric code identifying a jurisdiction. This field is optional</td>

<td>001, EKTF0</td>

</tr>

<tr>

<td>JurisName</td>

<td>The name of the jurisdiction that corresponds to this tax record</td>

<td>North Carolina</td>

</tr>

<tr>

<td>TaxType</td>

<td>The tax type associated with the rate</td>

<td>Sales</td>

</tr>

<tr>

<td>Tax_Description</td>

<td>The description of the tax</td>

<td>NC STATE TAX</td>

</tr>

<tr>

<td>Tax_Rate</td>

<td>The tax rate. "0.03" corresponds to 3%. Exempt records will have a rate of 0.</td>

<td>0.03</td>

</tr>

<tr>

<td>Cap</td>

<td>Applies a cap to the taxable amount. Amounts up to the cap are taxable. Amounts over the cap are non-taxable. The tax rate applies to the taxable amount.</td>

<td>0</td>

</tr>

<tr>

<td>Threshold</td>

<td>Applies a threshold to the taxable amount. Amounts up to and including the threshold are non-taxable. Amounts over the threshold are taxable. The tax rate applies to the taxable amount.</td>

<td>100</td>

</tr>

<tr>

<td>TaxRuleOptions</td>

<td>Applies a special tax scenario rule to the transaction. There is only one supported value at this time: Tax All. With a threshold, this rule taxes the entire amount once the total is over the threshold</td>

<td>TaxAll</td>

</tr>

<tr>

<td>Tax_Application_Level</td>

<td>This field is not used at this time, but will be leveraged for tax-on-tax scenarios in the future. This field will define the order in which taxes are applied in a tax-on-tax scenario and the tax base for each individual tax</td>

<td>N/A</td>

</tr>

</tbody>

</table>

</div>

### Getting Started

Before we start building our JSON request, you'll want to ensure you have Locations and Items configured within your AvaTax account. Avalara's Help Center is a great resource for learning how to [Add or Import Company Locations](https://help.avalara.com/000_Avalara_AvaTax/Manage_Locations/Add__or_Import_Company_Locations) and [Add or Import Items](https://help.avalara.com/000_Avalara_AvaTax/Manage_Product_Taxability/020_Add_Items) .You can also take advantage of our suite of REST v2 endpoints for configuring your AvaTax account with Locations and Items. _Please note that the Point-of-Sale data API uses the Tax Codes assigned to your Items to generate a response._

### Building our JSON Request

In order to retrieve this file, we'll need to build a JSON request:

`POST /api/v2/pointofsaledata/build`

```json
{
  "companyCode": "AVALARA"
}
```

Wow! Only one field! In this JSON request, we only defined a CompanyCode. This means our response will include tax content for all of the Locations and Tax Codes configured in your AvaTax account and will be formatted as a standard JSON response, like this result:

```json
[
  {
    "ScenarioId": "1",
    "EffDate": "4/1/2012",
    "EndDate": "12/31/9999",
    "LocationCode": "1",
    "TaxCode": "PC040100",
    "ShipToCity":"New York",
    "ShipToCounty": "NEW YORK",
    "ShipToState": "NY",
    "ShipToPostalCode": "10028-2175",
    "ShipToCountry": "US",
    "JurisType": "State",
    "JurisName": "NEW YORK",
    "TaxType": "Sales",
    "Tax_Description": "NY STATE TAX",
    "Tax_Rate": 0.04,
    "Cap": "0.000000",
    "Threshold": "110.000000",
    "TaxRuleOptions": "TaxAll",
    "Tax_Application_Level": ""
    },
    ...
]
```

But what if you only want to include a couple of Locations or Tax Codes? Or maybe you want to postdate the content included in the response. We can handle these requests with a few additional parameters.

`POST /api/v2/pointofsaledata/build`

```json
{
  "companyCode": "AVALARA",
  "documentDate": "12/31/2016",
  "responseType": "csv",
  "taxCodes": [ "P0000000", "PC040100", "PF050001" ],
  "locationCodes": [ "001", "002", "003" ]
}
```

Or, even easier, you can request the data file for one location at a time using the [individual location point-of-sale data API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/TaxContent/BuildTaxContentFileForLocation/):

`GET /api/v2/companies/12345/locations/56789/pointofsaledata`

In this JSON request, we added DocumentDate, TaxCode, LocationCode, and ResponseType parameters. The DocumentDate parameter determines the date associated with the tax content. When the DocumentDate is not specified, the current date is used. The TaxCode and LocationCode parameters limit the response to the specified Locations and TaxCodes. The ResponseType parameter will determine how the response will be formatted. Since we specified "CSV", our response will be formatted as a Comma Separated Value file.

```
ScenarioId,EffDate,EndDate,LocationCode,TaxCode,ShipToCity,ShipToCounty,ShipToState,ShipToPostalCode,ShipToCountry,JurisType,JurisCode,JurisName,TaxType,Tax_Description,Tax_Rate,Cap,Threshold,TaxRuleOptions,TaxApplicationLevel 1,11/01/2014,12/31/9999,001,P0000000,Durham,,NC,27707-1764,US,State,37,NORTH CAROLINA,Sales,NC STATE TAX,0.047500,0.000000,0.000000,, 1,05/01/2013,12/31/9999,001,P0000000,Durham,,NC,27707-1764,US,County,063,DURHAM,Sales,NC COUNTY TAX,0.022500,0.000000,0.000000,, 1,05/01/2013,12/31/9999,001,P0000000,Durham,,NC,27707-1764,US,Special,99063,NC SPECIAL TAX DISTRICT (99063),Sales,NC SPECIAL TAX,0.005000,0.000000,0.000000,,
```

Let's update the response type to "xml" to see what an XML-based response looks like:

`POST /api/v2/pointofsaledata/build`

```json
{
  "companyCode": "AVALARA",
  "documentDate": "12/31/2016",
  "responseType": "xml",
  "taxCodes": [ "P0000000", "PC040100", "PF050001" ],
  "locationCodes": [ "001", "002", "003" ]
}
```

This is an example of an XML response:

```xml
<xmp>
  <ReportData>
    <ScenarioId>1</ScenarioId>
    <EffDate>4/1/2012</EffDate>
    <EndDate>12/31/9999</EndDate>
    <LocationCode>1</LocationCode>
    <TaxCode>PC040100</TaxCode>
    <ShipToCity>New York</ShipToCity>
    <ShipToCounty>NEW YORK</ShipToCounty>
    <ShipToState>NY</ShipToState>
    <ShipToPostalCode>10028-2175</ShipToPostalCode>
    <ShipToCountry>US</ShipToCountry>
    <JurisType>State</JurisType>
    <JurisName>NEW YORK</JurisName>
    <TaxType>Sales</TaxType>
    <Tax_Description>NY STATE TAX</Tax_Description>
    <Tax_Rate>0.040000</Tax_Rate>
    <Cap>0.000000</Cap>
    <Threshold>110.000000</Threshold>
    <TaxRuleOptions>TaxAll</TaxRuleOptions>
    <Tax_Application_Level />
  </ReportData>
</xmp>
```

We've now reviewed all of the available parameters for the Point-of-Sale data API. It's important to remember that each call made to the Point-of-Sale data API will only provide you with tax content relevant to the day you made your request or the date stated in your request. If you will be using the response data from this API to calculate tax in a disconnected environment regularly, you will need to schedule daily calls to this API to ensure you always have the most up-to-date tax rules and rates.

-- Kevin Hess, Business Program Manager
