---
layout: post
title: AvaTax API 17.8 Patch Notes
description: Release Notes for the August 2017 update to the AvaTax REST v2 API
date: 2017-09-05 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the August 2017 monthly update to the AvaTax REST v2 API.

<div class="mobile-table">
    <table class="styled-table">
        <tr>
            <th>Environment</th>
            <th>URL</th>
            <th>Release Date</th>
        </tr>
        <tr>
            <td>Sandbox</td>
            <td><a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></td>
            <td>2017-09-06</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-09-07</td>
        </tr>
    </table>
</div>

<h3>Exemption Certificates in AvaTax</h3>

The August release of AvaTax will include a major improvement - exemption certificate functionality is now fully built into AvaTax!  Developers are now free to create customers, record exemption certificates, download preview images, present customers with a custom web-based certificate data entry page, and check a customer's exemption status before processing a transaction.  

This functionality takes up too much space to cover in the patch notes - please be on the lookout for a series of articles explaining how to use the exemption certificate functionality starting the second week of September!

<h3>Improvements to Onboarding API</h3>

Avalara partners that use the Onboarding API to integrate with customers should see major improvements this month.  For more information, please contact your business development representative.

<h3>TaxContent API Improvements</h3>

The <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/TaxContent/">TaxContent API</a> has been extended to support custom tax rules and multiple tax rate records.

<h3>Support for E-Waste Fees</h3>

AvaTax can now support tax calculation for electronic waste disposal!  For example, to calculate E-Waste fees for a 60" television, please call the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> API with the following parameters:

```json
{
  "lines": [
    {
      "amount": 699.95,
      "taxCode": "PC090200",
      "description": "60 inch Television",
      "parameters": {
        "AvaTax.Recycle.ScreenSize": "60",
        "FirstUse": "true"
      }
    }
  ],
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2017-09-05",
  "customerCode": "ABC",
  "addresses": {
    "singleLocation": {
      "city": "Vancouver",
      "region": "BC",
      "country": "CA",
      "postalCode": "V5Y 1V4"
    }
  }
}```

In the results, you will see a new tax appear with details of the eWaste fee: 

```json
  ...
  "taxType": "EWaste",
  "taxName": "BRITISH COLUMBIA Electronics Recycling - Desktop Computers",
  ...
```

<h3>Reporting API</h3>

Over the next few months, AvaTax will begin releasing functionality to generate reports directly using the AvaTax API.  Previously, these reports were only available via the <a href="https://admin-avatax.avalara.net">AvaTax website</a>.

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Additional performance improvements</li>
    <li>TaxNotices display the correct totalRemit value even when updated multiple times</li>
    <li>The API to provision new accounts will tolerate misspellings of subscriptions when the ID is also provided</li>
    <li>Fixed unhandled error in the API to approve filing calendar changes for location-based reporting</li>
    <li>Corrected some typos in the documentation and error messages</li>
    <li>Fixed pagination of returns data APIs when using Top and Skip</li>
    <li>Addresses in the CreateTransaction API are de-duplicated for performance reasons</li>
    <li>Improved and updated developer documentation</li>
    <li>Swagger files for AvaTax REST now pass validation using Swagger 2.0</li>
    <li>Fixed unhandled exception when trying to create a user for a closed account</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine
