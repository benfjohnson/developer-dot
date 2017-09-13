---
layout: page
title: 7.1 - Taxability of Shipping Charges
product: avaTax
doctype: dev_guide
chapter: shipping-and-handling
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/shipping-and-handling/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/shipping-and-handling/taxability-of-handling-charges/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Because we treat freight/shipping just like any other line item on the document, you can associate a tax code to your freight/shipping line item. The taxability of freight/shipping will vary from jurisdiction to jurisdiction. Depending on how you ship your goods, via USPS, FedEx or UPS may have different taxability than if you ship via your own company truck. We have quite a few different freight tax codes to choose from, make sure that you select a code that is representative of how you ship your goods. Take a look at our <a class="dev-guide-link" href="https://taxcode.avatax.avalara.com/">tax code lookup utility</a>.

<h3>Address Types</h3>
By now, you've become familiar with <code>SingleLocation</code>, <code>ShipTo</code>, and <code>ShipFrom</code> address types.  Let's recap what each address type means and introduce two additional address types that are available for use within AvaTax, <code>PointOfOrderOrigin</code> and  <code>PointOfOrderAcceptance</code>:
<ul class="dev-guide-list">
    <li><code>SingleLocation</code> - Origin and Destination in which an item was purchased and accepted.</li>
    <li><code>ShipFrom</code> - Origin location from where the item is being shipped</li>
    <li><code>ShipTo</code> - Destination location where the item is being delivered</li>
    <li><code>PointOfOrderOrigin</code> - Origin location from which the order was placed</li>
    <li><code>PointOfOrderAcceptance</code> - Destination location from which the seller accepted the order</li>
</ul>


For most users, including <code>ShipFrom</code> and <code>ShipTo</code> in your transactions will be sufficient. You'll want to consider what will benefit your needs and your customers' needs and address them as needed.  

<h3>Putting It All Together</h3>
Now, let's take a look at a simple transaction with shipping charges included.  We will be using the taxability code <code>FR020100</code> for our shipping charge. This code is defined as "Shipping via common carrier FOB destination".

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 7.1.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You are shipping an item from Washington to Florida.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-7-Test-1</li>
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
                    <li>3500 Pan American Dr., Miami FL 33133</li>
                </ul>
            </li>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Quantity: 10</li>
                <li>Amount 100</li>
                <li>TaxCode P0000000</li>
                <li>Item Code: Widgets</li>
                <li>Description: Taxable Gizmo</li>
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Quantity: 1</li>
                <li>Amount 5</li>
                <li>TaxCode FR020100</li>
                <li>Item Code: Shipping</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTax should be $7.35.</li>
    <li>The tax amount for Shipping should be $0.35.</li>
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
  "code": "Chapter-7-Test-1",
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
      "quantity": 1,
      "amount": 5,
      "taxCode": "FR020100",
      "itemCode": "Shipping"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>
So you can see that adding a freight charge to a transaction is no different from adding another item to the transaction. One item to consider is how you will associate the freight tax code with the freight charge within your application. For certified integrations, the merchant must be able to update this tax code, depending on how they ship their goods.

Now let's take a look at the transaction when we ship an item that is non-taxable in Florida:
<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 7.1.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You are shipping an item from Washington to Florida.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-7-Test-2</li>
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
                    <li>3500 Pan American Dr., Miami FL 33133</li>
                </ul>
            </li>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Quantity 10</li>
                <li>Amount 100</li>
                <li>TaxCode NT</li>
                <li>Item Code Widgets</li>
                <li>Description "Non-Taxable Gizmo"</li>
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Quantity 1</li>
                <li>Amount 5</li>
                <li>TaxCode FR020100</li>
                <li>Item Code Shipping</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTax amount for the transaction should be $0</li>
    <li>The tax of the shipping line item followed the taxability of the items being shipped</li>
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
  "code": "Chapter-7-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "addresses": {
    "shipFrom": {
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92612"
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
      "taxCode": "NT",
      "itemCode": "Widgets",
      "description": "Non-Taxable Gizmo"
    },
    {
      "number": "2",
      "quantity": 1,
      "amount": 5,
      "taxCode": "FR020100",
      "itemCode": "Shipping"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>
In the previous example the freight was taxable, however this time the freight was exempt. This is because in this particular jurisdiction the taxability of the freight will follow the taxability of the items on the invoice. So, if the items being shipped are exempt, so is the freight.

Now, let's take a look a the behavior when we have more than one item being shipped and the taxability of the items is different:
<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 7.1.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You are shipping an item from Washington to Florida.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-7-Test-3</li>
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
                    <li>3500 Pan American Dr., Miami FL 33133</li>
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
                <li>Tax Code: FR020100</li>
                <li>Item Code: Shipping</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTax amount should be $7.18.</li>
    <li>Line 2 should have a tax amount of $0.00.</li>
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
  "code": "Chapter-7-Test-3",
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
  <li class="previous"><a href="/avatax/dev-guide/shipping-and-handling/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/shipping-and-handling/taxability-of-handling-charges/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
