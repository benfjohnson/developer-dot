---
layout: post
title: REST v2.16.12 Patch Notes
description: Release Notes for the December 2016 update to the AvaTax REST v2 API.
date: 2016-11-22 11:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---



This article is about the December 2016 monthly update to the AvaTax REST v2 API.

UPDATED 2016-12-07 - The team added the definition of "Mixed" sourcing to the client library to address California sourcing scenarios prior to launch.  Launch has been rescheduled for Tuesday, December 13th.

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
      <td>2016-12-01</td>
    </tr>
    <tr>
      <td>Production</td>
          <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
      <td>2016-12-13</td>
    </tr>
  </table>
</div>

<h3>POST /api/v2/transactions/create</h3>

The `sourcing` field on TransactionLineModel had a mismatch between its documentation and its return value.  In release 2.16.11, the field was documented as a string, but its value was being returned as an integer.  Many libraries would still successfully parse this value although there was a discrepancy in the data formats.  In release 2.16.12, this value is now being returned as a string, matching its documentation.  If your application expected this value to be returned as an integer, you may need to update your code.

An example of the incorrect result and updated result is shown here:

`Incorrect result from 2.16.11`

```json
{
  "lines": [
    {
      "sourcing": 42,
      "details": [
        {
          "sourcing": "Destination"
        }
      ]
    }
  ]
}
```

`Corrected result from 2.16.12`

```json
{
  "lines": [
    {
      "sourcing": "Mixed",
      "details": [
        {
          "sourcing": "Destination"
        }
      ]
    }
  ]
}
```

<h3>New Point Of Sale Data API</h3>

Avalara now provides a data file API for customers with offline point-of-sale systems.  This new API is available to calculate current tax rates for each physical location within the company, in CSV, JSON, and XML file formats.

More information on the Point-Of-Sale data API is available on <a href="http://developer.avalara.com/blog/2016/11/28/point-of-sale-data-api/">the Developer Blog</a>.

<h3>API Documentation Updates</h3>

The <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/">automatically generated API documentation for AvaTax</a> has been updated with comments and explanations for each API call.  These explanations can help guide you through unfamiliar APIs and explain how they are intended to be used.

<h3>GET /api/v2/definitions/countries</h3>

Many customers need to create a drop down user interface in their system that shows a selectable list of countries.  AvaTax now provides a convenient, friendly, accessible JSON endpoint for retrieving data about countries in a format suitable for use in a dropdown box.  For each country, this API lists its US English name and its two character ISO 3166 country code.

Sample results are below:

```json
{
  "@recordsetCount": 253,
  "value": [
    {
      "code": "AD",
      "name": "ANDORRA"
    },
    ...
}
```

<h3>GET /api/v2/definitions/regions</h3>

Similar to the country definition API, AvaTax also provides a full list of all region codes, either accessible by country or as a single list.

Sample results are below:

```json
{
  "@recordsetCount": 5120,
  "value": [
    {
      "countryCode": "AF",
      "code": "BAL",
      "name": "Balkh",
      "classification": "Province"
    },
    ...
}
```

<h3>Improved JSON formatting error messages</h3>

For users who are hand-authoring JSON documents to transmit to AvaTax, the 2.16.12 release will provide detailed error messages about which part of your JSON payload could not be parsed, plus an explanation of why it could not be recognized.

<h3>Bugfixes and Improvements</h3>

<ul class="normal">
	<li>Custom error message when you create two users with a duplicate username</li>
	<li>Transactions no longer throw an error if they only have addresses at the line level</li>
	<li>Only one company location may be set as the default; setting another location to default will clear the default flag on all other locations</li>
	<li>User can now fetch information about themself even if they have restricted permissions</li>
	<li>The 'Transaction Commit' API call with an empty payload no longer changes status to Posted</li>
	<li>API calls with empty payloads now show correct error messages</li>
	<li>Password complexity enforced in password operations</li>
	<li>Additional file operations security and logging</li>
	<li>Additional integration tests for document types</li>
	<li>Additional path traversal security protection</li>
</ul>

Happy Holidays!

--Ted Spence, Director, AvaTax Core Engine
