---
layout: page
title: Tax Profile Elements
date: 2013-04-09 23:28
author: anya.stettler
comments: true
categories: []
product: avaTax
doctype: api-reference
---
<h2><a name="Nexus"></a>Nexus</h2>
<h3>NexusFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of Nexus objects (in common response format), including any special fields designated in the request. To pull a list of all possible nexus, use filter "CompanyId=0".
<h4>Response</h4>
NexusFetchResult
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
<td>Nexuses</td>
<td>An array of Nexus objects that fit the specified filter criteria.</td>
<td>Nexus[]</td>
</tr>
<tr>
<td>RecordCount</td>
<td>The number of records found that fit the specified filter critera.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
Nexus
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
<td>AcountingMethodId</td>
<td>Deprecated</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The CompanyId of the company to which the nexus record belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>Country</td>
<td>The country where the jurisdiction is located.</td>
<td>String</td>
</tr>
<tr>
<td>HasLocalNexus</td>
<td>Indicates if the nexus record has sub-jurisdictions associated with it.</td>
<td>Boolean</td>
</tr>
<tr>
<td>JurisCode</td>
<td>A state-unique identifier of the jurisdiction.</td>
<td>String</td>
</tr>
<tr>
<td>JurisName</td>
<td>The display name of the jurisdiction.</td>
<td>String</td>
</tr>
<tr>
<td>JurisTypeId</td>
<td>The type of jurisdiction. Possible values are: CIT, CNT, CTY, STA, STJ.</td>
<td>JurisTypeId</td>
</tr>
<tr>
<td>LocalNexusTypeId</td>
<td>Indicates how local nexus settings are administered for this jurisdiction. Possible values are: All, Selected, StateAdministered.</td>
<td>LocalNexusTypeId</td>
</tr>
<tr>
<td>NexusId</td>
<td>A system-assigned unique identifier for the nexus record.</td>
<td>Integer</td>
</tr>
<tr>
<td>NexusTypeId</td>
<td>Indicates the type of nexus. Possible values are: None, NonVolunteer, Volunteer, SSTNonVolunteer, SSTVolunteer. Additional values Collect and Legal are exposed in the WSDL, but are reserved for internal use only.</td>
<td>NexusTypeId</td>
</tr>
<tr>
<td>ShortName</td>
<td>The short display name for the jurisdiction.</td>
<td>String</td>
</tr>
<tr>
<td>Sourcing</td>
<td>Indicates special sourcing rules associated with some jurisdictions.</td>
<td>String</td>
</tr>
<tr>
<td>State</td>
<td>The state or region in which the jurisdiction is located (if not country-level).</td>
<td>String</td>
</tr>
<tr>
<td>EffDate</td>
<td>The effective date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>EndDate</td>
<td>The expiration date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the record was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the record.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the record was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>NexusSave</h3>
Creates a new nexus record associated with a company, or updates an existing one. To create a new nexus record, specify NexusId of 0 in the request object. To updated a record, specify the actual NexusId for the existing record, and change any values that you would like to update.
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
<td>Nexus</td>
<td>The record to be updated or created.</td>
<td>Nexus</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
NexusSaveResult
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
<td>NexusId</td>
<td>The NexusId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>NexusDelete</h3>
Allows for the deletion of Nexus records. Special care should be given when deleting nexus records: too little nexus can result in undercollection of tax.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h2><a name="TaxCodes"></a>Tax Codes</h2>
<h3>TaxCodeFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of TaxCode objects (in common response format), including any special fields designated in the request.
<h4>Response</h4>
TaxCodeFetchResult
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
<td>TaxCodes</td>
<td>An array of TaxCode objects that fit the specified filter criteria.</td>
<td>TaxCode[]</td>
</tr>
</tbody>
</table>
TaxCode
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
<td>The CompanyId of the company to which the tax code belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>Description</td>
<td>The human-readable description of the tax code.</td>
<td>String</td>
</tr>
<tr>
<td>IsActive</td>
<td>Indicates if the TaxCode is active for use.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsPhysical</td>
<td>Indicates if the TaxCode applies to physical goods.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsSstCertified</td>
<td>Indicates if the TaxCode is approved for use in SST calculations.</td>
<td>Boolean</td>
</tr>
<tr>
<td>ParentTaxCode</td>
<td>If the tax code has a parent code, that TaxCodeValue of that code.</td>
<td>String</td>
</tr>
<tr>
<td>TaxCodeId</td>
<td>The system-assigned unique identifier of the TaxCode record.</td>
<td>Integer</td>
</tr>
<tr>
<td>TaxCodeTypeId</td>
<td>The broad category of goods to which the tax code applies (e.g. Services or Freight).</td>
<td>String</td>
</tr>
<tr>
<td>TaxCodeValue</td>
<td>The TaxCode value - that is, the value that should be passed in GetTaxRequest.Lines[].TaxCode to trigger this code.</td>
<td>String</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the record was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the record.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the record was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>TaxCodeSave</h3>
Creates a new TaxCode record associated with a company, or updates an existing one. To create a new TaxCode record, specify TaxCodeId of 0 in the request object. To update a record, specify the actual TaxCodeId for the existing record, and change any values that you would like to update.
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
<td>TaxCode</td>
<td>The record to be updated or created.</td>
<td>TaxCode</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
TaxCodeSaveResult
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
<td>TaxCodeId</td>
<td>The TaxCodeId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>TaxCodeDelete</h3>
Allows for the deletion of TaxCode records. Only custom TaxCodes may be deleted, and only if they are not associated with any items or tax rules.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h2><a name="TaxRules"></a>Tax Rules</h2>
<h3>TaxRuleFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of TaxRule objects (in common response format), including any special fields designated in the request. More documentation on TaxRules is available with our A<a href="https://admin-development.avalara.net/WebHelp/AdminHelp/index.htm#&gt;&gt;cmd=1&gt;&gt;cap=AvaTax Admin Console Help&gt;&gt;pan=2&gt;&gt;pbs=toc|ndx|nls|gls">dmin Console documentation</a>.
<h4>Response</h4>
TaxRuleFetchResult
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
<td>TaxRules</td>
<td>An array of TaxRule objects that fit the specified filter criteria.</td>
<td>TaxRule[]</td>
</tr>
</tbody>
</table>
TaxRule
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
<td>Company</td>
<td>The company to which the tax rule belongs.</td>
<td>Company</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The CompanyId of the company to which the tax rule belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>Country</td>
<td>The country in which the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>CountyCode</td>
<td>The county in which the tax rule applies, if applicable.</td>
<td>String</td>
</tr>
<tr>
<td>CustomerUsageType</td>
<td>The CustomerUsageType to which the tax rule applies, if applicable.</td>
<td>String</td>
</tr>
<tr>
<td>Description</td>
<td>A description of the tax rule.</td>
<td>String</td>
</tr>
<tr>
<td>JurisCode</td>
<td>The JurisCode to which the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>JurisName</td>
<td>The name of the jurisdiction to which the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>JurisTypeId</td>
<td>The type of jurisdiction to which the tax rule applies. Possible values are: CNT, STA, CTY, CIT, STJ.</td>
<td>JurisTypeId</td>
</tr>
<tr>
<td>Options</td>
<td>Allows for additional functionality. See the full TaxRule documentation for more details.</td>
<td>String</td>
</tr>
<tr>
<td>RateTypeId</td>
<td>The type of rate(s) to which the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>Sourcing</td>
<td>The sourcing used by the tax rule.</td>
<td>String</td>
</tr>
<tr>
<td>State</td>
<td>The state where the tax rule applies (if applicable).</td>
<td>String</td>
</tr>
<tr>
<td>StateCode</td>
<td>The code for the state where the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>TaxCode</td>
<td>The tax code to which the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>TaxCodeId</td>
<td>The unique TaxCodeId of the tax code to which the tax rule applies.</td>
<td>String</td>
</tr>
<tr>
<td>TaxRuleId</td>
<td>A unique, system-assigned identifier of the tax rule record.</td>
<td>Integer</td>
</tr>
<tr>
<td>TaxRuleTypeId</td>
<td>The type of tax rule. Possible values are: BaseRule, ExemptEntityRule, NexusRule, ProductTaxabilityRule, RateOverrideRule, RateRule.</td>
<td>TaxRuleTypeId</td>
</tr>
<tr>
<td>TaxTypeId</td>
<td>The tax type to which the rule applies. Possible values are: B, C, F, I, N, O, R, S, U.</td>
<td>TaxTypeId</td>
</tr>
<tr>
<td>IsAllJuris</td>
<td>Indicates if the rule applies to all jurisdictions when triggered, or just the applicable one.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsStPro</td>
<td>Indicates if the tax rule applies to Pro accounts only - used for system rules for pro codes only.</td>
<td>Boolean</td>
</tr>
<tr>
<td>Threshold</td>
<td>The threshold for the rule, if applicable.</td>
<td>Decimal</td>
</tr>
<tr>
<td>Cap</td>
<td>The cap for the rule, if applicable.</td>
<td>Decimal</td>
</tr>
<tr>
<td>Value</td>
<td>A custom value implemented by the tax rule; use varies by tax rule type.</td>
<td>Decimal</td>
</tr>
<tr>
<td>EffDate</td>
<td>The effective date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>EndDate</td>
<td>The expiration date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the record was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the record.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the record was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>TaxRuleSave</h3>
Creates a new TaxRule record associated with a company, or updates an existing one. To create a new TaxRule record, specify TaxRuleId of 0 in the request object. To update a record, specify the actual TaxRuleId for the existing record, and change any values that you would like to update. Note that tax rules can also be loaded in bulk with <a title="BatchSvc" href="/api-docs/soap/batchsvc">BatchSvc</a>.
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
<td>TaxRule</td>
<td>The record to be updated or created.</td>
<td>TaxRule</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
TaxRuleSaveResult
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
<td>TaxRuleId</td>
<td>The TaxRuleId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>TaxRuleDelete</h3>
Allows for the deletion of TaxRule records.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h2><a name="Items"></a>Items</h2>
<h3>ItemFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of Item objects (in common response format), including any special fields designated in the request. More information on Item objects is available with our <a href="https://admin-development.avalara.net/WebHelp/AdminHelp/index.htm#&gt;&gt;cmd=1&gt;&gt;cap=AvaTax Admin Console Help&gt;&gt;pan=2&gt;&gt;pbs=toc|ndx|nls|gls">Admin Console documentation</a>.
<h4>Response</h4>
ItemSaveResult
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
<td>Items</td>
<td>An array of item objects that fit the specified filter criteria.</td>
<td>Item[]</td>
</tr>
</tbody>
</table>
Item
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
<td>Company</td>
<td>The company to which the item record belongs.</td>
<td>Company</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The CompanyId of the company to which the item record belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>Description</td>
<td>The description of the item.</td>
<td>String</td>
</tr>
<tr>
<td>ItemCode</td>
<td>The item code of the item - this value should be passed in GetTaxRequest.Lines[].ItemCode.</td>
<td>String</td>
</tr>
<tr>
<td>ItemId</td>
<td>The unique, system-assigned identifier of the item record.</td>
<td>Integer</td>
</tr>
<tr>
<td>TaxCode</td>
<td>The tax code value assigned to the item record.</td>
<td>String</td>
</tr>
<tr>
<td>TaxCodeId</td>
<td>The unique, system-assigned identifier of the tax code associated with the item record.</td>
<td>Integer</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the record was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the record.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the record was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>ItemSave</h3>
Creates a new Item record associated with a company, or updates an existing one. To create a new Item record, specify ItemId of 0 in the request object. To update a record, specify the actual ItemId for the existing record, and change any values that you would like to update. Note that items can also be added and modified using <a title="BatchSvc" href="/api-docs/soap/batchsvc">BatchSvc</a>.
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
<td>Item</td>
<td>The record to be updated or created.</td>
<td>Item</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
ItemSaveResult
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
<td>ItemId</td>
<td>The ItemId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>ItemDelete</h3>
Allows for the deletion of Item records.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h2><a name="ExemptionCertificates"></a>Exemption Certificates</h2>
<h3>ExemptCertFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of ExemptCert objects (in common response format), including any special fields designated in the request.
<h4>Response</h4>
ExemptCertFetchResult
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
<td>Certificates</td>
<td>An array of exemption certificate objects that fit the specified filter criteria.</td>
<td>ExemptCert[]</td>
</tr>
</tbody>
</table>
ExemptCert
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
<td> The CompanyId of the company to which the record belongs.</td>
<td> Integer</td>
</tr>
<tr>
<td>CustomerCode</td>
<td> The customer code of the customer to which the certificate applies. This same customer code value is expected on all GetTax requests for this customer.</td>
<td> String</td>
</tr>
<tr>
<td>CountryIssued</td>
<td> The country where the certificate applies. Permitted values are: US, CA.</td>
<td> String</td>
</tr>
<tr>
<td>ExemptCertDetails</td>
<td>The ExemptCertDetails associated with the certificate record, each of which represents a state to which the certificate applies.</td>
<td>ExemptCertDetail[] (for more format information, see below)</td>
</tr>
<tr>
<td>RegionsApplicable</td>
<td>Deprecated</td>
<td>String</td>
</tr>
<tr>
<td>ExemptCertTypeId</td>
<td> The type of exemption certificate. Permitted values are: Blanket, Single.</td>
<td> ExemptCertType</td>
</tr>
<tr>
<td>DocumentRefNo</td>
<td> In the case of single-use exemption certificates, the DocumentCode or PurchaseOrderNo to which the certificate should apply.</td>
<td> String</td>
</tr>
<tr>
<td>ExemptCertStatusId</td>
<td> The status of the certificate record. Possible values are: Active, Expired, Inactive, Revoked.</td>
<td> ExemptCertStatus</td>
</tr>
<tr>
<td>StatusDescription</td>
<td>A description entered if/when the certificate status was changed.</td>
<td>String</td>
</tr>
<tr>
<td>ExemptCertId</td>
<td> The unique, system-assigned identifier of the certificate record.</td>
<td> Integer</td>
</tr>
<tr>
<td>AvaCertId</td>
<td> If the certificate record was synced from an AvaTax Certs account (as opposed to being entered in ECMS directly), the unique AvaTax Certs identifier for the certificate record.</td>
<td>String</td>
</tr>
<tr>
<td>ExemptCertReviewStatusId</td>
<td> For AvaTax Certs record, the review status of the record. Possible values are: Accepted, Pending, Rejected.</td>
<td> ExemptCertReviewStatus</td>
</tr>
<tr>
<td>EntityTypeDescription</td>
<td> A description of the entity associated with the certificate record, if applicable.</td>
<td> String</td>
</tr>
<tr>
<td>BusinessTypeDescription</td>
<td>A human-readable version of BusinessTypeId.</td>
<td> String</td>
</tr>
<tr>
<td>BusinessTypeId</td>
<td> The type of industry the customer belongs to.</td>
<td>Byte</td>
</tr>
<tr>
<td>BusinessTypeOtherDescription</td>
<td>  A description of the business type, if BusinessTypeId is Other.</td>
<td></td>
</tr>
<tr>
<td>ExemptReasonId</td>
<td> The exemption reason associated with the certificate, coded by CustomerUsagetype (e.g. G for Resale).</td>
<td> String</td>
</tr>
<tr>
<td>ExemptReasonDescription</td>
<td> A human-readable version of ExemptReasonId.</td>
<td> String</td>
</tr>
<tr>
<td>ExemptReasonOtherDescription</td>
<td> A description of the certificate reason, if ExemptReasonId is L (Other).</td>
<td> String</td>
</tr>
<tr>
<td>ExemptTypeDescription</td>
<td> An additional description of the exemption reason, if applicable</td>
<td> String</td>
</tr>
<tr>
<td>CustomerName</td>
<td> The business name for the customer to whom the certificate applies.</td>
<td> String</td>
</tr>
<tr>
<td>Address1</td>
<td> The first address line for the main business address for the customer to which the certificate applies. This address is for information only, and does not affect the behavior of the certificate.</td>
<td> String</td>
</tr>
<tr>
<td>Address2</td>
<td> The second address line for the customer.</td>
<td> String</td>
</tr>
<tr>
<td>Address3</td>
<td> The third address line for the customer.</td>
<td>String</td>
</tr>
<tr>
<td>City</td>
<td> The city associated with the customer address.</td>
<td> String</td>
</tr>
<tr>
<td>Region</td>
<td> The region or state associated with the customer address.</td>
<td> String</td>
</tr>
<tr>
<td>PostalCode</td>
<td> The postal code or zip code associated with the customer address.</td>
<td> String</td>
</tr>
<tr>
<td>Country</td>
<td> The country where the customer address is located.</td>
<td> String</td>
</tr>
<tr>
<td>LastTransactionDate</td>
<td> If the exemption certificate has been applied to a transaction, the date that application occurred.</td>
<td> DateTime</td>
</tr>
<tr>
<td>EffDate</td>
<td>The effective date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ExpiryDate</td>
<td>The expiration date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the record was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the record.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the record was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>ExemptDetailsFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of ExemptCertDetail objects (in common response format), including any special fields designated in the request. For a given ExemptCert record, there may be many ExemptDetail - each of which represents a state to which the certificate is applicable.
<h4>Response</h4>
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
<td>ExemptCertDetails</td>
<td>An array of ExemptCertDetail objects that fit the specified filter criteria.</td>
<td>ExemptCertDetail[]</td>
</tr>
</tbody>
</table>
ExemptCertDetail
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
<td>Country</td>
<td> The country where the ExemptCertDetail applies.</td>
<td> String</td>
</tr>
<tr>
<td>ExemptCertDetailId</td>
<td> The unique, system-assigned identifier of the ExemptCertDetail record.</td>
<td> Integer</td>
</tr>
<tr>
<td>ExemptCertId</td>
<td> The unique, system-assigned identifier of the ExemptCert to which the detail belongs.</td>
<td> Integer</td>
</tr>
<tr>
<td>IdNo</td>
<td> The unique, state-assigned identifier demarcated on the certificate.</td>
<td> String</td>
</tr>
<tr>
<td>IdType</td>
<td> The type of unique, state-assigned identifier demarcated on the certificate.</td>
<td> String</td>
</tr>
<tr>
<td>Region</td>
<td> The region or state to where the certificate applies.</td>
<td> String</td>
</tr>
<tr>
<td>StateFips</td>
<td> The FIPS of the state where the certificate applies.</td>
<td> String</td>
</tr>
<tr>
<td>EndDate</td>
<td>The expiration date of the record.</td>
<td>DateTime</td>
</tr>
</tbody>
</table>
<h3>ExemptReasonFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of ExemptCertReason objects (in common response format), including any special fields designated in the request.
<h4>Response</h4>
ExemptReasonFetchResult
ExemptReason
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
<td>Country</td>
<td> The country where the reason applies.</td>
<td> String</td>
</tr>
<tr>
<td>Description</td>
<td> The human-readable description of the ExemptReason.</td>
<td> String</td>
</tr>
<tr>
<td>ExemptReasonId</td>
<td> The Id used to refer to this exemption reason.</td>
<td> String</td>
</tr>
</tbody>
</table>
<h3>BusinessAndExemptCertReasonFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of BusinessAndExemptCertReason objects (in common response format), including any special fields designated in the request.
<h4>Response</h4>
BusinessAndExemptCertReasonFetchResult
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
<td>BusinessExemptCertReasons</td>
<td>An array of BusinessAndExemptCertReason objects that fit the specified filter criteria.</td>
<td>BusinessAndExemptCertReasons[]</td>
</tr>
</tbody>
</table>
BusinessAndExemptCertReasons
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
<td>BusinessAndExemptReasonId</td>
<td> The unique identifier of the Business/Exempt certificate reason.</td>
<td> Integer</td>
</tr>
<tr>
<td>BusinessTypeId</td>
<td> The unique identifier of the business type associated with the reason.</td>
<td> Integer</td>
</tr>
<tr>
<td>ExemptReasonDescription</td>
<td> The human-readable description of the exempt reason.</td>
<td> String</td>
</tr>
<tr>
<td>ExemptReasonId</td>
<td> The unique identifier of the exemption reason.</td>
<td> Integer</td>
</tr>
<tr>
<td>IsEntity</td>
<td> An indication if the Cert Reason/Business type combination represents an entity.</td>
<td> Boolean</td>
</tr>
</tbody>
</table>
<h3>BusinessTypeFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of BusinessType objects (in common response format), including any special fields designated in the request. By omitting filters, all possible system values can be retrieved.
<h4>Result</h4>
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
<td>BusinessTypeId</td>
<td>The unique identifier of the business type value.</td>
<td>Integer</td>
</tr>
<tr>
<td>BusinessTypeDescription</td>
<td>A human-readable description of the business type.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>ExemptCertSave</h3>
Creates a new ExemptCert record associated with a company, or updates an existing one. To create a new ExemptCert record, specify ExemptCertId of 0 in the request object. To update a record, specify the actual ExemptCertId for the existing record, and change any values that you would like to update. Note that applied, expired, and revoked certificate records cannot be updated.
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
<td>ExemptCert</td>
<td>The record to be updated or created.</td>
<td>ExemptCert</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
ExemptCertSaveResult
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
<td>ExemptCertId</td>
<td>The ExemptCertId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>ExemptCertApply</h3>
ExemptCertApply may be used to apply existing exemption certificate records to existing transaction records. This is especially useful when clearing historical exemption exposure. It does not initiate a recalculation on any transaction record, rather, it just applies certificates to already-exempt transactions where appropriate.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as ExemptCertApplyRequest.
<h4>Response</h4>
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
<td>DocumentCount</td>
<td>The number of documents to which certificates were applied.</td>
<td>Integer</td>
</tr>
<tr>
<td>LineCount</td>
<td>The number of document lines to which certificates were applied.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>ExemptCertRevoke</h3>
This method may be used to change the status of an existing exemption certificate from "Active" to "Revoked". This is an excellent option if a certificate is no longer valid, but can not be deleted because it has been applied to a document record.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as ExemptCertRevokeRequest.
<h4>Response</h4>
ExemptCertRevokeResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h2><a name="CompanyLocation"></a>CompanyLocation</h2>
<h3>CompanyLocationFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of CompanyLocation objects (in common response format), including any special fields designated in the request.
<h4>Response</h4>
CompanyLocationFetchResult
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
<td>CompanyLocations</td>
<td>An array of location objects that fit the specified filter criteria.</td>
<td>CompanyLocation[]</td>
</tr>
</tbody>
</table>
CompanyLocation
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
<td>AddressCategoryId</td>
<td>A system-assigned indicator of the address category.</td>
<td>Integer</td>
</tr>
<tr>
<td>AddressCategoryDescription</td>
<td>A human-readable indicator of the address category.</td>
<td>String</td>
</tr>
<tr>
<td>AddressTypeId</td>
<td>A system-assigned indicator of the address type.</td>
<td>Integer</td>
</tr>
<tr>
<td>AddressTypeDescription</td>
<td>A human-readable indicator of the address type.</td>
<td>String</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The CompanyId of the company to which the location belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyLocationId</td>
<td>The unique, system-assigned identifier of the CompanyLocation record.</td>
<td>Integer</td>
</tr>
<tr>
<td>Country</td>
<td>The country where the location is located.</td>
<td>String</td>
</tr>
<tr>
<td>DBAName</td>
<td>The DBA name of the location, if applicable.</td>
<td>String</td>
</tr>
<tr>
<td>Description</td>
<td>A description of the location.</td>
<td>String</td>
</tr>
<tr>
<td>Line1</td>
<td>The first line of the address of the location.</td>
<td>String</td>
</tr>
<tr>
<td>Line2</td>
<td>The second line of the address of the location.</td>
<td>String</td>
</tr>
<tr>
<td>Line3</td>
<td>The third line of the address of the location.</td>
<td>String</td>
</tr>
<tr>
<td>City</td>
<td>The city where the location is located.</td>
<td>String</td>
</tr>
<tr>
<td>County</td>
<td>The county where the location is located.</td>
<td>String</td>
</tr>
<tr>
<td>PostalCode</td>
<td>The zip or postal code of the location.</td>
<td>String</td>
</tr>
<tr>
<td>IsDefault</td>
<td>Indicates if the location is the default location for the company.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsRegistered</td>
<td>Indicates if the location is registered with the state or local tax authority.</td>
<td>Boolean</td>
</tr>
<tr>
<td>LastTransactionDate</td>
<td>The date of the last transaction associated with the location.</td>
<td>DateTime</td>
</tr>
<tr>
<td>LocationCode</td>
<td>The company-wide unique, user defined identifier of the location.</td>
<td>String</td>
</tr>
<tr>
<td>OutletName</td>
<td>The name of the location.</td>
<td>String</td>
</tr>
<tr>
<td>StateAssignedCode</td>
<td>The unique, state-assigned identifier of the location, if any.</td>
<td>String</td>
</tr>
<tr>
<td>RegisteredDate</td>
<td>The date the location was registered with the tax authority, if applicable.</td>
<td>DateTime</td>
</tr>
<tr>
<td>StartDate</td>
<td>The effective date of the location record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>EndDate</td>
<td>The expiration date of the record.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the record was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the record.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the record was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanyLocationSave</h3>
Creates a new CompanyLocation record associated with a company, or updates an existing one. To create a new CompanyLocation record, specify CompanyLocationId of 0 in the request object. To update a record, specify the actual CompanyLocationId for the existing record, and change any values that you would like to update.
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
<td>CompanyLocation</td>
<td>The record to be updated or created.</td>
<td>CompanyLocation</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
CompanyLocationSaveResult
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
<td>CompanyLocationId</td>
<td>The CompanyLocationId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanyLocationDelete</h3>
Allows for the deletion of CompanyLocation records.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h3>CompanyLocationSettingFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of CompanyLocationSetting objects (in common response format), including any special fields designated in the request. Note that the CompanyLocationSetting is meaningful only in the context of both a CompanyLocation.
<h4>Response</h4>
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
<td>CompanyLocationSettings</td>
<td>An array of company location setting objects that fit the specified filter criteria.</td>
<td>CompanyLocationSetting[]</td>
</tr>
</tbody>
</table>
CompanyLocationSetting
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
<td>CompanyLocationId</td>
<td>The CompanyLocationId of the CompanyLocation to which the CompanyLocationSetting belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyLocationSettingConfigId</td>
<td>The Id of the CompanyLocationSettingConfig record associated with this CompanyLocationSetting.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyLocationSettingId</td>
<td>The unique, system-assigned identifier of the CompanyLocationSetting record.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyLocationSettingTypeValue</td>
<td>The type of location setting described by the CompanyLocationSetting and CompanyLocationSettingConfig.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>CompanyLocationSettingSave</h3>
Creates a new CompanyLocationSetting record associated with a company, or updates an existing one. To create a new CompanyLocationSetting record, specify CompanyLocationSettingId of 0 in the request object. To update a record, specify the actual CompanyLocationSettingId for the existing record, and change any values that you would like to update.
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
<td>CompanyLocationSetting</td>
<td>The record to be updated or created.</td>
<td>CompanyLocationSetting</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
CompanyLocationSettingSaveResult
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
<td>CompanyLocationSettingId</td>
<td>The CompanyLocationSettingId of the updated or created record.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>CompanyLocationSettingDelete</h3>
Allows for the deletion of CompanyLocationSetting records. It is recommended that users interact with CompanyLocationSetting and CompanyLocationSettingConfig records through the Admin Console interface as opposed to the API, as additional logic is present there to guide their interaction.
<h4>Request</h4>
Generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a>, as DeleteRequest.
<h4>Response</h4>
DeleteResult, in the format of a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterResult</a>.
<h3>CompanyLocationSettingConfigFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of CompanyLocationSettingConfig objects (in common response format), including any special fields designated in the request. Note that the CompanyLocationSettingConfig is uniquely meaningful only in the context of both a CompanyLocation and CompanyLocationSetting. CompanyLocationSettingConfig records also exist generically, to define the required data elements for a given jurisdiction.
<h4>Response</h4>
CompanyLocationSettingConfigFetchResult
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
<td>CompanyLocationSettingConfigs</td>
<td>An array of location setting config objects that fit the specified filter criteria.</td>
<td>CompanyLocationSettingConfig[]</td>
</tr>
</tbody>
</table>
CompanyLocationSettingConfig
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
<td>CompanyLocationSettingConfigId</td>
<td>The unique, system-assigned identifier of the CompanyLocationSettingConfig.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyLocationSettingConfigIdSpecified</td>
<td>Indicates if the record is tied to a specific location record, or is a generic record that defines a jurisdictional requirement.</td>
<td>Boolean</td>
</tr>
<tr>
<td>CompanyLocationSettingTypeId</td>
<td>The system-assigned value for the CompanyLocationSettingType.</td>
<td></td>
</tr>
<tr>
<td>CompanyLocationSettingTypeIdSpecified</td>
<td>Indicates if the record is tied to a specific location record, or is a generic record that defines a jurisdictional requirement.</td>
<td>Boolean</td>
</tr>
<tr>
<td>CompanyLocationSettingTypeName</td>
<td>The human-readable value that indicates the type of identifier this record represents.</td>
<td></td>
</tr>
<tr>
<td>Country</td>
<td>The country where the location/requirement is located.</td>
<td>String</td>
</tr>
<tr>
<td>JurisCode</td>
<td>The JurisCode of the jurisdiction where the location/requirement is located.</td>
<td>String</td>
</tr>
<tr>
<td>JurisType</td>
<td>The JurisType of the jursdiction where the location/requirement is located.</td>
<td>JurisType</td>
</tr>
<tr>
<td>State</td>
<td>The state where the location/requirement is located.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>AddressCategoryFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of AddressCategory objects (in common response format), including any special fields designated in the request. By omitting filters, all possible values for AddressCategory may be retrieved.
<h4>Response</h4>
AddressCategoryFetchResult
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
<td>AddressCategories</td>
<td>An array of address category objects that fit the specified filter criteria.</td>
<td>AddressCategory[]</td>
</tr>
</tbody>
</table>
AddressCategory
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
<td>AddressCategoryId</td>
<td>The system-assigned value for the AddressCategory.</td>
<td>Integer</td>
</tr>
<tr>
<td>Description</td>
<td>The human-readable value for the AddressCategory.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>AddressTypeFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of AddressType objects (in common response format), including any special fields designated in the request. By omitting filters, all possible values for AddressType may be retrieved.
<h4>Response</h4>
AddressTypeFetchResult
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
<td>AddressTypes</td>
<td>An array of address type objects that fit the specified filter criteria.</td>
<td>AddressType[]</td>
</tr>
</tbody>
</table>
AddressType
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
<td>AddressTypeId</td>
<td>The system-assigned value for the AddressType.</td>
<td>Integer</td>
</tr>
<tr>
<td>Description</td>
<td>The human-readable value for the AddressType.</td>
<td>String</td>
</tr>
</tbody>
</table>
