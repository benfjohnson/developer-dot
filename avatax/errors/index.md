---
layout: page
title: REST Error Codes
product: AvaTax
doctype: use_cases
nav: apis
community: errors
---

Also see [SOAP Error Codes](/avatax/common-errors) for error messages defined in the SOAP v1 API.

<table class="styled-table">
	<thead>
		<tr>
			<th valign = "top" width="75">Number</th>
			<th valign = "top" width="168">Message</th>
			<th valign = "top" width="245">Summary</th>
		</tr>
	</thead>
	<tbody>
		
        <tr>
			<td>1</td>
			<td><a href="ServerConfiguration">ServerConfiguration</a></td>
			<td>Indicates that there is a server configuration problem with one of the servers in Avalara's AvaTax cluster.</td>
		</tr>		
        <tr>
			<td>2</td>
			<td><a href="AccountInvalidException">AccountInvalidException</a></td>
			<td>You attempted to read information about an account that does not exist.</td>
		</tr>		
        <tr>
			<td>3</td>
			<td><a href="CompanyInvalidException">CompanyInvalidException</a></td>
			<td>You attempted to modify a company that does not exist.</td>
		</tr>		
        <tr>
			<td>4</td>
			<td><a href="EntityNotFoundError">EntityNotFoundError</a></td>
			<td>You attempted to act on, retrieve, update, or delete an object that does not exist.</td>
		</tr>		
        <tr>
			<td>5</td>
			<td><a href="ValueRequiredError">ValueRequiredError</a></td>
			<td>You submitted a request and did not provide a value in a required field.</td>
		</tr>		
        <tr>
			<td>6</td>
			<td><a href="RangeError">RangeError</a></td>
			<td>You attempted to set a value that must be within a range, but your value was outside of the range.</td>
		</tr>		
        <tr>
			<td>7</td>
			<td><a href="RangeCompareError">RangeCompareError</a></td>
			<td>You specified an out-of-bounds field value.</td>
		</tr>		
        <tr>
			<td>8</td>
			<td><a href="RangeSetError">RangeSetError</a></td>
			<td>You attempted to set a value that was not permitted.</td>
		</tr>		
        <tr>
			<td>9</td>
			<td><a href="TaxpayerNumberRequired">TaxpayerNumberRequired</a></td>
			<td>Customers subscribing to Avalara Returns must identify each company by its United States Taxpayer ID Number (TIN).</td>
		</tr>		
        <tr>
			<td>11</td>
			<td><a href="CommonPassword">CommonPassword</a></td>
			<td>The password you have chosen is a commonly-guessed password and cannot be used.</td>
		</tr>		
        <tr>
			<td>12</td>
			<td><a href="WeakPassword">WeakPassword</a></td>
			<td>The password you specified does not meet minimum complexity requirements.</td>
		</tr>		
        <tr>
			<td>13</td>
			<td><a href="StringLengthError">StringLengthError</a></td>
			<td>One of the strings you uploaded to the server is too long and cannot be saved.</td>
		</tr>		
        <tr>
			<td>15</td>
			<td><a href="EmailValidationError">EmailValidationError</a></td>
			<td>You attempted to provide an email address that does not conform to email address standards.</td>
		</tr>		
        <tr>
			<td>16</td>
			<td><a href="EmailMissingError">EmailMissingError</a></td>
			<td>You must provide an email address with this request.</td>
		</tr>		
        <tr>
			<td>17</td>
			<td><a href="ParserFieldNameError">ParserFieldNameError</a></td>
			<td>You attempted to search on a field that does not exist or cannot be searched.</td>
		</tr>		
        <tr>
			<td>18</td>
			<td><a href="ParserFieldValueError">ParserFieldValueError</a></td>
			<td>You attempted to search for a value that is not a correct value type.</td>
		</tr>		
        <tr>
			<td>19</td>
			<td><a href="ParserSyntaxError">ParserSyntaxError</a></td>
			<td>You provided an unrecognized string or token in the "$filter" parameter of your fetch request.</td>
		</tr>		
        <tr>
			<td>20</td>
			<td><a href="ParserTooManyParametersError">ParserTooManyParametersError</a></td>
			<td>You attempted a fetch call that included too many parameters.</td>
		</tr>		
        <tr>
			<td>21</td>
			<td><a href="ParserUnterminatedValueError">ParserUnterminatedValueError</a></td>
			<td>You attempted to retrieve data with a "$filter" parameter that contained syntax errors.</td>
		</tr>		
        <tr>
			<td>22</td>
			<td><a href="DeleteUserSelfError">DeleteUserSelfError</a></td>
			<td>A user account may not call DELETE on the user itself.</td>
		</tr>		
        <tr>
			<td>23</td>
			<td><a href="OldPasswordInvalid">OldPasswordInvalid</a></td>
			<td>You attempted to reset a password but you did not provide a correct old password value.</td>
		</tr>		
        <tr>
			<td>24</td>
			<td><a href="CannotChangePassword">CannotChangePassword</a></td>
			<td>You attempted to change passwords for a user who is not permitted to change their password.</td>
		</tr>		
        <tr>
			<td>25</td>
			<td><a href="CannotChangeCompanyCode">CannotChangeCompanyCode</a></td>
			<td>The company code for a company is set when the company is created and may not be changed.</td>
		</tr>		
        <tr>
			<td>26</td>
			<td><a href="DateFormatError">DateFormatError</a></td>
			<td>The date value you provided was incorrectly formatted.</td>
		</tr>		
        <tr>
			<td>27</td>
			<td><a href="NoDefaultCompany">NoDefaultCompany</a></td>
			<td>Your account does not currently have a default company.</td>
		</tr>		
        <tr>
			<td>30</td>
			<td><a href="AuthenticationException">AuthenticationException</a></td>
			<td>The credentials you provided to AvaTax could not be validated.</td>
		</tr>		
        <tr>
			<td>31</td>
			<td><a href="AuthorizationException">AuthorizationException</a></td>
			<td>Your account is not authorized to call this API.</td>
		</tr>		
        <tr>
			<td>32</td>
			<td><a href="ValidationException">ValidationException</a></td>
			<td>Your API call contained an incorrectly structured object.</td>
		</tr>		
        <tr>
			<td>33</td>
			<td><a href="InactiveUserError">InactiveUserError</a></td>
			<td>This user account is currently inactive.</td>
		</tr>		
        <tr>
			<td>34</td>
			<td><a href="AuthenticationIncomplete">AuthenticationIncomplete</a></td>
			<td>Your API call did not contain authentication information.</td>
		</tr>		
        <tr>
			<td>35</td>
			<td><a href="BasicAuthIncorrect">BasicAuthIncorrect</a></td>
			<td>Your Basic authorization header was not encoded correctly.</td>
		</tr>		
        <tr>
			<td>36</td>
			<td><a href="IdentityServerError">IdentityServerError</a></td>
			<td>A problem was detected with Avalara Identity.</td>
		</tr>		
        <tr>
			<td>37</td>
			<td><a href="BearerTokenInvalid">BearerTokenInvalid</a></td>
			<td>The Bearer Token that you used for authentication was not valid.</td>
		</tr>		
        <tr>
			<td>38</td>
			<td><a href="ModelRequiredException">ModelRequiredException</a></td>
			<td>You called an API that requires an object, but you did not provide an object.</td>
		</tr>		
        <tr>
			<td>39</td>
			<td><a href="AccountExpiredException">AccountExpiredException</a></td>
			<td>Your AvaTax account has expired, or is not yet enabled.  You may need to contact your customer account manager for assistance.</td>
		</tr>		
        <tr>
			<td>40</td>
			<td><a href="VisibilityError">VisibilityError</a></td>
			<td>You attempted to request an object from AvaTax that you are not permitted to see.</td>
		</tr>		
        <tr>
			<td>41</td>
			<td><a href="BearerTokenNotSupported">BearerTokenNotSupported</a></td>
			<td>Bearer Token authentication is not yet supported with this API.</td>
		</tr>		
        <tr>
			<td>42</td>
			<td><a href="InvalidSecurityRole">InvalidSecurityRole</a></td>
			<td>You do not have permission to create or update users with this security role.</td>
		</tr>		
        <tr>
			<td>43</td>
			<td><a href="InvalidRegistrarAction">InvalidRegistrarAction</a></td>
			<td>The action you attempted is restricted.</td>
		</tr>		
        <tr>
			<td>44</td>
			<td><a href="RemoteServerError">RemoteServerError</a></td>
			<td>A remote server AvaTax depends on is not working.</td>
		</tr>		
        <tr>
			<td>45</td>
			<td><a href="NoFilterCriteriaException">NoFilterCriteriaException</a></td>
			<td>You provided a filter with your query, but did not specify any criteria.</td>
		</tr>		
        <tr>
			<td>46</td>
			<td><a href="OpenClauseException">OpenClauseException</a></td>
			<td>Your $filter value has a mismatched open parenthesis / close parenthesis.</td>
		</tr>		
        <tr>
			<td>47</td>
			<td><a href="JsonFormatError">JsonFormatError</a></td>
			<td>The JSON you sent with your request was invalid.</td>
		</tr>		
        <tr>
			<td>50</td>
			<td><a href="UnhandledException">UnhandledException</a></td>
			<td>The API you attempted to call resulted in an unhandled exception within Avalara AvaTax.</td>
		</tr>		
        <tr>
			<td>60</td>
			<td><a href="ReportingCompanyMustHaveContactsError">ReportingCompanyMustHaveContactsError</a></td>
			<td>A company that is designated to report taxes must have at least one designated contact person.</td>
		</tr>		
        <tr>
			<td>61</td>
			<td><a href="CompanyProfileNotSet">CompanyProfileNotSet</a></td>
			<td>This error occurs when you try to modify the tax profile of a company that inherits its tax profile from its parent.</td>
		</tr>		
        <tr>
			<td>62</td>
			<td><a href="CannotAssignUserToCompany">CannotAssignUserToCompany</a></td>
			<td>Only Company-level users may be assigned to a company.</td>
		</tr>		
        <tr>
			<td>63</td>
			<td><a href="MustAssignUserToCompany">MustAssignUserToCompany</a></td>
			<td>Company level users must be assigned to a company within this account.</td>
		</tr>		
        <tr>
			<td>70</td>
			<td><a href="ModelStateInvalid">ModelStateInvalid</a></td>
			<td>You provided an incorrectly structured object to AvaTax.</td>
		</tr>		
        <tr>
			<td>80</td>
			<td><a href="DateRangeError">DateRangeError</a></td>
			<td>This error occurs when you create an object whose end date is before its effective date.</td>
		</tr>		
        <tr>
			<td>81</td>
			<td><a href="InvalidDateRangeError">InvalidDateRangeError</a></td>
			<td>You specified a date outside of the allowable range.</td>
		</tr>		
        <tr>
			<td>100</td>
			<td><a href="DeleteInformation">DeleteInformation</a></td>
			<td>This message represents information provided about an object that was deleted.</td>
		</tr>		
        <tr>
			<td>120</td>
			<td><a href="CannotCreateDeletedObjects">CannotCreateDeletedObjects</a></td>
			<td>You may not create an object with a "Deleted" flag.</td>
		</tr>		
        <tr>
			<td>121</td>
			<td><a href="CannotModifyDeletedObjects">CannotModifyDeletedObjects</a></td>
			<td>If an object has been deleted, you may not modify it further after its deletion.</td>
		</tr>		
        <tr>
			<td>122</td>
			<td><a href="ReturnNameNotFound">ReturnNameNotFound</a></td>
			<td>You attempted to create a filing calendar for a return that is not recognized by AvaTax.</td>
		</tr>		
        <tr>
			<td>123</td>
			<td><a href="InvalidAddressTypeAndCategory">InvalidAddressTypeAndCategory</a></td>
			<td>When creating a location, you must specify a compatible AddressType and AddressCategory value.</td>
		</tr>		
        <tr>
			<td>124</td>
			<td><a href="DefaultCompanyLocation">DefaultCompanyLocation</a></td>
			<td>The default location for a company must be a physical-type location rather than a salesperson-type location.</td>
		</tr>		
        <tr>
			<td>125</td>
			<td><a href="InvalidCountry">InvalidCountry</a></td>
			<td>The country code you provided is not recognized as a valid ISO 3166 country code.</td>
		</tr>		
        <tr>
			<td>126</td>
			<td><a href="InvalidCountryRegion">InvalidCountryRegion</a></td>
			<td>You specified a country/region that was not recognized by the ISO 3166 country/region code system.</td>
		</tr>		
        <tr>
			<td>127</td>
			<td><a href="BrazilValidationError">BrazilValidationError</a></td>
			<td>Reserved for future use.</td>
		</tr>		
        <tr>
			<td>128</td>
			<td><a href="BrazilExemptValidationError">BrazilExemptValidationError</a></td>
			<td>Reserved for future use.</td>
		</tr>		
        <tr>
			<td>129</td>
			<td><a href="BrazilPisCofinsError">BrazilPisCofinsError</a></td>
			<td>Reserved for future use.</td>
		</tr>		
        <tr>
			<td>130</td>
			<td><a href="JurisdictionNotFoundError">JurisdictionNotFoundError</a></td>
			<td>The specified jurisdiction could not be found.</td>
		</tr>		
        <tr>
			<td>131</td>
			<td><a href="MedicalExciseError">MedicalExciseError</a></td>
			<td>You attempted to create a tax rule that designated a device as medical excise tax for an incorrect jurisdiction.</td>
		</tr>		
        <tr>
			<td>132</td>
			<td><a href="RateDependsTaxabilityError">RateDependsTaxabilityError</a></td>
			<td>You created a tax rule with a RateDepends option, but that rule is not a TaxabilityRule.</td>
		</tr>		
        <tr>
			<td>133</td>
			<td><a href="RateDependsEuropeError">RateDependsEuropeError</a></td>
			<td>The RateDepends option is only valid for countries in the European Union.</td>
		</tr>		
        <tr>
			<td>134</td>
			<td><a href="InvalidRateTypeCode">InvalidRateTypeCode</a></td>
			<td>This rate type is not valid in the country provided.</td>
		</tr>		
        <tr>
			<td>135</td>
			<td><a href="RateTypeNotSupported">RateTypeNotSupported</a></td>
			<td>You attempted to choose a rate type that is not supported for the country you selected.</td>
		</tr>		
        <tr>
			<td>136</td>
			<td><a href="CannotUpdateNestedObjects">CannotUpdateNestedObjects</a></td>
			<td>In AvaTax REST, you can create objects with nested children, but you cannot update objects with nested children.</td>
		</tr>		
        <tr>
			<td>137</td>
			<td><a href="UPCCodeInvalidChars">UPCCodeInvalidChars</a></td>
			<td>Your UPC code contains invalid characters.</td>
		</tr>		
        <tr>
			<td>138</td>
			<td><a href="UPCCodeInvalidLength">UPCCodeInvalidLength</a></td>
			<td>Your UPC code was too long to fit into the standard UPC object field.</td>
		</tr>		
        <tr>
			<td>139</td>
			<td><a href="IncorrectPathError">IncorrectPathError</a></td>
			<td>You attempted to modify an object but you provided an object that matches a different URL.</td>
		</tr>		
        <tr>
			<td>140</td>
			<td><a href="InvalidJurisdictionType">InvalidJurisdictionType</a></td>
			<td>You specified a jurisdiction type that is not recognized.</td>
		</tr>		
        <tr>
			<td>141</td>
			<td><a href="MustConfirmResetLicenseKey">MustConfirmResetLicenseKey</a></td>
			<td>When resetting a license key for your account, you must provide a flag that indicates that you really want to reset your license key.</td>
		</tr>		
        <tr>
			<td>142</td>
			<td><a href="DuplicateCompanyCode">DuplicateCompanyCode</a></td>
			<td>You cannot create two companies with the same company code.</td>
		</tr>		
        <tr>
			<td>143</td>
			<td><a href="TINFormatError">TINFormatError</a></td>
			<td>The U.S. Taxpayer Identification Number you provided is not in a recognized format.</td>
		</tr>		
        <tr>
			<td>144</td>
			<td><a href="DuplicateNexusError">DuplicateNexusError</a></td>
			<td>Nexus is a concept used to declare that your business is subject to taxation by a particular jurisdiction; you may not declare any one jurisdiction more than once.</td>
		</tr>		
        <tr>
			<td>145</td>
			<td><a href="UnknownNexusError">UnknownNexusError</a></td>
			<td>You attempted to declare nexus in a jurisdiction that is not recognized by AvaTax.</td>
		</tr>		
        <tr>
			<td>146</td>
			<td><a href="ParentNexusNotFound">ParentNexusNotFound</a></td>
			<td>You attempted to create a nexus in a tax authority that is underneath a parent tax authority, but you have not yet declared nexus with the parent tax authority.</td>
		</tr>		
        <tr>
			<td>147</td>
			<td><a href="InvalidTaxCodeType">InvalidTaxCodeType</a></td>
			<td>You specified a tax code type that is not recognized by Avalara.</td>
		</tr>		
        <tr>
			<td>148</td>
			<td><a href="CannotActivateCompany">CannotActivateCompany</a></td>
			<td>A company can only be activated when it has a valid tax profile.</td>
		</tr>		
        <tr>
			<td>149</td>
			<td><a href="DuplicateEntityProperty">DuplicateEntityProperty</a></td>
			<td>You attempted to create an object with a duplicate name or code.</td>
		</tr>		
        <tr>
			<td>150</td>
			<td><a href="ReportingEntityError">ReportingEntityError</a></td>
			<td>You attempted to use a Returns API on a company not designated to file returns.</td>
		</tr>		
        <tr>
			<td>151</td>
			<td><a href="InvalidReturnOperationError">InvalidReturnOperationError</a></td>
			<td>You attempted to modify a tax filing return that has been approved.</td>
		</tr>		
        <tr>
			<td>152</td>
			<td><a href="CannotDeleteCompany">CannotDeleteCompany</a></td>
			<td>You attempted to delete a company with committed transactions.</td>
		</tr>		
        <tr>
			<td>153</td>
			<td><a href="CountryOverridesNotAvailable">CountryOverridesNotAvailable</a></td>
			<td>The jurisdiction override feature is only available in the United States.</td>
		</tr>		
        <tr>
			<td>154</td>
			<td><a href="JurisdictionOverrideMismatch">JurisdictionOverrideMismatch</a></td>
			<td>An address override cannot be created for this jurisdiction.</td>
		</tr>		
        <tr>
			<td>155</td>
			<td><a href="DuplicateSystemTaxCode">DuplicateSystemTaxCode</a></td>
			<td>You attempted to create a duplicate TaxCode object.</td>
		</tr>		
        <tr>
			<td>156</td>
			<td><a href="SSTOverridesNotAvailable">SSTOverridesNotAvailable</a></td>
			<td>Companies participating in Streamlined Sales Tax may not override addresses in SST states.</td>
		</tr>		
        <tr>
			<td>157</td>
			<td><a href="NexusDateMismatch">NexusDateMismatch</a></td>
			<td>You declared nexus on a date when that nexus was not available.</td>
		</tr>		
        <tr>
			<td>158</td>
			<td><a href="TechSupportAuditRequired">TechSupportAuditRequired</a></td>
			<td>To make this API call, you must provide tech support audit requirements.</td>
		</tr>		
        <tr>
			<td>159</td>
			<td><a href="NexusParentDateMismatch">NexusParentDateMismatch</a></td>
			<td>You declared nexus on a date when that nexus was not available.</td>
		</tr>		
        <tr>
			<td>160</td>
			<td><a href="BearerTokenParseUserIdError">BearerTokenParseUserIdError</a></td>
			<td>The bearer token you provided could not be parsed.</td>
		</tr>		
        <tr>
			<td>161</td>
			<td><a href="RetrieveUserError">RetrieveUserError</a></td>
			<td>Your bearer token does not have a provisioned AvaTax account.</td>
		</tr>		
        <tr>
			<td>162</td>
			<td><a href="InvalidConfigurationSetting">InvalidConfigurationSetting</a></td>
			<td>The configuration setting you specified is invalid.</td>
		</tr>		
        <tr>
			<td>163</td>
			<td><a href="InvalidConfigurationValue">InvalidConfigurationValue</a></td>
			<td>The configuration value you supplied was invalid.</td>
		</tr>		
        <tr>
			<td>164</td>
			<td><a href="InvalidEnumValue">InvalidEnumValue</a></td>
			<td>You specified an invalid value for a field.</td>
		</tr>		
        <tr>
			<td>165</td>
			<td><a href="TaxCodeAssociatedTaxRule">TaxCodeAssociatedTaxRule</a></td>
			<td>This tax code cannot be deleted because it is in use.</td>
		</tr>		
        <tr>
			<td>166</td>
			<td><a href="CannotSwitchAccountId">CannotSwitchAccountId</a></td>
			<td>You may not change the accountId value on a company.</td>
		</tr>		
        <tr>
			<td>167</td>
			<td><a href="RequestIncomplete">RequestIncomplete</a></td>
			<td>Your API request contained unprintable characters or was incomplete.</td>
		</tr>		
        <tr>
			<td>168</td>
			<td><a href="AccountNotNew">AccountNotNew</a></td>
			<td>Only accounts in 'New' status may be activated.</td>
		</tr>		
        <tr>
			<td>169</td>
			<td><a href="PasswordLengthInvalid">PasswordLengthInvalid</a></td>
			<td>Your password did not meet length requirements.</td>
		</tr>		
        <tr>
			<td>170</td>
			<td><a href="LocalNexusConflict">LocalNexusConflict</a></td>
			<td>Your nexus has invalid local nexus settings.</td>
		</tr>		
        <tr>
			<td>171</td>
			<td><a href="InvalidEcmsOverrideCode">InvalidEcmsOverrideCode</a></td>
			<td>The EcmsOverrideCode value you supplied conflicts with a system-defined code.</td>
		</tr>		
        <tr>
			<td>200</td>
			<td><a href="BatchSalesAuditMustBeZippedError">BatchSalesAuditMustBeZippedError</a></td>
			<td>Sales audit files must be uploaded in ZIP or RAR formats.</td>
		</tr>		
        <tr>
			<td>201</td>
			<td><a href="BatchZipMustContainOneFileError">BatchZipMustContainOneFileError</a></td>
			<td>Compressed files uploaded to the Batch service must contain exactly one file.</td>
		</tr>		
        <tr>
			<td>202</td>
			<td><a href="BatchInvalidFileTypeError">BatchInvalidFileTypeError</a></td>
			<td>You uploaded a batch file with an incorrect file type.</td>
		</tr>		
        <tr>
			<td>250</td>
			<td><a href="PointOfSaleFileSize">PointOfSaleFileSize</a></td>
			<td>The Point-Of-Sale API cannot build this file dynamically.</td>
		</tr>		
        <tr>
			<td>251</td>
			<td><a href="PointOfSaleSetup">PointOfSaleSetup</a></td>
			<td>Invalid parameter provided in the Point-Of-Sale file request.</td>
		</tr>		
        <tr>
			<td>300</td>
			<td><a href="GetTaxError">GetTaxError</a></td>
			<td>A problem occurred when you attempted to create a transaction through AvaTax.</td>
		</tr>		
        <tr>
			<td>301</td>
			<td><a href="AddressConflictException">AddressConflictException</a></td>
			<td>You attempted to add multiple addresses to a transaction that was flagged as a single-address transaction.</td>
		</tr>		
        <tr>
			<td>303</td>
			<td><a href="DocumentCodeConflict">DocumentCodeConflict</a></td>
			<td>You attempted to create a document with a code that matches an existing transaction.</td>
		</tr>		
        <tr>
			<td>304</td>
			<td><a href="MissingAddress">MissingAddress</a></td>
			<td>When creating transactions, you must at a minimum provide an origin and destination address.</td>
		</tr>		
        <tr>
			<td>305</td>
			<td><a href="InvalidParameter">InvalidParameter</a></td>
			<td>When adding parameters to your CreateTransactionModel, you must use a valid parameter name.</td>
		</tr>		
        <tr>
			<td>306</td>
			<td><a href="InvalidParameterValue">InvalidParameterValue</a></td>
			<td>When adding parameters to your CreateTransactionModel, you must specify a parameter of the correct type.</td>
		</tr>		
        <tr>
			<td>307</td>
			<td><a href="CompanyCodeConflict">CompanyCodeConflict</a></td>
			<td>The company code in the URL of your API call did not match the company code of the transaction you uploaded.</td>
		</tr>		
        <tr>
			<td>308</td>
			<td><a href="DocumentFetchLimit">DocumentFetchLimit</a></td>
			<td>You attempted to fetch more than 1000 transaction documents at a time.</td>
		</tr>		
        <tr>
			<td>309</td>
			<td><a href="AddressIncomplete">AddressIncomplete</a></td>
			<td>You provided an incomplete address to an AvaTax API.</td>
		</tr>		
        <tr>
			<td>310</td>
			<td><a href="AddressLocationNotFound">AddressLocationNotFound</a></td>
			<td>The specified location code does not exist.</td>
		</tr>		
        <tr>
			<td>311</td>
			<td><a href="MissingLine">MissingLine</a></td>
			<td>You attempted to create a tax transaction with no lines.</td>
		</tr>		
        <tr>
			<td>312</td>
			<td><a href="InvalidAddressTextCase">InvalidAddressTextCase</a></td>
			<td>You provided an invalid parameter to the address resolution endpoint.</td>
		</tr>		
        <tr>
			<td>313</td>
			<td><a href="DocumentNotCommitted">DocumentNotCommitted</a></td>
			<td>You attempted to lock a transaction (aka Document) that was not committed.</td>
		</tr>		
        <tr>
			<td>314</td>
			<td><a href="MultiDocumentTypesError">MultiDocumentTypesError</a></td>
			<td>The API you called does not support transaction code overloading.</td>
		</tr>		
        <tr>
			<td>315</td>
			<td><a href="InvalidDocumentTypesToFetch">InvalidDocumentTypesToFetch</a></td>
			<td>Temporary documents cannot be fetched from the API.</td>
		</tr>		
        <tr>
			<td>400</td>
			<td><a href="BadDocumentFetch">BadDocumentFetch</a></td>
			<td>This error indicates that you have provided an incorrect "$include" value to the GET /api/v2/companies/{0}/transactions endpoint.</td>
		</tr>		
        <tr>
			<td>401</td>
			<td><a href="CannotChangeFilingStatus">CannotChangeFilingStatus</a></td>
			<td>The requested filing status change is invalid.</td>
		</tr>		
        <tr>
			<td>500</td>
			<td><a href="ServerUnreachable">ServerUnreachable</a></td>
			<td>One of the servers in the Avalara AvaTax API cluster is unreachable and your API call could not be completed.</td>
		</tr>		
        <tr>
			<td>600</td>
			<td><a href="SubscriptionRequired">SubscriptionRequired</a></td>
			<td>This Avalara API call requires an active subscription to a specific service.</td>
		</tr>		
        <tr>
			<td>601</td>
			<td><a href="AccountExists">AccountExists</a></td>
			<td>An account tied to this email address already exists.</td>
		</tr>		
        <tr>
			<td>602</td>
			<td><a href="InvitationOnly">InvitationOnly</a></td>
			<td>You attempted to contact an API that is available by invitation only.</td>
		</tr>		
        <tr>
			<td>604</td>
			<td><a href="ZTBListConnectorFail">ZTBListConnectorFail</a></td>
			<td>The Zero Touch Buying service did not respond in a timely manner.</td>
		</tr>		
        <tr>
			<td>605</td>
			<td><a href="ZTBCreateSubscriptionsFail">ZTBCreateSubscriptionsFail</a></td>
			<td>The Zero Touch Buying service did not respond in a timely manner.</td>
		</tr>		
        <tr>
			<td>606</td>
			<td><a href="FreeTrialNotAvailable">FreeTrialNotAvailable</a></td>
			<td>The Free Trial API is not available on this server.</td>
		</tr>		
        <tr>
			<td>607</td>
			<td><a href="AccountExistsDifferentEmail">AccountExistsDifferentEmail</a></td>
			<td>An account with this username already exists.</td>
		</tr>		
        <tr>
			<td>608</td>
			<td><a href="AvalaraIdentityApiError">AvalaraIdentityApiError</a></td>
			<td>A server configuration problem has been detected.</td>
		</tr>		
        <tr>
			<td>700</td>
			<td><a href="InvalidDocumentStatusForRefund">InvalidDocumentStatusForRefund</a></td>
			<td>The AvaTax Refund API is only available on committed documents.</td>
		</tr>		
        <tr>
			<td>701</td>
			<td><a href="RefundTypeAndPercentageMismatch">RefundTypeAndPercentageMismatch</a></td>
			<td>You specified a `Full` refund, but the percentage parameter was not null.</td>
		</tr>		
        <tr>
			<td>702</td>
			<td><a href="InvalidDocumentTypeForRefund">InvalidDocumentTypeForRefund</a></td>
			<td>The document you attempted to refund was not a SalesInvoice.</td>
		</tr>		
        <tr>
			<td>703</td>
			<td><a href="RefundTypeAndLineMismatch">RefundTypeAndLineMismatch</a></td>
			<td>You specified a `Full` refund, but the lines parameter was not null.</td>
		</tr>		
        <tr>
			<td>704</td>
			<td><a href="NullRefundPercentageAndLines">NullRefundPercentageAndLines</a></td>
			<td>You attempted to create a refund but did not specify the percentage or lines.</td>
		</tr>		
        <tr>
			<td>705</td>
			<td><a href="InvalidRefundType">InvalidRefundType</a></td>
			<td>You specified an invalid refund type.</td>
		</tr>		
        <tr>
			<td>706</td>
			<td><a href="RefundPercentageForTaxOnly">RefundPercentageForTaxOnly</a></td>
			<td>You attempted to create a TaxOnly refund for a partial percentage.</td>
		</tr>		
        <tr>
			<td>707</td>
			<td><a href="LineNoOutOfRange">LineNoOutOfRange</a></td>
			<td>You attempted to refund a line item that did not exist in the original transaction.</td>
		</tr>		
        <tr>
			<td>708</td>
			<td><a href="RefundPercentageOutOfRange">RefundPercentageOutOfRange</a></td>
			<td>You submitted a refund percentage lower than 0% or higher than 100%</td>
		</tr>		
        <tr>
			<td>800</td>
			<td><a href="TaxRateNotAvailableForFreeInThisCountry">TaxRateNotAvailableForFreeInThisCountry</a></td>
			<td>The Free TaxRates API is only available in the US.</td>
		</tr>		
        <tr>
			<td>900</td>
			<td><a href="FilingCalendarCannotBeDeleted">FilingCalendarCannotBeDeleted</a></td>
			<td>A filing calendar cannot be deleted once in use.</td>
		</tr>		
        <tr>
			<td>901</td>
			<td><a href="InvalidEffectiveDate">InvalidEffectiveDate</a></td>
			<td>The effective date for your filing request is not valid.</td>
		</tr>		
        <tr>
			<td>902</td>
			<td><a href="NonOutletForm">NonOutletForm</a></td>
			<td>This form does not permit Outlet or Location-based reporting.</td>
		</tr>		
        <tr>
			<td>903</td>
			<td><a href="OverlappingFilingCalendar">OverlappingFilingCalendar</a></td>
			<td>This filing calendar overlaps with another calendar.</td>
		</tr>		
        <tr>
			<td>1000</td>
			<td><a href="QuestionNotNeededForThisAddress">QuestionNotNeededForThisAddress</a></td>
			<td>No jursidiction-specific questions are relevant for this location.</td>
		</tr>		
        <tr>
			<td>1001</td>
			<td><a href="QuestionNotValidForThisAddress">QuestionNotValidForThisAddress</a></td>
			<td>One of the questions you answered is not valid for this address.</td>
		</tr>		
        <tr>
			<td>1100</td>
			<td><a href="CannotModifyLockedTransaction">CannotModifyLockedTransaction</a></td>
			<td>A locked transaction may not be modified.</td>
		</tr>		
        <tr>
			<td>1101</td>
			<td><a href="LineAlreadyExists">LineAlreadyExists</a></td>
			<td>You attempted to add a line with a conflicting line number.</td>
		</tr>		
        <tr>
			<td>1102</td>
			<td><a href="LineDoesNotExist">LineDoesNotExist</a></td>
			<td>You attempted to remove a line that did not exist.</td>
		</tr>		
        <tr>
			<td>1103</td>
			<td><a href="LinesNotSpecified">LinesNotSpecified</a></td>
			<td>You attempted to create a transaction with zero lines.</td>
		</tr>		
        <tr>
			<td>1200</td>
			<td><a href="InvalidBusinessType">InvalidBusinessType</a></td>
			<td>The business type field on the ECMS record is invalid.</td>
		</tr>		
        <tr>
			<td>1201</td>
			<td><a href="CannotModifyExemptCert">CannotModifyExemptCert</a></td>
			<td>Exemption certificates cannot be modified using the Company API.</td>
		</tr>		
        <tr>
			<td>1300</td>
			<td><a href="TransactionNotCancelled">TransactionNotCancelled</a></td>
			<td>A multi-company transaction was partially created.</td>
		</tr>		
        <tr>
			<td>1301</td>
			<td><a href="TooManyTransactionLines">TooManyTransactionLines</a></td>
			<td>The transaction you provided contains too many lines.</td>
		</tr>		
        <tr>
			<td>1302</td>
			<td><a href="OnlyTaxDateOverrideIsAllowed">OnlyTaxDateOverrideIsAllowed</a></td>
			<td>Multi-company transactions may only override tax dates.</td>
		</tr></tbody></table>