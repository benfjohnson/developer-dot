---
layout: page
title: 5.2 - TaxCodes and Exemptions
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/mapping-items-to-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Tax codes can change the rates charged on a transaction - but did you know they also affect a product's taxability?

Some jurisdictions choose not to tax certain types of products or services.  In those cases, the transactions will flag certain line items as <code>exempt</code>.  This doesn't mean that the customer has provided an exemption certificate; it means that the tax authority in question has decided that this type of product is exempt from this tax.

The word "Exempt" is often confusing here.  Some jurisdictions use the terminology "Exempt", whereas others use the word "Deductible", or they may simply say that the tax rate is zero for that particular product.  In each case, the end result is the same: this product does not have transactional tax applied to it.

<h3>Jurisdiction Taxability</h3>

Some jurisdictions may have regulations pertaining to quantity and amount values. For example, in certain jurisdictions in New York clothing items under $110.00 can be non-taxable.

In Tennessee, a special tax applied when the value of a single physical item (Quantity of 1) has a value exceeding $1,600, up to the value of $3,200.

Examples:
<ul class="dev-guide-list">
    <li>No <a class="dev-guide-link" href="http://www1.nyc.gov/nyc-resources/service/2389/sales-tax">sales tax</a> on an item of clothing or footwear that costs less than $110
    </li>
    <li>Tennessee <a class="dev-guide-link" href="https://revenue.support.tn.gov/hc/en-us/articles/205576765-What-is-a-single-article-and-how-is-sales-tax-on-a-single-article-calculated-<">single article tax cap</a>
    </li>
</ul>

Keep in mind that items and tax codes represent the production taxability. Other factors like the exempt status of customer and the client's tax profile generally would place higher in a hierarchy sense to the product. Meaning if your customer is exempt, referencing a taxable tax code will still generate a zero tax result. Same of nexus and tax rules. If you are getting a gettax result for a jurisdiction that you have not identified in the Avalara Nexus settings, regardless of the item or tax code passed the result will be non-taxable. The application of these three levels results in the tax calculation you see returned by the API and/or recorded in AvaTax.

Let's examine how two different jurisdictions handle carbonated beverages.

<h3>Carbonated Beverages in Washington</h3>
The state of Washington does not have a tax for carbonated juice beverages as of June 15th, 2017.  This tax rule may change in the future!  Even if you know that a particular product is exempt from tax, it is important to provide the correct tax code.  Many states will choose to audit companies that fail to report exempt transactions correctly; so please encourage your customers to correctly categorize and report all lines on the transaction.

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 5.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Carbonated Beverages are considered exempt in Washington State.</li>
    <li>The TaxCode for a Carbonated Beverage is PF050101.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-5-Test-2</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
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
            <li>Line #2:
                <ul class="dev-guide-list">
                    <li>Amount 75</li>
                    <li>TaxCode PF050101</li>
                </ul>
            </li>
        </ul> 
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $9.00.</li>
    <li>The Taxable amount for line 1 should be $100.00.</li>
    <li>The Exempt amount for line 1 should be $0.00.</li>
    <li>The tax for line 2 should be $0.00.</li>
    <li>The Taxable amount for line 2 should be $0.00.</li>
    <li>The Exempt amount for line 2 should be $75.00.</li>
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
  "code": "Chapter-5-Test-2",
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
      "amount": 75,
      "taxCode": "PF050101"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Carbonated Beverages in New York</h3>
Let's now try that same transaction in a different address.  The state of New York has taxes for carbonated juice beverages, so this time we will see the transaction producing tax for both lines.

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 5.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Re-create the transaction in step 2, but this time change it as follows:</li>
        <ul class="dev-guide-list">
            <li>Transaction Code: Chapter-5-Test-3</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>SingleLocation</li>
                    <li>14 Wall Street, New York, NY 10005</li>
                </ul>
            </li>
        </ul> 
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $8.88.</li>
    <li>The Taxable amount for line 1 should be $100.00.</li>
    <li>The Exempt amount for line 1 should be $0.00.</li>
    <li>The tax for line 2 should be $6.66.</li>
    <li>The Taxable amount for line 2 should be $75.00.</li>
    <li>The Exempt amount for line 2 should be $0.00.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-5-Test-3",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "addresses": {
    "singleLocation": {
      "line1": "14 Wall Street",
      "city": "New York",
      "region": "NY",
      "country": "US",
      "postalCode": "10005"
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
      "amount": 75,
      "taxCode": "PF050101"
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
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/mapping-items-to-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
