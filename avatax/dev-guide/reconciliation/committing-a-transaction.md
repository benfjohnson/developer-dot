---
layout: page
title: 4.1 - Committing a Transaction
product: avaTax
doctype: dev_guide
chapter: reconciliation
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/modifying-a-transaction/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
The concept of committing a transaction is necessary to separate preliminary estimates from final sales.  Many types of connectors exist, for example:

<ul class="normal">
    <li>A direct sales store might commit all transactions immediately and declare that all sales are final.  Adjustments are handled by refunding all or part of the transaction.</li>
    <li>A simple accounting system might only commit transactions after they have been verified.  This allows a salesperson to quickly write transactions, which will then be double-checked by a back office employee before fulfillment.  Adjustments are handled by modifying the transaction before it is locked for reporting.</li>
    <li>A complex accounting system might provide multiple stages of verification.  A transaction can be marked Posted after the first verification step, and Committed after the second.  Adjustments are handled by modifying the transaction before it is reported.</li>
</ul>

Here's how to implement <code>commit</code> for each of these scenarios.

<h3>Direct Commit</h3>

For software that considers all transactions final, you will create a transaction directly using the <code>"commit": "true"</code> flag in the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> API call.

Creating transactions directly in <code>Committed</code> status is covered in <a class="dev-guide-link" href="/avatax/dev-guide/transactions/">Chapter 2 - Transactions</a>.

<h3>One Stage Reconciliation</h3>
For software that permits transactions to be verified after creation, transactions are created with the Commit flag set to false.  Transactions that have not been committed are stored with the status code Saved.  They are considered to be provisional; they will not be reported to a tax authority until they have been verified.

Your back-end system should provide a way for your management team to review <code>Saved</code> transactions and perform reconciliation.  A good way to design a verification process for a back-end systems team is to call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionsByCompany</a> and pass in the parameter <code>$filter=status eq Saved</code>.  This API call will list all transactions for your company that have not yet finished reconciliation, and you can use this to display a queue of transactions to be reconciled.

When a transaction has been reconciled and is final, your software will use the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a> API call to mark the transaction as committed.  Here's how to commit a transaction:

<pre>
POST https://sandbox-rest.avatax.com/api/v2/companies/DEVGUIDE/transactions/MYTRANSACTIONCODE/commit

{
  "commit": "true"
}
</pre>

Now that you have this process in place, let's verify that your connector can set up a one-stage transaction correctly.  This test case is required only for connectors that use one-stage reconciliation.

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 4.1.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-4-Test-1</li>
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
    <li>Next, trigger a call to CommitTransaction with the following options:</li>
    <ul class="dev-guide-list">
        <li>Company Code: DEVGUIDE</li>
        <li>Transaction Code: Chapter-4-Test-1</li>
        <li>Commit: "true"</li>
    </ul> 
  </ul> 

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The transaction's status will be "Committed".</li>
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
  "code": "Chapter-4-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "commit": "false",
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
            <li> CommitTransaction:
                <pre>
{
  "commit": "true"
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Two Stage Reconciliation</h3>

Some companies prefer to have multiple stages of reconciliation. In this case, a transaction can go through three statuses: <code>Saved</code>, <code>Posted</code>, and <code>Committed</code>.  

The three stages work as follows:
<ul class="dev-guide-list">
    <li>Create a transaction in the status <code>Saved</code> following the same process as for one-stage reconciliation.</li>
    <li>Display a queue of transactions that are in the first stage of reconciliation using <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionsByCompany</a> with the parameter <code>$filter=status eq Saved</code>.</li>
    <li>When a transaction is ready to move out of the first stage of reconciliation, update it by calling <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a>.  The transaction's new status will be <code>Posted</code>.</li>
    <li>Display a queue of transactions that are in the second stage of reconciliation using <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionsByCompany</a> with the parameter <code>$filter=status eq Posted</code>.</li>
    <li>When a transaction is ready to move out of the second stage of reconciliation, update it by calling <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a> as above.  The transaction's new status will be <code>Committed</code>.</li>
</ul>

In the two-stage reconciliation process, additional verification features are available.  When you call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a>, you can optionally choose to assert that the transaction's amount matches an amount in a different ledger.  Here's how the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction API</a> call works:
<pre>
POST https://sandbox-rest.avatax.com/api/v2/companies/DEVGUIDE/transactions/MYTRANSACTIONCODE/verify
 
{
  "verifyTransactionDate": "2017-06-15",
  "verifyTotalAmount": 100,
  "verifyTotalTax": 6.25
}
</pre>

Your system can maintain and verify these fields if desired, but it is not required.  If your system does not maintain all three values (date, amount, and tax), it is acceptable to verify only one or two of them.

When you provide this information, the API will test the transaction and report an error if any fields do not match.  This feature allows you to perform automated reconciliation of transactions, and to detect discrepancies programmatically.  Your software can call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a> on all entries in your accounting system ledger every evening, and assert that the amounts match expectations.  Any transactions that fail to verify can be escalated for human oversight.

The <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/TaxCodes/ListTaxCodesByCompany/">ListTransactionsByCompany API</a> is intended to help you display a list of transactions that are in any particular stage of the reconciliation process.  You can use it to examine any stage for transactions that need human review.

Let's examine how a two-stage verification process would work:

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 4.1.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-4-Test-2</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Customer Code: TESTCUSTOMER</li>
            <li>Document Date: 2017-06-15</li>
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
    <li>Next, trigger a call to VerifyTransaction with the following options:</li>
    <ul class="dev-guide-list">
        <li>Company Code: DEVGUIDE</li>
        <li>Transaction Code: Chapter-4-Test-1</li>
        <li>VerifyTransactionDate: 2017-06-15</li>
        <li>VerifyTotalAmount: 100</li>
    </ul>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The transaction's status will be "Posted".</li>
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
  "code": "Chapter-4-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "commit": "false",
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
            <li> VerifyTransaction:
                <pre>
{
 "verifyTransactionDate": "2017-06-15",
 "verifyTotalAmount": 100.00,
 "verifyTotalTax": 9.00
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Locked Transactions</h3>

The purpose of committing a transaction is to indicate that the transaction is ready to be reported to a tax authority.  For customers using Avalara's Managed Returns Service, our software will automatically prepare a liability worksheet for you every filing period and notify you to approve the tax filing.  When you approve the tax filing, all transactions included on that filing are automatically <code>Locked</code>.  A transaction that is locked cannot be changed further - it is considered a permanent part of your company's accounting record, and must be preserved as is for audit circumstances.

You can determine which transactions are locked by calling the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionsByCompany</a> API with the parameter <code>$filter=locked eq true</code>.

Any attempt to modify a locked transaction will fail with an error.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/modifying-a-transaction/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>