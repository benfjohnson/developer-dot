---
layout: page
title: 2.3 - Should I Commit?
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/invoice-lines/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/document-types/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Both transactions we created in the previous section were <code>SalesOrder</code> transactions, meaning they were temporary estimates that weren't recorded to the <a class="dev-guide-link" href="https://admin-development.avalara.net/login.aspx?ReturnUrl=%2f">AvaTax website</a>. This is great for some scenarios, but there are others where you'll want to actually record the transaction. In this section, we'll take a look at a few different use cases.

A Transaction can reflect one of many different types of business documents, and it’s worth discussing how a transaction can change over time. Let’s begin by understanding how a “Sales” transaction is created, and how it can change over time.

<h3>The Transaction State Diagram</h3>

In AvaTax, a sales transaction is an exchange that occurs between two companies. Although other types of transactions exist that can be within a single company - for example, inventory transfer transactions - in today’s use case we will only examine transactions that occur between two companies.

When you create a transaction, the information about that transaction is referred to as a “Document”. You will see many comments or articles that refer to “Documents” rather than transactions - it helps if you think of the “Transaction” as the API call and the “Document” as the data that is stored on disk. For today’s article, we will refer to Transactions as the API, and Documents as the values returned back from the API calls.

<img class="dev-guide-pic" src="/avatax/dev-guide/transactions/transaction-commit.png">

As you can see from the lifecycle document above, a transaction can go through a number of steps before it is finalized. We have designed these steps to be flexible enough to solve problems for a variety of different customers and different types of tax processes. Clearly, the way you use AvaTax can be uniquely suited to your business. Let’s start with a few common use cases.

In an online store, your first task is to provide a sales tax estimate for the user casually browsing through your website. These casual visitors have not purchased anything yet, but by giving them an accurate tax estimate you can show off your store’s high quality and commitment to accuracy. To help out this customer, you call <a class="dev-guide-link" href="/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> with the transaction type set to <code>SalesOrder</code>. This gives you an accurate estimate of tax (assuming the customer put in their address correctly!), but it won’t record any tax data yet because the customer hasn’t bought anything.

When the customer chooses to finish their transaction, your storefront should call <a class="dev-guide-link" href="/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> again, but this time you should set the transaction type to <code>SalesInvoice</code>. This causes the transaction to be recorded into AvaTax, and you’ll be able to check on it later. The reason you have to contact the API a second time may not be immediately obvious - but the customer may have waited long enough that the tax rates might have changed, or their address may have changed, or your company configuration may have changed. Any one of these small changes can affect the accuracy of a tax calculation, especially when an online storefront is still capable of selling to customers at 11:59 PM on the night before a sales tax holiday!

Let's take a look at an example API call for a committed transaction:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 2.3.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Document Type: SalesInvoice</li>
        <li>Document Code: Chapter-2-Test-4</li>
        <li>Company Code: DEVGUIDE</li>
        <li>Document Date: 2017-06-15</li>
        <li>Customer Code: TESTCUSTOMER</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, US 98110</li>
            </ul>
        <li>Lines:</li>
            <ul class="dev-guide-list">
                <li>Number: 1</li>
                <li>Quantity: 1</li>
                <li>Amount: 100</li>
            </ul>
        <li>Commit: True</li>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Since this is a 'SalesInvoice' transaction with "Commit" set to "True", the transaction will be recorded and visible on the AvaTax website.</li>
    <li>You can log onto the AvaTax website and find this transaction. The transaction is in status: Committed.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-2-Test-4",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
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
      "number": "01",
      "quantity": 1,
      "amount": 100
    }
  ],
  "commit": true
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

Now we'll take a look at how the transaction we just created looks in AvaTax. To view this transaction, please navigate to your development account <a class="dev-guide-link" href="https://admin-development.avalara.net/login.aspx?ReturnUrl=%2f">AvaTax website</a> and then click the <code>Transactions</code> tab. You search for the transaction by the <code>DocumentCode</code> you used. If you don't find any results, check your Date Range options.

<img class="dev-guide-pic" src="/avatax/dev-guide/transactions/Transaction-Detail.png"/>

We'll talk more about reconciliation in <a class="dev-guide-link" href="/avatax/dev-guide/reconciliation/">Chapter 4 - Reconciliation</a>.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/invoice-lines/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/document-types/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>