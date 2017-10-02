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
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/using-reference-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Address types are used to help determine tax for a given transaction in a given situation.  A retail transaction and an eCommerce transaction are not that much different: they both use addresses, but while the retail location generally uses <code>SingleLocation</code> most eCommerce transactions will use the <code>ShipFrom</code> and <code>ShipTo</code> address types.

You can specify addresses at either the document level or the line level:
<ul class="dev-guide-list">
    <li>A transaction, as a whole, uses the document level <code>addresses</code> as a default.  If a transaction does not have any addresses at the line level, each line will be assumed to use the addresses from the document level.</li>
    <li>Line level <code>addresses</code> represent individual separate shipments.  Any time you set a value on the <code>addresses</code> field on an invoice line, that line will ignore all document-level <code>addresses</code></li>
</ul>

<h3>Using Document Level Addresses</h3>

When you record a single transaction and all invoice lines on the transaction have the same <code>addresses</code>, you only need to set your address values once at the root level of your transaction, no matter how many invoice lines you are calculating.

For this next test, let's create a single transaction with multiple line items that were shipped from the same origin to the same destination.  Here's how to construct this transaction:

Let's try building a transaction that uses two different addresses and a single line item:
<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case 3.2.1 - Document Level Addresses</div>
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
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount $50</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The taxable amount should be $150.00 with a total tax amount of $11.63.</li>
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
      "amount": 100
    },
    {
      "number": "2",
      "amount": 50
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

Next, let's describe how you can create a transaction where more than one separate shipment occurred.  In this case, each separate line can have its own <code>addresses</code> - or they can inherit their <code>addresses</code> from the document.  You can mix and match these options on as many lines as necessary.

For the next example, let's review how to sell two separate products when each must be shipped from a separate warehouse.  One product will ship from a warehouse in Aberdeen, WA; the other will come from a Bainbridge Island warehouse.

<ul class="dev-guide-list">
    <li>First set the Bainbridge address at the document level.  With this address at the document level, all lines will automatically inherit that address as its default.</li>
    <li>Next set the <code>addresses</code> value for the custom line item.  Because this value is set at the line level, it no longer inherits any addresses from the root document level, which means you must set both the <code>ShipFrom</code> and <code>ShipTo</code> values for that line.</li>
</ul>

Here's what a line-level transaction looks like:

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case 3.2.2 - Line Level Addresses</div>
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
                        <li>18300 Von Karman Ave, Irvine, CA 92612</li>
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

<h3>Address Types</h3>

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

<br/>

In the United States, some jurisdictions have passed laws that require consideration of the point of order addresses.  Please confer with your tax professional before using these address types.

If you are operating a retail point of presence, and you are physically selling goods and services in person, you can instead opt to use the <code>SingleLocation</code> address type.  When you use <code>SingleLocation</code>, you are asserting that only one address was ever involved in the transaction.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/using-reference-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
