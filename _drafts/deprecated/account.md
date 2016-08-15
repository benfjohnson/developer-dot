---
layout: page
title: Account Elements
date: 2013-03-31 22:50
author: anya.stettler
comments: true
categories: []
product: avaTax
doctype: api-reference
---
<h3>AccountFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of Account objects (in common response format), including any special fields designated in the request. On the request, Filters are not required, as the credentials used will only have access to a single account.

The following Account properties must be specified in FetchRequest.Fields if they are desired: Site, AddressServiceConfig, Companies, FormsServiceConfig, Services, TaxServiceConfig, Users.
<h4>Result</h4>
AccountFetchResult
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
<td>Accounts</td>
<td>Array of accounts that match the specified filter criteria.</td>
<td>Account[]</td>
</tr>
<tr>
<td>RecordCount</td>
<td>The number of accounts found.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
&nbsp;

Account
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
<td>The unique account number</td>
<td>Integer</td>
</tr>
<tr>
<td>AccountName</td>
<td>The business name associated with the account.</td>
<td>String</td>
</tr>
<tr>
<td>AccountStatusId</td>
<td>The status of the account. Possible values are: Active, Inactive, New, Test.</td>
<td>AccountStatusId</td>
</tr>
<tr>
<td>AddressServiceConfig</td>
<td>The account-level AddressSvc configuration.</td>
<td>AddressServiceConfig</td>
</tr>
<tr>
<td>Companies</td>
<td>An array of all companies associated with the account. For more information about the Company object, see <a href="/api-docs/soap/accountsvc/company">this page</a>.</td>
<td>Company[]</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the account was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the account.</td>
<td>Integer</td>
</tr>
<tr>
<td>EffDate</td>
<td>The start date of the account.</td>
<td>DateTime</td>
</tr>
<tr>
<td>EndDate</td>
<td>The expiration date of the account.</td>
<td>DateTime</td>
</tr>
<tr>
<td>FormsServiceConfig</td>
<td>The account-level filing service configuration,. If filing is not enabled on the account, this contains mostly default values.</td>
<td>FormsServiceConfig</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date/time the account-level information was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user that performed the last account-level modification.</td>
<td>Integer</td>
</tr>
<tr>
<td>Services</td>
<td>An array of services enabled for the account.</td>
<td>Service[]</td>
</tr>
<tr>
<td>Site</td>
<td>Site information for the AvaTax site on which the account resides.</td>
<td>Site</td>
</tr>
<tr>
<td>SiteId</td>
<td>Internal ID for the site on which the account resides.</td>
<td>Integer</td>
</tr>
<tr>
<td>TaxServiceConfig</td>
<td>Account-level configuration for TaxSvc.</td>
<td>TaxServiceConfig</td>
</tr>
<tr>
<td>Users</td>
<td>All users associated with the account.</td>
<td>User[]</td>
</tr>
</tbody>
</table>
<h3>AccountActivate</h3>
Allows the user to activate a new account through an API call (as opposed to logging in to the account from the Admin Console initially). It is recommended that users activate the account through the Admin Console, however, as account activation indicates that the MSA has been read and accepted. Note that this operation is only useful for Accounts with an AccountStatusId of New, but if the account is already active, a ResultCode of Success is returned.
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
<td>Account</td>
<td>The account that should be activated. For the Account object format, see the response to AccountFetch.</td>
<td>Account</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
The result object is an AccountSaveResult:
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
<td>The account number of the target account.</td>
<td>Integer</td>
</tr>
<tr>
<td>Key</td>
<td>For this operation, Key will always be a null value.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>AccountResetKey</h3>
Allows the user to reset the License Key for the specified account. Note that this should be used with care. For more information on resetting the license key, see <a title="Logins and Resources" href="/api-docs/best-practices/logins">this page</a>.
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
<td>AccountId</td>
<td>The account number of the target account.</td>
<td>Integer</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
The result object is an AccountSaveResult:
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
<td>The account number of the target account.</td>
<td>Integer</td>
</tr>
<tr>
<td>Key</td>
<td>The new license key for the account.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>ServiceConfigFetch</h3>
<h4>Request</h4>
Uses the common <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a>. If no filters are specified, ServiceConfigFetch will return all service configurations associated with the accessible account.
<h4>Result</h4>
&nbsp;

