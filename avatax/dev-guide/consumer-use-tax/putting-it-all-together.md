---
layout: page
title: 10.2 - Putting It All Together
product: avaTax
doctype: dev_guide
chapter: consumer-use-tax
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/consumer-and-seller-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In this section we will look at three of the most common use tax transactions:
<ul class="dev-guide-list">
    <li>How to calculate Use Tax on a <code>PurchaseOrder</code></li>
    <li>How to calculate Use Tax for a <code>PurchaseInvoice</code> sent to a vendor where no tax was calculated</li>
    <li>How to calculate/verify Use Tax for a <code>PurchaseInvoice</code> sent to a vendor with a tax calculation</li>
</ul>

<h3>Creating a Purchase Order</h3>
In this first example, we are working in the procurement department and we need to purchase some widgets for our business to use in the office. We will provide our vendor with a purchase order, which will include an estimated tax calculation. You'll notice that the structure of the request looks very similar to the Sales Tax requests from the previous chapters. That's because when providing a Purchase Order to a vendor we want to simulate the sales order that your vendor would send to you. There are some key differences that you should take into consideration:
<ul class="dev-guide-list">
    <li>The Origin Address on the transaction should represent the address of your Vendor.</li>
    <li>The Destination Address on the transaction should represent the location where the goods will be consumed.</li>
    <li>The Document Type should be set to <code>SalesOrder</code></li>
