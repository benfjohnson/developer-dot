---
layout: default
title: AvaTax Use Tax Checklist
product: avatax
doctype: integration_checklists
nav: apis
---
<div class="half">
<h2 id="UseTaxRequirements-Administration/UtilitiesIntegration" data-fontsize="26" data-lineheight="34">Administration/Utilities Integration</h2>

<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax Configuration – dialog window</div>
<div class="col-xs-8">The AvaTax Configuration Dialog Window must allow the user to specify appropriate configuration/connection information:
<ul>
	<li>Avalara Credentials
<ul>
	<li>Account Number</li>
	<li>License Key</li>
</ul>
</li>
	<li>Service URL (free-form or pick-list with the following)
<ul>
	<li>Development</li>
	<li>Production</li>
</ul>
</li>
	<li>Company Code (one of two options typically)
<ul>
	<li>User-definable</li>
	<li>Inherited from client application</li>
</ul>
</li>
</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> AvaTax Test Connection Button</div>
<div class="col-xs-8"> Provide a button for a user to test the connection to the AvaTax service and verify the AvaTax credentials. This is an important element to allow for successful setup and troubleshooting of the AvaTax service.Optional: display license key expiration date upon successful connection response.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Document Committing Control</div>
<div class="col-xs-8"> A singular control must exist in the Configuration Dialog Window to turn on/off committing of documents. In order for this connector to be used in conjunction with other integration to AvaTax, the user must be able to control which connector is used for committing documents. Typically, this exists as a checkbox or radio button.From a technical standpoint
<ul>
	<li>suppress any non-getTax calls (i.e. cancelTax, postTax)</li>
	<li>Ensure that Commit = False on all GetTax calls.</li>
</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> Tax Calculation Service Control</div>
<div class="col-xs-8"> A singular control must exist in the Configuration Dialog WIndow to turn on/off the Avalara Use Tax Calculation service independently of any other Avalara product or service. Typically, this exists as a checkbox or radio button.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> User Implementation Guide</div>
<div class="col-xs-8"> The user Implementation Guide should contain screenshots and information allowing the end user to configure for Avalara Use Tax including where the company code is entered, where the credentials are entered and where tax codes can be mapped within the application.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> Enable Logging</div>
<div class="col-xs-8"> The user must have an option to enable detailed AvaTax transaction logging within the application, including capture of round-trip processing time. Users should have a means to download these detailed log files.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> Link to Admin Console</div>
<div class="col-xs-8"> Link to <a class="external-link" href="https://admin-avatax.avalara.net/login.aspx" rel="nofollow">AvaTax production Admin Console</a></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> Enable AvaTax UPC</div>
<div class="col-xs-8"> When set to true: pass in UPC code into the Avalara ItemCode on the line level of the requests to our service. When UPC is unavailable, default to ItemCode.When set to false: use the default ItemCode mapping.See Product Master Management for more details.NOTE: Alternately, UPC can be enabled on the item level. See Product Master Management</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"> Merchant/User Exemption</div>
<div class="col-xs-8">One or the other parameter is required, although Entity/Use code is preferredEntity/Use Code:
<ul>
	<li>Assign an Avalara Entity/Use Code to the merchant/user (an Entity/Use Code defines the reason for the sales tax exemption, Reseller, Manufacturer, Government Entity, Charitable Organization, etc.).</li>
	<li>Must include our <a class="external-link" href="/avatax/handling-tax-exempt-customers" rel="nofollow">standard list</a> and be user-definable to add additional items.</li>
</ul>
Exemption Number:
<ul>
	<li>Identify a field to map the exemption certificate number of the merchant/user of the application to the “ExemptionNo” field in Avalara.</li>
</ul>
</div>
</div>

<h3 id="UseTaxRequirements-VendorManagement">Vendor Management</h3>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Vendor Identifier Mapping</div>
<div class="col-xs-8">Identify the vendor identifier field (typically the database key in the vendor master) to map to the “CustomerCode” field in Avalara.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Vendor Level Use Tax Assessment</div>
<div class="col-xs-8">True/False self assessment.Implement appropriate business logic to determine when to self assess. Be sure to include the following:
<ul>
	<li>When self assessing, ensure that transactions are committed to the Avalara Admin Console</li>
	<li>When not self assessing, do not commit transaction to the Admin Console</li>
</ul>
In the case of Global Use Tax assessment, commit all transactions regardless of the vendor.</div>
</div>