ServiceConfigFetchResult
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
<td>ServiceConfig</td>
<td>An object containing the different types of ServiceConfig objects.</td>
<td>ServiceConfig</td>
</tr>
</tbody>
</table>
&nbsp;

ServiceConfig
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
<td>The account number of the account to which the configurations apply.</td>
<td>Integer</td>
</tr>
<tr>
<td>AddressServiceConfig</td>
<td>The configuration for the address validation service.</td>
<td>AddressServiceConfig</td>
</tr>
<tr>
<td>FormsServiceConfig</td>
<td>The configuration for the filing service, if applicable.</td>
<td>FormsServiceConfig</td>
</tr>
<tr>
<td>TaxServiceConfig</td>
<td>The configuration for the tax calculation service.</td>
<td>TaxServiceConfig</td>
</tr>
</tbody>
</table>
&nbsp;

AddressServiceConfig
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
<td>IsJaasDisabled</td>
<td>Deprecated. All accounts are set to false.</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsUpperCase</td>
<td>Determines whether validated addresses are returned in upper case (as opposed to mixed case).</td>
<td>Boolean</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the service instance was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the service instance.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the configuration was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the configuration.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
&nbsp;

FormsServiceConfig
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
<td>The account number of the account to which the configuration belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>ReviewActionDefault</td>
<td>Indicates the default action upon approval of a liability worksheet: file with payment, file without payment, or do not file.</td>
<td>Byte</td>
</tr>
<tr>
<td>WorksheetDay</td>
<td>Indicates the day of the month on which the liability worksheets are first built: 1st, 2nd, 3rd, 4th, or 5th.</td>
<td>Byte</td>
</tr>
<tr>
<td>ZeroDollarActionDefault</td>
<td>Indicates the default action for zero-dollar returns: file without payment or do not file.</td>
<td>Byte</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the service instance was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the service instance.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the configuration was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the configuration.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
&nbsp;

TaxServiceConfig
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
<td>EcmsEnabled</td>
<td>Indicates whether the exemption certificate management system is enabled on the account.</td>
<td>Boolean</td>
</tr>
<tr>
<td>EcmsCertUseCa</td>
<td>How Canadian exemption certificates entered in the ECMS are used to calculate tax. Possible values are: Optional, Ignored, Required.</td>
<td>EcmsCertUseId</td>
</tr>
<tr>
<td>EcmsCertUseUs</td>
<td>How U.S. exemption certificates entered in the ECMS are used to calculate tax. Possible values are: Optional, Ignored, Required.</td>
<td>EcmsCertUseId</td>
</tr>
<tr>
<td>EcmsOverrideCode</td>
<td>A string that can be passed as a <a title="Tax Exempt Customers" href="/api-docs/designing-your-integration/handling-tax-exempt-customers">CustomerUsageType</a> to override the presence of an ECMS record for tax calculation.</td>
<td>String</td>
</tr>
<tr>
<td>EcmsSstCertsRequired</td>
<td>For system use - <a href="http://www.avalara.com/learn/whitepapers/streamlined-sales-tax/">SST</a> customers are required to enter certificate data in the ECMS, and may not exempt transactions with <a href="/api-docs/designing-your-integration/handling-tax-exempt-customers">CustomerUsageType or ExemptionNo</a>.</td>
<td>Boolean</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the service instance was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The UserId of the user who created the service instance.</td>
<td>Integer</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the configuration was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The UserId of the user who last modified the configuration.</td>
<td>Integer</td>
</tr>
<tr>
<td>EcmsCompleteCertsRequired</td>
<td>Deprecated</td>
<td>Boolean</td>
</tr>
<tr>
<td>IsJaasDisabled</td>
<td>Deprecated</td>
<td>Boolean</td>
</tr>
<tr>
<td>RequireMappedItemCode</td>
<td>Deprecated</td>
<td>Boolean</td>
</tr>
<tr>
<td>RequireOriginAddress</td>
<td>Deprecated</td>
<td>Boolean</td>
</tr>
<tr>
<td>MaxLines</td>
<td>For internal use only.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>ServiceFetch</h3>
<h4>Request</h4>
Uses the common <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a>. If no filters are specified, ServiceFetch will return all services associated with the accessible account.
<h4>Result</h4>
ServiceFetchResult
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
<td>Number of records returned.</td>
<td>Integer</td>
</tr>
<tr>
<td>Sites</td>
<td>An array of services that met the specified filter criteria in the request.</td>
<td>Service[]</td>
</tr>
</tbody>
</table>
<h3>SiteFetch</h3>
<h4>Request</h4>
Uses the common <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a>. SiteFetch will only return information for the site which hosts the accessible account.
<h4>Result</h4>
SiteFetchResult
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
<td>Number of records returned.</td>
<td>Integer</td>
</tr>
<tr>
<td>Sites</td>
<td>An array of sites that met the specified filter criteria in the request.</td>
<td>Site[]</td>
</tr>
</tbody>
</table>
&nbsp;

