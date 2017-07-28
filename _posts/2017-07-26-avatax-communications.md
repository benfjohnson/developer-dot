---
layout: post
title: AvaTax Communications
description: AvaTax Communications
date: 2017-07-26 12:00
author: Qijing Yu
comments: true
categories:
product: blog
doctype: blog
disqus: 1
---
Now that you have learned how to make a Sales And Use AvaTax call, you want to extend your ability of making diverse types tax transactions, for example: Telecommunications. The good news is AvaTax is now supporting the Telecoms tax calculation. With a few setups, you can easily use your regular AvaTax account for making Telecoms transactions.

<h3>Required setups</h3>

There are a few things you need to pre-configure before making a successful AvaTax Communications transaction:
<ul class="normal">
    <li>Have an AvaTax account subscribed to AvaComms service</li>
    <li>Have at least one company added to the account</li>
    <li>Have your company configured with a ClientId (and ClientProfileId) provided by your Communications account manager, by posting a request to our REST API as below:
    <table class="styled-table">
        <thead>
            <tr>
                <th>CreateCommsConfig - <code>POST</code> /api/v2/companies/{id}/configuration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
<span class="p">[
    {</span>
        <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">12345</span><span class="p">,</span>
        <span class="nt">"category"</span><span class="p">: </span><span class="s2">"AvaCommsConfig"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">: </span><span class="s2">"ClientId"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">: </span><span class="s2">"536"</span>
    <span class="p">},
    {</span>
        <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">12345</span><span class="p">,</span>
        <span class="nt">"category"</span><span class="p">: </span><span class="s2">"AvaCommsConfig"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">: </span><span class="s2">"ClientProfileId"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">: </span><span class="s2">"1"</span>
    <span class="p">}
]</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </li>
    <li>Ready to make a transaction</li>
</ul>

<h3>How to make an AvaTax Communications call</h3>

A Communications tax call is largely the same with regular AvaTax calls, with exception of a few extra parameters, as:
<ul class="normal">
    <li>AvaTax.Communications.TransactionType</li>
    <li>AvaTax.Communications.ServiceType</li>
    <li>AvaTax.Communications.Lines</li>
    <li>AvaTax.Communications.Minutes</li>
    <li>AvaTax.Communications.CustomerType</li>
    <li>…</li>
</ul>
For example, a Communications transaction looks something as below:
<table class="styled-table">
        <thead>
            <tr>
                <th>AvaTax Communications transaction example - <code>POST</code> /api/v2/transactions/create</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
<span class="p">{</span>
    <span class="nt">"type"</span><span class="p">: </span><span class="s2">"SalesInvoice"</span><span class="p">,</span>
    <span class="nt">"companyCode"</span><span class="p">: </span><span class="s2">"DEFAULT"</span><span class="p">,</span>
    <span class="nt">"date"</span><span class="p">: </span><span class="s2">"2017-05-26"</span><span class="p">,</span>
    <span class="nt">"customerCode"</span><span class="p">: </span><span class="s2">"RestSample"</span><span class="p">,</span>
    <span class="nt">"purchaseOrderNo"</span><span class="p">: </span><span class="s2">"2017-05-26-001"</span><span class="p">,</span>
    <span class="nt">"addresses"</span><span class="p">: {</span>
        <span class="nt">"singleLocation"</span><span class="p">: {</span>
            <span class="nt">"line1"</span><span class="p">: </span><span class="s2">"8675 W 96th Street Suite 220"</span><span class="p">,</span>
            <span class="nt">"city"</span><span class="p">: </span><span class="s2">"Overland Park"</span><span class="p">,</span>
            <span class="nt">"region"</span><span class="p">: </span><span class="s2">"KS"</span><span class="p">,</span>
            <span class="nt">"country"</span><span class="p">: </span><span class="s2">"US"</span><span class="p">,</span>
            <span class="nt">"postalCode"</span><span class="p">: </span><span class="s2">"66212"</span><span class="p">,</span>
        <span class="p">}
    },</span>
    <span class="nt">"lines"</span><span class="p">: [
        {</span>
            <span class="nt">"number"</span><span class="p">: </span><span class="s2">"1"</span><span class="p">,</span>
            <span class="nt">"quantity"</span><span class="p">: </span><span class="mi">1</span><span class="p">,</span>
            <span class="nt">"amount"</span><span class="p">: </span><span class="mi">100</span><span class="p">,</span>
            <span class="nt">"taxCode"</span><span class="p">: </span><span class="s2">"P0000000"</span><span class="p">,</span>
            <span class="nt">"description"</span><span class="p">: </span><span class="s2">"Yarn"</span><span class="p">,</span>
            <span class="nt">"parameters"</span><span class="p">: {</span>
                <span class="nt">"AvaTax.Communications.TransactionType"</span><span class="p">: </span><span class="s2">"Cellular"</span><span class="p">,</span>
                <span class="nt">"AvaTax.Communications.ServiceType"</span><span class="p">: </span><span class="s2">"Access Charge"</span><span class="p">,</span>
                <span class="nt">"AvaTax.Communications.Lines"</span><span class="p">: </span><span class="mi">10</span><span class="p">,</span>
                <span class="nt">"AvaTax.Communications.Minutes"</span><span class="p">: </span><span class="mi">60</span>
            <span class="p">}
        }
    ],</span>
    <span class="nt">"commit"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
    <span class="nt">"currencyCode"</span><span class="p">: </span><span class="s2">"USD"</span><span class="p">,</span>
    <span class="nt">"description"</span><span class="p">: </span><span class="s2">"Yarn"</span><span class="p">,</span>
    <span class="nt">"parameters"</span><span class="p">: {</span>
            <span class="nt">"AvaTax.Communications.CustomerType"</span><span class="p">: </span><span class="s2">"Business"</span><span class="p">,</span>
            <span class="nt">"AvaTax.Communications.BusinessClass"</span><span class="p">: </span><span class="s2">"CLEC"</span><span class="p">,</span>
            <span class="nt">"AvaTax.Communications.Sale"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt"> "AvaTax.Communications.ServiceClass"</span><span class="p">: </span><span class="s2">"Primary Long Distance"</span><span class="p">,
    },</span>
    <span class="nt">"debugLevel"</span><span class="p">: </span><span class="s2">"Diagnostic"</span>
<span class="p">}</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

