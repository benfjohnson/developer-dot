---
layout: page
title: 11.3 - Reconcile Transactions After Outage
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

If you used a fallback tax rate for a permanent transaction, you must reconcile the transaction after your application comes back online.  Temporary transactions such as <code>SalesOrder</code> tax estimates do not need to be reconciled; similarly, if you retry a transaction one or more times using <a class="dev-guide-link" href="">CreateOrAdjustTransaction</a> and the API call eventually succeeds, you also do not need to reconcile the transaction.

The necessary steps to reconcile transactions after an outage is as follows:
<ul class="dev-guide-list">
    <li>Save the original API call (e.g the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransactionModel</a> object), along with the tax amount you used as a fallback.</li>
    <li>Apply a TaxOverride of type TaxAmount to your <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransactionModel</a>.</li>
    <li>Call the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/">CreateOrAdjustTransaction API</a> to reconcile the transaction correctly regardless of whether the original API call succeeded.</li>
</ul>

Here's how this task works:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 11.4.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call CreateOrAdjustTransaction with these parameters:</li>
    <ul class="dev-guide-list">
        <li>Date: 2017 06 15</li>
        <li>Address
            <ul class="dev-guide-list">
                <li>SingleLocation - 100 Ravine Lane NE, Bainbridge Island, WA 98110</li>
            </ul>
        </li>
        <li>Lines</li>
        <ul class="dev-guide-list">
            <li>qty 1</li>
            <li>TaxCode P0000000</li>
            <li>amount 100</li>
        </ul>
        <li>TaxOverride</li>
        <ul class="dev-guide-list">
            <li>Type: TaxAmount</li>
            <li>Amount: 10</li>
        </ul>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>There is a difference between the TaxCollected and Tax value</li>
    <li>The Tax value is 10</li>
    <li>The TaxCalculated value is 9.</li>
    <li>The difference between Tax and TaxCalculated means that AvaTax determined that you overcollected by $1.</li>
    <li>For customers using Avalara Managed Returns, this overcollect amount will be automatically reported on your next tax filing.</li>
    <li>Customers filing returns outside of Avalara must ensure that this overcollection amount is correctly reported.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "lines": [
    {
      "amount": 100,
      "taxCode": "P0000000"
    }
  ],
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2017-06-15",
  "customerCode": "ABC",
  "addresses": {
    "singleLocation": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "taxOverride": {
    "type": "taxAmount",
    "taxAmount": 10.0,
    "reason": "Tax calculated offline"
  }
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

You have now enabled your software to respond gracefully to a temporary outage in connectivity, and to prepare your transaction correctly.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
