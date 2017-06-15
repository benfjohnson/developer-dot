---
layout: post
title: REST v2.17.2 Patch Notes
description: Release Notes for the February 2017 update to the AvaTax REST v2 API.
date: 2017-02-16 17:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the February 2017 monthly update to the AvaTax REST v2 API.

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
            <td>2017-02-23</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-02-27</td>
        </tr>
    </table>
</div>

<h2>Free Tax Rates!</h2>

Avalara is pleased to announce the freely available REST v2 TaxRates API!  The TaxRates API provides basic tax functionality for no cost.

You also now have available an API that creates a [free 30-day trial of AvaTax Professional](https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Free/RequestFreeTrial).  This free trial account comes with no obligations and allows you to experiment with a fully featured version of Avalara AvaTax.  After 30 days, you may continue to use the free TaxRates API or you can upgrade to a full account.

For more information on using the free TaxRates API, please see [Estimating Tax with REST v2](http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/).

<h2>Onboarding API in REST v2</h2>

With the release of 2.17.2, all functionality from the existing Onboarding API has been fully migrated to REST v2.  Avalara will be deprecating the existing onboarding API, and will work with individual partners to assist them in upgrading to REST v2.

<h2>Jurisdiction Override API</h2>

For customers who have a need to fine-tune Avalara's address resolution software, we provide the new Jurisdiction Override API.  A jurisdiction override is a flag that tells AvaTax to calculate a specific address according to the rules of a slightly different nearby jurisdiction.  This functionality is often useful when a company has set up business on the boundary between two tax regions and may need to request specific tax treatment if they have received a ruling from a tax authority that they should be using specific tax rules.

Customers have always had the ability to log onto Admin Console to create these overrides through a friendly web interface; this new API allows a customer to make these same adjustments via a programmatic interface.

<h2>Updated Returns APIs</h2>

Significant upgrades and functionality have been enhanced to Avalara's Managed Returns Service API, including:

<ul class="normal">
    <li>TaxAuthorityId information now available on filings</li>
    <li>Filing status is now returns as an enumeration</li>
    <li>Filings are now designated as accrual or filing types</li>
    <li>Notices endpoint allows download of attachments</li>
    <li>Filing request approval process bugfixes and enhancements</li>
</ul>

The managed returns APIs are available by invitation only.

<h2>Friendly Authentication in Swagger</h2>

We have updated to the latest release of [Swagger UI](https://sandbox-rest.avatax.com/swagger/ui/index.html)!  You can tell we upgraded because the new color is Orange.  One great side effect of the latest update is that we now support browser-based authentication both via Avalara Identity and username/password credentials!  Here's how it will work.

First, you click the `Authorize` button in the top right of the API reference screen.

<img src="/public/images/blog/swagger-auth.png" alt="OAuth Sign In" height="79" width="497" />

Next, you can choose to either authenticate via OAuth 2.0 or Username/Password:

<img src="/public/images/blog/oauth-popup.png" alt="OAuth Pop Up" height="270" width="278" />

We recommend authenticating via OAuth 2.0, since it works using a unique bearer token that is valid for 30 minutes at a time.  This token is automatically transmitted from Avalara Identity to the API server under a secure channel, so you can experiment with the swagger API without having to encode your username and password into a Base64 string.  

When you click the OAuth 2.0 link, you'll redirect to Avalara Identity, the new universal sign-on page for Avalara products:

<img src="/public/images/blog/oauth-sign-in.png" alt="OAuth Sign In" height="206" width="374" />

Type in your username and password and click `Login`.  You'll be redirected back to the AvaTax API documentation, and all calls to the API will be fully authenticated.  When your token expires, you'll be redirected back to Avalara Identity to login again.

<h2>Lock Document API</h2>

Customers wishing to test the behavior of document locking will be able to use a new Document Lock API in sandbox.  The document lock API will be available in production by invitation only.

<h2>Changes to Existing API</h2>

<h3>POST /api/v2/transactions/create</h3>

<ul class="normal">
    <li>Date fields on the CreateTransaction API call now only show date, with no time information or time zone offset.  This means that customers should see consistent behavior for the date of their API call regardless of the time zone in which they are calling the application.</li>
    <li>In 2.17.1, it was possible to specify the tax date of a transaction in two different places: Both the root document level as <code class="highlight-rouge">taxDate</code>, and also in the <code class="highlight-rouge">taxOverride.taxDate</code> element.  We have removed the <code class="highlight-rouge">taxDate</code> element and standardized on <code class="highlight-rouge">taxOverride.taxDate</code>.  Code that transmits the <code class="highlight-rouge">taxDate</code> element will have no effect on a transaction.</li>
    <li>Some customers have expressed confusion about what happens when line-level address overrides are created on a transaction with more than one line.  Avalara's policy is that overriding any one address on a line shall override all addresses on the line.  This means that if you set the <code class="highlight-rouge">shipTo</code> element at the document level, and then set the <code class="highlight-rouge">shipFrom</code> element at the line level, the line level will not inherit the <code class="highlight-rouge">shipTo</code> address from the document.</li>
    <li>Customers wishing to override addresses for one line on a transaction must override all addresses for that one line.  If you leave the <code class="highlight-rouge">line.addresses</code> object null, it will inherit all addresses from the root document element.</li>
    <li>Latitude and Longitude are now returned when creating or fetching a document.</li>
    <li>The <code class="highlight-rouge">reportingLocationCode</code> field on the document level is now correctly updated and returned in results.</li>
</ul>

<h3>GET and POST /api/v2/addresses/resolve</h3>

Address resolution APIs now also return an address type code indicating the type of address identified by our service.

<h3>POST /api/v2/companies/123/nexus</h3>

The nexus object has been updated to use dates only, with no time or time zone information.  This prevents display problems where a nexus created in one time zone will behave differently in a different time zone.

Error messages for nexus creation have been updated to increase usability of nexus APIs.

<h3>GET /api/v2/companies/ABC/transactions</h3>

Listing transactions by company now returns a fully valid RecordsetCount value.

Results from transaction search APIs are delayed by 1-5 seconds from live data to reduce impact on production services.

<h3>GET /api/v2/companies/123/batches</h3>

Users fetching batches and batch files now no longer automatically download the batch files with each API call.

Users can use the new `GET /api/v2/companies/123/batches/456/files/789/attachment` API to retrieve the actual file for each batch.  This allows users to download only the specific batch attachments that they wish to retrieve.

The `content` element in a batch object will now be null on retrieval.

<h2>Other Bugfixes and Improvements</h2>

<ul class="normal">
    <li>Accounts with AvaTaxPro that do not have an AvaTaxST subscription now correctly work with transaction APIs</li>
    <li>Batch service fileshare uptime tests updated</li>
</ul>

--Ted Spence, Director, AvaTax Core Engine