And the calculation response for above request is:
<table class="styled-table">
        <thead>
            <tr>
                <th>Communications calculation response</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight blog-scrollable">
<span class="p">{</span>
  <span class="nt">"code"</span><span class="p">: </span><span class="s2">"b08190bc-d449-4643-b34c-caf2cf6cfa68"</span><span class="p">,</span>
  <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
  <span class="nt">"date"</span><span class="p">: </span><span class="s2">"2017-05-26"</span><span class="p">,</span>
  <span class="nt">"paymentDate"</span><span class="p">: </span><span class="s2">"2017-05-26"</span><span class="p">,</span>
  <span class="nt">"status"</span><span class="p">: </span><span class="s2">"Temporary"</span><span class="p">,</span>
  <span class="nt">"type"</span><span class="p">: </span><span class="s2">"SalesInvoice"</span><span class="p">,</span>
  <span class="nt">"currencyCode"</span><span class="p">: </span><span class="s2">"USD"</span><span class="p">,</span>
  <span class="nt">"customerVendorCode"</span><span class="p">: </span><span class="s2">"RestSample"</span><span class="p">,</span>
  <span class="nt">"reconciled"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
  <span class="nt">"purchaseOrderNo"</span><span class="p">: </span><span class="s2">"2017-05-26-001"</span><span class="p">,</span>
  <span class="nt">"totalAmount"</span><span class="p">: </span><span class="mi">100</span><span class="p">,</span>
  <span class="nt">"totalExempt"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
  <span class="nt">"totalTax"</span><span class="p">: </span><span class="mi">22.427061</span><span class="p">,</span>
  <span class="nt">"totalTaxable"</span><span class="p">: </span><span class="mi">111.032317</span><span class="p">,</span>
  <span class="nt">"totalTaxCalculated"</span><span class="p">: </span><span class="mi">22.427061</span><span class="p">,</span>
  <span class="nt">"adjustmentReason"</span><span class="p">: </span><span class="s2">"NotAdjusted"</span><span class="p">,</span>
  <span class="nt">"locked"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
  <span class="nt">"version"</span><span class="p">: </span><span class="mi">1</span><span class="p">,</span>
  <span class="nt">"exchangeRateEffectiveDate"</span><span class="p">: </span><span class="s2">"2017-05-26"</span><span class="p">,</span>
  <span class="nt">"exchangeRate"</span><span class="p">: </span><span class="mi">1</span><span class="p">,</span>
  <span class="nt">"isSellerImporterOfRecord"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
  <span class="nt">"description"</span><span class="p">: </span><span class="s2">"Yarn"</span><span class="p">,</span>
  <span class="nt">"modifiedDate"</span><span class="p">: </span><span class="s2">"2017-07-24T21:53:30.6139926Z"</span><span class="p">,</span>
  <span class="nt">"modifiedUserId"</span><span class="p">: </span><span class="mi">30581</span><span class="p">,</span>
  <span class="nt">"taxDate"</span><span class="p">: </span><span class="s2">"0001-01-01T00:00:00"</span><span class="p">,</span>
  <span class="nt">"lines"</span><span class="p">: [
    {</span>
      <span class="nt">"lineNumber"</span><span class="p">: </span><span class="mi">1</span><span class="p">,</span>
      <span class="nt">"description"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
      <span class="nt">"discountAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
      <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
      <span class="nt">"exemptCertId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
      <span class="nt">"isItemTaxable"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
      <span class="nt">"lineAmount"</span><span class="p">: </span><span class="mi">111.032317</span><span class="p">,</span>
      <span class="nt">"quantity"</span><span class="p">: </span><span class="mi">1</span><span class="p">,</span>
      <span class="nt">"reportingDate"</span><span class="p">: </span><span class="s2">"1900-01-01"</span><span class="p">,</span>
      <span class="nt">"tax"</span><span class="p">: </span><span class="mi">22.427061</span><span class="p">,</span>
      <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">111.032317</span><span class="p">,</span>
      <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">22.427061</span><span class="p">,</span>
      <span class="nt">"taxCode"</span><span class="p">: </span><span class="s2">"Cellular - Access Charge"</span><span class="p">,</span>
      <span class="nt">"taxDate"</span><span class="p">: </span><span class="s2">"2017-07-24"</span><span class="p">,</span>
      <span class="nt">"taxIncluded"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
      <span class="nt">"details"</span><span class="p">: [
          {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">37.1</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"STA"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">37.1</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.0725</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">4.56025</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">62.9</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"CONNECTIVITY CHARGES - Universal Service Fund (Wireless)"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">4.56025</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"STA"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">100</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.6</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">0.6</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"E-911 CHARGES - E911 (Wireless)"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">0.6</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"CIT"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">-11.032317</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.01125</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">1.249114</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">111.032317</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"SALES AND USE TAXES - Sales Tax"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">1.249114</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"CTY"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">-11.032317</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.01475</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">1.637727</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">111.032317</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"SALES AND USE TAXES - Sales Tax"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">1.637727</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"STA"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">-11.032317</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.065</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">7.217101</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">111.032317</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"SALES AND USE TAXES - Sales Tax"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">7.217101</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">62.9</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"CNT"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">62.9</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.174</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">6.4554</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">37.1</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"CONNECTIVITY CHARGES - Fed USF Cellular"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">6.4554</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"CNT"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.016667</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">0.016667</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">100</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"REGULATORY CHARGES - FCC Regulatory Fee (Wireless)"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">0.016667</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">},
        {</span>
          <span class="nt">"country"</span><span class="p">: </span><span class="s2">"USA"</span><span class="p">,</span>
          <span class="nt">"region"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"exemptAmount"</span><span class="p">: </span><span class="mi">62.9</span><span class="p">,</span>
          <span class="nt">"jurisCode"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisName"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"stateAssignedNo"</span><span class="p">: </span><span class="s2">""</span><span class="p">,</span>
          <span class="nt">"jurisType"</span><span class="p">: </span><span class="s2">"CNT"</span><span class="p">,</span>
          <span class="nt">"nonTaxableAmount"</span><span class="p">: </span><span class="mi">62.9</span><span class="p">,</span>
          <span class="nt">"rate"</span><span class="p">: </span><span class="mi">0.01862</span><span class="p">,</span>
          <span class="nt">"tax"</span><span class="p">: </span><span class="mi">0.690802</span><span class="p">,</span>
          <span class="nt">"taxableAmount"</span><span class="p">: </span><span class="mi">37.1</span><span class="p">,</span>
          <span class="nt">"taxType"</span><span class="p">: </span><span class="s2">"Sales"</span><span class="p">,</span>
          <span class="nt">"taxName"</span><span class="p">: </span><span class="s2">"CONNECTIVITY CHARGES - Telecommunications Relay Surcharge (Cellular)"</span><span class="p">,</span>
          <span class="nt">"taxAuthorityTypeId"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
          <span class="nt">"taxCalculated"</span><span class="p">: </span><span class="mi">0.690802</span><span class="p">,</span>
          <span class="nt">"rateType"</span><span class="p">: </span><span class="s2">"General"</span><span class="p">,</span>
          <span class="nt">"rateTypeCode"</span><span class="p">: </span><span class="s2">"General"</span>
        <span class="p">}
      ],</span>
       <span class="nt">"parameters"</span><span class="p">: {</span>
        <span class="nt">"AvaTax.Communications.TransactionType"</span><span class="p">: </span><span class="s2">"Cellular"</span><span class="p">,</span>
        <span class="nt">"AvaTax.Communications.ServiceType"</span><span class="p">: </span><span class="s2">"Access Charge"</span><span class="p">,</span>
        <span class="nt">"AvaTax.Communications.Lines"</span><span class="p">: </span><span class="s2">"10"</span><span class="p">,</span>
        <span class="nt">"AvaTax.Communications.Minutes"</span><span class="p">: </span><span class="s2">"60"</span>
      <span class="p">}
    }
  ],</span>
  <span class="nt">"addresses"</span><span class="p">[],</span>
  <span class="nt">"summary"</span><span class="p">[],</span>
  <span class="nt">"parameters"</span><span class="p">: {</span>
    <span class="nt">"AvaTax.Communications.CustomerType"</span><span class="p">: </span><span class="s2">"Business"</span><span class="p">,</span>
    <span class="nt">"AvaTax.Communications.BusinessClass"</span><span class="p">: </span><span class="s2">"CLEC"</span><span class="p">,</span>
    <span class="nt">"AvaTax.Communications.Sale"</span><span class="p">: </span><span class="s2">"true"</span><span class="p">,</span>
    <span class="nt">"AvaTax.Communications.ServiceClass"</span><span class="p">: </span><span class="s2">"Primary Long Distance"</span>
  <span class="p">}
}</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

Note that the "AvaTax.Communications.TransactionType" and "AvaTax.Communications.ServiceType" are two parameters required in order to make a Communications transaction. The other parameters are required or optional depending on distinctive use cases. For example, "AvaTax.Communications.Minutes" and "AvaTax.Communications.Lines" are only required for certain T/S (Transaction/Service) pairs. You can use the /api/v2/communications/tspairs API to look up whether Minutes or Lines are required for the T/S pair your business is operating.

<h3>What are allowed T/S pairs and parameters</h3>

There are 4 APIs we provided in the REST API suite for you to look up available T/S pairs and parameters:
<ul class="normal">
    <li>GET /api/v2/communications/tspairs  to look up complete list of T/S pairs.</li>
    <li>GET /api/v2/communications/transactiontypes  to look up all transaction types accepted.</li>
    <li>GET /api/v2/communications/transactiontypes/{id}/servicetypes to look up all service types allowed of a transaction type.</li>
    <li>GET /api/v2/parameters/parameters  to look up all parameters allowed when making a transaction call.</li>   
</ul>

<h3>To make your transactions easier</h3>
If most of your transactions look the same, with only changes on one or two parameters. You can facilitate your transaction calls by setting the AvaCommsConfig in the way that it records the common parameter values you use. So that they will be used as default values if you don't explicitly pass them in your transactions. Of course, if you pass a value in your transaction for a parameter already exists in the config, the transaction value always takes priority. 

Below is how you configure default parameters. Make sure you pass a valid JSON for the Parameters value. You can always do the same POST operation again to update the default parameters.

<table class="styled-table">
        <thead>
            <tr>
                <th>Configuring default parameters - <code>POST</code> /api/v2/companies/{id}/configuration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
<span class="p">[
    {</span>
        <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">12345</span><span class="p">,</span>
        <span class="nt">"category"</span><span class="p">: </span><span class="s2">"AvaCommsConfig"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">: </span><span class="s2">"Parameters"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">: "{</span>
            <span class="nt">\"AvaTax.Communications.IsPrivateLine\"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.PrivateLineSplit\"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.CustomerType\"</span><span class="p">: </span><span class="s2">\"Business\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.BusinessClass\"</span><span class="p">: </span><span class="s2">\"CLEC\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Sale\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.ServiceClass\"</span><span class="p">: </span><span class="s2">\"Primary Long Distance\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.CustomerNumber\"</span><span class="p">: </span><span class="s2">\"RestSample\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.CompanyIdentifier\"</span><span class="p">: </span><span class="s2">\"TST\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.AdjustmentMethod\"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Debit\"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.FacilitiesBased\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Franchise\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Lifeline\"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Regulated\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.ServiceLevelNumber\"</span><span class="p">: </span><span class="mi">3456</span>
        <span class="p">}"</span>
    <span class="p">}
]</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>