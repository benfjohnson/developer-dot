---
layout: page
title: 9.1 - About Location Based Reporting
product: avaTax
doctype: dev_guide
chapter: locations
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/locations/using-locations/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Over time, tax authorities have gradually added more reporting requirements for businesses filing sales and transactional taxes.  These reporting requirements have gradually grown to include such information as transactions by location.  Some states such as California and Texas require that sellers file information about the volume of transactions that occur at each place of business where the company has a presence within the state.  These forms are considered location-based reporting forms.

In order to file these forms correctly, you must set up your company as follows:
<ul class="dev-guide-list">
    <li>Define all places of business within the jurisdiction that has the location-based reporting requirement.
        <ul class="dev-guide-list">
            <li>If there is any doubt as to the boundaries of this jurisdiction, it's safest to define all locations within that state.</li>
        </ul>
    </li>
    <li>Define a Default Location, which will be used to report any transactions that are not tagged to a location.</li>
    <li>Your connector must indicate, on each transaction, which location will be used for reporting purposes.
        <ul class="dev-guide-list">
            <li>This is done by filling out the field <code>reportingLocationCode</code> on the transaction.</li>
        </ul>
    </li>
</ul>

Based on the laws and rules of your tax authority, you may need to consider storefronts, offices, retail locations, warehouses, field sales offices, or home offices locations.  For more information on requirements, please check with your tax authority.  Once you have this list it's time to begin editing - please consult the Avalara Help Center on how to add, edit, or import locations into AvaTax using the <a class="dev-guide-link" href="https://help.avalara.com/000_Avalara_AvaTax/Manage_Company_Locations/Add__or_Import_Company_Locations?origin=deflection">AvaTax website</a>.

As you edit locations in the web portal, you will be asked to uniquely identify each location with a unique location code. This location code is for your convenience; it does not need to follow any state issued format.  When you create locations within AvaTax, you will be prompted to answer additional questions if the state requires any additional information about each location.

Once you have added company locations in AvaTax and tagged transactions with the correct <code>reportingLocationCode</code>, the Avalara Managed Returns service will use those location codes during tax calculation to report on sales by individual location. 

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/locations/using-locations/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>