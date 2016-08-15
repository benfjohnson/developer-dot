---
layout: page
title: Company Elements
date: 2013-04-01 02:06
author: anya.stettler
comments: true
categories: []
product: avaTax
doctype: api-reference
---
<h3>CompanyFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of Company objects (in common response format), including any special fields designated in the request.
<h4>Response</h4>
CompanyFetchResult
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>RecordCount</td>
<td>The number of records found that fit the specified filter critera.</td>
<td>Integer</td>
</tr>
<tr>
<td>Companies</td>
<td>An array of company objects that fit the specified filter criteria.</td>
<td>Company[]</td>
</tr>
</tbody>
</table>
Company
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>AccountId</td>
<td>The account number of the account to which the company belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>BaseCurrencyCode</td>
<td>The three-character currency code of the default currency associated with the company.</td>
<td>String</td>
</tr>
<tr>
<td>BusinessIdentificationNo</td>
<td>The VAT registration ID of the company. Used for consumer use tax type transactions where VAT applies.</td>
<td>String</td>
</tr>
<tr>
<td>CashBasisAccountingEnabled</td>
<td>Deprecated; always false.</td>
<td>Boolean</td>
</tr>
<tr>
<td>Children</td>
<td>All company records that reference this company as their parent company.</td>
<td>Company[]</td>
</tr>
<tr>
<td>CompanyCode</td>
<td>The company code associated with the company - this value is unique within the account.</td>
<td>String</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The unique, system-assigned ID for the company record.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyName</td>
<td>The name of the company.</td>
<td>String</td>
</tr>
<tr>
<td>Contacts</td>
<td>An array of all CompanyContact records associated with the company.</td>
<td>CompanyContact[]</td>
</tr>
<tr>
<td>DefaultCountry</td>
<td>The default country associated with the tax profile.</td>
<td>String</td>
</tr>
<tr>
<td>DefaultLocationId</td>
<td>The default CompanyLocation associated with the tax profile, if any.</td>
<td>Integer</td>
</tr>
<tr>
<td>EntityNo</td>
<td>An internal reference number that identifies the company among other companies on the account.</td>
<td>Integer</td>
</tr>
<tr>
<td>FilingCalendars</td>
<td>Array of filing calendar objects associated with the company, if filing services are enabled. For internal use only.</td>
<td>FilingCalendar[]</td>
</tr>
<tr>
<td>HasProfile</td>
<td>Indicates whether the tax profile is unique, or if it is inherited from a parent company.</td>
<td>Boolean</td>
</tr>
<tr>
<td>InProgress</td>
<td>Indicates if the company setup is incomplete.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsActive</td>
<td>Indicates if the company is active. Inactive companies cannot be used to calculate tax or record transactions.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsDefault</td>
<td>Indicates if the company is the default company on the account. When a tax request is made with no specified company code, it uses the default company.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsReportingEntity</td>
<td>Determines if the company is a separate reporting entity, or if the reporting is rolled in with a parent company.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsTest</td>
<td>Determines if the company is flagged as a test company. Test companies on production, filing-enabled accounts do not have liability worksheets built for them.</td>
<td>Boolean</td>
</tr>
<tr>
<td>Items</td>
<td>An array of Item objects associated with the tax profile. See <a href="/api-docs/soap/accountsvc/tax-profile" target="_blank">tax profile elements</a> for more information.</td>
<td>Item[]</td>
</tr>
<tr>
<td>Nexuses</td>
<td>An array of Nexus objects associated with the tax profile. See <a href="/api-docs/soap/accountsvc/tax-profile" target="_blank">tax profile elements</a> for more information.</td>
<td>Nexus[]</td>
</tr>
<tr>
<td>Parent</td>
<td>The parent company, if applicable.</td>
<td>Company</td>
</tr>
<tr>
<td>ParentId</td>
<td>The CompanyId of the parent company, if applicable.</td>
<td>Integer</td>
</tr>
<tr>
<td>RegalBankId</td>
<td>For internal use only.</td>
<td>Integer</td>
</tr>
<tr>
<td>RoundingLevelId</td>
<td>The rounding level associated with the tax profile. Possible values are: Document, Line</td>
<td>RoundingLevelId</td>
</tr>
<tr>
<td>SSTEffDate</td>
<td>The effective date for customer accounts enrolled in the <a href="http://www.avalara.com/products/avatax/streamlined-sales-tax" target="_blank">SST</a> program.</td>
<td>DateTime</td>
</tr>
<tr>
<td>SSTPID</td>
<td>The SST tax ID number, for SST customers only.</td>
<td>String</td>
</tr>
<tr>
<td>TaxCodes</td>
<td>An array of TaxCode objects associated with the tax profile. See <a href="/api-docs/soap/accountsvc/tax-profile" target="_blank">tax profile elements</a> for more information.</td>
<td>TaxCode[]</td>
</tr>
<tr>
<td>TaxDependencyLevelId</td>
<td>The tax dependency level when determining shipping taxability. Possible values are: Address, Document, State, TaxRegion.</td>
<td>TaxDependencyLevelId</td>
</tr>
<tr>
<td>TaxRules</td>
<td>An array of TaxRule objects associated with the tax profile. See <a href="/api-docs/soap/accountsvc/tax-profile" target="_blank">tax profile elements</a> for more information.</td>
<td>TaxRule[]</td>
</tr>
<tr>
<td>TIN</td>
<td>The company's tax ID number. Required for non-test companies in Filing accounts only.</td>
<td>String</td>
</tr>
<tr>
<td>WarningsEnabled</td>
<td>Deprecated; always true.</td>
<td>Boolean</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the company was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the company.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the company was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the company.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanySave</h3>
Creates a new company, or updates an existing one. To create a new company, specify CompanyId of 0 in the request object. To updated a company, specify the actual CompanyId for the existing company, and change any values that you would like to update.
<h4>Request</h4>
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>Company</td>
<td>The company to be updated or created.</td>
<td>Company</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
CompanySaveResult
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>CompanyId</td>
<td>The CompanyId of the updated or created company.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanyDelete</h3>
Allows for the deletion of a company profile from an account. A company cannot be deleted if it has committed transaction records associated with it.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h3>CompanyContactFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of CompanyContact objects (in common response format), including any special fields designated in the request. Note that there is usually only one CompanyContact per company profile.
<h4>Response</h4>
CompanyContactFetchResult
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Contacts</td>
<td>An array of CompanyContact objects that fit the specified filter criteria.</td>
<td>CompanyContact[]</td>
</tr>
</tbody>
</table>
CompanyContact
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>CompanyId</td>
<td>The CompanyId of the company to which the contact belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>Company</td>
<td>The company to which the contact belongs.</td>
<td>Company</td>
</tr>
<tr>
<td>CompanyContactCode</td>
<td>A company-wide unique identifier describing the contact. Contacts created through the Admin Console company setup wizard have CompanyContactCode of DEFAULT.</td>
<td>String</td>
</tr>
<tr>
<td>CompanyContactId</td>
<td>A unique, system-assigned identifier of the contact record.</td>
<td>Integer</td>
</tr>
<tr>
<td>FirstName</td>
<td> The first name of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>MiddleName</td>
<td> The middle name of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>LastName</td>
<td> The last name of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Title</td>
<td> The title of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Line1</td>
<td> Line1 of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Line2</td>
<td> Line2 of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Line3</td>
<td> Line3 of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>City</td>
<td> The city of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Region</td>
<td> The region or state of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>PostalCode</td>
<td> The zip or postal code of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Country</td>
<td> The country of the company address associated with the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Email</td>
<td> The email address of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Fax</td>
<td> The fax number of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Phone</td>
<td> The phone number of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>Phone2</td>
<td> A secondary phone number of the contact.</td>
<td> String</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the contact was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the contact.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the contact was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the contact.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanyContactSave</h3>
Creates a new contact associated with a company, or updates an existing one. To create a new contact, specify CompanyContactId of 0 in the request object. To updated a contact, specify the actual CompanyContactId for the existing contact, and change any values that you would like to update.
<h4>Request</h4>
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>CompanyContact</td>
<td>The contact to be updated or created.</td>
<td>CompanyContact</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
CompanyContactSaveResult
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>CompanyContactId</td>
<td>The CompanyContactId of the updated or created contact.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanyContactDelete</h3>
Allows for the deletion of CompanyContact records. A company contact cannot be deleted if it is the only contact associated with a given Company record.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
