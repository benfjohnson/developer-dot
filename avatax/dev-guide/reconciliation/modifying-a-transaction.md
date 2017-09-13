---
layout: page
title: 4.2 - Modifying a Transaction
product: avaTax
doctype: dev_guide
chapter: reconciliation
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/committing-a-transaction"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

During the reconciliation process, if you discover that a transaction is not correct, you can fix the transaction in one of three ways: you can Adjust, Void, or Refund the transaction.

<h3>Adjust</h3>
To keep a transaction intact, but make a change or correction, you would adjust the transaction using the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction API</a>.  When you call the API, two things will happen:

<ul class="dev-guide-list"> 
    <li>The existing transaction will be marked as <code>Adjusted</code>, and</li>
    <li>A new transaction will be created in the appropriate status (either Saved or Committed).</li>
</ul>

A commonly asked question about the Adjust API is "Why can't I just change one field on the transaction object?"  Unfortunately, tax laws often have complex interdependencies, and it is not guaranteed that a transaction would still be valid if only one field changes.  Tax authorities occasionally create tax laws that affect the behavior of line items based on the presence of other line items in the same transaction, on the classification of items, on the quantity of items, or on threshold values.  As a result, the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction API</a> call will re-create your transaction completely in order to ensure that it meets the AvaTax standard of accuracy.

If you need to make a small change to your transaction, you may choose to reconstruct the original data you submitted to the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> call using the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AuditTransaction/">AuditTransaction API</a>.  This API allows you to rebuild the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransactionModel</a> data structure that you used when you originally created the object.  You can then make a small change to the transaction and submit it to the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction API</a>.

If you are looking to make a small change to an existing transaction, you can consider calling <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AddLines/">AddLines</a> or <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/DeleteLines/">DeleteLines</a>. These methods will allow you to add lines to an existing transaction or remove lines from an existing transaction. Internally, these API calls use the same method as AdjustTransaction and they will still behave the same as if you called AdjustTransaction directly.

