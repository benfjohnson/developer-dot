---
layout: page
title: 2.1 - A Simple Transaction
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/invoice-lines/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Transactions can be very simple, very complex, or anywhere in between.  The AvaTax <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> supports a wide variety of features and functionality that enables businesses of any size to accurately reflect their tax liability.  

To learn AvaTax, it's best to start small - so let's look at the minimum information required to calculate a transaction, and why that information is required:

<ul class="dev-guide-list">
  <li>The <code>companyCode</code> of the company that recorded the transaction.  If you have multiple companies within your account, you need to specify which one is creating this transaction.  For this example, we'll use the DEVGUIDE company you set up in <a class="dev-guide-link" href="/avatax/dev-guide/getting-started-with-avatax/">Chapter 1 - Getting Started with AvaTax</a>.</li>
  <li>The <code>type</code> of the transaction - for example, sales are recorded as a <code>SalesInvoice</code>, which is a permanent transaction that can be reported to a tax authority.  For this example, we'll get a tax estimate using the type <code>SalesOrder</code>, which is not recorded and won't be reported on a tax filing.</li>
  <li>The <code>date</code> when the transaction took place.  </li>
  <li>The <code>customerCode</code> of the customer requesting the transaction.  This feature is necessary to allow customers who have exemption certificates to be exempted from sales tax correctly - we'll cover that more in <a class="dev-guide-link" href="/avatax/dev-guide/exemptions/">Chapter 8 - Exemptions</a>.</li>
  <li>The list of <code>addresses</code> involved in the transaction.  For this example, we'll use a <code>singleLocation</code> address element, which means our entire transaction took place at a single location and that no shipments or phone orders were included.  We will cover multi-address transactions in <a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/">Chapter 3 - Customizing Your Transactions</a>.</li>
  <li>For each of the <code>lines</code> in the invoice, we'll need to know the total dollar <code>amount</code> of the line.</li>
</ul>

Here's what the smallest possible transaction looks like:
<pre>
POST /api/v2/transactions/create
 
{
  "companyCode": "DEVGUIDE",
  "type": "SalesOrder",
  "date": "2017-06-15",
  "customerCode": "EXAMPLECUSTOMER",
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
      "amount": 100
    }
  ]
}
</pre>
You will probably have questions about this transaction.  For example, how does AvaTax know what type of product I am selling?  How do I report a transaction that I shipped from a warehouse to the customer's home?  How do I calculate tax on shipping and handling?  

We'll begin to answer these questions over the next few chapters.  For the moment, let's understand why AvaTax requires these key fields.

<h3>Company Code</h3>

The <code>companyCode</code> value determines what tax rules govern a transaction.  In AvaTax, each Company can have its own tax profile - it can declare nexus in different locations; it can create custom tax rules, overrides, and other behavior.  Each AvaTax account can have as many companies as necessary to accurately reflect a business structure.  Each company is identified by its own unique <code>companyCode</code> value - that's the value you specify when you call the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a>.

If you forget to identify the <code>companyCode</code>, AvaTax will automatically assume that you want to use the default company.  Every AvaTax account has a default company - but since a complex business can have dozens of companies, it is considered best practice to always include the <code>companyCode</code> value.

As a connector developer, most of your users will have a simple company structure.  It's considered best practice to provide a drop-down list of companies in your user interface, but to automatically display (and highlight) the company with the <code>isDefault</code> flag set to true.  To retrieve the list of available companies for your user interface, call the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/">QueryCompanies API</a>.

<h3>Document Type</h3>

AvaTax can handle multiple different types of transactions, including Sales, Purchases, Returns, and Inventory Transfer transactions.  We use the <code>type</code> field - often called <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/models/enums/DocumentType/">DocumentType</a> or TransactionType - to differentiate between these types of transactions.  Many connectors will only ever work with Sales transactions; but if you are developing a plugin for an accounting system, you should expect to handle all different types of transactions.

Some DocumentTypes are temporary estimates and others are permanent transactions that will be stored and eventually reported to the tax authority.  In AvaTax, estimates are called Orders and permanent transactions are called Invoices.  This means that a temporary sales estimate is a <code>SalesOrder</code>, whereas a permanent sale is a <code>SalesInvoice</code>.

If you forget to include the <code>type</code> field in the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a>, AvaTax will assume you want a temporary estimate and use the value <code>SalesOrder</code>, which will not be recorded in AvaTax.

<h3>Document Code</h3>

In the above example, we did not provide a value for the <code>code</code> field.  The <code>code</code> field is an optional code that identifies this transaction.  When we do not provide one, AvaTax assigns each transaction a <a class="dev-guide-link" href="https://en.wikipedia.org/wiki/Universally_unique_identifier">Globally Unique Identifier</a>, often called a GUID.

Connector developers may want to use a <code>code</code> value that ties transactions in AvaTax to the transactions in your underlying software.  For example, you can use the ID field of your sale as it is known in your accounting system.  These <code>code</code> values must be unique within each company - if you attempt to create two transactions with the same <code>code</code> for the same company, AvaTax will assume you want to modify the existing transaction and report an error.  

