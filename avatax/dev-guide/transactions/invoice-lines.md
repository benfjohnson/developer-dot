---
layout: page
title: 2.2 - Invoice Lines
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/simple-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/should-i-commit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

To accurately calculate tax, you'll need to provide some details about what is being sold. There are a number of options which will be covered in greater detail next chapter, but at minimum you will need to send the details of one line item.

<ul class="dev-guide-list">
  <li><code>number</code>: AvaTax automatically numbers lines on your invoice starting with 1.  If you prefer to use your own line numbers, please specify them in this value.</li>
  <li><code>quantity</code>: This is the quantity of goods or services being sold.  Note that this value does not affect any totals; to determine the price-per-each, divide the <code>amount</code> value by the <code>quantity</code> value.  If you do not provide <code>quantity</code>, the value will be assumed to be one. Although this field is optional, some taxes are affected by dollar-amount thresholds and caps per item, and AvaTax uses the <code>quantity</code> and <code>amount</code> values to calculate this correctly.  We strongly recommend providing the correct <code>quantity</code> for each line.</li>
  <li><code>amount</code>:  This is the total price of goods or services for this line item. This is the total, fully extended value.  For example, if you specify a <code>quantity</code> of 2 and a <code>amount</code> of 10, this means that you have sold two $5 items for a total price of $10.</li>
  <li><code>taxCode</code>: This is how you specify the type of good or service that is being sold. If you omit the <code>taxCode</code> value, AvaTax defaults to treating the item as taxable Tangible Personal Property using the tax code <code>P0000000</code>. We'll go into detail on tax codes in <a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/">Chapter 5 - Product Taxability</a>.  For now, it's enough to know that each line defaults to tangible personal property.</li>
  <li><code>addresses</code>: Each invoice line can have its own custom addresses.  If we make one sale that includes multiple separate shipments, we can attach the correct address to each line.  If the <code>addresses</code> field on a line is null or missing, the line will be assumed to use the <code>addresses</code> from the document level; but if the value is non-null, the line will have its own custom <code>addresses</code> and will not inherit any <code>addresses</code> from the document level.</li>
</ul>

Now that we've covered these additional fields, let's take a look at a more fleshed-out version of a single location transaction. You can see that we've included a <code>code</code> value at the document level and added the <code>number</code> and <code>quantity</code> for each line. The additional fields are not strictly required, but it's good practice to include them. Likewise, a full street address is not strictly required, but providing as much address information as is available helps to ensure that you receive the most accurate sales tax calculation.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 2.2.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
  <li>In your connector, create the following transaction:</li>
  <ul class="dev-guide-list">
    <li>Document Type: SalesOrder</li>
    <li>Document Code: Chapter-2-Test-2</li>
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
      <li>First Line:</li>
      <ul class="dev-guide-list">
        <li>Number: A</li>
        <li>Quantity: 10</li>
        <li>Amount: 567.89</li>
      </ul>
      <li>Second Line:</li>
      <ul class="dev-guide-list">
        <li>Number: B</li>
        <li>Quantity: 2</li>
        <li>Amount: 46.80</li>
      </ul>
    </ul>
  </ul>
  <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
Your transaction is created.
<ul class="dev-guide-list">
  <li>The code value is set to Chapter-2-Test-2</li>
  <li>The date of the transaction is 2017-06-15.</li>
  <li>The customerCode of the transaction is TESTCUSTOMER.</li>
  <li>The first line of the invoice has lineNumber = A and quantity = 10.</li>
  <li>The second line of the invoice has lineNumber = B and quantity = 2.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesOrder",
  "code": "Chapter-2-Test-2",
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
      "number": "A",
      "quantity": 10,
      "amount": 567.89
    },{
      "number": "B",
      "quantity": 2,
      "amount": 46.80
    }
  ]
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<br/>

As you can see, the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> grows as your transactions increase in complexity.  But let's ask - how can I make a transaction permanent, and report it to the tax authority?

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/simple-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/should-i-commit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>