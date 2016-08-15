---
layout: page
title: AccountSvc
date: 2013-03-31 20:40
author: anya.stettler
comments: true
categories: []
product: avaTax
doctype: api-reference
---
AccountSvc is not typically recommended for standard, single-tenant integrations. It adds an additional layer of complexity to your integration by circumventing the standard Admin Console experience. This makes Avalara's ability to support the end customer more limited, and puts more of that support burden on the owner of the connector. For these reasons, we ask that you speak to a developer engineer directly before moving ahead with an AccountSvc integration. Using some resources in the AccountSvc API without sufficient understanding of the tax profile could result in serious tax liability issues for your client.
<blockquote><strong>Note:</strong> If you browse to and examine the <a href="https://avatax.avalara.net/account/AccountSvc.wsdl">AccountSvc WSDL</a>, you will find additional methods and objects not referenced in this document. It is <strong>not recommended</strong> that you use these methods.</blockquote>
The AvaTax AccountSvc API allows you to interact with the company profile and admin console data on a given account. An integration that uses AccountSvc will still use GetTax to communicate with a company profile in the same way as one that does not use AccountSvc - the only difference will be the user experience in setting up that company profile.
<blockquote><strong>Note:</strong> AccountSvc is currently accessible through the SOAP API only by using our .NET class library or building your own from WSDL. All requests must be authenticated with Account Admin level username/password credentials. <strong>The account number/license key credential pair cannot be used for AccountSvc.</strong></blockquote>
The methods exposed are:
<h3><a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">Generic Methods</a></h3>
Ping
IsAuthorized
<h3><a title="Account-level Elements" href="/api-docs/soap/accountsvc/account">Account-level Elements</a></h3>
AccountActivate
AccountFetch
AccountResetKey
ServiceConfigFetch
ServiceFetch
SiteFetch
JurisdictionOverrideFetch
<h4>Users</h4>
UserFetch
UserSave
UserResetPassword
<h3><a title="Company Elements" href="/api-docs/soap/accountsvc/company-elements">Company Elements</a></h3>
CompanyDelete
CompanyFetch
CompanySave
CompanyContactDelete
CompanyContactFetch
CompanyContactSave
<h3><a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">Tax Profile Elements</a></h3>
<h4>Nexus</h4>
NexusDelete
NexusFetch
NexusSave
<h4>Tax Codes</h4>
TaxCodeDelete
TaxCodeFetch
TaxCodeSave
<h4>Tax Rules</h4>
TaxRuleDelete
TaxRuleFetch
TaxRuleSave
<h4>Items</h4>
ItemDelete
ItemFetch
ItemSave
<h4>Exemption Certificates</h4>
ExemptCertApply
ExemptCertDelete
ExemptCertFetch
ExemptCertRevoke
ExemptCertSave
ExemptDetailsFetch
ExemptReasonFetch
BusinessAndExemptCertReasonFetch
BusinessTypeFetch
<h4>CompanyLocation</h4>
CompanyLocationDelete
CompanyLocationFetch
CompanyLocationSave
CompanyLocationSettingConfigFetch
CompanyLocationSettingFetch
CompanyLocationSettingSave
CompanyLocationSettingDelete
AddressCategoryFetch
AddressTypeFetch
<h3><a href="/api-docs/soap/accountsvc/document-elements">Documents</a></h3>
DocumentFetch
AdjustmentReasonFetch