Here's how you can modify a transaction to correct an error:

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 4.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-4-Test-3</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>SingleLocation</li>
                    <li>100000000000000 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
                </ul>
            </li>
            <li>Line #1:
                <ul class="dev-guide-list">
                    <li>Amount 100</li>
                    <li>TaxCode P0000000</li>
                </ul>
            </li>
            <li>Set the commit flag to false.</li>
        </ul>
    <li>Calculate tax for your transaction.</li>
    <li>Next, trigger a call to AdjustTransaction with all information the same, except using the corrected address:
        <ul class="dev-guide-list">
            <li>line1: 100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
        </ul>  
    </li>
  </ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Two transactions exist:
        <ul class="dev-guide-list">
            <li>Chapter-4-Test-3</li>
            <ul class="dev-guide-list">
                <li>status: Adjusted</li>
                <li>line1: 100000000000000 Ravine Lane NE</li>
            </ul>
        </ul>
        <ul class="dev-guide-list">
            <li>Chapter-4-Test-3</li>
            <ul class="dev-guide-list">
                <li>status: Committed</li>
                <li>line1: 100 Ravine Lane NE</li>
                <li>"adjustmentReason": "Other"</li>
                <li>"adjustmentDescription": "Correct shipping address"</li>
            </ul>
        </ul>
    </li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle1" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle1"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> CreateTransaction:
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-4-Test-3",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "commit": "true",
  "addresses": {
    "singleLocation": {
      "line1": "100000000000000 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    }
  ]
}
                </pre>
            </li>
            <li> AdjustTransaction:
                <pre>
{
  "adjustmentReason": "Other",
  "adjustmentDescription": "Correct shipping address",
  "newTransaction": {
    "type": "SalesInvoice",
    "code": "Chapter-4-Test-3",
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode": "TESTCUSTOMER",
    "commit": "true",
    "addresses": {
      "singleLocation": {
        "line1": "100 Ravine Lane NE",
        "city": "Bainbridge Island",
        "region": "WA",
        "country": "US",
        "postalCode": "98110"
      }
    },
    "lines": [
      {
        "number": "1",
        "amount": 100,
        "taxCode": "P0000000"
      }
    ]
  }
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

Note that transactions that are locked cannot be adjusted.

<h3>Void</h3>
To remove a transaction that is not valid, you use the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction API</a>.  When you call this API, the transaction will be moved to the status <code>Cancelled</code>.  Transactions in the <code>Cancelled</code> status will no longer be used for reporting purposes and will not be included in reports unless specifically requested.

To void a transaction, you must provide a reason code. The reasons available are:
<ul class="dev-guide-list">
    <li>Unspecified</li>
    <li>PostFailed</li>
    <li>DocDeleted</li>
    <li>DocVoided</li>
    <li>AdjustmentCancelled</li>
</ul>

These codes are available for you to use to help distinguish between a variety of different types of reasons for voiding a transaction, but they do not have different behavior within AvaTax.  You are free to use whichever reason code is appropriate for your task.

Here's how to void a transaction:

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 4.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-4-Test-4</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount 100</li>
                <li>TaxCode P0000000</li>
            </ul>
        </li>
        <li>Set the commit flag to false.</li>
    <li>Calculate tax for your transaction.</li>
    <li>Next, trigger a call to VoidTransaction with the following reason:</li>
    <ul class="dev-guide-list">
        <li>code: DocVoided</li>
    </ul>  
  </ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>One transaction exist:
        <ul class="dev-guide-list">
            <li>Chapter-4-Test-4</li>
            <ul class="dev-guide-list">
                <li>status: Cancelled</li>
                <li>Amount: 100</li>
            </ul>
        </ul>
    </li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> CreateTransaction:
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-4-Test-4",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "commit": "true",
  "addresses": {
    "singleLocation": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    }
  ]
}
                </pre>
            </li>
            <li> VoidTransaction:
                <pre>
{
  "code": "DocVoided"
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

Note that transactions that are locked cannot be voided.

<h3>Refund</h3>
A transaction refund is sometimes called a return or a reverse charge invoice.  To match commonly used language, we have chosen to call this the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a>.

When you refund a transaction, you are what you are technically doing is creating a <code>ReturnInvoice</code> with values that are the negative.  These negative values indicate that money is being returned from the seller to the purchaser.  This corresponds to the accounting concept of a positive and negative journal entries that cancel each other out.

You can choose to use the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a> in a few different ways:
<ul class="dev-guide-list">
    <li>You can refund the entire transaction by setting <code>"refundType": "Full"</code>.</li>
    <li>You can refund specific lines from a transaction by specifying <code>"refundType": "Partial"</code>, and setting a list of lines to refund using the <code>refundLines</code> parameter to the list of line numbers of the lines that are being refunded.</li>
    <li>If your customer originally paid sales tax on the transaction, and they later provided a resale exemption certificate, you can call set the <code>"refundType": "TaxOnly"</code>.</li>
    <li>If you wish to give a customer a percentage refund, perhaps for a discount, you can specify <code>"refundType": "Percentage"</code>.</li>
</ul>

You should ensure that the <code>refundDate</code> value is set to the correct date for the refund.  The tax rates that will be used are the correct rates from the previous transaction.

Here's how to use RefundTransaction to return a customer's money: 

<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 4.2.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-4-Test-5</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount 100</li>
                <li>TaxCode P0000000</li>
            </ul>
        </li>
        <li>Set the commit flag to false.</li>
    <li>Calculate tax for your transaction.</li>
    <li>Next, trigger a call to RefundTransaction with the following reason:</li>
    <ul class="dev-guide-list">
        <li>refundTransactionCode: Chapter-4-Test-5-Refund</li>
        <li>refundType: Full</li>
        <li>refundDate: 2017-06-22</li>
        <li>referenceCode: Refund of Chapter-4-Test-5 - Returned after 7 days.</li>
    </ul>  
  </ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>One transaction exist:</li>
    <ul class="dev-guide-list">
        <li>Chapter-4-Test-5</li>
        <ul class="dev-guide-list">
            <li>status: Committed</li>
            <li>Amount: 100</li>
        </ul>
        <li>Chapter-4-Test-5-Refund</li>
        <ul class="dev-guide-list">
            <li>status: Committed</li>
            <li>Amount: -100</li>
        </ul>
    </ul>
    
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle3" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle3"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> CreateTransaction:
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-4-Test-5",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "commit": "true",
  "addresses": {
    "singleLocation": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    }
  ]
}
                </pre>
            </li>
            <li> VoidTransaction:
                <pre>
{
  "refundTransactionCode": "Chapter-4-Test-5-Refund",
  "refundType": "Full",
  "refundDate": "2017-06-22",
  "referenceCode": "Refund of Chapter-4-Test-5 - Returned after 7 days."
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

For customers using Avalara's Managed Returns Service, it may not always be possible to report ReturnInvoice transactions on every tax filing.  Avalara works with tax authorities around the world to ensure that we handle negative values correctly in each jurisdiction; some jurisdictions have requirements that must be met in order to correctly report a ReturnInvoice transaction.  This means that a ReturnInvoice transaction may potentially be "carried-forward" from one filing to another until it meets the tax authority's requirements for filing.

To list all ReturnInvoice transactions that have not yet been reported to a tax authority, please call the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionsByCompany</a> API with the parameter <code>$filter=type eq ReturnInvoice and status eq Committed</code>.  If a return invoice transaction has not been able to be reported for more than six months, we recommend contacting Avalara's Compliance department to request an amended tax return which will allow the refund value to be claimed directly.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/committing-a-transaction"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>