<h3 id="UseTaxRequirements-ProductMasterManagement">Product Master Management</h3>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Item Code</div>
<div class="col-xs-8">Identify item/service/charge code (number, ID) to pass to the AvaTax service. If the customer has access to UPC, they should be able to prepend UPC to the code and have it come across in the item code field. If there is no UPC, it should fall back to SKU. (See UPC requirements below and in the Administration &amp; Utilities Integration section)For PurchaseInvoices not associated with a PurchaseOrder, you may not have access to the ItemCode from the client application. In that case, simply use the GL account number/cost center identifier.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Item Description</div>
<div class="col-xs-8">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax tax code mapping</div>
<div class="col-xs-8">Associate an item or item group to an AvaTax Tax Code to describe the taxability group (e.g. Clothing-Shirts – B-to-C). This should be assigned at the item category level as well as the item level.<a class="external-link" href="http://taxcode.avatax.avalara.com/" rel="nofollow">Search for a specific tax code</a><a class="external-link" href="https://help.avalara.com/@api/deki/files/1675/AvaTax_Pro_Toolkit.zip" rel="nofollow">Download a list of the standard system tax codes</a></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">UPC</div>
<div class="col-xs-8">See note in Administration/Utilities Integration section.If the user elects to use AvaTax UPC, Ensure that the appropriate field containing UPC data is mapped to the ItemCode parameter formatted as: &lt;UPC:&gt;+&lt;UPC Data&gt;. Example: “UPC:1234567890000”. by formatting the value with “UPC:” identifier, our engine can pick up the UPC code, and the user can avoid mapping a tax code for that item. If no UPC data is available still default to the regular ItemCode mapping.
<ul>
	<li>NOTE:  the UPC functionality is a premium upgrade to the Avalara AvaTax subscription providing taxability decision (taxable vs. non-taxable) without requiring an Avalara Tax Code assignment.</li>
</ul>
</div>
</div>

<h3 id="UseTaxRequirements-Purchasing&amp;PayablesDocumentIntegration">Purchasing &amp; Payables Document Integration</h3>

<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send header level data elements for PurchaseOrder and PurchaseInvoice document types:</div>
<div class="col-xs-8">
<ul>
	<li>Document number</li>
	<li>CustomerCode</li>
	<li>Document date</li>
	<li>Tax calculation date</li>
	<li>Document type</li>
	<li>Destination address</li>
	<li>Origin address</li>
	<li>Exemption number</li>
	<li>Entity/Use code (aka CustomerUsageType)</li>
	<li>Location Code</li>
</ul>
Note: Exemption number or Entity Use Code should be passed only if the customer is exempt.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send line (detail) level data elements for PurchaseOrder and PurchaseInvoice document types:</div>
<div class="col-xs-8">
<ul>
	<li>Line number</li>
	<li>Item code</li>
	<li>Item description</li>
	<li>Quantity</li>
	<li>Amount (extended)</li>
	<li>Tax Code</li>
</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Freight Charges</div>
<div class="col-xs-8">Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Discounts</div>
<div class="col-xs-8">Either send line items with post-discounted amounts or utilize the Avalara Discount Fields.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Purchase Orders</div>
<div class="col-xs-8">Follow basic Purchase Order workflow with required parameters and Address Validation touch points integrated. Purchase Orders are used to retrieve a tax estimate.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Purchase Invoices</div>
<div class="col-xs-8">Follow basic Purchase Invoice workflow with required parameters and Address Validation touch points integrated. The results of purchase Invoice documents will be used to determine if taxes need to be self-assessed or not. The user must then be presented with options to take action based user-specific business needs. See requirement below on Self-asses workflow.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Self-Assess workflow: Purchase Invoices</div>
<div class="col-xs-8">If vendor-charged tax is identified it is compared to AvaTax calculated tax, The user should be able to select one of the following options:
<ul>
	<li>Accept AvaTax calculated Use Tax in total</li>
	<li>Accept the difference between AvaTax calculated use tax and vendor-charged tax (only if AvaTax is a larger amount than vendor-charged tax)</li>
	<li>Edit the use tax amount to a desired amount, including $0.00</li>
	<li>Consider user-definable percentage based self-asses logic.</li>
</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Committing Invoices for Vendor Liability Assessment: Purchase Invoices</div>
<div class="col-xs-8">Ensure that invoices are committed/posted for reporting appropriately after they are finalized.If they are finalizing invoices, need to create addendum to journal entry as noted in he screenshot.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">CancelTax Call</div>
<div class="col-xs-8">When invoices are deleted/cancelled, this information must be transmitted to AvaTax.</div>
</div>

<h1 id="UseTaxRequirements-ServerAudit/Clarity" data-fontsize="26" data-lineheight="34">Server Audit/Clarity</h1>


<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>

<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Pass connector identifier information via the TaxSvc.Profile.Client property</div>
<div class="col-xs-8">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction.EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable errors on server-side analysis</div>
<div class="col-xs-8">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable ratio of GetTax and address validation calls to committed documents</div>
<div class="col-xs-8">In a normal workflow, we expect to see up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Demonstrate and document installation of software – Install Shield or equivalent where applicable</div>
<div class="col-xs-8">Customers should have an easy and trouble free installation of the software.</div>
</div>

</div>
