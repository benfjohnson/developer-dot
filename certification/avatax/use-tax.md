---
layout: default
title: AvaTax Use Tax Checklist
product: avaTax
doctype: integration_checklists
nav: certification
---
<h1>Avalara AvaTax for Use Tax Certification</h1>
<div class="half">
<h2>Overview</h2>
Avalara has four primary points of integration within the Procurement/Accounts Payable Modules:
<ol>
<li>Administration</li>
<li>Vendors</li>
<li>Items</li>
<li>Procurement & payables documents</li>
</ol>
<h2>Administration/Utilities Integration</h2>
Upon completion of the purchase of Avalara services and the activation of its Avalara account, the client primary contact receives its Avalara credentials:  Account Number and License Key.  
<ul class="normal">
<li>The user logs into the Procurement/AP application, accesses the Administration module, and selects the Avalara-specific set of menu options.</li>
<li>The user selects the Avalara Configuration option, and is presented a user interface (UI) to enter the Avalara Account Number and associated License Key.  
	<ul class="normal">
	<li>The user selects a Test Connect button making a call to the AvaTax service validating the credentials and insuring the client’s application connects to Avalara services.</li>
	</ul>
</li>
<li>The user is provided a series of setup and configuration options including, but not limited to:
	<ul class="normal">
	<li>Enable/Disable tax calculation</li>
	<li>Enable/Disable address validation</li>
	<li>Select Countries available for address validation</li>
	</ul>
	</li>
</ul>

<h4>Certification Requirements:</h4>
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
			<td>R<span class="hidden-xs">equired</span></td>
			<td>AvaTax Configuration – dialog window</td>
			<td>Avalara configuration dialog window permits user to define setup and configuration information:
				<ul class="normal">
					<li>Account number</li>
					<li>License key</li>
					<li>Service URL</li>
					<li>Company Code</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>R<span class="hidden-xs">equired</span></td>
			<td>AvaTax Test Connection</td>
			<td>Provide a button for the user to test the connection to the Avalara services, and verify the credentials</td>
		</tr>
		<tr>
			<td>R<span class="hidden-xs">equired</span></td>
			<td>Tax Calculation service Control</td>
			<td>Provide a singular control in the dialog window to enable/disable Use Tax calculation</td>
		</tr>
		<tr>
			<td>R<span class="hidden-xs">equired</span></td>
			<td>Logging</td>
			<td>Provide an option to enable/disable detailed transaction logging within the application, including capture of round-trip processing time. User shall have an option to export the detailed log files.</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Avalara Admin Console/Portal Link</td>
			<td>Provide a link to the Avalara portal</td>
		</tr>
		
	</tbody>
</table>

<h2>Vendor Management</h2>
The user accesses the Vendor master in Financials to create a new vendor record.
<ul class="normal">
	<li>The user defines if the vendor will use AvaTax for its tax calculation by setting the Use Tax indicator to enabled.</li>
	<li>As each address (ship-to, bill-to, etc.) is entered on the vendor record, the end user selects an option to validate the address.
	<ul class="normal">
	<li>The Avalara service responds:</li>
	<li>If valid, displays the address as entered, the validated/normalized address, and provides an option to save the validated and normalized address.</li>
	<li>If the address is not able to be validated, an appropriate error message is returned.
		<ul class="normal">
			<li>The user can alter the address, and attempt another validation request.</li>
			<li>The user can accept the address as entered.</li>
		</ul>
	</li>
	</ul>
	</li>
	<li>the user can assign a latitude/longitude coordinate to an address record for receiving/consuming a product or service at a location that does not have a physical street address.</li>
	<li>The user has a variety of options to define the vendor purchases as exempt from sales tax.
		<ul class="normal">
			<li>Record an exemption certificate number in the standard vendor exemption number field.</li>
			<li>Assign an Avalara Entity/Use Code to the customer (an Entity/Use Code defines the reason for the sales tax exemption, Reseller, Manufacturer, Government Entity, Charitable Organization, etc.).
				<ul class="normal">
					<li>Entity/Use Code can be assigned to the customer in general, applicable to all the customer's addresses.</li>
					<li>Entity/Use Code can be assigned uniquely to each address record</li>
				</ul>
			</li>
		</ul>
		</li>
	<li>The user can assign a VAT Registration ID to the Vendor record</li>
</ul>

<h4>Certification Requirements</h4>
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
			<td>Required</td>
			<td>Vendor Use Tax Assessment control</td>
			<td>Provide a control at the vendor record level to enable/disable use tax assessment for vendor orders and invoices</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>customer/Vendor Code</td>
			<td>Identify unique reference to vendor (Vendor ID< Vendor Number, etc.) in the Customer/Vendor Code API parameter.</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Exemption Number</td>
			<td>Provide functionality to assign the buyer's exemption number to the vendor, indicating all purchases from this vendor are exempt.</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td><p>Customer Usage Type</p><p>Entity/Use Code</p></td>
			<td>>Provide functionality to assign a customer usage type (entity/use code) to the vendor, indicating all purchases from this vendor are used for an exempt purpose (resale, use in manufacturing/production, etc.)</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Address Validation</td>
			<td>Provide functionality for the use to initiate an address validation call for any of the vendor-related addresses</td>
		</tr>
	</tbody>
</table>
			
	

<h2>Item Master</h2>
The user accesses the Item Master in the application to create a new item record.  
<ul class="normal">
	<li>The user defines the type of product or service the item represents by assigning an Avalara Tax Code (an Avalara Tax Code is a goods & services code) to:
		<ul class="normal">
			<li>The Item/Product Group acting as the default of all items associated with the group.</li>
			<li>The Item record, overriding the Avalara Tax Code defined for the Item/Product Group.</li>
		</ul>
	</li>
	<li>The user can associate a Universal Product Code (UPC) with the item to send to Avalara AvaTax.
		<ul class="normal">
			<li>NOTE:  the UPC functionality is a premium upgrade to the Avalara AvaTax subscription providing taxability decision (taxable vs. non-taxable) without the requirement for an Avalara Tax Code assignment.</li>
		</ul>
	</li>
</ul>

<h4>Certification Requirements</h4>
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
			<td>Required</td>
			<td>Item/Product Group</td>
			<td>Provide an attribute to associate an Avalara Tax Code to item/product group category. Becomes default Tax Code for all items/SKUs in the group</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Item/SKU</td>
			<td>Provide an attribute to associate an Avalara Tax Code to an item/SKU. Overrides default Tax Code at item/product group level</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Universal Product Code (UPC)</td>
			<td>Provide functionality to pass UPC in lieu of item/SKU</td>
		</tr>
	</tbody>
</table>

<h2>General Ledger Account Master</h2>
The user accesses the Account Master in Financials to create a new General Ledger (GL) account record.
<ul class="normal">
	<li>The user defines the type of product or service the GL account represents by assigning an Avalara Tax Code (an Avalara Tax Code is a goods & services code).</li>
</ul>

<h4>Certification Requirements</h4>
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
			<td>Required</td>
			<td>General Ledger Account Number</td>
			<td>Provide an attribute to associate an Avalara Tax Code to a General Ledger account number</td>
		</tr>
	</tbody>
</table>

<h2>Procurement/Accounts Payable</h2>
The user begins the procurement/account payable process.
<ul class="normal">
	<li>The user begins the purchase order entry process:
		<ul class="normal">
			<li>The user selects the vendor associated with the order and selects the desired ship-to address record.
				<ul class="normal">
					<li>Ship-to address information can be edited and Avalara address validation can be selected.
						<ul class="normal">
							<li>If valid, displays the address as entered, the validated/normalized address, and provides an option to save the validated and normalized address.</li>
							<li>If the address is not able to be validated, an appropriate error message is returned.
								<ul class="normal">
									<li>The user can alter the address, and attempt another validation request.</li>
									<li>The user can accept the address as entered.</li>
								</ul>
							</li>
							<li>Latitude/Longitude coordinates default from the address record when used instead of a physical street address
								<ul class="normal">
									<li>Latitude/Longitude coordinates can be added, edited, or removed as needed.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>The Use Tax enabled indicator is accessed from the vendor record.</li>
					<li>Sales tax exemption information is defaulted on the purchase order from the customer record or specific address record.
						<ul class="normal">
							<li>Sales tax exemption information (Exemption Number or Entity/Use Code) can be edited/removed as needed.</li>
							<li>Sales tax exemption information can be added when not set as a default value on the vendor or address record.</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>The user enters the items to be purchased from the vendor.</li>
			<li>The user enters an estimated shipping/Freight charge to the purchase order.
				<ul class="normal">
					<li>If the user has a logistics solution to provide an automated estimation of the freight charge it is executed at this point in the order entry process.</li>
				</ul>
			</li>
			<li>The user has an on-demand option to request an AvaTax use tax calculation in advance of saving the purchase order to preview the tax calculation.</li>
			<li>The user saves the purchase order.
				<ul class="normal">
					<li>In advance of the purchase order save within the application, an AvaTax tax calculation call is made capturing the data elements required for tax calculation.</li>
					<li>The tax calculation call returns the calculated tax amount, and it is applied to the order.</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>The purchase order is received within the application.</li>
	<li>The purchase invoice is entered.
		<ul class="normal">
			<li>Sales tax exemption information is defaulted on the purchase invoice from the purchase order.
				<ul class="normal">
					<li>Sales tax exemption information (Exemption number or Entity/Use Code) can be edited/removed as needed.</li>
					<li>Sales tax exemption information can be added when not set as a default value on the customer or address record.</li>
				</ul>
			</li>	
			<li>The shipped product or delivered service items are recorded.</li>
			<li>The user enters the final shipping/freight charge from the purchase invoice.</li>
			<li>The user identifies and breaks out vendor-charged sales tax.</li>
			<li>The user has an on-demand option to request an AvaTax use tax calculation in advance of saving the purchase invoice to preview the tax calculation.
				<ul class="normal">
					<li>Use tax calculated by AvaTax is returned</li>
					<li>If vendor-charged tax is identified it is compared to AvaTax calculated tax.</li>
					<li>The user can select one of the following options:
						<ul class="normal">
							<li>Accept AvaTax calculated Use Tax in total</li>
							<li>Accept the difference between AvaTax calculated use tax and vendor charged tax (only if AvaTax is a larger amount than vendor-charged tax)</li>
							<li>Edit the use tax amount to a desired amount, including $0.00</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>The user saves the purchase invoice.
				<ul class="normal">
					<li>In advance of the purchase invoice save within the application, an AvaTax tax calculation call is made capturing the data elements required for tax calculation, and finalized the user designated amount (above).</li>
				</ul>
			</li>
			<li>The user posts the purchase invoice in the application.
				<ul class="normal">
					<li>AvaTax commits the purchase invoice</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>The user creates a purchase invoice in the application without an associated purchase order.
		<ul class="normal">
			<li>The user selects the vendor associated with the invoice and selects the desired ship-to address record.
				<ul class="normal">
					<li>Ship-to Address information can be edited and Avalara address validation can be selected.
						<ul class="normal">
							<li>If valid, displays the address as entered, the validated/normalized address, and provides an option to save the validated and normalized address.</li>
							<li>If the address is not able to be validated, an appropriate error message is returned.
								<ul class="normal">
									<li>The user can alter the address, and attempt another validation request.</li>
									<li>The user can accept the address as entered.</li>
								</ul>
							</li>
							<li>Latitude/Longitude coordinates default from the address record when used instead of a physical street address.
								<ul class="normal">
									<li>Latitude/Longitude coordinates can be added, edited, or removed as needed.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>The Use Tax enabled indicator is accessed from the vendor record.</li>
					<li>Sales tax exemption information is defaulted on the purchase invoice from the customer record or specific address record.
						<ul class="normal">
							<li>Sales Tax exemption information is defaulted on the purchase invoice from the customer record or specific address record.
								<ul class="normal">
									<li>Sales tax exemption information (Exemption Number or Entity/Use Code) can be edited/removed as needed.</li>
									<li>Sales tax exemption information can be added when not set as a default value on the vendor or address record.</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>The user records the items purchased from the vendor associating them with a GL account number.</li>
			<li>The user enters the shipping/freight charge from the purchase invoice and associates it with a GL account number</li>
			<li>The user has an on-demand option to request an AvaTax use tax calculation in advance of saving the purchase invoice to preview the tax calculation.
				<ul class="normal">
					<li>Use tax calculated by AvaTax is returned</li>
					<li>If Vendor-charged tax is identified it is compared to AvaTax calculated tax</li>
					<li>The user can select one of the following options:
						<ul class="normal">
							<li>Accept AvaTax calculated Use Tax in total</li>
							<li>Accept the difference between AvaTax calculated use tax and vendor charged tax (only if AvaTax is a larger amount than vendor-charged tax)</li>
							<li>Edit the use tax amount to a desired amount, including $0.00</li>
						</ul>
					</li>
				</ul>
			</li>	
			<li>The user saves the purchase invoice
				<ul class="normal">
					<li>In advance of the purchase invoice save within the application, an AvaTax tax calculation call is made capturing the data elements required for tax calculation, and finalized the user designated amount (above).</li>
				</ul>
			</li>
			<li>The user posts the purchase invoice in the application.
				<ul class="normal">
					<li>AvaTax commits the purchase invoice</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>
<h4>Certification Requirements</h4>	
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
			<td>Required</td>
			<td>Create Transaction call - send required header level data elements.</td>
			<td>	
				<ul class="normal">
					<li>Document Number</li>
					<li>Customer Code</li>
					<li>Document Date</li>
					<li>Tax Calculation Date</li>
					<li>Document Type</li>
					<li>Destination Address</li>
					<li>Origin Address</li>
					<li>Exemption Number</li>
					<li>Entity/Use Code (aka CustomerUsageType)</li>
					<li>Location Code</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Create transaction call - Send required line (detail) level data elements</td>
			<td>
				<ul class="normal">
					<li>Line Number</li>
					<li>Item Code</li>
					<li>Item Description</li>
					<li>Quantity</li>
					<li>Amount (Extended)</li>
					<li>Tax Code</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Freight/Shipping charges must be transmitted separately.</td>
			<td>Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Vendor-charged tax - Invoices</td>
			<td>Vendor-charged tax must be separately stated when requesting an AvaTax use tax assessment for comparison</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Create Transaction call - Purchase Order/Purchase Invoices</td>
			<td>Ensure orders and invoices are processed through a logical document lifecycle.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Post/Commit - Invoices</td>
			<td>Ensure Invoices are committed to AvaTax for reporting</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Cancel - Voided/Deleted Invoices</td>
			<td>When invoices are deleted/canceled in the application, this information must be transmitted to AvaTax</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Send Discounts appropriately</td>
			<td>When discounts are identified on the purchase document, ensure the amounts are accommodated at the line (detail) level</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Create Use Tax Accrual - Invoices</td>
			<td>
				<p>Generate use tax accrual journal entry lines for completed purchase invoices</p>
				<p>Debit - create debit lines for each assessed line recording use tax amount and associated general ledger number sourced from purchase invoice line.</p>
				<p>Credit - create summary credit line for total use tax assessment charged to liability (Use Tax Payable) general ledger account number</p>
				<p>NOTE: do not make assessed use tax payable to the vendor</p>
			</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Send point-of-consumption of product/service purchased as Destination address</td>
			<td>
				<p>Use tax is assessed, in part, based upon the location where the product is consumed or the service is rendered. The address associated with that location is to be passed as Destination address type.</p>
				<p>In the event the location where product is consumed is not available, the delivery address can be substituted as Destination address.</p>
				<p>NOTE: Origin address does not impact the use tax assessment</p>
			</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Send optional header level data elements</td>
			<td>
				<ul class="normal">
					<li>Purchase Order Number - for purchase order/invoice scenarios, this represents the vendor/supplier's sales order number</li>
					<li>Reference Code</li>
					<li>salesperson Code</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Send optional line (detail) level data elements</td>
			<td>
				<ul class="normal">
					<li>Revenue Account
						<ul class="normal">
							<li>Revenue Account references for purchase order/invoices represent the general ledger account number associated with the purchase</li>
						</ul>
					</li>
					<li>Exemption Number - overrides header level Exemption Number</li>
					<li>Entity/Use code (aka CustomerUsageType)</li>
					<li>Reference 1</li>
					<li>Reference 2</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Latitude/Longitude</td>
			<td>Latitude/Longitude coordinates can be sent in lieu of a postal address</td>
		</tr>
	</tbody>
</table>

<h2>Additional Information</h2>
<h3>Purchase Invoice</h3>
<p>Payment of sales/use tax is the responsibility of the company making any taxable purchase. When sales tax is properly charged by vendor/supplier on its invoice, the buying company fulfills its statutory obligation to local and state taxing authorities.</p>
<p>However, when the buying company makes a purchase and the supplier/vendor either does not charge sales tax on a taxable purchase or that supplier/vendor does not charge the appropriate sales tax on a taxable purchase, it becomes the buying company's responsibility to assess/calculate, verify, accrue, and file/remit the tax due in the form of use tax.</p>
<p>the process to determine use tax owed by the buying company include:</p>

<ul class="normal">
	<li>Calculation/assessment of the potential use tax liability on the purchase invoice, using the following key data elements (not a complete list):
		<ul class="normal">
			<li>Document/Tax Date - Date the purchase invoice is recognized as a financial liability</li>
			<li>Amount - Financial amount, by line on the purchase invoice</li>
			<li>Point of Consumption - Address associated with the location where the buying company consumes the product/service</li>
			<li>Tax Code - Avalara code identifying the product/service purchased</li>
			<li>Exemption - Applicable exemption for the purchase indicating the normally taxable purchase is exempted from tax
				<ul class="normal">
					<li>Driven, typically, at document/line level</li>
					<li>Purchases Made for resale are typical examples</li>
				</ul>
			</li>
			<li>Sales Tax charged by vendor*</li>
		</ul>
	</li>
	<li>Review, verification, and approval of the assessed use tax.
		<ul class="normal">
			<li>The buying company typically wishes to have a review and approval process in advance of accruing the use tax.</li>
			<li>Defining the approval levels based upon amount of use tax assessed / calculated
				<ul class="normal">
					<li>Approve up to $50.00 of assessed use tax during the invoice entry - A/P Clerk </li>
					<li>Invoices with assessed use tax of $50.01 - $250.00 queued for Accounting Manager approval</li>
					<li>Invoices with assessed use tax of $250.01+ queued for Controller approval</li>
					<li>At each approval level, user may wish to have a purchase invoice that is assessed with the use tax at their approval level queued for approval at the next level up.
						<ul class="normal">
							<li>Unusual purchase</li>
							<li>New vendor</li>
							<li>User pushing the purchase invoice to next approval level should be able to leave a comment for next approver</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>Approval process includes:
				<ul class="normal">
					<li>Approve assessed amount
						<ul class="normal">
							<li>Tax calculated $25.00, tax charged $0.00, amount assessed $25.00</li>
							<li>Tax calculated $25.00, tax charged $10.00, amount assessed $15.00</li>
						</ul>
					</li>
					<li>Decline assessed amount, user may choose to decline assessed amount	
						<ul class="normal">
							<li>Purchase for resale</li>
							<li>Vendor appropriately exempted taxes</li>
							<li>Purchase document not tagged appropriately to have assessed tax exempted</li>
						</ul>
					</li>
					<li>Override assessed tax, user may choose to override tax assessed
						<ul class="normal">
							<li>Typically, a fringe case</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</li>

	<li>Accrual of use tax and tagging assessed and accrued purchase invoice
		<ul class="normal">
			<li>Tag assessed and accrued purchase invoice denoting it has completed the use tax process</li>
			<li>Generate a journal entry recording the approved use tax liability
				<ul class="normal">
					<li>Debit - typically debit use tax to the G/L account associated with the purchase invoice line item assessed</li>
					<li>Credit - use tax liability account</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>File and remit use tax accrued
		<ul class="normal">
			<li>Using Avalara AvaTax user can generate use tax-specific reporting to identify total liability by taxing jurisdiction (typically state)</li>
			<li>Using Avalara Returns, Avalara includes use tax amounts on the appropriate tax returns during the filing cycle</li>
		</ul>
	</li>
</ul>

<p>* Breaking out sales tax charged by vendor will often cause issue with many buying companies as the desire is to include sales tax charged to the G/L account associated with the purchased item/service. A feature that will improve the user experience is to permit the break-out of the vendor charged sales tax on the purchase invoice during entry, and allocating the vendor charged tax the G/L accounts associated with the purchase lines for G/L distribution purposes.</p>
<p>During the purchase invoice entry, a tax calculation call shall be made to the AvaTax service to generate the initial use tax calculation. The transaction should not be committed to the AvaTax service until the use tax assessment is approved by the appropriate staff from the buying company.</p>
<p>Batch processing of purchase invoices should follow a comparable process.</p>
				
			
</div><!--closes out the page -->