After you have created the transaction, you will use this <code>code</code> value to identify it when calling <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a>, <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/AuditTransaction/">AdjustTransaction</a>, or <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a>.  Whatever value you provide, make sure to store it or link to it.

<h3>Document Date</h3>

The <code>date</code> field indicates the calendar day on which the transaction occurred.  Note that transactions are calculated by the calendar day and are not affected by time zones.  Whatever the calendar day is locally when you create the transaction, tax will be calculated as of the tax laws in effect on that calendar day.

Since the date value is essential to correctly determine the tax rules for a transaction, and since it is easy to mis-interpret calendar days when a transaction occurs close to a time zone boundary, this field is a required field.  

<h3>Customer Code</h3>

The <code>customerCode</code> value identifies the customer who is transacting with the company.  Since a transaction is legally defined as a transaction between a buyer and a seller, the <code>customerCode</code> and <code>companyCode</code> values identify the two parties involved in the transaction.  

For example, if the transaction type is a <code>SalesInvoice</code>, the transaction is deemed to be a sale made by the company identified by <code>companyCode</code> sold to the buyer identified by the <code>customerCode</code>. 

This determination is necessary in order for our software to correctly handle exemption certificates.  AvaTax requires this field so that exemptions will work correctly when the user begins working with certificates.   We'll cover this in more detail in <a class="dev-guide-link" href="/avatax/dev-guide/exemptions/">Chapter 8 - Exemptions</a>.   

<h3>Addresses</h3>

Addresses are a crucial part of the sales tax calculation process. There are a number of factors that go into sales tax calculation, but addresses are probably the most important. The total sales tax rate that you pay is generally made up of several smaller rates, and each of those is allocated to a different taxing jurisdiction (think state, county, city). 

AvaTax determines the correct taxing jurisdictions based on the addresses provided. This may seem fairly straightforward, but there are a huge number of different taxing jurisdictions, and the boundaries aren't always clean or simple to determine. Avalara has a content research team that does the legwork on this so you don’t have to – you just need to give us the address, and we'll determine the correct taxing jurisdictions for you.

The two address types that factor into sales tax calculation are origin addresses and destination addresses.  For example, if you live in Washington and you are selling a mug to someone in California, your origin address (of type <code>ShipFrom</code>) would be Washington and your destination address (of type <code>ShipTo</code>) would be California.  

The simplest type of transaction is a retail point of sale transaction, where the origin address and the destination address are the same.  This type of transaction uses address type <code>SingleLocation</code>, which you'll see in our example above.  In this scenario, a customer makes a purchase in a retail location and takes possession of the product(s) at that location. This is the type of transaction that we'll focus on for the rest of this chapter, but we'll discuss how to calculate tax for transactions with multiple addresses in <a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/">Chapter 3 - Customizing Your Transaction</a>.

While only the city, state, and postal code are required for calculation, it’s best practice to provide as much address information as you have available. This will help to ensure the most accurate tax calculation possible.

<h3>Resolving Addresses</h3>

We recommend validating/resolving addresses against Avalara's address-validation system using the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/">ResolveAddress API</a>.  When you call this API, Avalara will report back a result indicating whether the address can be found or whether any errors or typos have been detected - and your users may appreciate this help when typing in an address.  Here's how to do it:

<ul class="dev-guide-list">
  <li>When the user types data into an address field, call <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/">ResolveAddress</a> with as much information as the user has provided.</li>
  <li>If the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/">ResolveAddress</a> function reports that ResolutionQuality is <code>External</code> or <code>NotCoded</code>, this indicates that AvaTax cannot identify the address the user has typed in.  You should give your user a warning and ask if the address is correct.</li>
  <li>If the user chooses to accept an incorrect address, it is possible to specify <code>line1 = "GENERAL DELIVERY"</code>.  This is a special code recognized by the USPS that allows non-recognized addresses to be processed even if automated address validation does not identify the correct location.  For more information, see the <a class="dev-guide-link" href="https://pe.usps.com/text/pub28/28c2_033.htm">USPS website on General Delivery</a>.
</li>
</ul>

Here's how your code would use ResolveAddress to correct a minor error in zip codes:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case 2.1.1 - Resolving Addresses</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
  <li>Call the ResolveAddress API with an invalid address:</li>
  <ul class="dev-guide-list">
    <li>Line1: 2000 Main Street</li>
    <li>City: Irvine</li>
    <li>State: CA</li>
    <li>Postal Code: 92615</li>
    <ul class="dev-guide-list">
      <li>Note that this postal code is actually for Huntington Beach.</li>
      <li>The correct postal code for this address in Irvine is 92614.</li>
    </ul>
  </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
  <li>The ValidatedAddresses section of the result contains the correct zip code - 92614.</li>
  <li>The ResolutionQuality of the result is set to "Intersection".</li>
  <ul class="dev-guide-list">
    <li>This indicates that AvaTax was able to find the address and you should offer to update the customer's mistyped address to match the validated address.</li>
  </ul>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "textCase": "Upper",
  "line1": "1000 Main Street",
  "city": "Irvine",
  "region": "CA",
  "country": "US",
  "postalCode": "92615"
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<br/>

Now that we've reviewed all the essential parts of the transaction, let's look at what information is required for each line on an invoice.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/invoice-lines/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
