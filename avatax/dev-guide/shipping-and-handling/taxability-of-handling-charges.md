---
layout: page
title: 7.2 - Taxability of Handling Charges
product: avaTax
doctype: dev_guide
chapter: shipping-and-handling
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/shipping-and-handling/taxability-of-shipping-charges"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/shipping-and-handling/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Depending on how you show the handling charge on your document, it may be included with your freight/shipping line item, or it can be a line itself on the transaction. In the case where your handling charge is combined with freight/shipping, you do not need a separate line, there is a tax code that covers this scenario, <code>FR030000</code>. When your handling charge is separately stated from the freight/shipping charge, you just need to treat the handling charge as another line. Let's take a look at our transaction again, this time with handling separately stated:
<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 7.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You are shipping an item from Washington to Florida.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-7-Test-4</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
        </ul>
        <li>Addresses:
            <li>ShipFrom
                <ul class="dev-guide-list">
                    <li>100 Ravine Lane NE, Bainbridge Island, WA 98110</li>
                </ul>
            </li>
            <li>ShipTo
                <ul class="dev-guide-list">
                    <li>3500 Pan American Dr., Miami FL 3133</li>
                </ul>
            </li>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Quantity</li>
                <li>Amount: 100</li>
                <li>TaxCode: P0000000</li>
                <li>Item Code: Widgets</li>
                <li>Description: Taxable Gizmo</li>
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Quantity: 10</li>
                <li>Amount: 100</li>
                <li>TaxCode: NT</li>
                <li>Item Code: Widgets</li>
                <li>Description: Non-Taxable Gizmo</li>
            </ul>
        </li>
        <li>Line #3:
            <ul class="dev-guide-list">
                <li>Quantity: 1</li>
                <li>Amount: 5</li>
                <li>TaxCode: FR020100</li>
                <li>Item Code: Shipping</li>
            </ul>
        </li>
        <li>Line #4:
            <ul class="dev-guide-list">
                <li>Quantity: 1</li>
                <li>Amount: 3</li>
                <li>Tax Code: OH010000</li>
                <li>Item Code: Handling</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTax amount should be $7.29</li>
    <li>Line 2 should have a tax amount of $0.00</li>
    <li>Your 4th line should now include your handling</li>
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
  "code": "Chapter-7-Test-4",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "addresses": {
    "shipFrom": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    },
    "shipTo": {
      "line1": "3500 Pan American Dr.",
      "city": "Miami",
      "region": "FL",
      "country": "US",
      "postalCode": "33133"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 10,
      "amount": 100,
      "taxCode": "P0000000",
      "itemCode": "Widgets",
      "description": "Taxable Gizmo"
    },
    {
      "number": "2",
      "quantity": 10,
      "amount": 100,
      "taxCode": "NT",
      "itemCode": "Widgets",
      "description": "Non-Taxable Gizmo"
    },
    {
      "number": "3",
      "quantity": 1,
      "amount": 5,
      "taxCode": "FR020100",
      "itemCode": "Shipping"
    },
    {
      "number": "4",
      "quantity": 1,
      "amount": 3,
      "taxCode": "OH010000",
      "itemCode": "Handling"
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
  <li class="previous"><a href="/avatax/dev-guide/shipping-and-handling/taxability-of-shipping-charges"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/shipping-and-handling/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
