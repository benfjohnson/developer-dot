---
layout: page
title: 3.1 - Using Address Types
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/document-level/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/using-reference-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Address types, such as <code>ShipFrom</code> and <code>ShipTo</code>, are used to help determine tax for a given transaction in a given situation.  A retail transaction and an eCommerce transaction are not that much different.  They both use address types, but while the retail location likely has the same <code>ShipFrom</code> and <code>ShipTo</code>. An eCommerce transaction varies in that at least two different addresses are taken into account.  For example, in a retail transaction where the origin and destination are the same, we'd use the <code>SingleLocation</code> address, but for an eCommerce transaction, we'd use <code>ShipFrom</code> and <code>ShipTo</code>.  

You can specify addresses at either the document level or the line level.  Let's take a moment to explain how this works in detail:
<ul class="dev-guide-list">
    <li>A transaction, as a whole, uses the document level addresses as a default.  If a transaction does not have any addresses at the line level, each line will be assumed to use the addresses from the document level.</li>
    <li>Some vendors sell products from multiple warehouses.  In this case, a customer who purchases five items might receive as many as five separate shipments.  In the world of transactional taxes, each one of these shipments might have a different tax calculation - so they need to be treated differently.  We handle this by setting a line-level address for each item whose addresses differs from the transaction as a whole.</li>
</ul>

Let's use a real world scenario to explain this.
<ul class="dev-guide-list">
    <li>I work at a mail-order company that also has retail locations.</li>
    <li>A customer places an order for five widgets.</li>
    <li>I only have four widgets in stock in my warehouse; I can find a fifth widget in stock at one of my stores.</li>
</ul>

In this example, we could create a transaction with two line items.  The first line item would represent the four widgets that I shipped from my warehouse, and the second line item would represent the fifth widget shipped from my retail location.  I can specify the warehouse address as the document-level address, and on the line with the fifth widget I can specify a different <code>ShipFrom</code> address.

Let's explore this in more detail.

<h3>Using Document Level Addresses</h3>

Let's try building a transaction that uses two different addresses and a single line item:
<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 3.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in California and Washington.</li>
    <li>In your connector, create the following transactions</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-3-Test-1</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>100 Ravine Lane NE, Bainbridge Island, WA 98110</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>18300 Von Karman Ave, Irvine, CA 92612</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount $100</li>
                <li>TaxCode P0000000</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The taxable amount should be $100.00 with a total tax amount of $7.75.</li>
    <li>The document should be sourced in California with the following jurisdictions:
        <ul class="dev-guide-list">
            <li>California State</li>
            <li>Orange County</li>
            <li>Orange County District Tax/Special Tax</li>
            <li>Orange County Local Tax/Special Tax</li>
        </ul>
    </li>
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
  "code": "Chapter-3-Test-1",
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
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92612"
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
        </ul>
    </div>
</div>
</div>

<h3>Using Line Level Address Types</h3>
Origin and destination fields are not bound to the document level, they can also be used on the line level to accommodate scenarios in which an item may not be available and is shipping from another location or where a buyer may have multiple locations that they need items shipped.  There are a variety of reasons in which this may occur, but it's important to remember you do not need to specify different addresses for each line.  Document level properties still apply and your origin and destination addresses will only be overridden by the line address property that is different.  For example, if you have two lines and one item is out of stock at the origin and must be shipped from another location, you only need to change the line level origin for that line.  The document level origin and destination will continue to apply.  


Ok, let's try another test.  In this example, we'll be purchasing an item from a store and would like one item shipped to a secondary address.  The store doesn't carry that item in stock and must send it from one of their other distribution centers.  This would mean that one line item would have both an origin and destination that is different from the document level origin and destination:
<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 3.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in California and Washington.</li>
    <li>In your connector, create the following transactions:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-3-Test-2</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>100 Ravine Lane NE, Bainbridge Island, WA 98110</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>18300 Von Karman Ave, Irvine, CA 92612</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount $65</li>
                <li>TaxCode P0000000</li>
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>422 S F St., Aberdeen, WA, US 98520</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>21068 Bake Pkwy, Lake Forest, CA 92630</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount $35</li>
                <li>TaxCode P0000000</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The taxable amount should be $100.00 with a total tax amount of $7.76.</li>
    <li>Line1 should have a total tax amount of $5.04, while Line 2 has 2.72.</li>
    <li>Both lines should be sourced in California with the following jurisdictions:
        <ul class="dev-guide-list">
            <li>California State</li>
            <li>Orange County</li>
            <li>Orange County District Tax/Special Tax</li>
            <li>Orange County Local Tax/Special Tax</li>
        </ul>
    </li>
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
  "code": "Chapter-3-Test-2",
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
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92612"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 65,
      "taxCode": "P0000000",
      "addresses": {
        "shipFrom": {
          "line1": "422 S F St.",
          "city": "Aberdeen",
          "region": "WA",
          "country": "US",
          "postalCode": "98520"
        },
        "shipTo": {
          "line1": "21068 Bake Pkwy",
          "city": "Lake Forest",
          "region": "CA",
          "country": "US",
          "postalCode": "92630"
        }
      }
    },
    {
      "number": "2",
      "amount": 35,
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

<h3>What do the address types mean?</h3>
Most developers instinctively understand the meaning of the address types <code>ShipFrom</code> and <code>ShipTo</code>, but often have questions about the "Point Of Order" address types.  It's worth taking a brief moment to explain address types in more detail.

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Address Type</th>
                <th>Also Known As</th>
                <th>Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ShipFrom</td>
                <td>Origin</td>
                <td>The origination address where the products were shipped from, or from where the services originated.</td>
            </tr>
            <tr>
                <td>ShipTo</td>
                <td>Destination</td>
                <td>The destination address where the products were shipped to, or where the services were delivered.</td>
            </tr>
            <tr>
                <td>Point of Order Origin</td>
                <td></td>
                <td>The place of business where you receive the customer's order. This address type is valid in the United States only and only applies to tangible personal property.</td>
            </tr>
            <tr>
                <td>Point of Order Acceptance</td>
                <td></td>
                <td>The place of business where you accept/approve the customer's order, thereby becoming contractually obligated to make the sale. This address type is valid in the United States only and only applies to tangible personal property.</td>
            </tr>
        </tbody>
    </table>
</div>

If you are operating a retail point of presence, and you are physically selling goods and services in person, you can instead opt to use the <code>SingleLocation</code> address type.  When you use <code>SingleLocation</code>, you are asserting that only one address was ever involved in the transaction.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/document-level/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/using-reference-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
