---
layout: post
title: REST v2.17.4 Patch Notes
description: Release Notes for the April 2017 update to the AvaTax REST v2 API.
date: 2017-03-30 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the April 2017 monthly update to the AvaTax REST v2 API.

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
            <td>2017-04-03</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-04-06</td>
        </tr>
    </table>
</div>

<h3>Returns Features</h3>

Improvements to the Returns functionality of REST v2 in this release:

<ul class="normal">
    <li>Updated field names for improved consistency</li>
    <li>New data field for summed remit amount per region</li>
    <li>Trigger calculate amounts anytime an adjustment or augmentation is saved</li>
    <li>Fixed bug when rebuilding worksheets on FQA due to data mismatches</li>
    <li>Fixed skyscraper error when calling with an unknown form or when calling a form with a null expected response time</li>
    <li>Cycle Safe APIs use the FilingFrequencyId enum in addition to the frequency code</li>
</ul>

<h3>New Rate Types</h3>

As a result of the ongoing expansion of the AvaTax product, Avalara is proud to announce the introduction of a wide variety of new rate types.  Our old enumerated list of rate types is now obsolete; we have eliminated the use of the `RateTypeId` enumerated value throughout the API and replaced it with string values.

Code that expects `RateTypeId` enumerated values should now expect to use strings.

<h3>GET /api/v2/definitions/countries/US/ratetypes</h3>

A new API is available to list valid rate types for each country.  The results of this API call is a full list of all rate type codes and descriptions.

<h3>Point of Sale API</h3>

Improvements to the Point-Of-Sale API include additional documentation and improved test suites.

<h3>Refund Transaction API</h3>

The refund API has been re-enabled after additional testing.

<h3>GET /api/v2/jurisdictionoverrides</h3>

You can now select individual special tax jurisdictions using the JurisdictionOverride API.  

The `BoundaryLevel` values are normalized and use a single consistent enumerated value across all jurisdiction override APIs.

<h3>GET /api/v2/addresses/resolve</h3>

Improved reliability for calling `ValidateAddress()`.  Some API calls reporting a `PASSTHROUGH` error have been updated with correct behavior.

<h3>GET /api/v2/taxrules</h3>

You can now see the `TaxCode` value as well as the `TaxCodeId` value when fetching tax rules.

<h3>GET /api/v2/companies/ABC/transactions/DEF</h3>

The `referenceCode` field is correctly returned when fetching transactions.

<h3>POST /api/v2/transactions/create</h3>

For users who wish to receive back smaller payloads, we have added a new `$include` parameter. The options for the parameter are the same as for the `GetTransaction` API call.  For users who do not use the `$include` parameter, you will continue to receive full data in the results.

<h3>Other Bugfixes and Improvements</h3>

<ul class="normal">
    <li>Performance improvements throughout the API</li>
    <li>Improved support for technical support user training sessions</li>
    <li>Reduced retry frequency for email delays</li>
    <li>Improved server health monitoring for load balanced clusters</li>
    <li>Improved swagger documentation for address types, DELETE API calls, and utility endpoints</li>
    <li>Fixed exception when listing regions for Canada</li>
    <li>Fixed occasional exceptions when calling batch fetch immediately after creating batches</li>
    <li>Fixed occasional exception when calling lock transaction using an untrusted connection</li>
    <li>Fixed exception handling for incorrectly encoded Base64 credentials</li>
    <li>Fixed exception when calling for a list of nexus by an invalid form code</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine