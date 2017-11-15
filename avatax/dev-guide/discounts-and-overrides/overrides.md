---
layout: page
title: 6.1 - Tax Overrides
product: avaTax
doctype: dev_guide
chapter: discounts-and-overrides
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/discounts/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

There are two types of overrides supported in AvaTax: <code>TaxAmount</code> and <code>TaxDate</code>. The <code>TaxAmount</code> Override, will do just that, override the tax amount on the transaction. This is particularly helpful if you need to record transactions to AvaTax which had the tax calculated in another system. The <code>TaxDate</code> override, allows you to specify what tax date to use in the calculation. By default, the AvaTax engine will use the document date as the <code>TaxDate</code>. The common use-case for this override is processing refunds, as you want to calculate the refund tax credit using the same information that the original sale used. Let's take a closer look at each method. 

<h3>Overriding the Tax Amount</h3>
A tax amount override is when you override the tax amount of a transaction rather than having AvaTax calculate it.

This feature is available so that you can import transactions where you've already calculated the tax amount prior to using AvaTax.  An example would be when you are importing data from an older system so that you can keep all your data in AvaTax.  Other customers may choose to use this feature to import data from partner sales - for example, if you were selling via a merchant platform and you want to import your data into AvaTax.

Tax amount overrides can also be used to determine the difference between tax paid to a vendor and consumer use tax due to an authority.  This is covered in more detail in <a class="dev-guide-link" href="/avatax/dev-guide/consumer-use-tax/">Chapter 10 - Consumer Use Tax</a>.

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 6.1.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You calculated tax for a transaction using your old tax software, and you are importing this transaction into AvaTax.</li>
    <li>The tax calculated by your old tax software was $5.67.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-1</li>
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
        <li>Add a TaxOverride to set the TaxAmount to $5.67, and specify the reason as "Importing tax calculated by previous tax software"</li>
    <li>Calculate tax for your transaction using AvaTax.</li> 
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTax amount for the transaction should be $5.67. This is the amount you calculated in your previous tax software.</li>
    <li>The totalTaxCalculated amount should be $9.00. This is the amount that AvaTax determined is correct.</li>
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
  "code": "Chapter-6-Test-1",
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
    }
  ],
  "taxOverride": {
    "type": "taxAmount",
    "taxAmount": 5.67,
    "reason": "Importing tax calculated by previous tax software"
  }
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Overriding the Tax Date</h3>
<code>TaxDate</code> overrides are used when you want to calculate tax on a date different than the date of a document.  For example, if you are returning a product, the tax date of the transaction would be the date of the original transaction, rather than the date of the refund.

Let's say Alice purchases a new chair from the store on May 1st.  She discovers that the chair doesn't fit in her home office, and she decides to return the chair on June 1st.  If you calculate tax on the June 1st date, you might refund a different amount of tax to Alice than she paid on May 1st.  So you use a <code>TaxDate</code> override to ensure that the tax rates are calculated as of May 1st.

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 6.1.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-2</li>
            <li>Document Date: 2017-06-15</li>
            <li>Company Code: TESTCUSTOMER</li>
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
        <li>Add a TaxOverride to set the TaxAmount to $5.67, and specify the reason as "Importing tax calculated by previous tax software"</li>
    <li>Calculate tax for your transaction using AvaTax.</li> 
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The document level TaxDate should now show 5/01/2017</li>
    <li>The totalTaxCalculated amount should be $9.00. This is the amount that AvaTax determined is correct.</li>
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
  "code": "Chapter-6-Test-2",
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
    }
  ],
  "taxOverride": {
    "type": "taxDate",
    "taxDate": "2017-05-01",
    "reason": "Refund for purchase of chair"
  }
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Line Level Overrides</h3>

The examples we have used so far have all shown the <code>TaxAmount</code>/<code>TaxDate</code> overrides at the document level. It is also important to note that these overrides can also be applied at the line level.

<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 6.1.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-6-Test-3</li>
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
        <li>Add a TaxOverride to the line object and set the TaxDate to 2017-05-01 and specify the reason as "Refund for purchase of chair"</li>
    <li>Calculate tax for your transaction using AvaTax.</li> 
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The Line 1 TaxDate should now show 5/01/2017.</li>
    <li>The totalTaxCalculated amount should be $9.00. This is the amount that AvaTax determined is correct.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle3" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle3"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "ReturnInvoice",
  "code": "Chapter-6-Test-3",
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
      "taxCode": "P0000000",
      "taxOverride": {
        "type": "taxDate",
        "taxDate": "2017-05-01",
        "reason": "Refund for purchase of chair"
      }
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Consumer Use Tax Overrides</h3>

The Tax Override function is also used for verification of merchant charged tax in a Use Tax scenario. This will be explained in more detail in <a class="dev-guide-link" href="/avatax/dev-guide/consumer-use-tax/">Chapter 10 - Consumer Use Tax</a>.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/discounts/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