Site
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
<td>CspId</td>
<td>The certified service provider Id of the specified site. This is a meaningful value for production accounts only - for development accounts, a blank string is returned.</td>
<td>String</td>
</tr>
<tr>
<td>EffDate</td>
<td>The start date of the site.</td>
<td>DateTime</td>
</tr>
<tr>
<td>EndDate</td>
<td>The current expiration date of the site.</td>
<td>DateTime</td>
</tr>
<tr>
<td>SiteId</td>
<td>The unique system identifier of the site.</td>
<td>Integer</td>
</tr>
<tr>
<td>SiteName</td>
<td>The readable name of the site.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>JurisdictionOverrideFetch</h3>
<h4>Request</h4>
Uses the common <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a>. If no filters are specified, ServiceConfigFetch will return all Jurisdiction Overrides associated with the accessible account.
<h4>Result</h4>
JurisdictionOverrideFetchResult
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
<td>Number of records returned.</td>
<td>Integer</td>
</tr>
<tr>
<td>JurisdictionOverrides</td>
<td>An array of Jurisdiction Overrides that met the specified filter criteria in the request.</td>
<td>JurisdictionOverride[]</td>
</tr>
</tbody>
</table>
&nbsp;

JurisdictionOverride
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
<td>The account number of the account to which the jurisdiction override belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>Address</td>
<td>The address line information of the overridden address (only if specified).</td>
<td>String</td>
</tr>
<tr>
<td>City</td>
<td>The city information of the overridden address (if specified).</td>
<td>String</td>
</tr>
<tr>
<td>Region</td>
<td>The state or region of the overridden address.</td>
<td>String</td>
</tr>
<tr>
<td>PostalCode</td>
<td>The zip or postal code of the overridden address.</td>
<td>String</td>
</tr>
<tr>
<td>TaxRegionId</td>
<td>The TaxRegionId of the overridden address, if available.</td>
<td>Integer</td>
</tr>
<tr>
<td>Country</td>
<td>The country of the overridden address.</td>
<td>String</td>
</tr>
<tr>
<td>BoundaryLevel</td>
<td>The boundary level of the jurisdictional override. Possible values are: PreciseZIP9, VeryPreciseFullAddress, ZIP5Only.</td>
<td>BoundaryLevelId</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>The date the override was created.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>The userId of the user who created the override.</td>
<td>Integer</td>
</tr>
<tr>
<td>Description</td>
<td>The user-specified description of the override.</td>
<td>String</td>
</tr>
<tr>
<td>EffDate</td>
<td>The effective date of the override.</td>
<td>DateTime</td>
</tr>
<tr>
<td>EndDate</td>
<td>The expiration date of the override.</td>
<td>DateTime</td>
</tr>
<tr>
<td>IsDefault</td>
<td>Reserved for internal use, will always be False.</td>
<td>Boolean</td>
</tr>
<tr>
<td>JurisdictionOverrideId</td>
<td>A unique identifier of the jurisdiction override record.</td>
<td>Integer</td>
</tr>
<tr>
<td>Jurisdictions</td>
<td>The jurisdictions assigned by the override.</td>
<td>Jurisdiction[]</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>The date the override was last modified.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>The userId of the user who last modified the override.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
&nbsp;

Jurisdiction
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
<td>JurisCode</td>
<td>The state-assigned identifier of the jurisdiction.</td>
<td>String</td>
</tr>
<tr>
<td>JurisName</td>
<td>The name of the jurisdiction.</td>
<td>String</td>
</tr>
<tr>
<td>JurisTypeId</td>
<td>The type of jurisdiction. Possible values are: CIT, CNT, CTY, STA, STJ.</td>
<td>JurisTypeId</td>
</tr>
<tr>
<td>Rate</td>
<td>The generic rate associated with the jurisdiction.</td>
<td>Decimal</td>
</tr>
<tr>
<td>SalesRate</td>
<td>The sales tax rate associated with the jurisdiction.</td>
<td>Decimal</td>
</tr>
<tr>
<td>UseRate</td>
<td>The use tax rate associated with the jurisdiction.</td>
<td>Decimal</td>
</tr>
<tr>
<td>SignatureCode</td>
<td>Reserved for future use.</td>
<td>String</td>
</tr>
<tr>
<td>StateCode</td>
<td>The unique identifier of state in which the jurisdiction exists.</td>
<td>String</td>
</tr>
</tbody>
</table>
&nbsp;
<h2>Users</h2>
The following operations allow an administrator to interact with the users associated with an account. Note that all users are associated with an account - even company-level users.
<h3>UserFetch</h3>
<h4>Request</h4>
Uses the generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> to return an array of User objects (in common response format), including any special fields designated in the request.
<h4>Result</h4>
UserFetchResult
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
<td>The number of users found that matched the specified criteria.</td>
<td>Integer</td>
</tr>
<tr>
<td>Users</td>
<td>An array of user objects that matched the filter criteria.</td>
<td>User[]</td>
</tr>
</tbody>
</table>
&nbsp;

User
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
<td>Account</td>
<td>The account to which the user belongs</td>
<td>Account</td>
</tr>
<tr>
<td>AccountId</td>
<td>The account number of the account to which the user belongs.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompanyId</td>
<td>If the user is associated with a specific company, the CompanyId of that associated company.</td>
<td>Integer</td>
</tr>
<tr>
<td>Email</td>
<td>The email address associated with the user.</td>
<td>String</td>
</tr>
<tr>
<td>FailedLoginAttempts</td>
<td>Number of failed login attempts since the last successful login.</td>
<td>Integer</td>
</tr>
<tr>
<td>FirstName</td>
<td>The first name associated with the user.</td>
<td>String</td>
</tr>
<tr>
<td>LastName</td>
<td>The last name associated with the user.</td>
<td>String</td>
</tr>
<tr>
<td>Password</td>
<td>The password associated with the user account. Note that this cannot be returned in a fetch request, but can be specified on a UserSave request to change a password.</td>
<td>String</td>
</tr>
<tr>
<td>PasswordStatusId</td>
<td>The status of the current password. Possible values are: UserCanChange, UserCannotChange, UserMustChange.</td>
<td>PasswordStatusId</td>
</tr>
<tr>
<td>IsActive</td>
<td>The status of the account. Inactive accounts cannot be used to authenticate API requests or to log in to the Admin Console.</td>
<td>Boolean</td>
</tr>
<tr>
<td>SecurityRoleId</td>
<td>Indicates the access level of the user. There are many SecurityLevelId values in the service, but the only values for customer accounts are: AccountAdmin, AccountUser, CompanyUser, CompanyAdmin, NoAccess.</td>
<td>SecurityRoleId</td>
</tr>
<tr>
<td>SecurityRole</td>
<td>For internal use only.</td>
<td>SecurityRole</td>
</tr>
<tr>
<td>UserId</td>
<td>The unique, system-assigned ID for the user.</td>
<td>Integer</td>
</tr>
<tr>
<td>UserName</td>
<td>The unique username for the user.</td>
<td>String</td>
</tr>
<tr>
<td>Permissions</td>
<td>For internal use only.</td>
<td>Permission</td>
</tr>
</tbody>
</table>
<h3>UserSave</h3>
Creates a new user, or updates an existing one. To create a new user, specify UserId of 0 in the request object. To updated a user, specify the actual UserId for the existing user, and change any values that you would like to update.
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
<td>User</td>
<td>The user to be updated or created.</td>
<td>User</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h4>Result</h4>
UserSaveResult
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
<td>UserId</td>
<td>The UserId of the updated or created user.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>UserResetPassword</h3>
Resets the password all users that fit the specified criteria and emails the new, temporary password to the User.Email for each user match.
<h4>Request</h4>
UserResetPasswordRequest of the <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FilterRequest</a> format.
<h4>Result</h4>
Result is in <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">Common Response Format</a>, with no additional values.
