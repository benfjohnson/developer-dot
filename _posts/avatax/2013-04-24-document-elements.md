---
layout: page
title: Document Elements
date: 2013-04-24 03:58
author: anya.stettler
comments: true
categories: []
---
<h3>DocumentFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of Document objects (in common response format), including any special fields designated in the request. It is important to specify filter criteria in the request, due to the large raw data set present in most production accounts.
<h4>Response</h4>
DocumentFetchResult
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
<td>Documents</td>
<td>An array of Document objects that fit the specified filter criteria.</td>
<td>Document[]</td>
</tr>
<tr>
<td>RecordCount</td>
<td>The number of records found that fit the specified filter critera.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
Document
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
<td>Addresses</td>
<td> An array of all addresses used in the document.</td>
<td> DocumentAddress[]</td>
</tr>
<tr>
<td>AdjustmentReasonId</td>
<td> The system-assigned identifier of any adjustment reason associated with the transaction.</td>
<td> Integer</td>
</tr>
<tr>
<td>AdjustmentDescription</td>
<td> The human-readable identifier of any adjustment reason associated with the transaction.</td>
<td> String</td>
</tr>
<tr>
<td>BatchCode</td>
<td> If the transaction was loaded using BatchSvc, an identifier of the batch to which it belongs</td>
<td> String</td>
</tr>
<tr>
<td>CompanyId</td>
<td> The CompanyId of the company to which the document belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>CurrencyCode</td>
<td> The currency of the transaction, as a three-character ISO code.</td>
<td> String</td>
</tr>
<tr>
<td>CustomerUsageType</td>
<td> Any Entity/Use Code specified at the document level.</td>
<td> String</td>
</tr>
<tr>
<td>CustomerVendorCode</td>
<td> The unique identifier of the customer (or in the case of PurchaseInvoice, the vendor).</td>
<td> String</td>
</tr>
<tr>
<td>DestinationAddressId</td>
<td> The DocumentAddressId of the document-level destination address.</td>
<td> Integer</td>
</tr>
<tr>
<td>DestinationAddressIdSpecified</td>
<td> Indicates if the destination address is specified at a document level.</td>
<td> Boolean</td>
</tr>
<tr>
<td>DocumentCode</td>
<td> The user-defined, unique identifier of the transaction record.</td>
<td> String</td>
</tr>
<tr>
<td>DocumentId</td>
<td> The unique, system-assigned identifier of the transaction record.</td>
<td> Integer</td>
</tr>
<tr>
<td>DocumentStatusId</td>
<td> The status of the document. Possible values are: Adjusted, Cancelled, Committed, Posted, Saved, Temporary.</td>
<td>DocumentStatusId</td>
</tr>
<tr>
<td>DocumentTypeId</td>
<td> The type of document. Possible values are: PurchaseInvoice, PurchaseOrder, ReturnInvoice, ReturnOrder, SalesInvoice, SalesOrder, InventoryTransferInvoice, InventoryTransferOrder.</td>
<td>DocumentTypeId</td>
</tr>
<tr>
<td>ExchangeRate</td>
<td> Exchange rate, if specified</td>
<td> Decimal</td>
</tr>
<tr>
<td>ExchangeRateEffDate</td>
<td> Exchange rate effective date, if specified.</td>
<td> DateTime</td>
</tr>
<tr>
<td>ExchangeRateEffDateSpecified</td>
<td> Indicates if an exchange rate effective date was specified.</td>
<td> Boolean</td>
</tr>
<tr>
<td>ExchangeRateSpecified</td>
<td>Indicates if an exchange rate was specified.</td>
<td>Boolean</td>
</tr>
<tr>
<td>ExemptNo</td>
<td>Any exemption number value specified at the document level.</td>
<td> String</td>
</tr>
<tr>
<td>IsLocked</td>
<td> Indicates if the document is locked, that is, it has been filed on behalf of the client.</td>
<td> Boolean</td>
</tr>
<tr>
<td>IsReconciled</td>
<td> Indicates if the document has been flagged as reconciled (through use of ReconcileTax).</td>
<td> Boolean</td>
</tr>
<tr>
<td>Lines</td>
<td> An array of line items associated</td>
<td>DocumentLine[]</td>
</tr>
<tr>
<td>LocationCode</td>
<td> The LocationCode of the associated CompanyLocation, if applicable.</td>
<td> String</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The timestamp of the last modification of the document</td>
<td> DateTime</td>
</tr>
<tr>
<td>OriginAddressId</td>
<td> The DocumentAddressId of the document-level origin address</td>
<td> Integer</td>
</tr>
<tr>
<td>OriginAddressIdSpecified</td>
<td> Indicates if the origin address is specified at a document level.</td>
<td> Boolean</td>
</tr>
<tr>
<td>PaymentDate</td>
<td> Deprecated, will always display 1/1/1900.</td>
<td> DateTime</td>
</tr>
<tr>
<td>PurchaseOrderNo</td>
<td> The associated purchase order number for the document, if applicable.</td>
<td> String</td>
</tr>
<tr>
<td>ReferenceCode</td>
<td> The reference code (or merchant code for TaxSummaryReports customers) associated with the document, if applicable.</td>
<td> String</td>
</tr>
<tr>
<td>SalespersonCode</td>
<td> The salesperson code associated with the document, if applicable.</td>
<td> String</td>
</tr>
<tr>
<td>SoftwareVersion</td>
<td> The software version specified by the adapter used to make the call.</td>
<td> String</td>
</tr>
<tr>
<td>TaxDate</td>
<td> The tax date used to assess the tax calculation for the document.</td>
<td> DateTime</td>
</tr>
<tr>
<td>TaxOverrideAmount</td>
<td> If a tax override amount is specified on the document level, the amount used to override the tax calculation.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxOverrideReason</td>
<td> The audit reason for any tax override that was applied to the document.</td>
<td> String</td>
</tr>
<tr>
<td>TaxOverrideTypeId</td>
<td>The type of tax override applied to the document. Possible values are: Exemption, None, TaxAmount, TaxDate.</td>
<td>TaxOverrideTypeId</td>
</tr>
<tr>
<td>TotalAmount</td>
<td> The pre-tax total of the document.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TotalExempt</td>
<td> The total sales on the document to which tax did not apply.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TotalTax</td>
<td> The total tax reflected on the document record (including all variable taxability rules and overrides).</td>
<td> Decimal</td>
</tr>
<tr>
<td>TotalTaxable</td>
<td> The total sales on the document to which tax did apply.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TotalTaxCalculated</td>
<td> The total tax calculated before variable tax rules and overrides are applied.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TotalTaxCalculatedSpecified</td>
<td> Indicates if the calculated tax is meaningfully different than the TotalTax.</td>
<td> Boolean</td>
</tr>
<tr>
<td>Version</td>
<td> The service version used to create the document record.</td>
<td> String</td>
</tr>
</tbody>
</table>
DocumentAddress
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
<td>Address</td>
<td> The first address line of the address.</td>
<td> String</td>
</tr>
<tr>
<td>BoundaryLevel</td>
<td> Corresponds to the boundary level determined by the address information given.</td>
<td> Integer</td>
</tr>
<tr>
<td>City</td>
<td> The city associated with the address.</td>
<td> String</td>
</tr>
<tr>
<td>Country</td>
<td> The country associated with the address.</td>
<td> String</td>
</tr>
<tr>
<td>DocumentAddressId</td>
<td> The unique, system-assigned identifier of the address object.</td>
<td> Integer</td>
</tr>
<tr>
<td>DocumentId</td>
<td> The DocumentId of the document to which the DocumentAddress belongs.</td>
<td> Integer</td>
</tr>
<tr>
<td>PostalCode</td>
<td>The zip or postal code associated with the address.</td>
<td> String</td>
</tr>
<tr>
<td>TaxRegionId</td>
<td> The unique, internal identifier of the tax region used to calculate tax.</td>
<td> Integer</td>
</tr>
<tr>
<td>TaxRegionIdSpecified</td>
<td> Indicates if the input address specified the TaxRegionId to be used for calculation (in place of a street address or coordinate value).</td>
<td> Boolean</td>
</tr>
</tbody>
</table>
DocumentLine
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
<td>AccountingMethodId</td>
<td> Deprecated</td>
<td> Integer</td>
</tr>
<tr>
<td>BoundaryOverrideId</td>
<td> If the boundary level was overridden, the override Id.</td>
<td> Integer</td>
</tr>
<tr>
<td>CustomerUsageType</td>
<td> The line-level exemption type trigger, if appropriate.</td>
<td> String</td>
</tr>
<tr>
<td>Description</td>
<td> A human-readable description of the item or charge represented by the line item.</td>
<td> String</td>
</tr>
<tr>
<td>DestinationAddressId</td>
<td> The AddressId of the destination address at the line level.</td>
<td> Integer</td>
</tr>
<tr>
<td>Details</td>
<td> An array of tax calculation details associated with the line item. Each detail corresponds to a jurisdiction.</td>
<td>DocumentLineDetail[]</td>
</tr>
<tr>
<td>DiscountAmount</td>
<td> The discount amount applied to the line item.</td>
<td> Decimal</td>
</tr>
<tr>
<td>DocumentId</td>
<td> The DocumentID of the document to which the line belongs.</td>
<td> Integer</td>
</tr>
<tr>
<td>DocumentLineId</td>
<td> The unique, system-assigned identifier of the document line.</td>
<td> Integer</td>
</tr>
<tr>
<td>ExemptAmount</td>
<td> The amount of exempt sales on the line.</td>
<td> Decimal</td>
</tr>
<tr>
<td>ExemptCertId</td>
<td> If an exemption certificate record was applied to the line item, the Id of that certificate record.</td>
<td> Integer</td>
</tr>
<tr>
<td>ExemptNo</td>
<td>The exemption number at the line level, if applicable.</td>
<td> String</td>
</tr>
<tr>
<td>IsItemTaxable</td>
<td> Indicates if the product or charge represented by the line was determined to be taxable.</td>
<td> Boolean</td>
</tr>
<tr>
<td>IsSTP</td>
<td> For internal use only.</td>
<td> Boolean</td>
</tr>
<tr>
<td>ItemCode</td>
<td>The SKU or item code assigned to the line.</td>
<td> String</td>
</tr>
<tr>
<td>LineAmount</td>
<td>The total sale amount on the line.</td>
<td> Decimal</td>
</tr>
<tr>
<td>LineNo</td>
<td>The unique, user-assigned identifier of the line.</td>
<td> String</td>
</tr>
<tr>
<td>OriginAddressId</td>
<td> The AddressId of the origin address assigned to the line item.</td>
<td> Integer</td>
</tr>
<tr>
<td>Quantity</td>
<td>The quantity of items on the line.</td>
<td> Decimal</td>
</tr>
<tr>
<td>Ref1</td>
<td>A reportable, information-only, user-configurable field.</td>
<td> String</td>
</tr>
<tr>
<td>Ref2</td>
<td> A reportable, information-only, user-configurable field.</td>
<td> String</td>
</tr>
<tr>
<td>ReportingDate</td>
<td> The date used to report the transaction. This is always DocumentDate.</td>
<td> DateTime</td>
</tr>
<tr>
<td>RevAccount</td>
<td> A reportable, information-only, user-configurable field.</td>
<td> String</td>
</tr>
<tr>
<td>Sourcing</td>
<td> Indicates the sourcing implied by the addresses and jurisdictions involved in the calculation. Possible values are: O, D, *.</td>
<td> String</td>
</tr>
<tr>
<td>Tax</td>
<td> The total tax amount associated with the line, including overrides.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxableAmount</td>
<td> Taxable amount on the line item.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxCalculated</td>
<td> The total tax calculated on the line item, not including overrides.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxCode</td>
<td> An indication of the product group to which the item or charge belongs.</td>
<td> String</td>
</tr>
<tr>
<td>TaxCodeId</td>
<td> The unique, system-assigned identifier of the tax code associated with the line item.</td>
<td> Integer</td>
</tr>
<tr>
<td>TaxDate</td>
<td> The date used to assess jurisdictional boundaries and tax rates, may be different than the reporting date/ document date.</td>
<td> DateTime</td>
</tr>
<tr>
<td>TaxEngine</td>
<td> For internal use only.</td>
<td> String</td>
</tr>
<tr>
<td>TaxIncluded</td>
<td>An indication if the tax and total amount were back calculated from a provided amount including tax.</td>
<td> Boolean</td>
</tr>
<tr>
<td>TaxOverrideAmount</td>
<td> The tax override amount specified, if applicable.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxOverrideReason</td>
<td> The audit reason for any tax override applied.</td>
<td> String</td>
</tr>
<tr>
<td>TaxOverrideTypeId</td>
<td>The type of TaxOverride applied to the line. Possible values are: Exemption, Non, TaxAmount, TaxDate.</td>
<td>TaxOverrideTypeId</td>
</tr>
</tbody>
</table>
DocumentLineDetail
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
<td>AddressId</td>
<td>The AddressId of the address used in this detail, determined by sourcing.</td>
<td> Integer</td>
</tr>
<tr>
<td>Country</td>
<td> The country where the jurisdiction lies.</td>
<td> String</td>
</tr>
<tr>
<td>CountryFips</td>
<td> The country FIPS of the country where the jurisdiction lies.</td>
<td> String</td>
</tr>
<tr>
<td>DocumentLineDetailId</td>
<td> The unique, system-assigned identifier of the DocumentLineDetail.</td>
<td> Integer</td>
</tr>
<tr>
<td>DocumentLineId</td>
<td> The unique identifier of the DocumentLine to which the detail belongs.</td>
<td> Integer</td>
</tr>
<tr>
<td>ExemptAmount</td>
<td> The amount of tax-exempt sales at the detail level.</td>
<td> Decimal</td>
</tr>
<tr>
<td>ExemptReasonId</td>
<td> The reason for exemption, if applicable.</td>
<td> Long</td>
</tr>
<tr>
<td>ExemptReasonIdSpecified</td>
<td> An indication if the reason for exemption was specified.</td>
<td> Boolean</td>
</tr>
<tr>
<td>InState</td>
<td> Indicates if the transaction is intrastate.</td>
<td> Boolean</td>
</tr>
<tr>
<td>InStateSpecified</td>
<td> Indicates if InState was specified.</td>
<td> Boolean</td>
</tr>
<tr>
<td>JurisCode</td>
<td> The human-readable (often state assigned) identifier of the jurisdiction.</td>
<td> String</td>
</tr>
<tr>
<td>JurisdictionId</td>
<td>The unique, system-assigned identifier of the jurisdiction.</td>
<td> Integer</td>
</tr>
<tr>
<td>JurisdictionIdSpecified</td>
<td> Indicates if the JurisdictionId was specified on the calculation request (rather than an address).</td>
<td> Boolean</td>
</tr>
<tr>
<td>JurisName</td>
<td> The name of the jurisdiction.</td>
<td> String</td>
</tr>
<tr>
<td>JurisTypeId</td>
<td> The type of jurisdiction. Possible values are: CNT, STA, CTY, CIT, STJ.</td>
<td>JurisTypeId</td>
</tr>
<tr>
<td>NonTaxableAmount</td>
<td> The amount of non-taxable sales at the detail level.</td>
<td> Decimal</td>
</tr>
<tr>
<td>NonTaxableRuleId</td>
<td> The Id of the rule that determined taxability (for taxable sales, this is 0).</td>
<td> Integer</td>
</tr>
<tr>
<td>NonTaxableRuleIdSpecifed</td>
<td> Indicates if the TaxRule used to determine taxability was specified.</td>
<td> Boolean</td>
</tr>
<tr>
<td>NonTaxableTypeId</td>
<td> The type of tax rule used to determine the taxability. Possible values are: BaseRule, ExemptEntityRule, NexusRule, ProductTaxabilityRule, RateOverrideRule, RateRule.</td>
<td>TaxRuleTypeId</td>
</tr>
<tr>
<td>Rate</td>
<td> The tax rate associated with the detail.</td>
<td> Decimal</td>
</tr>
<tr>
<td>RateRuleId</td>
<td> The Id of the tax rate rule that determines the rate.</td>
<td> Integer</td>
</tr>
<tr>
<td>RateRuleIdSpecified</td>
<td> Indicates if the tax rate rule is specified.</td>
<td> Boolean</td>
</tr>
<tr>
<td>RateSourceId</td>
<td> For internal use only.</td>
<td> Integer</td>
</tr>
<tr>
<td>RateSourceIdSpecified</td>
<td> For internal use only.</td>
<td> Boolean</td>
</tr>
<tr>
<td>RateTypeId</td>
<td> The type of rate/tax calculated.</td>
<td> Integer</td>
</tr>
<tr>
<td>Region</td>
<td> The state or region where the jurisdiction lies.</td>
<td> String</td>
</tr>
<tr>
<td>SERCode</td>
<td> The SER Code associated with the jurisdiction.</td>
<td> String</td>
</tr>
<tr>
<td>SignatureCode</td>
<td> For internal use only.</td>
<td> String</td>
</tr>
<tr>
<td>Sourcing</td>
<td> The type of sourcing used in this calculation.</td>
<td> String</td>
</tr>
<tr>
<td>StateAssignedNo</td>
<td> The state assigned jurisdiction code for this jurisdiction.</td>
<td> String</td>
</tr>
<tr>
<td>StateCode</td>
<td> The state code for the state where the jurisdiction lies.</td>
<td> String</td>
</tr>
<tr>
<td>Tax</td>
<td> The total tax associated with the detail.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxableAmount</td>
<td> The taxable amount at the detail level.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxAuthorityTypeId</td>
<td> For internal use only.</td>
<td> Integer</td>
</tr>
<tr>
<td>TaxCalculated</td>
<td> The tax calculated excluding any tax overrides.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxCalculatedSpecified</td>
<td> Indicates if the tax was calculated.</td>
<td> Boolean</td>
</tr>
<tr>
<td>TaxName</td>
<td> The name of the tax calculated at the jurisdiction level.</td>
<td> String</td>
</tr>
<tr>
<td>TaxOverride</td>
<td> The tax override amount associated with the detail.</td>
<td> Decimal</td>
</tr>
<tr>
<td>TaxOverrideSpecified</td>
<td> Indicates if a tax override is specified.</td>
<td> Boolean</td>
</tr>
<tr>
<td>TaxRegionId</td>
<td> The unique, system-assigned identifier of the tax region associated with the jurisdiction.</td>
<td> Integer</td>
</tr>
<tr>
<td>TaxRegionIdSpecified</td>
<td> Indicates if the TaxRegionId was specified on the calculation request (instead of an address, e.g.).</td>
<td> Boolean</td>
</tr>
<tr>
<td>TaxTypeId</td>
<td> The type of tax calculated. Possible values are: S, C, U.</td>
<td>TaxTypeId</td>
</tr>
</tbody>
</table>
<h3>AdjustmentReasonFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of AdjustmentReason objects (in common response format), including any special fields designated in the request. Omitting filter criteria will retrieve all possible AdjustmentReason values.
<h4>Response</h4>
AdjustmentReasonFetchResult
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
<td>AdjustmentReasons</td>
<td>An array of AdjustmentReason objects that fit the specified filter criteria.</td>
<td>AdjustmentReason[]</td>
</tr>
<tr>
<td>RecordCount</td>
<td>The number of records found that fit the specified filter critera.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
AdjustmentReason
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
<td>AdjustmentReasonId</td>
<td>The system-assigned identifier of the adjustment reason.</td>
<td>Integer</td>
</tr>
<tr>
<td>Description</td>
<td>The human-readable identifier of the adjustment reason.</td>
<td>String</td>
</tr>
</tbody>
</table>
