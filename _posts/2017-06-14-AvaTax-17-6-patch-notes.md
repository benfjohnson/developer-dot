---
layout: post
title: AvaTax API 17.6 Patch Notes
description: Release Notes for the June 2017 update to the AvaTax REST v2 API
date: 2017-06-14 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the June 2017 monthly update to the AvaTax REST v2 API.

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
            <td>2017-06-22</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-06-27</td>
        </tr>
    </table>
</div>

<h3>New Tax Type Supported: Telecommunications Taxes</h3>

Avalara is proud to announce the preview release of integrated telecommunications tax calculation for customers using AvaTax.  The telecommunications tax domain handles a wide variety of taxes and fees for customers selling phones, conference calling services, internet access, and many other product and service types.  Customers interested in developing communications tax connectors or working with Avalara for communications tax calculation should contact their customer account manager for more details.

<h3>New API: Transactions for Multi-Company Marketplace Vendors</h3>

In the June release, AvaTax introduces the multi-company transaction shortcut.  This shortcut is intended to simplify the conversion of a complex multi-party transaction into multiple two-party transactions for reporting purposes.  When using this API, you can divide up a single transaction between different selling companies and different reporting locations line-by-line.  This shortcut makes it possible to generate multiple transactions more rapidly.

This API is intended to help companies with multi-vendor marketplaces, and companies categorizing consumer use tax between multiple reporting locations.  Before this API was introduced, you would have to create each transaction separately with a distinct API call for each seller/buyer pair.

For companies operating a marketplace which connect sellers and buyers, a key competitive advantage is the ability to allow a customer to purchase things from a large number of sellers at once.  It can be time consuming to split up a single transaction (from the buyer's perspective) into multiple transactions (from the seller's perspective) in order to report them correctly on your tax returns.  

For companies needing to allocate consumer use tax, you can now designate reporting locations for each individual line on a purchase invoice.  This allows you to purchase a large number of products at once from a vendor, and allocate each line to a different field office for reporting purposes.

<h3>TaxContent API Name Change</h3>

The AvaTax TaxContent API (formerly known as the point-of-sale API) has been renamed in order to emphasize that it is useful for a variety of companies who need tax content for other purposes.  The API functionality remains the same.

<h3>Updated field on TransactionModel</h3>

For consistency of naming between the [CreateTransactionModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/) and the [TransactionModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel/) objects, we have unified the naming of the field `reportingLocationCode`.  The name "Reporting Location Code" was chosen because it better communicates the function of the field - it allows companies who perform location-based filing to select the location-based tax return on which a transaction will be reported.

The old field, `locationCode`, will continue to exist but has been deprecated.  Please adjust your code to use `reportingLocationCode`.

<h3>Returns Functionality Improvements</h3>

A variety of improvements to the returns filing functionality in AvaTax:

<ul class="normal">
    <li>New Filing Status API</li>
    <li>Improved functionality for tax notice modifications</li>
    <li>Clearer error messages for filing calendar changes</li>
    <li>Compliance users may create filing calendars for broader time periods</li>
    <li>Fixed an issue that caused filing attachments to be incorrectly hidden from the UI</li>
    <li>Other bugfixes on notices and updating adjustments</li>
</ul>

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Significant performance improvements for fetching large volumes of transactions.</li>
    <li>It is now possible to call <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/">CreateOrAdjustTransaction</a> on a transaction that was previously cancelled.  Doing so will create a new transaction with a code matching the old transaction's code.</li>
    <li>Activating your account using the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/ActivateAccount/">ActivateAccount API</a> now triggers a welcome email.</li>
    <li>The fields <code class="highlight-rouge">FirstName</code> and <code class="highlight-rouge">LastName</code> on <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/UserModel/">UserModel</a> are now required.</li>
    <li>Improvements to the Address Resolution API behavior for jurisdictions with complex taxability.</li>
    <li>Documentation for the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/">Free TaxRates APIs</a> updated.</li>
    <li>Calling <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> using a SalesOrder transaction type now correctly preserves the <code class="highlight-rouge">ItemCode</code> and <code class="highlight-rouge">Quantity</code> fields.</li>
    <li>Improved error messages when calling <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Nexus/CreateNexus/">CreateNexus</a>.  If you use the <code class="highlight-rouge">LocalNexusTypeId</code> or <code class="highlight-rouge">HasLocalNexus</code> values on the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/NexusModel/">NexusModel</a> object, you will receive an error if they are incorrectly configured.</li>
    <li>When using the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/SetAccountConfiguration/">SetAccountConfiguration API</a>, you will receive an error message if you attempt to set a taxability override code to a value that conflicts with a system code.</li>
    <li>It is no longer possible to <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Registrar/CreateUsers/">CreateUser</a> for a user with a role of "CompanyAdmin" or "CompanyUser" without correctly assigning them to a company.</li>
    <li>Fixed many unhandled exceptions for various edge cases.</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine
