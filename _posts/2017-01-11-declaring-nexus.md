---
layout: post
title: Declaring Nexus in REST v2
description: An explanation of how to use the Nexus features of the AvaTax REST v2 API.
date: 2017-01-11 15:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

One of the most frequent questions I am asked is "Where do I need to collect taxes?"  The challenge of determining which jurisdictions you fall under is a complex one.  In the United States, the rule that determines when your company has to obey a particular jurisdiction's tax law is called 'Nexus', so AvaTax uses this word to refer to the overall concept of selecting jurisdictions where you are signed up to collect and remit taxes.  Keep in mind, these rules have significant legal repercussions, and you should strongly consider getting legal or tax advice to ensure that your Nexus is correct - and in today's article, I'll show you how to use the API to assist in this process.

<h3>What is an AvaTax 'Nexus'?</h3>

In the AvaTax API, the `Nexus` object is a data structure that contains information about a jurisdiction where you have chosen to collect and remit taxes.  If you read the website of your local city, county, state, or country, you may see links like 'Are you registered to collect sales tax?' or 'Do you have your business license?' - In general, this is the same as an AvaTax `Nexus`.  Here's what an AvaTax `Nexus` object looks like:

```json
{
  "id": 42192,
  "companyId": 1,
  "country": "US",
  "region": "WA",
  "jurisTypeId": "STA",
  "jurisCode": "53",
  "jurisName": "WASHINGTON",
  "shortName": "WA",
  "signatureCode": "",
  "stateAssignedNo": "",
  "nexusTypeId": "SalesOrSellersUseTax",
  "hasLocalNexus": false,
  "hasPermanentEstablishment": true,
  "effectiveDate": "2009-01-01T00:00:00.0",
  "endDate": "2016-01-01T00:00:00.0",
  "createdDate": "2005-12-21T21:15:41.78",
  "createdUserId": 0,
  "modifiedDate": "2005-12-21T21:15:41.78",
  "modifiedUserId": 0
}
```

Let's look at what this information tells us.

<ul class="normal">
    <li>The records have both an ID number, which is unique for each <code class="highlight-rouge">Nexus</code> declaration, and a company ID number that matches it to your company.  Each record also has information about the date when it was created and last modified, plus the ID numbers of the users responsible.</li>
    <li>The jurisdiction codes and names - <code class="highlight-rouge">country</code>, <code class="highlight-rouge">region</code>, <code class="highlight-rouge">jurisTypeId</code>, <code class="highlight-rouge">jurisCode</code>, <code class="highlight-rouge">jurisName</code>, <code class="highlight-rouge">shortName</code>, <code class="highlight-rouge">signatureCode</code>, and <code class="highlight-rouge">stateAssignedNo</code> - are Avalara-provided content that specifically identifies this unique jurisdiction.  These names and codes are carefully researched, and they explicitly match Avalara's library of tax rules and rates.  In short: These values aren't ones you should change!  And, well, if you try to change them you'll get an <a href="http://developer.avalara.com/avatax/errors/UnknownNexusError/">error message</a>.</li>
    <li>The <code class="highlight-rouge">effectiveDate</code> and <code class="highlight-rouge">endDate</code> values are there to indicate when you first declared nexus in that jurisdiction, and when your nexus declaration ended.  For example, if you opened an office in this jurisdiction on January 1st 2009, and closed that office on December 31st 2016, you could specify those values here and AvaTax will ensure that transactions respect these dates.  If you want the nexus to be valid for all dates, you can simply leave these values null.</li>
</ul>

There are also a few United States specific data fields that you should consider.  If you are declaring nexus in jurisdictions outside of the United States, please ignore these fields.

<ul class="normal">
    <li>In the United States, when you declare nexus in a jurisdiction, you will need to select between two options: Sales Or Seller's Use Tax, or Sales Tax only.  These values are sometimes referred to as "Volunteer" or "Non-Volunteer" nexus.  If you are a 'volunteer', you are choosing to collect tax in a jurisdiction even if you do not have physical presence, whereupon AvaTax will help you calculate Sales tax (for in-state transactions) or Seller's Use tax (for out-of-state transactions).  If you are a 'non-volunteer', you have a physical presence in that jurisdiction and will collect Sales Tax Only on all transactions.  These decisions must be made carefully - please be sure to contact your accountant or lawyer before making a decision that has tax implications!</li>
    <li>AvaTax provides a feature that allows you to simplify your collection and remittance responsibilites by declaring all local jurisdictions in a US state.  If you select <code class="highlight-rouge">true</code> for the field <code class="highlight-rouge">hasLocalNexus</code>, you can then choose a value for <code class="highlight-rouge">localNexusTypeId</code>, and AvaTax will automatically assume that you have declared local nexus in all those jurisdictions.  The allowable choices for <code class="highlight-rouge">localNexusTypeId</code> are Selected (I am choosing locals myself), StateAdministered (I choose to collect tax in all local jurisdictions that are reported directly to the state), and All (I choose to collect tax in all local jurisdictions in this state).  This choice is useful in home-rule states like Alabama, where you can simplify your tax collection and reporting responsibilities by simply declaring nexus for all local jurisdictions once.</li>
</ul>

<h3>How can I determine which nexus is right?</h3>

I can't help you determine which Nexus to declare, but I can help you by showing which jurisdictions have nexus for an address!  In the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Definitions/ListNexusByAddress">Nexus Definitions API</a>, `/api/v2/definitions/nexus/byaddress`, you can provide a physical or mailing address and AvaTax will tell you the list of all nexus choices for that address!  Here's what the API call looks like:

`GET https://sandbox-rest.avatax.com/api/v2/definitions/nexus/byaddress?line1=123%20Main%20Street&city=Irvine&region=CA&postalCode=92615&country=US`

```json
{
  "@recordsetCount": 3,
  "value": [
    {
      "id": 379301,
      "companyId": 1,
      "country": "US",
      "region": "CA",
      "jurisTypeId": "STA",
      "jurisCode": "06",
      "jurisName": "CALIFORNIA",
      "shortName": "CA",
      "signatureCode": "",
      "stateAssignedNo": "",
      "nexusTypeId": "SalesOrSellersUseTax",
      "hasLocalNexus": true,
      "hasPermanentEstablishment": true,
      "createdDate": "2006-10-08T18:21:34.15",
      "createdUserId": 0,
      "modifiedDate": "2006-10-08T18:21:34.15",
      "modifiedUserId": 0
    },
    ...
  ]
}
```

This response tells us the list of governmental entities that have jurisdiction over the address "123 Main Street, Irvine, CA 92615".  If you are opening a business in that location, in most cases, you would need to declare nexus for all jurisdictions returned via this API.  If, instead of using AvaTax's Nexus Definitions API, you would like to browse a list of available nexus yourself, you can do that using one of the other <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#/Definitions">informational Nexus APIs</a>.

<h3>How do I declare nexus?</h3>

Once you've made the decision as to where you wish to declare nexus, you can then call the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Nexus/CreateNexus">Create Nexus API</a>, `POST /api/v2/companies/123/nexus`, to create these nexus definition objects.  Since you already have seen how to fetch objects from the nexus-by-address or list-nexus APIs, you can simply take the objects you retrieved from that function and pass them to the Create Nexus API.

When creating a nexus, make sure you choose the following fields:

<ul class="normal">
    <li>If you want the nexus to take effect on specific dates, specify <code class="highlight-rouge">effectiveDate</code> and <code class="highlight-rouge">endDate</code>.</li>
    <li>If the nexus in in the United States, please choose <code class="highlight-rouge">nexusTypeId</code> and <code class="highlight-rouge">hasLocalNexus</code>.</li>
</ul>

Other than those two changes, make sure you pass the data object from the nexus definitions APIs directly!  Those APIs make sure that all the jurisdictional codes and identifiers match our tax rule content exactly.  If you adjust any of those values, you will receive an <a href="http://developer.avalara.com/avatax/errors/UnknownNexusError/">error message</a> indicating that the nexus could not be found.

Here's what the nexus declaration API call looks like:

`POST /api/v2/companies/123456/nexus`

```json
[
    {
      "id": 379301,
      "companyId": 123456,
      "country": "US",
      "region": "CA",
      "jurisTypeId": "STA",
      "jurisCode": "06",
      "jurisName": "CALIFORNIA",
      "shortName": "CA",
      "signatureCode": "",
      "stateAssignedNo": "",
      "nexusTypeId": "SalesOrSellersUseTax",
      "hasLocalNexus": true,
      "hasPermanentEstablishment": true,
      "effectiveDate": "2009-01-01T00:00:00.0",
      "endDate": "2016-01-01T00:00:00.0",
      "createdDate": "2006-10-08T18:21:34.15",
      "createdUserId": 0,
      "modifiedDate": "2006-10-08T18:21:34.15",
      "modifiedUserId": 0
    }
]
```

You've now declared nexus in a new jurisdiction!  This nexus takes effect on the dates you have specified, and AvaTax will now automatically calculate tax for that jurisdiction.  

--Ted Spence, Director, AvaTax Core Engine
