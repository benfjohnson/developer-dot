---
layout: default
title: AvaTax with Excise Checklist
product: excise
nav: certification
doctype: integration_checklists
---
<div class="half">
	<h2>Excise Certification</h2>
	<p>Depending on the scope of your integration and your business practice, your test cases will vary. For development partners, many of these are requirements for certification. If you were to give us full functionality demo, here’s what we’d like to see:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Use Case</th>
			<th>Expected Outcome</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>View Configuration elements within the Calling Application</td>
			<td>Administrative user should be able to view/modify the following to provide system ability to point to various levels of systems (Dev, UAT, Prod):
				<ul class="normal">
					<li>User Id to be used for Excise Platform Authentication</li>
					<li>Password to be used for Excise Platform Authentication (should be stored encrypted and non-viewable)</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Validate Required Data in AvaTax Excise Call</td>
			<td>
				You should be able to identify the following values:
				<ul class="normal">
					<li>Company Name or Identifier</li>
					<li>Effective Date for Transaction</li>
					<li>Transaction Type</li>
					<li>Title Transfer Code</li>
					<li>Product Code per Line Item</li>
					<li>Origin Information (Terminal or City and State)</li>
					<li>Destination Information (Terminal or City and State)</li>
					<li>Units (Gross, Net, and Billed)</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Validate Transactional Save Functionality</td>
			<td>
				SaveTransactionInd field should not be set in integration code.  This can be tested by checking the Company Setting Value for Save Transaction Indicator within web interface:
				<ul class="normal">
					<li>Click Maintenance, click Companies, click the company you wish to edit on the left hand side.</li>
					<li>On the Settings tab, choose the ‘Avatax Excise’ Settings Category</li>
					<li>Click the Save Transaction setting, click the copy tab</li>
					<li>On the copy tab, set the value field to either ‘true’ to save transactions or ‘false’ to not save transactions for XML calls.</li>
					<li>Click insert to apply the setting change.</li>
					<li>Future changes to this setting must be done directly to the record inserted in this process.</li>
					<li>Send in a transaction with it set to True and transaction is saved</li>
					<li>Send again when it is set to False and no transaction is saved</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Run a test transaction with multiple line items</td>
			<td>Build an input transaction object multiple line items.  Transmit the multiple line items and verify that multiple line results are returned.  This can be done with the API and the web (page) interface.</td>
		</tr>
		<tr>
			<td>Sample Use Case:
			Process a Diesel Fuel transaction to Wisconsin with Destination Title Transfer where the buyer is licensed as a Indian Tribe</td>
			<td>
				Confirm the following transaction:
				<ul class="normal">
					<li>After a buyer is set up in the Excise Platform with a WI Indian Tribe License the transaction should be exempt of taxes when sent in with that Buyer</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>
	<h3>AvaTax Excise API Integration Checklist</h3>
	<p>To have your integration <a href="/certification">Certified by Avalara</a>, we have outlined the areas of integration that are necessary to ensure a stable and robust customer experience using AvaTax Excise with your application.  To be certified for Avalara AvaTax Excise, all of the items with an R in the Required column listed below are required elements that must be present in your integration.</p>
	<h4>Certified for Avalara AvaTax Excise</h4>
	<p>Certification for Avalara AvaTax Excise requires the delivery of all functional requirements shown below:</p>
	<h5>Avalara AvaTax Excise Administration &amp; Utilities Administration</h5>
	<p>Here are the basics for login, logout and authentication functions for Avalara AvaTax Excise:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Login Request</td>
			<td>Authenticates the user against the configured membership provider and verifies they have access to the specified company. If successful, an authentication token is return as a cookie.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Login Results</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Logout</td>
			<td>Logs the current user out of the system and clears their authentication cookie.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Authentication</td>
			<td>Authentication does not require calling the AuthenticationService.asmx before calling other web services. At the beginning of the call to the web service, the user is authenticated, and if successful, the call is processed normally. The web service will attach a Forms Authentication cookie to the response to improve performance in subsequent calls, but it is not required to use the cookie (the caller can be re-authenticated each time). The client must keep the TCP connection alive in between calls in order to re-use the cookie while configured to use NTLM. Each new TCP connection will require re-authentication.</td>
		</tr>
	</tbody>
	</table>
	<h5>Customer Record Integration</h5>
	<p>Here is a table showing the required basic data elements of the customer record integration to AvaTax Excise:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Legal Name</td>
			<td>The Name of a company that matches to the name field in the companies table.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Effective Date</td>
			<td>Effective date of Business Account.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Id Code</td>
			<td>Business Account ID Code - i.e., FEIN, Social Security Number, Canadian Business Number or Custom.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Custom ID Code</td>
			<td>Unique Id for the Seller and Buyer which must match the custom_id field on the business_entities table in the Avalara AvaTax Excise application client database.</td>
		</tr>
	</tbody>
	</table>
	<h5>Process Transactions</h5>
	<p>The Process Transactions method uses an array of Transactions to calculate taxes based on scenarios predefined in the Avalara AvaTax Excise application:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>
				Send required header level data elements:
				<ul class="normal">
					<li>Company</li>
					<li>Effective Date</li>
					<li>Transaction Type</li>
					<li>Title Transfer Code</li>
					<li>Incoterms</li>
					<li>Perspective Business Type</li>
				</ul>
			</td>
			<td>
			<ul>
				<li>Company - The Name of a company that matches to the name field in the companies table within the Avalara AvaTax Excise application Control Database.</li>
				<li>Effective Date - The date of the product movement (e.g., 9/28/2015).</li>
				<li>Transaction Type – Description of the event of particular event in a supply chain.</li>
				<li>Title Transfer Code – Indicates where title transfer is taking place.</li>
				<li>Incoterms – Delivery terms (required for EU content).</li>
				<li>Perspective Business Type– Buyer or Seller viewpoint (required for EU content).</li>
			</ul></td>
		</tr>
		<tr>
			<td>N</td>
			<td>
				Send optional header level data elements:
				<ul class="normal">
					<li>Invoice Number</li>
					<li>Invoice Date</li>
					<li>Fuel Use Code</li>
					<li>Transportation Mode Code</li>
					<li>Seller</li>
					<li>Buyer</li>
					<li>Previous Seller</li>
					<li>Next Buyer</li>
					<li>User Data</li>
					<li>User Transaction ID</li>
					<li>Source System</li>
					<li>Order Type</li>
					<li>Transaction Lines</li>
					<li>Transaction Exchange Rates</li>
					<li>Save Transaction Indicator</li>
					<li>Debug Indicator</li>
					<li>Calculation Method</li>
					<li>Total Dyed Units</li>
					<li>Total Reporting Taxes</li>
					<li>Reporting Currency</li>
				</ul>
			</td>
			<td>
			<ul>
				<li>Fuel Use Code - A code to describe the fuel use. Currently not used but included for future taxation scenarios.  Field can be used in the profile system.</li>
				<li>Transportation Mode Code – Transportation method used.</li>
				<li>Seller / Buyer - Unique Id which must match the custom_id field on the business_entities table in the Avalara AvaTax Excise application client database.</li>
				<li>User Data - String to hold any data you may want to pass into a transaction and potentially receive back untouched.  May also be used for customizing calculations based on business rules.</li>
				<li>User Transaction ID - A unique Id for the transaction as defined by the calling application.</li>
				<li>Source System - Hard coded string to identify which system is calling the application with this transaction.  Useful when more than a single system is using the application or to separate GUI calls from web service calls.</li>
				<li>Order Type - A code to describe the order type.  Currently not used but included for future taxation scenarios.</li>
				<li>Save Transaction Indicator - Indicates if the transaction should be saved to the database.  Not saving can have a significant performance improvement. If this value is not defined in the transaction the Saving of Transactions is controlled by the Company Setting in the GUI.</li>
				<li>Debug Indicator - Indicates if the transaction should be calculated with debugging enabled.</li>
			</ul></td>
		</tr>
		<tr>
			<td>N</td>
			<td>
				Send optional data elements for VAT:
				<ul class="normal">
					<li>Middleman</li>
					<li>Customs Status</li>
					<li>Form A Presented Indicator</li>
					<li>Simplified Procedure Indicator</li>
					<li>Chain Leg</li>
				</ul>
			</td>
			<td>
			<ul>
				<li>Form A Presented Indicator - Indicates if Form A is presented for VAT.</li>
				<li>Simplified Procedure Indicator - Indicates if the simplified procedure is used for VAT.</li>
				<li>Middleman – 3<sup>rd</sup> party in a triangulation transaction in the EU</li>
				<li>Chain Leg – Indicates invoice position in a triangulation transaction in the EU</li>
			</ul></td>
		</tr>
		<tr>
			<td>N</td>
			<td>
				Send optional Custom data elements:
				<ul class="normal">
					<li>Custom String 1, 2, 3</li>
					<li>Custom Numeric 1, 2, 3</li>
				</ul>
			</td>
			<td>
			<ul>
				<li>Custom String - String to hold data you want to pass into a transaction to be used for customizing calculations based on business rules.</li>
				<li>Custom Numeric - Decimal to hold data you want to pass into a transaction to be used for customizing calculations based on business rules.</li>
			</ul></td>
		</tr>
	</tbody>
	</table>
	<h5>Process Invoice Line Transactions</h5>
	<p>The following table describes functions used to process Invoice Line-level transactions in Avalara AvaTax Excise:</p>
		<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>
				Send required data elements:
				<ul class="normal">
					<li>Invoice Line</li>
					<li>Product Code</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Product Code - Identifying code of the product being transported in the line item which needs to match either a product code or an alternate product code in the Avalara AvaTax Excise application client database.</li>
					<li>Invoice Line – Identifies the given transaction line to a pre-defined invoice line by the calling system</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>N</td>
			<td>
			Send optional data elements:
			<ul class="normal">
				<li>Movement Start Date</li>
				<li>Movement End Date</li>
				<li>Blend To Product Code</li>
				<li>Unit Price</li>
				<li>Net Units</li>
				<li>Gross Units</li>
				<li>Billed Units</li>
				<li>Line Amount</li>
				<li>Bill of Lading Number</li>
				<li>Bill of Lading Date</li>
				<li>User Data</li>
				<li>Alternative Fuel Content</li>
				<li>Blend to Alternative Fuel Content</li>
				<li>Blend To Indicator</li>
				<li>Currency</li>
				<li>Unit of Measure</li>
				<li>Freight Unit Price</li>
				<li>Freight Type</li>
				<li>Freight Line Amount</li>
				<li>Transaction Line Measures</li>
				<li>Custom String 1, 2, 3</li>
				<li>Custom Numeric 1, 2, 3</li>
				<li>Nth Time Sale</li>
			</ul>
			</td>
			<td>
			<ul>
				<li>Alternative Fuel Content - Numeric value that represents the percentage of alternative fuel contained in the product.</li>
				<li>Blend to Alternative Fuel Content - Numeric Value that represents the percentage of alternative fuel found in the blend to product.</li>
				<li>Net/Gross/Billed Units – quantities in Net, Gross, or Billed for the given transaction line</li>
				<li>Blend To Indicator - Indicates if this record refers to a blended product.</li>
				<li>Nth Time Sale - Integer to identify how many times a product has been sold in the supply chain.</li>
			</ul></td>
		</tr>
		<tr>
			<td>N</td>
			<td>
			Send optional data elements for transaction Origin fields:
			<ul class="normal">
				<li>Origin Country Code</li>
				<li>Origin Jurisdiction</li>
				<li>Origin County</li>
				<li>Origin City</li>
				<li>Origin Postal Code</li>
				<li>Origin Type</li>
				<li>Origin</li>
				<li>Origin Out City Limit Indicator</li>
				<li>Origin Excise Warehouse</li>
				<li>Origin Special Jurisdiction Indicator</li>
				<li>Origin Address 1,2</li>
				<li>Origin Special Jurisdictions</li>
			</ul>
			Send optional data elements for transaction Destination fields:
			<ul class="normal"> 
				<li>Destination Country Code</li>
				<li>Destination Jurisdiction</li>
				<li>Destination County</li>
				<li>Destination City</li>
				<li>Destination Postal Code</li>
				<li>Destination Type</li>
				<li>Destination</li>
				<li>Destination Out City Limit Indicator</li>
				<li>Destination Excise Warehouse</li>
				<li>Destination Special Jurisdiction Indicator</li>
				<li>Destination Address 1,2</li>
				<li>Destination Special Jurisdictions</li>
			</ul></td>
			<td>
			<ul>
				<li>Origin / Destination - A unique id for the location that should match to a custom_id from the locations table in the Avalara AvaTax Excise application client database.</li>
				<li>Country Code - ISO standard 3 character country code of the location.</li>
				<li>Jurisdiction - State or region code.</li>
				<li>City / County - City/County name of the location that must match a GNIS defined City/County name in the local_jurisdictions table of the Avalara AvaTax Excise application Client database;  or a cross reference entry in the common_codes.</li>
				<li>Special Jurisdictions – Indicator if location belongs to a special jurisdiction</li>
			</ul></td>
		</tr>
		<tr>
			<td>N</td>
			<td>
			Send optional data elements for transaction Sale fields:
			<ul class="normal">
				<li>Sale Country Code</li>
				<li>Sale Jurisdiction</li>
				<li>Sale County</li>
				<li>Sale City</li>
				<li>Sale Postal Code</li>
				<li>Sale Type</li>
				<li>Sale Location</li>
				<li>Sale Out City Limit Indicator</li>
				<li>Sale Excise Warehouse</li>
				<li>Sale Special Jurisdiction Indicator</li>
				<li>Sale Address 1,2</li>
				<li>Sale Special Jurisdictions</li>
			</ul></td>
			<td>Special Jurisdictions – Indicator if location belongs to a special jurisdiction</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional data elements for transaction Counter fields:
			<ul class="normal">
				<li>Counter Country Code</li>
				<li>Counter Jurisdiction</li>
				<li>Counter County</li>
				<li>Counter City</li>
				<li>Counter Postal Code</li>
				<li>Counter Type</li>
				<li>Counter Party</li>
				<li>Counter Out City Limit Indicator</li>
				<li>Counter Excise Warehouse</li>
				<li>Counter Special Jurisdiction Indicator</li>
				<li>Counter Address 1,2</li>
				<li>Counter Fiscal Rep. Indicator</li>
			</ul></td>
			<td>
			<ul>
			<li>Special Jurisdictions – Indicator if location belongs to a special jurisdiction</li>
			<li>Counter Fiscal Rep. Indicator – Y/N field to identify if a Counterparty Fiscal Rep is present in the Counterparty country.</li>
			</ul></td>
		</tr>
	</tbody>
	</table>
	<h5>Transaction Line Measure</h5>
	<p>The following table describes functions used to process transaction line items when using measurement:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Measure Value</td>
			<td>Numeric Unit of the Quantity indicator type.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Quantity Indicator</td>
			<td>Type of Quantity for the Line referencing Billed, Net or Gross Value.  Field is requirement when completing a Transaction Line Measure record.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Unit of Measure</td>
			<td>Defines the Unit of Measure for the Transaction Line Measure definition.
			Field is requirement when completing a Transaction Line Measure record.</td>
		</tr>
	</tbody>
	</table>
	<h5>Transaction Exchange Rate</h5>
	<p>Here are the data elements used to process transaction line items when using exchange rates:</p>
			<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Effective Date</td>
			<td>Date the Conversion Factor is valid for transaction.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Conversion Factor</td>
			<td>Numeric Amount determining the conversion factor between the from and to currencies.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>From Currency</td>
			<td>Currency type Value must start with for transaction.  Field is required when completing an exchange record.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>To Currency</td>
			<td>Currency type Value will end up as in transaction.  Field is required when completing an exchange record.</td>
		</tr>
	</tbody>
	</table>
	<h5>Transaction Line Special Jurisdiction</h5>
	<p>The following data elements are required for transactions using special jurisdiction codes and types:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Special Jurisdiction Code</td>
			<td>Indicate the name of the special jurisdiction.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Special Jurisdiction Type</td>
			<td>Indicates taxation level of the special jurisdiction.</td>
		</tr>
	</tbody>
	</table>
	<h5>Transaction Results</h5>
	<p>These functions are used to determine transaction results:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Transaction ID</td>
			<td>Unique Id assigned to the Transaction by the Avalara AvaTax Excise application.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Return Code</td>
			<td>A numeric representation of the success or failure of the transaction.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Total Tax Amount</td>
			<td>Sum of all taxes on all line items and on the invoice itself.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>User Transaction ID</td>
			<td>A unique Id for the transaction as defined by the calling application which was passed in by the calling application.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Status</td>
			<td>String defining the status of the transaction in the AvaTax Excise system.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Transaction Taxes</td>
			<td>Object defining the individual taxes returned from the transaction.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Transaction Errors</td>
			<td>Object defining the individual errors returned from the transaction.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>User Return Value</td>
			<td>String that returns the User Data Field.</td>
		</tr>
	</tbody>
	</table>
	<h5>Transaction Tax Functions</h5>
	<p>This table describes specific functions used to process tax transactions with Avalara AvaTax Excise:</p>
	<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Sequence Id</td>
			<td>Avalara AvaTax Excise application calculated value that uniquely identifies the tax item within the transaction results.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Product Category</td>
			<td>Numeric representation of the type of product being taxed defined in the product_categories table in the Avalara AvaTax Excise application.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>
			Send optional data elements:
			<ul class="normal">
				<li>Transaction Line</li>
				<li>Invoice Line</li>
				<li>Country Code</li>
				<li>Jurisdiction</li>
				<li>Local Jurisdiction</li>
				<li>Tax Type</li>
				<li>Rate Type</li>
				<li>Rate Subtype</li>
				<li>Calculation Type Indicator</li>
				<li>Tax Rate</li>
				<li>Tax Quantity</li>
				<li>Tax Amount</li>
				<li>Tax Exempt Indicator</li>
				<li>Deferred Indicator</li>
				<li>Payable To Code</li>
				<li>Sales Tax Base Amount</li>
				<li>License Number</li>
				<li>User Returned Value</li>
				<li>Scenario Id</li>
				<li>Scenario Tax Group Id</li>
				<li>Scenario Sequence</li>
				<li>Rate Description</li>
				<li>Currency</li>
				<li>Unit of Measure</li>
				<li>Subtotal Indicator</li>
				<li>Transaction Tax Amounts</li>
				<li>Status Code</li>
				<li>Quantity Indicator</li>
				<li>Reporting Tax Amount</li>
				<li>Reporting Tax Currency</li>
			</ul>
			</td>
			<td><ul><li>License Number - The tax jurisdiction license number that applies to this transaction.</li>
			<li>User Returned Value - String to hold any data you may want to pass into a transaction and potentially receive back untouched.  May also be used for customizing calculations based on business rules.</li>
			<li>Scenario Id and Scenario Tax Group Id - Definition that was applied to these tax items.</li>
			<li>Subtotal Indicator - Indication of which field(s) to use for the sales tax base of the tax (Freight Only, Unit Price Only, Combined).</li>
			<li>Status Code - The calculation status of the tax.</li></ul></td>
		</tr>
	</tbody>
	</table>
