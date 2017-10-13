---
layout: page
title: SOAP or REST?
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Where to start</h2>

Avalara provides multiple versions of the AvaTax API.  We originally built AvaTax using SOAP in 2004, and it's stood the test of time, with thousands of customers using it every day.  In 2016, Avalara chose to build a completely new REST API that works off the same code and data while also including modern standards: We implemented the [OpenAPI specification](https://www.openapis.org/) (also known as Swagger) throughout the API, and we chose to adopt [Microsoft's REST guidelines](https://github.com/Microsoft/api-guidelines) to make our service immediately familiar to users of the standard.

If you're starting a new project today, we encourage you to use REST.  Our developer documentation for REST is world-class, and we've written the [AvaTax Developer Guide](https://developer.avalara.com/avatax/dev-guide/getting-started-with-avatax) to help you learn the ins and outs of AvaTax.  If you wrote software in the past that used SOAP, your product will continue to be supported and you can freely mix and match code that uses REST and SOAP.

Here's a comparison of the two AvaTax APIs:

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Feature</th>
				<th>In AvaTax SOAP</th>
				<th>In AvaTax REST</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Robustness</td>
				<td>World-leading API for tax services since 2004, in use by thousands of customers</td>
				<td>World-leading API for tax services since 2016, in use by thousands of customers</td>
			</tr>
			<tr>
				<td>Data Formatting</td>
				<td><a href="https://en.wikipedia.org/wiki/XML">XML</a> conforming to <a href="https://en.wikipedia.org/wiki/Web_Services_Description_Language">WSDL</a></td>
				<td><a href="https://en.wikipedia.org/wiki/JSON">JSON</a> conforming to the <a href="https://github.com/Microsoft/api-guidelines">Microsoft REST Guidelines</a></td>
			</tr>
			<tr>
				<td>Language Support</td>
				<td>Support for SOAP is very limited in modern languages.</td>
				<td>Virtually all modern languages include support JSON objects natively, or through open source libraries.</td>
			</tr>
			<tr>
				<td>Documentation</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/soap/">Hand-written documentation</a> in Avalara developer website.</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/">Detailed, comprehensive API reference</a> and a full 11-chapter <a href="https://developer.avalara.com/avatax/dev-guide/getting-started-with-avatax">AvaTax Developer Guide</a> available online</td>
			</tr>
			<tr>
				<td>Software Development Kits</td>
				<td>Legacy <a href="https://developer.avalara.com/sdk/soap/">AvaTax SOAP software development kits</a> are available.  Updates are infrequent.</td>
				<td><a href="https://developer.avalara.com/sdk/">AvaTax REST Software Development Kits</a> are updated monthly, and available for download via your favorite package manager.</td>
			</tr>
			<tr>
				<td>Functionality</td>
				<td>TaxSvc, AddressSvc, BatchSvc, and legacy AvaCert2Svc functionality supported; each has a separate API</td>
				<td>Full Tax, Address, Batch, Certificates, Definitions, Free Tax Rates, Onboarding, and more - all in a single API!</td>
			</tr>
		</tbody>
	</table>
</div>

The good news: You don't have to pick between REST and SOAP.  Both APIs use the same world-class tax calculation software and both work using the same credentials and using the same data storage.  You can keep existing code for as long as you wish, and extend your code by using new APIs whenever you need them.

<h2>Feature Examples</h2>

Here's a quick look at a few critical features and how they compare between REST and SOAP:

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Service</th>
				<th>In AvaTax SOAP</th>
				<th>In AvaTax REST</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><a href="/avatax/address-validation">Address validation</a></td>
				<td><a href="/api-reference/avatax/soap/methods/validateAddress">ValidateAddress</a></td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddressPost/">ResolveAddress</a></td>
			</tr>
			<tr>
				<td>Tax calculation</td>
				<td><a href="/api-reference/avatax/soap/methods/getTax">GetTax</a></td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a></td>
			</tr>
			<tr>
				<td><a href="/avatax/voiding-documents">Voiding documents</a></td>
				<td><a href="/api-reference/avatax/soap/methods/cancelTax">CancelTax</a></td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a></td>
			</tr>
			<tr>
				<td><a href="/avatax/reportable-transactions">Committing a document</a></td>
				<td><a href="/api-reference/avatax/soap/methods/postTax">PostTax</a></td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a></td>
			</tr>
			<tr>
				<td>Retrieve document history</td>
				<td><a href="/api-reference/avatax/soap/methods/getTaxHistory">GetTaxHistory</a></td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AuditTransaction/">AuditTransaction</a></td>
			</tr>
			<tr>
				<td>Modify committed transaction records</td>
				<td><a href="/api-reference/avatax/soap/methods/adjustTax">AdjustTax</a></td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction</a></td>
			</tr>
			<tr>
				<td>Invite customer to upload exemption certificates</td>
				<td>AvaCert2Svc - CertificateRequestInitiate</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/CertExpressInvites/CreateCertExpressInvitation/">CreateCertExpressInvitation</a></td>
			</tr>
			<tr>
				<td>Preview Exemption Certificate Image</td>
				<td>AvaCert2Svc - CertificateImageGet</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Certificates/DownloadCertificateImage/">DownloadCertificateImage</a></td>
			</tr>
			<tr>
				<td>Check if customer is exempt</td>
				<td>Not Available</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Customers/ListValidCertificatesForCustomer/">ListValidCertificatesForCustomer</a></td>
			</tr>
			<tr>
				<td>Free Tax Rates by Postal Code</td>
				<td>Not Available</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/TaxRatesByPostalCode/">TaxRatesByPostalCode</a></td>
			</tr>
			<tr>
				<td>Offline Tax Content API</td>
				<td>Not Available</td>
				<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/TaxContent/BuildTaxContentFile/">BuildTaxContentFile</a></td>
			</tr>
		</tbody>
	</table>
</div>

<h2>Free to Choose</h2>

We hope this information helps you decide which API is right for you.  You are welcome to use the SOAP API, the REST API, or both!

If you have feedback or comments, please reach out to us at <a href="https://community.avalara.com/avalara">https://community.avalara.com/avalara</a>

