---
layout: page
title: 5.1 - Finding a Tax Code
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/taxcodes-and-exemptions/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

So far in the developer guide, your code has left the <code>taxCode</code> field empty.  In this case, AvaTax assumes you are creating transactions that refer to general Tangible Personal Property, which is represented by the default tax code <code>P0000000</code>.

As long as you continue using a null tax code, AvaTax will treat your products the same.  However, many products are taxed differently in different jurisdictions.  Finding the correct tax code will ensure that AvaTax treats your product correctly everywhere.

You can find the correct tax code for your product in one of two ways:
<ul class="dev-guide-list">
    <li>Look on Avalara's <a class="dev-guide-link" href="https://taxcode.avatax.avalara.com">tax code site</a></li>
    <li>Or you could call the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes API</a> to list available tax codes</li>
</ul>

When you use tax codes correctly in AvaTax, you will get the correct tax rate for your transaction. Some customers will choose to enter a tax code directly when creating a transaction. 

Other customers may wish to search for tax codes directly through the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes API</a>.   A common use case is to show a drop down text box.  When a customer starts typing the word <code>C</code>, your program can call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes</a> to find all tax codes that begin with the letters that the customer has typed.  Here's how to call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes</a>:
<pre>
GET /api/v2/definitions/taxcodes/$filter=description startswith C
 
{
  "id": 56789,
  "companyId": 12345,
  "taxCode": "PF050101",
  "taxCodeTypeId": "P",
  "description": "Carbonated beverages",
  "parentTaxCode": "PF050001",
  "isPhysical": true,
  "goodsServiceCode": 0,
  "entityUseCode": "",
  "isActive": true,
  "isSSTCertified": true
}
</pre>

<h3>Adding TaxCodes to your Transaction</h3>

On the document line level you can pass via the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransactionModel</a>. There are a few properties that allow you to identify your line categories of ItemCode, Quantity, Amount, Description, and TaxCode. The <code>ItemCode</code> are generally the value passed by your integration or web service to represent a part number, SKU or product ID for the said products or services.

Here's what a transaction looks like when you add tax codes to a line:
<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 5.1.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Carbonated Beverages are considered exempt in Washington State.</li>
    <li>The TaxCode for a Carbonated Beverage is PF050101.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-5-Test-1</li>
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
                    <li>TaxCode PH405370 (gift items)</li>
                </ul>
            </li>
        </ul> 
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $9.00.</li>
    <li>The Taxable amount for line 1 should be $100.00.</li>
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
  "code": "Chapter-5-Test-1",
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
      "taxCode": "PH405370"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

As you can see, this transaction now has different taxability rules based on the type of product being sold.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/taxcodes-and-exemptions/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