</ul>
<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 10.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Type: SalesOrder</li>
            <li>Document Code: Chapter-10-Test-1</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: ACME</li>
            <li>Commit: False</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>ShipFrom - (Vendor Address)
                        <ul class="dev-guide-list">
                            <li>18300 Von Karman Ave, Irvine, CA 92612 US</li>
                        </ul>
                    </li>
                </ul>
                <ul class="dev-guide-list">
                    <li>ShipTo - (Location where product will be consumed)
                        <ul class="dev-guide-list">
                            <li>100 Ravine, Bainbridge Island, WA 98110 US</li>
                        </ul>
                    </li>
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
  </ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
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
  "type": "SalesOrder",
  "code": "Chapter-10-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "ACME",
  "commit": "false",
  "addresses": {
    "shipFrom": {
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92612"
    },
    "shipTo": {
      "line1": "100 Ravine",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 10,
      "amount": 100,
      "taxCode": "P0000000",
      "itemCode": "Widget",
      "description": "Test Widget"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>
With the calculated tax amount, you can send your vendor a complete purchase, including the expected sales tax. When sales tax is properly charged by vendor/supplier on its invoice, the buying company fulfills its statutory obligation to local and state taxing authorities.

<h3>Purchase Invoice - No Vendor Assessed Tax</h3>
Ok, so let's jump ahead to when you've received your widgets along with the invoice from your vendor. Looking at the invoice, you note that tax was not assessed on the order and this item is to be consumed at your location so UseTax is applicable. So, let's take a look at how to calculate Use Tax on this transaction. Again, here are some key differences that you should take into account:
<ul class="dev-guide-list">
    <li>The Origin Address on the transaction should represent the address of your Vendor.</li>
    <li>The Destination Address on the transaction should represent the location where the goods will be consumed.</li>
    <li>The Document Type should be set to <code>PurchaseInvoice</code></li>
</ul>

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 10.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:
        <ul class="dev-guide-list">
            <li>Document Type: PurchaseInvoice</li>
            <li>Document Code: Chapter-10-Test-2</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: ACME</li>
            <li>Commit: False</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>ShipFrom - (Vendor Address)
                        <ul class="dev-guide-list">
                            <li>18300 Von Karman Ave, Irvine, CA 92612 US</li>
                        </ul>
                    </li>
                </ul>
                <ul class="dev-guide-list">
                    <li>ShipTo - (Location where product will be consumed)
                        <ul class="dev-guide-list">
                            <li>100 Ravine, Bainbridge Island, WA 98110 US</li>
                        </ul>
                    </li>
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
    </li>
  </ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
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
  "type": "PurchaseInvoice",
  "code": "Chapter-10-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "ACME",
  "commit": "false",
  "addresses": {
    "ShipFrom": {
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92612"
    },
    "ShipTo": {
      "line1": "100 Ravine",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 10,
      "amount": 100,
      "taxCode": "P0000000",
      "itemCode": "Widget",
      "description": "Test Widget"
	}
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>
Payment of sales/use tax is the responsibility of the company making any taxable purchase. When the buying company makes a purchase and the supplier/vendor does not charge sales tax on a taxable purchase, it becomes the buying company's responsibility to assess/calculate, verify, accrue, and file/remit the tax due in the form of use tax.

<h3>Purchase Invoice - With Vendor Assessed Tax</h3>
This time, let's imagine that your widget vendors invoice did note some sales tax. However, it may not be the value you are expecting, let's take a look at how you can check the calculation to determine if it is correct. Like the previous example, here are the key differences that you should take into account:
<ul class="dev-guide-list">
    <li>The Origin Address on the transaction should represent the address of your Vendor.</li>
    <li>The Destination Address on the transaction should represent the location where the goods will be consumed.</li>
    <li>The Document Type should be initially set to <code>PurchaseOrder</code></li>
    <li>The Vendor Assessed Tax should be noted as a <code>TaxOverride</code>/<code>TaxAmount</code>.</li>
</ul>

<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 10.2.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:
        <ul class="dev-guide-list">
            <li>Document Type: PurchaseInvoice</li>
            <li>Document Code: Chapter-10-Test-3</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: ACME</li>
            <li>Commit: False</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>ShipFrom - (Vendor Address)
                        <ul class="dev-guide-list">
                            <li>18300 Von Karman Ave, Irvine, CA 92312 US</li>
                        </ul>
                    </li>
                </ul>
                <ul class="dev-guide-list">
                    <li>ShipTo - (Location where product will be consumed)
                        <ul class="dev-guide-list">
                            <li>100 Ravine, Bainbridge Island, WA 98110 US</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Line #1:
                <ul class="dev-guide-list">
                    <li>Amount 100</li>
                    <li>TaxCode P0000000</li>
                    <li>TaxOverride/TaxAmount - $8</li>
                </ul>
            </li>
            <li>Calculate tax for your transaction using AvaTax.</li>
         </ul>
    </li>
  </ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTax returned is $8
        <ul class="dev-guide-list">
            <li>This is the tax charged by the vendor on the Invoice</li>
        </ul>
    </li>
    <li>The totalTaxCalculated is $9
        <ul class="dev-guide-list">
            <li>This is the tax amount calculated by AvaTax for this transaction.</li>
        </ul>
    </li>
    <li>The documentType is set to PurchaseOrder, meaning this is a temporary document and not recorded to AvaTax</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle3" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle3"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li>
                <pre>
{
  "type": "PurchaseOrder",
  "code": "Chapter-10-Test-3",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "ACME",
  "commit": "false",
  "addresses": {
    "ShipFrom": {
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92612"
    },
    "ShipTo": {
      "line1": "100 Ravine",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 10,
      "amount": 100,
      "taxCode": "P0000000",
      "itemCode": "Widget",
      "description": "Test Widget",
	  "taxOverride":{
        "type": "taxAmount",
        "taxAmount": 8,
        "reason": "Vendor assessed tax"
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
Now, let's take a closer look at the returned results, here we can get a good look at the accuracy of your vendor's tax calculation:

There are two key fields that we need to look at in the returned results, <code>totalTax</code> and <code>totalTaxCalculated</code>. The <code>totalTax</code> field will display the tax that was assessed by the vendor, in our case this was $8. The <code>totalTaxCalculated</code> will display the tax amount calculated by AvaTax, in our case AvaTax returned $9 in tax.

Now, with this information the user can make an informed decision. They can either accept the AvaTax calculated Use Tax in total, accept the difference between AvaTax calculated Use Tax and the vendor charged tax (only if the AvaTax Calculated amount is larger than the vendor charged tax) or edit the Use Tax amount to a desired amount, including $0.00.

Once the user has determined the correct Use Tax to be applied to this order, the transaction can be recorded to AvaTax. Similar to the sales document workflow, you will need to update the <code>Type</code> field from <code>PurchaseOrder</code> to <code>PurchaseInvoice</code> for the transaction to be recorded to AvaTax.

Once again, payment of sales/use tax is the responsibility of the company making any taxable purchase. When the buying company makes a purchase and the supplier/vendor does not charge the appropriate sales tax on a taxable purchase, it becomes the buying company's responsibility to assess/calculate, verify, accrue, and file/remit the tax due in the form of use tax.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/consumer-and-seller-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
