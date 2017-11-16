---
layout: page
title: 6.2 - Discounting a Transaction
product: avaTax
doctype: dev_guide
chapter: discounts-and-overrides
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/overrides/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

You have several options for handling discounts with AvaTax. However, before we get to into the details we need to call out the different types of discounts you can apply as each is handled differently. Vendor discounts are simply a price reduction in the sale amount of an item or service. Whereas 3rd party (manufacturer) discounts are, generally speaking, a price reduction sponsored by the manufacturer where the vendor is compensated for the reduced price.

When dealing with discounts, there are four basic ways to represent a discount:
<ul class="dev-guide-list">
    <li>A reduction in the sale price</li>
    <li>A line item with a negative amount</li>
    <li>A discount to distribute among lines</li>
    <li>A line item using the Manufacturer Discount TaxCode</li>
</ul>

Let's review each of these in turn

<h3>Price Reduction Discounts</h3>
For this first discount exercise, we are going to perform the discount before sending the request to AvaTax for a tax calculation. So, if the item has a cost of $100 and you are applying a $10 discount, the GetTax request should have an amount of $90. This is the simplest method for handling a discount as it does not involve any additional fields or lines in the GetTax request. 

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 6.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 chair.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-4</li>
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
    <li>Calculate tax for your transaction using AvaTax.</li> 
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTaxCalculated amount should be $8.10. This is the amount that AvaTax determined is correct.</li>
    <li>Notice that, in the transaction, there is no way to determine that a discount has been applied - you only know the discounted sale price of the transaction.</li>
    <li>Some customers may choose to use Reference Fields to keep track of discounts applied as a price reduction. See <a class='dev-guide-link' href="/avatax/dev-guide/customizing-transaction/">Chapter 3 - Customizing Your Transaction</a> for more information about reference fields.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle1" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle1"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-6-Test-4",
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
      "number": "1",
      "amount": 90,
      "taxCode": "P0000000"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Negative Amount Line Items</h3>

With this, exercise, you will simply add an additional line that contains the discounted amount as a negative extended amount. Please ensure to use the same <code>taxCode</code> on the discount line as the item being discounted. This will ensure that any taxability rules applied to the product/service are also applied to the discount.

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 6.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 T-Shirt.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-5</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>CustomerCode: TESTCUSTOMER</li>
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
                <li>TaxCode PC040100</li>
            </ul>
        </li>
         <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount -10</li>
                <li>TaxCode PC040100</li>
            </ul>
        </li>
        <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTaxCalculated amount should be $8.10. This is the amount that AvaTax determined is correct.</li>
    <li>The taxCode for the discount line should match the line being discounted.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "ReturnInvoice",
  "code": "Chapter-6-Test-5",
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
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    },
    {
      "number": "2",
      "amount": -10,
      "taxcode": "P0000000"
   }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Automatically Distributed Discounts</h3>

With this exercise you will pass the complete discounted amount in the <code>discount</code> field then identify the lines that are participating in the discount by setting the <code>discounted</code> field to 'True'. Unlike the other methods, you will enter the total discount as a positive integer with this approach. If no lines have the discounted set to 'True', then the discount will NOT be applied. 

<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 6.2.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 T-Shirt only.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-6</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>CustomerCode: TESTCUSTOMER</li>
            <li>Discount: 10</li>
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
                <li>TaxCode PC040100</li>
                <li>Discounted: True</li>
            </ul>
        </li>
         <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount 75</li>
                <li>TaxCode P0000000</li>
                <li>Discounted: False</li>
            </ul>
        </li>
        <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The discountAmount for Line 1 should be $10.</li>
    <li>The taxableAmount for Line 1 should be $90</li>
    <li>The TaxCalculated for Line 1 should be $8.10. This is the amount that AvaTax determined is correct.</li>
    <li>The discountAmount for Line 2 should be $0.</li>
    <li>The taxableAmount for Line 1 should be $75</li>
    <li>The TaxCalculated for Line 1 should be $6.75. This is the amount that AvaTax determined is correct.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle3" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle3"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-6-Test-6",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "discount": "10",
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
      "taxCode": "P0000000",
      "discounted": "true"
    },
    {
      "number": "2",
      "amount": 75,
      "taxcode": "P0000000",
      "discounted": "false"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Manufacturer Discount TaxCode</h3>

When working with discounts provided by a 3rd party (ex. manufacturer coupon) the process is very similar to the discount method of adding a line with a negative amount. However in this case, instead of using the same tax code as the item being discounted, you will use the tax code for Coupons (third party) - <code>OC030000</code>. Check out <a class="dev-guide-link" href="/developer-dot/avatax/dev-guide/product-taxability/">Chapter 5 - Product Taxability</a> for more information on tax codes and their function.

<div class="dev-guide-test" id="test4">
    <div class="dev-guide-test-heading">Test Case - 6.2.4</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 T-Shirt.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-7</li>
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
                <li>TaxCode PC040100</li>
            </ul>
        </li>
         <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount -10</li>
                <li>TaxCode OC030000</li>
            </ul>
        </li>
        <li>Calculate tax for your transaction using AvaTax</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTaxCalculated amount should be $9.00. This is the amount that AvaTax determined is correct.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle4" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle4"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-6-Test-7",
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
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    },
    {
      "number": "2",
      "amount": -10,
      "taxcode": "OC030000"
   }
  ]
}             
              </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/overrides/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
