---
layout: post
title: REST v2.17.3 Patch Notes
description: Release Notes for the March 2017 update to the AvaTax REST v2 API.
date: 2017-03-08 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the March 2017 monthly update to the AvaTax REST v2 API.

UPDATE 2017-03-13: Due to some requests for urgent updates, the release date for this patch has been accelerated to March 14th Sandbox and March 16th Production.  The old dates were March 16th Sandbox and March 21st Production.

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
            <td>2017-03-14 (UPDATED)</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-03-16 (UPDATED)</td>
        </tr>
    </table>
</div>

<h3>Refund Transaction API</h3>

A new API, `POST /api/v2/companies/ABC/transactions/DEF/refund`, allows you to create refunds for transactions quickly and easily.

The Refund API allows you to quickly and easily reverse a `SalesInvoice`.  You have the option of specifying whether the refund is `Full`, `Partial`, `Percentage`, or `TaxOnly`.  When you call the API, AvaTax will create a `ReturnInvoice` which has the appropriate information to refund the correct amounts to the customer.

The API providesworks as follows:

`POST /api/v2/companies/ABC/transactions/DEF/refund`

```json
{
  "refundTransactionCode": "GHI",
  "refundDate": "2017-03-07",
  "refundType": "Full"
}
```

The result of the API call is a `TransactionModel` of the refund's `ReturnInvoice` document with the transaction code and document date as specified in the request.  The `refundType` parameter can be used to choose between one of the following four use cases:

<ul class="normal">
    <li>If a customer has brought their product back to the store to ask for a refund, you can create a <code class="highlight-rouge">Full</code> refund and the entire transaction will be reversed.</li>
    <li>If a customer has purchased ten items but only wishes to return one item, you can use the <code class="highlight-rouge">Partial</code> refund type to refund only specific line items within the original sale.</li>
    <li>If you wish to provide a discount to a customer who completed a sale in the past, you can use the <code class="highlight-rouge">Percentage</code> refund type to refund a fraction of the customer's purchase price.</li>
    <li>If you charged tax on a transaction, and the customer provided a resale exemption certificate after the fact, you can use the <code class="highlight-rouge">TaxOnly</code> refund type to create a refund that only returns to the customer the sales tax they paid.</li>
</ul>

<h3>PUT /api/v2/companies/123/batches/456</h3>

Due to improvements in the response time of the batch processing service, it is no longer safe to allow customers to modify batch objects once created.  A batch object uploaded to AvaTax must be considered permanent, since many batch objects begin processing within 1-5 seconds of creation time.  

Since it is no longer safe to modify batch objects, this API call has been removed and will return an error if called in the future.

<h3>Improvements to the Point of Sale API</h3>

The Point-Of-Sale API system allows customers concerned about Internet connectivity to download information about tax rates to help configure their retail sales operations in the event that the Internet connection is disrupted.

A number of improvements have been made to this API to reduce error rates, add new functionality, and add custom formats for different cash register systems as requested by point-of-sale API customers.

If you are interested in using the Point-Of-Sale API for your company, please contact your account manager.

<h3>Tax Filing API Improvements</h3>

Avalara's tax return related APIs have a number of improvements:

<ul class="normal">
    <li>APIs to determine what options are available to change a filing calendar now return a consistent filing frequency ID in addition to the filing frequency text string.</li>
    <li>A new API is available to list the nexus related to a tax form.</li>
    <li>An API to upload notice attachments is now available.</li>
</ul>

<h3>GET /api/v2/companies/ABC/transactions/DEF</h3>

In 2.17.2, the API to retrieve one single transaction was incorrectly using the delayed replica database to verify the transaction's code.  This mistake caused the API to report that a transaction did not exist when it had been recently created and had not yet replicated to the second database.  This error has been corrected and you will now be able to retrieve a transaction using this endpoint directly after creating it with the CreateTransaction API.

<h3>PUT /api/v2/accounts/123/jurisdictionoverrides/456</h3>

Users creating jurisdiction overrides can now update the overrides after they have been created.

<h3>POST /api/v2/accounts/freetrials/request</h3>

The full trial version of AvaTax Professional is now for 30 days instead of 90 days.

The free trial API now returns a `limitations` field in the results.  This limitations field tells you about what features your free account has and how long they will last.

<h3>POST /api/v2/companies/ABC/transactions/DEF/lock</h3>

This API endpoint is now unlocked for general usage on Sandbox.  You can use this API to test the behavior of your accounting systems and connectors when transactions are locked.

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Performance tuning for a variety of API calls</li>
    <li>Improvements to swagger documentation; corrected the integer types of some data elements and removed duplicate enum values</li>
    <li>Improved error messaging when customers create a custom tax code that overlaps with a system tax code</li>
    <li>Improved error messaging for nexus creation when nexus dates mismatch</li>
    <li>New API to fetch documents when the customer overloads document codes</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine