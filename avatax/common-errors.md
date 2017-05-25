---
layout: page
title: SOAP Error Codes
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

Also see [REST Error Codes](/avatax/errors) for errors in the REST v2 API.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th valign="top" width="168">Message</th>
				<th valign="top" width="245">Summary</th>
				<th valign="top" width="195">Documentation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td valign="top" width="168"><strong>CompanyNotFoundError </strong></td>
				<td valign="top" width="245">Company not found. Verify the CompanyCode.</td>
				<td valign="top" width="195">An unknown CompanyCode was specified. All companies must be configured using the Admin console.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>DocStatusError </strong></td>
				<td valign="top" width="245">DocStatus is invalid for this operation.</td>
				<td valign="top" width="195">GetTax expects the document to not exist or the DocStatus to be Saved. PostTax expects the DocStatus to be Saved. CommitTax expects the DocStatus to be Posted.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>DocTypeError </strong></td>
				<td valign="top" width="245">DocType is invalid</td>
				<td valign="top" width="195">An unsupported document type was specified. It must be SalesOrder, SalesInvoice, PurchaseOrder, PurchaseInvoice, ReturnOrder, ReturnInvoice</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>DocumentNotFoundError </strong></td>
				<td valign="top" width="245">The tax document could not be found.</td>
				<td valign="top" width="195">The tax document specified could not be found.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>NoNexus not supported for this transaction type.</strong></td>
				<td valign="top" width="245">NoNexus not supported for this transaction type.</td>
				<td valign="top" width="195">Digital goods sales in the EU have specific nexus requirements. Please refer to the <a href="https://help.avalara.com/kb/001/Why_am_I_getting_the_error%2C_NoNexus_not_supported_for_this_transaction_type_for_VAT_transactions%3F?origin=deflection">help center</a> for further detail.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>RegionCodeError </strong></td>
				<td valign="top" width="245">Invalid or missing state/province code.</td>
				<td valign="top" width="195">The two-digit state code was not specified or was invalid.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>CountryError </strong></td>
				<td valign="top" width="245">Unknown country name or code</td>
				<td valign="top" width="195">The country name or code was not recognized.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>TaxAddressError </strong></td>
				<td valign="top" width="245">Address is incomplete or invalid.</td>
				<td valign="top" width="195">An incomplete or invalid origin or destination address was given. RefersTo indicates which. A taxable address must include a (line, city, and region (state)) or a (line and zip) or a (region (state) and postal code).</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>OutOfBalanceWarning </strong></td>
				<td valign="top" width="245">Document was posted, but is out of balance.</td>
				<td valign="top" width="195">A document was posted in which the specified TotalAmount or TaxAmount did not match the saved document. This is just a warning. The document was posted.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>JurisdictionNotFoundError </strong></td>
				<td valign="top" width="245">Unable to determine the taxing jurisdictions.</td>
				<td valign="top" width="195">Unable to determine the taxing jurisdictions.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>AddressRangeError </strong></td>
				<td valign="top" width="245">The address number is out of range.</td>
				<td valign="top" width="195">The address was found but the street number in the input address was not between the low and high range of the post office database.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>InactiveCompanyError </strong></td>
				<td valign="top" width="245">Tax operations not allowed for an inactive company</td>
				<td valign="top" width="195">Company Code is set to inactive.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>DuplicateLineNoError </strong></td>
				<td valign="top" width="245">Duplicate line number</td>
				<td colspan="2" valign="top" width="215">One or more line numbers are duplicates. All line numbers must be unique within the document.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>TaxRegionError </strong></td>
				<td valign="top" width="245">The TaxRegionId was not found</td>
				<td colspan="2" valign="top" width="215"></td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>TaxOverrideError </strong></td>
				<td valign="top" width="245">Tax override cannot be applied.</td>
				<td colspan="2" valign="top" width="215"></td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>AddressError </strong></td>
				<td valign="top" width="245">Unable to validate the address.</td>
				<td colspan="2" valign="top" width="215"></td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>InsufficientAddressError </strong></td>
				<td valign="top" width="245">Insufficient address information</td>
				<td colspan="2" valign="top" width="215">You must specify at least Line/ZIP, or Line/City/State</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>PostalCodeError </strong></td>
				<td valign="top" width="245">Invalid ZIP/Postal Code.</td>
				<td colspan="2" valign="top" width="215">The ZIP/Postal Code does not exist and could not be determined by the city/municipality and state/province.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>UnsupportedCountryError </strong></td>
				<td valign="top" width="245">Country not supported.</td>
				<td colspan="2" valign="top" width="215">Address Validation for this country not supported.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>Messages.DateRangeError </strong></td>
				<td valign="top" width="245">Start Date cannot be later than the End Date</td>
				<td colspan="2" valign="top" width="215">An invalid date range was specified. RefersTo indicates the property.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>Messages.RequiredError </strong></td>
				<td valign="top" width="245">Required element is missing</td>
				<td colspan="2" valign="top" width="215">A required property was not provided. RefersTo indicates which property. This value must be specified.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>Messages.UniqueConstraintError </strong></td>
				<td valign="top" width="245">This is a duplicate of an existing unique element and cannot be saved.</td>
				<td colspan="2" valign="top" width="215">Please verify the element is unique.</td>
			</tr>
			<tr>
				<td valign="top" width="168"><strong>Messages.MaxCountExceededError </strong></td>
				<td valign="top" width="245">MaxCount limit exceeded. Please use filters to limit the result set.</td>
				<td colspan="2" valign="top" width="215">15000 invoice lines is the current limit.</td>
			</tr>
		</tbody>
	</table>
</div>


<h3><a name="address-validation"></a>Address Validation Errors</h3>
<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Summary</th>
				<th>Severity</th>
				<th>Details</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Error accessing address service data.</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>The address data has expired.</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>The address data is in Demo mode and can validate only Nevada addresses</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>The VerifyAddress method was called before the Initialize method</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>Incorrect configuration for validating Canada addresses</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>Delivery Point Validation processing was terminated</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>Unable to validate the address.</td>
				<td>Error</td>
				<td></td>
			</tr>
			<tr>
				<td>Address service error</td>
				<td>Error</td>
				<td>{0}</td>
			</tr>
			<tr>
				<td>Address validation exception</td>
				<td>Exception</td>
				<td>Please contact Avalara Technical Support.</td>
			</tr>
			<tr>
				<td>Insufficient address information</td>
				<td>Error</td>
				<td>You must specify at least Line/ZIP, or Line/City/State</td>
			</tr>
			<tr>
				<td>The address was standardized but not validated</td>
				<td>Error</td>
				<td>Standardization means that some conversion was done on the address (for example, changing Post Office Box to PO Box or abbreviating street suffixes).</td>
			</tr>
			<tr>
				<td>There were multiple matches for the address</td>
				<td>Error</td>
				<td>Multiple matches for the address are all in the same ZIP/Postal Code and carrier route. No +4 information is available.</td>
			</tr>
			<tr>
				<td>There were multiple matches for the address</td>
				<td>Error</td>
				<td>There is not enough information available in the input address to break the tie between multiple matching records.</td>
			</tr>
			<tr>
				<td>The street was not found</td>
				<td>Error</td>
				<td>The ZIP/Postal Code exists but no streets begin with the same letter in that ZIP/Postal Code.</td>
			</tr>
			<tr>
				<td>Insufficient directional or suffix information</td>
				<td>Error</td>
				<td>Either the directionals or the suffix field did not match the post office database, and there was more than one choice for correcting the address.</td>
			</tr>
			<tr>
				<td>The address is new.</td>
				<td>Error</td>
				<td>This is a new address that will not validate properly until the next database update.</td>
			</tr>
			<tr>
				<td>The address is not deliverable.</td>
				<td>Error</td>
				<td>The physical location exists but there are no homes on this street. One reason might be railroad tracks or rivers running alongside this street, as they would prevent construction of homes in this location.</td>
			</tr>
			<tr>
				<td>Country not supported.</td>
				<td>Error</td>
				<td>Address Validation for this country not supported.</td>
			</tr>
			<tr>
				<td>Service not enabled.</td>
				<td>Error</td>
				<td>{0} service is not enabled for this account, please contact customer support.</td>
			</tr>
			<tr>
				<td>Geocoding not supported for country.</td>
				<td>Error</td>
				<td>Address geocoding for this country not supported.</td>
			</tr>
			<tr>
				<td>The city could not be determined.</td>
				<td>Error</td>
				<td>The city could not be found or determined from postal code.</td>
			</tr>
			<tr>
				<td>An exact street name match could not be found</td>
				<td>Error</td>
				<td>An exact street name match could not be found and phonetically matching the street name resulted in either no matches or matches to more than one street name.</td>
			</tr>
			<tr>
				<td>The address number is out of range</td>
				<td>Error</td>
				<td>The address was found but the street number in the input address was not between the low and high range of the post office database.</td>
			</tr>
			<tr>
				<td>Invalid ZIP/Postal Code.</td>
				<td>Error</td>
				<td>The ZIP/Postal Code does not exist and could not be determined by the city/municipality and state/province.</td>
			</tr>
			<tr>
				<td>No Tax Region intersected.</td>
				<td>Error</td>
				<td>No Tax Region returned from Tax Region intersect process.</td>
			</tr>
			<tr>
				<td>Multiple tax regions were found for the address.</td>
				<td>Error</td>
				<td></td>
			</tr>
			<tr>
				<td>The tax region state did not match the validated address state. Fallback.</td>
				<td>Success</td>
				<td>{0}</td>
			</tr>
			<tr>
				<td>Address not geocoded.</td>
				<td>Error</td>
				<td>Address cannot be geocoded.</td>
			</tr>
		</tbody>
	</table>
