---
layout: post
title: AvaTax API 17.5 Patch Notes
description: Release Notes for the May 2017 update to the AvaTax REST v2 API.
date: 2017-04-25 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the May 2017 monthly update to the AvaTax REST v2 API.

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
            <td>2017-05-02</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-05-08</td>
        </tr>
    </table>
</div>

<h3>API Updates: New Tax Types</h3>

As part of our ongoing expansion, we are proud to announce the introduction of Tax Type Groups.  This new feature allows the AvaTax API to support new tax types and to correctly distinguish between different tax domains that have different rules.  Our first expansion includes information about a variety of tax domains including VAT input and output, excise, lodging, and bottle tax.

During the rollout period, Avalara will be working with key partners to introduce the new functionality gradually.  If you are interested in making use of these new tax types, please inform your customer account manager.

<h3>New API: Create or Adjust transaction</h3>

If you attempt to create two identical transactions with the same code, AvaTax will report an error and prevent you from creating the same transaction twice.  The new `CreateOrAdjust` API call simplifies the process: it will either create the transaction if it does not yet exist, or adjust the transaction if it already exists.  Using this API you don't need to check in advance if a transaction has already been recorded.

Please note, however, that if a transaction has already been reported to a taxing authority, it is considered locked and the `CreateOrAdjust` API call will still return an error.  Transactions that have been reported to a tax authority can no longer be adjusted, cancelled, or deleted due to audit maintenance laws.

<h3>New API: Add / Remove transaction lines</h3>

For accounting systems that create a `SalesInvoice` transaction during a customer's shopping cart experience, it can be necessary to add or remove lines from a tax transaction.  Doing this manually can be complex and time consuming; which is why AvaTax now has an `AddLine` and `RemoveLine` API to modify an existing transaction.

Please note, however, that if a transaction has already been reported to a taxing authority, it is considered locked and the `AddLine` / `RemoveLine` API calls will still return an error.  Transactions that have been reported to a tax authority can no longer be adjusted, cancelled, or deleted due to audit maintenance laws.

<h3>New API: Account and Company configuration</h3>

Connector developers often need a way to store information about a company or account in a way that can be shared across multiple devices conveniently.  For example, if a company has a retail point-of-sale system with a few dozen registers, each register may need to fetch configuration information each day upon startup.

AvaTax now introduces Account Configuration and Company Configuration APIs which allow you to store and retrieve metadata about a company or account.  This API allows you to view or modify AvaTax settings such as address and tax configuration properties.  In addition, you can define your own configuration categories by using values beginning with the prefix `X-`.  For example, if your connector allows a customer to choose between a date-based document code or a GUID-based document code, you can save that preference using the configuration API, and whenever your connector starts up you can fetch the latest data.

<h3>POST /api/v2/transactions/create</h3>

Previously, when using temporary transaction types like `SalesOrder`, `ReturnOrder`, or `PurchaseOrder`, only some information in your request would be returned in the result since the document type was assumed to be a temporary type that did not need to return all information to the caller.  In REST 17.5, more information will be returned to the caller to increase consistency in behavior between temporary document types and permanent document types.

Additionally, for consistency between the legacy SOAP API and the new REST API, temporary transactions will have their ID numbers zeroed out.  In REST 2.17.4, the ID numbers were returned as -1.

These changes affect temporary document types only.  Temporary document types are still not saved in the database; if you would like to fetch documents back, please use the permanent document types such as `SalesInvoice` or `ReturnInvoice` or `PurchaseInvoice`.

<h3>Free Trial now includes Landed Cost</h3>

The AvaTax 30-day free trial now includes Landed Cost functionality.  Try it out now!  For more information about how to use Landed Cost to handle importing products across borders, please see the blog series:

<ul class="normal">
    <li><a href="http://developer.avalara.com/blog/2016/10/13/landedcost-with-rest-v2">LandedCost Basics</a></li>
    <li><a href="http://developer.avalara.com/blog/2016/12/15/landed-cost-who-pays">Landed Cost - Delivered At Place vs Delivered Duty Paid</a></li>
</ul>

<h3>Returns API Improvements</h3>

Many improvements to the Returns APIs, including:

<ul class="normal">
    <li>Add CollectAmount to filings data</li>
    <li>Improved behavior of effective date and expiration date handling for filing calendar requests</li>
    <li>Marked correct FilingId for adjustments/augmentations</li>
    <li>LoginVerifiers functionality now supports both legacy return names and new tax form codes</li>
</ul>

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Performance improvements throughout AvaTax REST</li>
    <li>SalesOrder transaction types now return more data, for consistency with SalesInvoice transaction types</li>
    <li>Improved swagger documentation for enum variables and other parameters</li>
    <li>A custom tax code cannot be deleted if it is in use by other tax rules</li>
    <li>Fixed a bug that could allow a user to set two different companies as default</li>
    <li>Swagger UI will not fail to load if a dependent service is unavailable</li>
    <li>The field IsPhysical is now correctly labeled as a read-only field in the TaxCode API</li>
    <li>Fixed unhandled exceptions in rare edge cases for the Nexus, AdjustTransaction, and CreateLocation APIs</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine