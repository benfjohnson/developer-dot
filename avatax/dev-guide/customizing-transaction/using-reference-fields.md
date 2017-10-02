---
layout: page
title: 3.2 - Using Reference Fields
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/address-types/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

AvaTax provides a number of user reference fields for your convenience.  For example, the <code>referenceCode</code> field is an optional field that can be used to tie your transaction back to your accounting system or to link to another transaction. 

The <code>referenceCode</code> field exists at the document level, and other fields are available at the line level. Taken together, all of these reference fields can help you store extra information about the transaction in ways that are appropriate for your accounting system.

All of these fields are optional and are not required.  Some connectors make use of all of these fields, others keep transactions extremely simple.  It's really up to you how much of this functionality you wish to implement.

Let's look at each of these fields, and some ideas for how to make use of them.  As a reminder, there is no data structure to this field, you can put anything you want!

<h3>Document Level Reference Fields</h3>
The following reference fields are available for your use at the document level.  This means that they will only occur once in a transaction.

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Field Name</th>
                <th>Ideas for Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ReferenceCode</td>
                <td>This field can link to the unique ID number of the invoice in your existing accounting system.</td>
            </tr>
            <tr>
                <td>PurchaseOrderNo</td>
                <td>Intended to match to your customer's purchase order number, if one was provided.</td>
            </tr>
            <tr>
                <td>SalespersonCode</td>
                <td>When tracking performance by salesperson, or identifying orders written by certain sales team members, this code can help you identify the author of the invoice.</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>A general purpose description of the invoice or transaction, or a comment explaining the transaction.</td>
            </tr>
            <tr>
                <td>PosLaneCode</td>
                <td>If this transaction was made at a retail cash register, this code can be used to identify which cash register made the transaction.</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>The email address of the customer who requested the sale.</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Line Level Reference Fields</h3>
Below is a list of the available reference fields available for customizing your transaction at the line level.  Each line in your transaction can have its own values for each of these fields.

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Field Name</th>
                <th>Ideas for Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Description</td>
                <td>Field provided to describe the item/service/shipping method for that given line. NOTE: If you participate in <b>Streamlined Sales Tax</b>, this field is required to be an accurate description of the product. Otherwise, it is optional and has no requirements.</td>
            </tr>
            <tr>
                <td>RevenueAccount</td>
                <td>If your user wished to track this line item to a specific revenue account number in their accounting system, you could specify the revenue account number here.</td>
            </tr>
            <tr>
                <td>Ref1</td>
                <td>A user-supplied reference code for this line.</td>
            </tr>
            <tr>
                <td>Ref2</td>
                <td>	A user-supplied reference code for this line.</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Using Reference Fields</h3>
Let's build out final test transaction using everything that we've covered in this chapter:

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 3.4.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in California and Washington.</li>
    <li>In your connector, create the following transactions:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesInvoice</li>
            <li>Document Code: Chapter-3-Test-3</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
            <li>Reference Code: SalesOrder 123456</li>
            <li>Sales Person Code: SA8675309</li>
            <li>Purchase Order: PO6-5000</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
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
                <li>Description "A bundle of assorted yarn colors"</li>
                <li>Ref1 "Item out of stock in Bainbridge Island distribution center. ShipFrom Aberdeen distribution center."</li>
                <li>Ref2 "Customer would like the item to ShipTo a secondary address."</li>
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
                <li>Description "A single bolt of wool."</li>
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
    <li>Sourcing destination should be 21068 Bake Pkwy, Lake Forest, CA 92630.</li>
    <li>Sourcing origin should be 422 S F St., Aberdeen, WA, US 98520.</li>
    <li>Document level properties:
        <ul class="dev-guide-list">
            <li>Reference Code field should list "SalesOrder 123456"</li>
            <li>Sales Person should show as SA8675309</li>
            <li>PO6-5000 should be listed as the Purchase Order</li>
        </ul>
    </li>
    <li>Line level properties:
        <ul class="dev-guide-list">
            <li>Line 1:</li>
            <ul class="dev-guide-list">
                <li>The Description field should state "A bundle of assorted yarn colors"</li>
            </ul>
            <li>Line 2:</li>
            <ul class="dev-guide-list">
                <li>The Description field should state "A single bolt of wool"</li>
            </ul>
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
  "code": "Chapter-3-Test-3",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "referenceCode": "SalesOrder 123456",
  "salespersonCode": "SA8675309",
  "purchaseOrderNo": "PO2376500",
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
      "postalCode": "92630"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 65,
      "taxCode": "P0000000",
      "ref1": "Item out of stock in Bainbridge Island distribution center.  ShipFrom Aberdeen distribution center.",
      "ref2": "Customer would like the item to ShipTo a secondary address.",
      "description": "A bundle of assorted yarn colors",
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
      "taxCode": "P0000000",
      "description": "A single bolt of wool."
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
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/address-types/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>