</div>

<h3><a name="cloudconnect"></a>CloudConnect Errors</h3>
<p>If you're calling the service hosted on CloudConnect, you may encounter the following errors during your integration process:</p>
<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Summary</th>
				<th>Severity</th>
				<th>Documentation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>PostTax is not supported on CloudConnect.</td>
				<td>Error</td>
				<td>The CloudConnect only accepts GetTax, Ping, IsAuthorized, and Validate calls.</td>
			</tr>
			<tr>
				<td>CommitTax is not supported on CloudConnect.</td>
				<td>Error</td>
				<td>The CloudConnect only accepts GetTax, Ping, IsAuthorized, and Validate calls.</td>
			</tr>
			<tr>
				<td>CancelTax is not supported on CloudConnect.</td>
				<td>Error</td>
				<td>The CloudConnect only accepts GetTax, Ping, IsAuthorized, and Validate calls.</td>
			</tr>
			<tr>
				<td>AdjustTax is not supported on CloudConnect.</td>
				<td>Error</td>
				<td>The CloudConnect only accepts GetTax, Ping, IsAuthorized, and Validate calls.</td>
			</tr>
			<tr>
				<td>GetTaxHistory is not supported on CloudConnect.</td>
				<td>Error</td>
				<td>The CloudConnect only accepts GetTax, Ping, IsAuthorized, and Validate calls.</td>
			</tr>
			<tr>
				<td>Document Type must be Sales Order, Purchase Order, Return Order, Inventory Transfer Order, or Reverse Charge Order on CloudConnect.</td>
				<td>Error</td>
				<td>The CloudConnect only calculates tax, and cannot be used to record transactions. As such, document types that trigger a document record creation are rejected.</td>
			</tr>
		</tbody>
	</table>
</div>
