---
layout: post
title: AvaTax API 17.9 Patch Notes
description: Release Notes for the September 2017 update to the AvaTax API
date: 2017-09-22 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the August 2017 monthly update to the AvaTax API.

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
            <td>2017-09-26</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-09-28</td>
        </tr>
    </table>
</div>

<h3>License Key Authentication Update</h3>

Avalara customers are requested to read the Avalara terms and conditions by visiting the [AvaTax website for production](https://admin.avalara.com) or the [AvaTax website for Sandbox](https://sandbox.admin.avalara.com).

The [AccountResetLicenseKey API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/AccountResetLicenseKey/) will now return an `AccountInNewStatusException` error if your account has not yet been activated by reading terms and conditions on the AvaTax website.  Please note that resetting your license key will invalidate all previous license keys for your account.  AvaTax will send an email to all active account administrators for your account notifying you that the license key was reset.

Activating your account using the [ActivateAccount API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/ActivateAccount/) will no longer automatically generate a license key.  

<h3>Asynchronous Reporting API</h3>

In order to ensure reliable performance of report generation using the [Reporting API in REST](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Reports/), we have enforced a rate limit on report requests so that concurrency issues do not delay or block report generation.  

The Reporting API has been split up as follows:

* Request a report using the `Initiate` API.  You will receive back a report ID number.
* Check status on a report by requesting it via the `GetReport` API, and pass in the report ID number you received from the `Initiate` API call.  When a report is ready for download, the status will show `Completed`.
* Download the actual report file using the `Download` API.

The synchronous reporting API has been deprecated.

<h3>Improvements to the CreateTransaction API</h3>

A variety of improvements were made to the [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/).  

<ul class="normal">
    <li>Improved performance and reduced data store usage provide more consistent performance, even during busy hours</li>
    <li>Updated documentation helps to explain how it relates to [CreateOrAdjustTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/) so users can more freely decide between the two APIs.</li>
    <li>The field Description will now be returned correctly when getting estimates using the SalesOrder transaction type.</li>
    <li>Customized error message for when you use only destination or origin address types with a transaction.</li>
    <li>The SalesOrder transaction type now supports $include=SummaryOnly.</li>
    <li>The SalesOrder transaction type now correctly obeys the TaxDebugLevel parameter.  In version 17.8.1, it returned diagnostic-level detail for all sales orders regardless of the setting of the TaxDebugLevel parameter.</li>
    <li>Fixed an unhandled exception that occurred rarely when modifying an existing transaction.</li>
</ul>

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Improved error messages for CreateUser API; users can be set to NoAccess privilege levels.</li>
    <li>Additional logging and metrics for users seeing unhandled exceptions.</li>
    <li>Improved documentation for a variety of APIs.</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine
