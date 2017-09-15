---
layout: page
title: 9.2 - Using Locations
product: avaTax
doctype: dev_guide
chapter: locations
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/location-based-reporting/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/locations/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

To use the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/">Location API</a> in your connector, you must first identify what your system considers "locations".  Does your accounting system or tax platform store any of the following:

<ul class="dev-guide-list">
    <li>Addresses of warehouses
        <ul class="dev-guide-list">
            <li>If your platform tracks warehouses, this would be a natural fit for locations in AvaTax. It's typically a short code that represents a specific warehouse that is managed within the platform itself.</li>
        </ul>
    </li>
    <li>Addresses of retail sales locations or field sales team members
        <ul class="dev-guide-list">
            <li>Many platforms track locations where sales occur.  These are also a good fit for locations.</li>
        </ul>
    </li>
    <li>Manual Data Entry
        <ul class="dev-guide-list">
            <li>Avalara Certified connectors do not need to allow manual data entry for locations.  If you would like to allow your users to enter locations for reporting purposes, we encourage you to provide a link to the Avalara AvaTax administration website where the customer can enter their locations directly.</li>
        </ul>
    </li>
</ul>

If your platform stores information about locations and you wish to sync this data with AvaTax, you can use the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/CreateLocations/">CreateLocations API</a> and the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/UpdateLocation/">UpdateLocation API</a> to store and maintain this data in AvaTax.

For the purposes of this chapter, let us create a new location within Texas, a state that sometimes requires location based reporting via the TX 01-115 form.  Here's how to use the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/CreateLocations/">CreateLocations API</a> call to create a location within Texas:
<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 9.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Call the CreateLocations API call with the following information:</li>
        <ul class="dev-guide-list">
            <li>locationCode: TEXASWAREHOUSE</li>
            <li>Description: "Texas Warehouse Chapter-9-Test-1"</li>
            <li>addressTypeId: "Location"</li>
            <li>addressCategoryId: "Warehouse"</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>600 Congress Avenue, Austin, TX 78101</li>
                </ul>
            </li>
            <li>dbaName: Developer Guide Texas Warehouse</li>
            <li>outletName: Texas Warehouse</li>
            <li>registeredDate: Jan 1 2015</li>
        </ul>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Your location is created.
        <ul class="dev-guide-list">
            <li>The location code matches the value you sent in.</li>
            <li>The address matches the value you sent in.</li>
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
[
  {
    "locationCode": "TEXASWAREHOUSE",
    "description": "Chapter-9-Test-1",
    "addressTypeId": "Location",
    "addressCategoryId": "MainOffice",
    "line1": "600 Congress Avenue",
    "city": "Austin",
    "region": "TX",
    "country": "US",
    "postalCode": "78101",
    "isDefault": false,
    "isRegistered": false,
    "dbaName": "Developer Guide Texas Warehouse",
    "outletName": "Texas Warehouse",
    "registeredDate": "2015-01-01T00:00:00"
  }
]
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Designating Transactions for a Reporting Location</h3>

For companies that must use location-based reporting, all transactions must be tied to either a reporting location code or to a default location.

You should allow your customer to choose a reporting location code using a drop-down or multi-select interface.  You can retrieve a list of valid locations by calling the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/ListLocationsByCompany/">ListLocations API</a>.  You should present the friendly name of the location in the drop-down or multi-select box.  If your user interface permits multi-line select boxes, please also include the address of the location.  The user interface box for this drop-down or multi-select box should be "Reporting Location".  The default value of this box should be "None".

If the user chooses "None", you should set the <code>reportingLocationCode</code> value of your transaction to <code>null</code>.  If the user selects a location, you should instead set the <code>reportingLocationCode</code> value to be the location code value from the location object.

Here's how to create a transaction tied to a reporting location:
<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 9.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
            <li>reportingLocationCode: TEXASWAREHOUSE</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>SingleLocation</li>
                    <li>Send only the ZIP code 92612</li>
                </ul>
            </li>
            <li>Lines:
                <ul class="dev-guide-list">
                    <li>Amount 100</li>
                </ul>
            </li>
        </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The created transaction should have reportingLocationCode = TEXASWAREHOUSE.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li>
                <pre>
{
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "reportingLocationCode": "TEXASWAREHOUSE",
  "addresses": {
    "singleLocation": {
      "postalCode": "92612"
    }
  },
  "lines": [
    {
      "amount": 100
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Shortcut for Addresses</h3>
Optionally, you can present your customers with a convenient shortcut for choosing addresses for their transactions. Similar to choosing a value for reporting location code, you can allow customers to chose an address location code as follows.

<ul class="dev-guide-list">
    <li>The customer can either hand-type an address, or they can select an existing location.</li>
    <li>If the customer selects an existing location, the location's address will be used instead of whatever you type in.</li>
</ul>
Now that you've created a Locations successfully it's time to use that Location data for reporting purposes on a transaction.
<div class="dev-guide-test" id="test4">
    <div class="dev-guide-test-heading">Test Case - 9.2.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Create a transaction using the following settings:</li>
        <ul class="dev-guide-list">
            <li>Type: SalesInvoice</li>
            <li>Code: Chapter-9-Test-3</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>Type: SingleLocation</li>
                    <li>LocationCode: TEXASWAREHOUSE</li>
                </ul>
            </li>
            <li>Lines:
                <ul class="dev-guide-list">
                    <li>1 line with amount: 100</li>
                </ul>
            </li>
        </ul>
    <li>Create the transaction using your connector.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The transaction is created as follows:
        <ul class="dev-guide-list">
            <li>Address:</li>
            <li>600 Congress Avenue, Austin, TX 78101</li>
        </ul>
    </li>
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
  "code": "Chapter-9-Test-3",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "addresses": {
    "SingleLocation": {
      "locationCode": "TEXASWAREHOUSE"
    }
  },
  "lines": [
    {
      "amount": 100
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
  <li class="previous"><a href="/avatax/dev-guide/locations/location-based-reporting/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/locations/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
