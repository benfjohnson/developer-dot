---
layout: post
title: AvaTax API 17.7 Patch Notes
description: Release Notes for the July 2017 update to the AvaTax REST v2 API
date: 2017-07-25 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the July 2017 monthly update to the AvaTax REST v2 API.

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
            <td>2017-07-31</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-08-02</td>
        </tr>
    </table>
</div>

<i>UPDATE 2017-07-31 - An additional feature was added to this release and the date was adjusted to 2017-08-02.</i>

<h3>New "SummaryOnly" Option for CreateTransaction</h3>

The [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) returns all tax and metadata about a transaction - which can be daunting when you only want to put the correct tax amount on a receipt.  In order to help customers manage a smaller data set, we have introduced a new option: `$include=SummaryOnly`.  

When you add this new option to your `CreateTransaction` API call, you will receive less metadata in your API call result, but still get everything necessary to print an accurate tax total on your invoice or receipt.

<h3>New Filtering Options for Definitions API</h3>

One of our most requested features is now here - users can now use the `$filter` parameter when requesting data from the [Definitions APIs](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/) in REST v2!  This allows you to request more or less data with each individual API request, and produce the right amount of information or find subsets of information.

To use this feature, please look at the developer guide pages for each API to see how what functionality is available, or read the page [Filtering in REST](https://developer.avalara.com/avatax/filtering-in-rest) for information about how filtering works.

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Additional performance improvements</li>
    <li>Bug fixes for filing calendars with quarterly frequencies</li>
    <li>Improved date handling for filing calendars</li>
    <li>Users can now request license keys with account activate API</li>
    <li>Fixed an exception when approving filing requests with date problems</li>
    <li>Fixed an exception when loading multiple filings</li>
    <li>New definitions API for listing jurisdictions</li>
    <li>Approving filing requests triggers an automatic worksheet rebuild</li>
    <li>Content disposition header handled correctly for CORS requests that download files</li>
    <li>Improved documentation for <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a></li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine
