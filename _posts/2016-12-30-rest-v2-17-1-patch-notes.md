---
layout: post
title: REST v2.17.1 Patch Notes
description: Release Notes for the January 2017 update to the AvaTax REST v2 API.
date: 2016-12-30 11:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the January 2017 monthly update to the AvaTax REST v2 API.

UPDATE 2017-01-18 - Due to testing on the Recordset Count issue for pagination described below, we have elected to remove the `$include=count` option and restore the previous recordset count behavior.  All queries will receive correct recordset counts except for queries on the `/api/v2/transactions` endpoint.  We have delayed the correct implementation of recordset count for the transactions table to the 2.17.2 release.  As a result of this change, the release to Sandbox has been rescheduled for Jan 24th.

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
      <td>2017-01-24</td>
    </tr>
    <tr>
      <td>Production</td>
          <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
      <td>2017-01-26</td>
    </tr>
  </table>
</div>

<h3>Avalara Managed Returns now supported in REST v2!</h3>

For the January 2017 release, functionality supported by Avalara's Managed Returns Service and SST Certified Service Provider programs are now available in the REST v2 API.  New endpoints are available for a variety of features that previously were only available via buttons in the <a href="https://admin-avatax.avalara.net">Avalara Admin Console</a>.  This means it's now possible to review your estimated filing amounts, request adjustments, and approve filing for your returns - all through the API.  You'll note that most of these features are restricted to certain user levels; please pay attention to the remarks on each API that will help make clear which users have authority to perform which actions.

The Returns related APIs include functionality for the following features:

<ul class="normal">
    <li>Returns Funding Setup - Returns users can decide how they wish to remit funds to the tax authority when returns are filed.  This API allows a user to deliver notifications to your accounting department that helps them configure the ways in which returns are paid.  All funding configuration is performed via an electronically signed document that must be authorized by an appropriate person from your organization.</li>
    <li>Filing Calendars - A filing calendar is a commitment to file a specific tax form on a specific periodic basis.  When you sign up for the MRS or CSP programs, you will be encouraged to identify the tax forms you file today and to declare all the necessary information required to file them.  These new APIs allow you to review your current filing calendars, request changes, and cancel change requests via the API.</li>
    <li>Tax Notices - Some companies filing tax returns may occasionally receive a letter from a taxing authority with a "Notice" asking them to perform some action.  Avalara MRS and CSP customers can forward these letters to the Avalara Compliance department and receive assistance resolving these issues.  This API allows you to list all the tax notices you have shared with Avalara and review the status of each one.</li>
    <li>Filings - When Avalara files a tax return on your behalf, we provide you with an estimated remittance value upfront for you to review, adjust, and approve the return for filing by Avalara's managed compliance team.  Many customers may need to apply adjustments - for example, if the tax authority has issued them a credit, or if they have to add a separate remittance line item for taxes not calculated by Avalara.  APIs are now available to perform these functions.  After Avalara's compliance team has filed the return, you can then fetch back a PDF document containing a copy of the tax return as it was filed with the tax authority.</li>
</ul>

<h3>Changes to Pagination Code</h3>

Avalara received bug reports about large fetch commands in REST v2 failing when they crossed the 1,000 record mark.  As a result, the pagination code has been changed to more accurately retrieve and paginate large fetch requests.  This change affects all `LIST` and `QUERY` endpoints, but does not apply to `/api/v2/definitions` endpoints yet.

<ul class="normal">
    <li>Pagination is automatically enforced on all API calls.</li>
    <li>LIST and QUERY API calls can return at most 1,000 records at a time.  To retrieve more than 1,000 records, you must paginate your API calls.</li>
    <li>Internally, the code now enforces sorting to ensure that pagination will return consistent results.  If you do not specify a sorting option, your queries will be sorted by default using the unique ID number of the object.</li>
    
</ul>

To address concerns about delays in the API, the `@recordsetCount` value on the `GET /api/v2/companies/123/transactions` endpoint will return 0 for all queries in API 2.17.1.  We are currently in the process of testing performance tuning improvements that will allow us to restore this value in the 2.17.2 release.

<h3>POST /api/v2/addresses/resolve</h3>

New error messages have been added for address validation.  You will receive custom error messages if you supply insufficient information to identify an address, explaining what the requirements are for providing address information.

<h3>GET /api/v2/addresses/resolve</h3>

A new endpoint has been created for validating an address using an HTTP GET request.  This simplified GET endpoint allows you to perform the same function as the POST endpoint, but can simplify your client-side code.

<h3>Documentation for Restricted APIs</h3>

Avalara has documented a number of APIs that exist for specifically authorized users only.  For example, we have documented the "Create New Account" API which is available to specially authorized partners.

These APIs are designated with comments indicating what partners are allowed to use them.  For information on obtaining access to partner-specific APIs, please contact Avalara's business development team.

<h3>Emails to Users</h3>

When you use the API calls `POST /api/v2/users` or `POST /api/v2/accounts/resetlicensekey`, or when your account has been locked due to multiple logon failures, an email is generated to relevant users explaining the action and who called the API.

<h3>Support for CORS scripting</h3>

<a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">Cross-Origin Resource Sharing</a> is now enabled for the AvaTax REST v2 service.  This allows developers building javascript applications to call AvaTax APIs within a web browser rather than requiring each developer to create their own server-side APIs.  Requests from web browsers will now receive the appropriate pre-flight authorization allowing any API call to proceed in the browser directly.

<h3>POST /api/v2/transactions/create</h3>

You can now use location codes as a shortcut for an address when creating a transaction.  If you have already defined locations within your company, this can enable you to submit simpler transaction requests.  For example, if you have created a location and given it the location code `MAINOFFICE`, you can then reference that location's address using this shortcut:

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-12-30T00:00:00-08:00",
  "customerCode": "ABC",
  "addresses": {
    "ShipFrom": {
      "locationCode": "MAINOFFICE"
    },
    "ShipTo": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "postalCode": "92615",
      "country": "US"
    }
  },
  "lines": [
    {
      "amount": 100
    }
  ]
}
```

<h3>GET /api/v2/definitions/entityusecodes</h3>

Entity Use Codes are a feature of AvaTax that helps you identify valid reasons for changing a product's taxability.  These entity use codes are valid in some countries and will change your product's taxability to "exempt" in certain circumstances.  Since most users would like to display a drop down list in their UI, we have added a new endpoint that lists the available values so that you can construct your user interface dynamically.

<h3>Bugfixes</h3>

<ul class="normal">
    <li>Fixed unhandled exception in <code class="highlight-rouge">/api/v2/companies/ABC/transactions/DEF/void</code> endpoint</li>
    <li>Fixed unhandled exception in <code class="highlight-rouge">/api/v2/addresses/resolve</code> endpoint</li>
    <li>Fixed unhandled exceptions with fetching documents in certain statuses</li>
    <li>Improved error messages for address resolution</li>
    <li>Improved documentation for taxpayerIdNumber field for <code class="highlight-rouge">/api/v2/companies/initialize</code> endpoint</li>
    <li>Fixed bugs where <code class="highlight-rouge">/api/v2/addresses/resolve</code> could not work on some valid addresses</li>
</ul>

Happy New Year!

--Ted Spence, Director, AvaTax Core Engine
