---
layout: post
title: How is tax calculated?
date: 2015-09-11 09:53
author: anya.stettler
comments: true
categories: [older]
product: avaTax
doctype: blog
imgsrc: /public/images/blog/shutterstock_310565729.jpg
---
<img src="/public/images/blog/shutterstock_310565729.jpg" width="167" height="250" alt="parfait dessert with many layers, just like tax determination" />

When you look through the API documentation, you notice a bunch of required and 'situationally required' fields. What gives? What do we do with all that information anyway?

Well, like the parfait dessert pictured, sales tax has many (colorful) layers. All of that information provided helps us to make an accurate (and precise!) determination on the calculation we return, in a number of ways.

Let’s take a look at a hypothetical invoice. This is just the barebones required information, with our request on the left and response on the right. Note that if you're following along in your test environment, you might get different results! That's just fine! We'll talk about that as we dig into the calculation.

In our sample request, I've specified
{% highlight javascript %}"DetailLevel": "Summary"{% endhighlight %}
to shorten our results, but you can see the full detail by leaving out this parameter, or by specifying
{% highlight javascript %}"DetailLevel": "Tax"{% endhighlight %}
Request:
{% highlight javascript %}{
"DocDate": "2015-09-08",
"DocCode": "00501-IN",
"CustomerCode": "0000",
"DetailLevel": "Summary",
"Addresses":
[
{
"AddressCode": "1",
"Line1": "435 Ericksen Avenue Northeast",
"PostalCode": "98110"
},
{
"AddressCode": "2",
"Line1": "PO Box 123",
"City":"Raleigh",
"Region":"NC",
"PostalCode": "27602"
}
],
"Lines":
[
{
"LineNo": "1",
"DestinationCode": "2",
"OriginCode": "1",
"Qty": 1,
"Amount": 100,
"TaxCode":"SC100502"
},
{
"LineNo": "2",
"DestinationCode": "2",
"OriginCode": "1",
"Qty": 1,
"Amount": 75
}
]
}
{% endhighlight %}
Response:
{% highlight javascript %}{
    "ResultCode": "Success",
    "DocCode": "93ac90e0-d2d9-42ac-8a0e-0e59884d3b46",
    "DocDate": "2015-09-11",
    "Timestamp": "2015-09-08T19:36:04.1929437Z",
    "TotalAmount": "175",
    "TotalDiscount": "0",
    "TotalExemption": "0",
    "TotalTaxable": "175",
    "TotalTax": "11.81",
    "TotalTaxCalculated": "11.81",
    "TaxDate": "2015-09-11",
    "TaxSummary": [
        {
            "Country": "US",
            "Region": "NC",
            "JurisType": "State",
            "JurisCode": "37",
            "Taxable": "175",
            "Rate": "0.047500",
            "Tax": "8.31",
            "JurisName": "NORTH CAROLINA",
            "TaxName": "NC STATE TAX"
        },
        {
            "Country": "US",
            "Region": "NC",
            "JurisType": "County",
            "JurisCode": "183",
            "Taxable": "175",
            "Rate": "0.020000",
            "Tax": "3.5",
            "JurisName": "WAKE",
            "TaxName": "NC COUNTY TAX"
        }
    ]
}
{% endhighlight %}
Okay, so what's happening here? Lets break it down.

There are three main levels of tax calculation: customer taxability, product taxability, and tax profile. The application of these three levels results in the tax calculation you see returned by the API and/or recorded in AvaTax.

<strong>Customer Taxability</strong>

First, we have our customer taxability fields: Exemption Number, Entity/Use Code, and (in some setups) CustomerCode.  If the customer is flagged as exempt, that will put any sales in that transaction in the Exempt bucket for applicable jurisdictions, and no sales tax will be charged on them, regardless of product taxability. Most methods of customer-based exemption are exempt in all triggered jurisdictions, but some notable exceptions (e.g. the “Local Government” exempt reason in either an Entity/Use Code or Exempt Reason for an Exemption Certificate) do exist. In those cases, the sales are only exempt in the applicable jurisdictions, and all other sales are subject to item taxability as normal.

ExemptionNo: This is a field that, if it is populated with data, exempts the transaction from sales tax entirely. If, in our request, we had populated this with “EXEMPT”, our transaction would be exempt from sales tax. You can’t see the Exemption Number reported in the Document Detail view from the Transactions tab in the Admin Console, but it is exposed if you drill into Document Edit Mode.

CustomerUsageType: Also called Entity/Use Code, this associates a customer taxability profile with a transaction. This can be one of our system-set customer taxability profiles (e.g. Retail or Local Government), or it can be one that you have created rules for in your dashboard. If we had populated this with “G” in our request, AvaTax would know that this corresponds to a retailer, and our transaction would be exempt in all jurisdictions.

CustomerCode: This is only a concern if you’re managing exempt customers through CertCapture, or directly in the ECMS on the Admin Console.  If the customer code matches an exemption certificate on file, the destination address is in a state listed in the Regions Applicable on a non-revoked certificate, and the transaction falls within the listed date range, the certificate will be applied to the transaction.  This application is also contingent on your ECMS Settings: this module is available to all accounts, but is disabled by default.

<strong>Product Taxability</strong>

The taxability of the tax codes passed in the destination state determines the item taxability. Taxability for a single code may vary state to state, or local jurisdiction to local jurisdiction. If the tax code assigned to the line is taxable in the destination state, the sales are flagged as taxable. Similarly, if a code is non-taxable in a given state, the sales are flagged as non-taxable and tax is not assessed. A few codes are pro-rated at different levels of taxability (e.g. half-taxable, or taxable dependent upon the taxability of other items on the transaction). If no tax code is passed, our system assumes that items are taxable in all states, and assigns the system default code of P0000000.

<strong>Tax Profile</strong>

Once the taxability of the customer and items have been established, the sourced rates are applied to the transaction.  First, sourcing is established; some states source some jurisdictions or products at the origin address for intrastate transactions. Then, those addresses are used to pull the appropriate taxing jurisdictions based on your tax profile and nexus designation. Sales tax or Seller’s use tax is charged depending on your nexus type. Those rates are applied at the line level to your taxable sales. In this case, I have Sales Tax only nexus in North Carolina. Nexus is not administered locally, so nexus at the state level will include all local nexus. My address triggered a state tax of 4.75% and a 2% county level tax for the county of Wake for a total composite rate of 6.75%.

And then we're done!

This is - if you can believe it - a pretty simplified explanation, and focuses on US calculations. There are other requirements for other tax systems, and even more depth for the calculations described here. If you want to know more about the ins and outs of sales tax calculation, you should take a look at our more detailed <a href="https://help.avalara.com/007_AvalaraUniversity/Online_Product_Training">product training</a> around sales tax.
