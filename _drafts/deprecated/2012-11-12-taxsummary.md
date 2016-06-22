---
layout: page
title: TaxSummary
date: 2012-11-12 22:24
author: anya.stettler
comments: true
categories: []
---
This operation is used solely in conjunction with our Mobility Reporting solution to provide access to reporting for Mobile Merchant clients that don't have an AvaTax account. The Mobile Merchant owns and manages the AvaTax account and their clients use the Merchant's apps through a subscription to get tax calculations powered by AvaTax. As part of this subscription relationship taxsummary (available either through SOAP or REST) provides an abbreviated version of the AvaTax reports. One example of these Merchant apps is <a href="http://www.avalara.com/mobile/intuit-gopayment" target="_blank">Intuit's GoPayment</a>. If you have a mobile payments app and are interested in learning more about becoming a Mobility Reports partner, <a href="http://www.avalara.com/contact-us/">contact us</a> today.
<h3>REST-specific endpoints and headers</h3>
<h4>URI</h4>
Production:
[code]GET https://avatax.avalara.net/1.0/tax/taxsummary[/code]
Development:
[code]GET https://development.avalara.net/1.0/tax/taxsummary[/code]
<h4>Supported Request Methods</h4>
GET: Retrieves the tax summary report for the specified merchant and date range when there is a valid subscription to the service.
<h4>Required Request Headers</h4>
[code]Authorization Basic &lt;Base64(username:password)&gt;[/code]

where &lt;Base64(username:password)&gt; is the <a href="http://en.wikipedia.org/wiki/Base64" target="_blank">Base64</a>-encoded credential (username and password, delimited with the colon (:) character, as specified by HTTP <a href="http://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">basic access authentication</a>)
<h3>SOAP-specific endpoints and headers</h3>
<h4>Required Request Headers</h4>
The headers required for this request are consistent with the custom security header required for all direct SOAP calls, documented more fully <a href="http://adn.dev.avlr.net/api-docs/soap">here</a>.
<h4>URLs</h4>
Production WSDL:
[code]https://avatax.avalara.net/Tax/taxsvc.wsdl[/code]
Development WSDL:
[code]https://development.avalara.net/Tax/taxsvc.wsdl[/code]
<h3>Request and Response Information</h3>
<h4>Request Fields</h4>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>MerchantCode</td>
<td>The identifying code for the desired merchant. This would have been passed as a document-level ReferenceCode on the tax/get(POST) request.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>StartDate</td>
<td>The date to be used as the beginning of the report window.</td>
<td>String</td>
<td>N</td>
</tr>
<tr>
<td>EndDate</td>
<td>The date to be used as the ending of the report window</td>
<td>String</td>
<td>N</td>
</tr>
</tbody>
</table>
<h4>Response Message</h4>
TaxSummaryFetchResult
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>MerchantCode</td>
<td>The identifying code for the desired Merchant</td>
<td>String</td>
</tr>
<tr>
<td>PeriodStart</td>
<td>The date that was used as the beginning of the report window</td>
<td>String</td>
</tr>
<tr>
<td>PeriodEnd</td>
<td>The date that was used as the end of the report window</td>
<td>String</td>
</tr>
<tr>
<td>ReportDate</td>
<td>The date the report was run</td>
<td>String</td>
</tr>
<tr>
<td>TaxType</td>
<td>The type of tax that was calculated</td>
<td>String</td>
</tr>
<tr>
<td>TaxSummaries</td>
<td>A collection of TaxSummaries</td>
<td>TaxSummary[]</td>
</tr>
</tbody>
</table>
TaxSummary
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Country</td>
<td> The country in which the tax was calculated</td>
<td>String</td>
</tr>
<tr>
<td>Region</td>
<td> The region for which the tax was calculated</td>
<td>String</td>
</tr>
<tr>
<td>JurisdictionType</td>
<td> Qualifier for the type of Jurisdiction responsible for the tax</td>
<td>String</td>
</tr>
<tr>
<td>Jurisdiction</td>
<td> The name of the tax jurisdiction</td>
<td>String</td>
</tr>
<tr>
<td>SalesAmount</td>
<td> The sales amount used to calculate the sales tax</td>
<td>String</td>
</tr>
<tr>
<td>SalesLessDiscounts</td>
<td> Total of sales with discounts applied</td>
<td>String</td>
</tr>
<tr>
<td>TaxableFreight</td>
<td> The total taxable freight charges</td>
<td>String</td>
</tr>
<tr>
<td>ExemptSales</td>
<td> Total of the sale(s) which are tax exempt (based on customer)</td>
<td>String</td>
</tr>
<tr>
<td>NonTaxableSales</td>
<td> Total of the sale(s) which are non-taxable (based on product type)</td>
<td>String</td>
</tr>
<tr>
<td>NonTaxableFreight</td>
<td> Total of freight charges which are non-taxable</td>
<td>String</td>
</tr>
<tr>
<td>TotalExemptNonTaxableSales</td>
<td> Total of sales to which tax was not applied</td>
<td>String</td>
</tr>
<tr>
<td>TotalTaxableSales</td>
<td> Total of sales to which tax was applied</td>
<td>String</td>
</tr>
<tr>
<td>TaxRate</td>
<td> The tax rate applied</td>
<td>String</td>
</tr>
<tr>
<td>TaxAmount</td>
<td> The total amount of calculated tax</td>
<td>String</td>
</tr>
</tbody>
</table>
<h2>REST Samples</h2>
<h3>Sample JSON Request (Successful)</h3>
The examples require that the proper HTTP Headers are supplied in order to function appropriately.
Development:
[code]GET https://development.avalara.net/1.0/tax/summary[/code]
Production:
[code]GET https://avatax.avalara.net/1.0/tax/summary[/code]

Request Body (JSON):
[code]{
"MerchantCode": "MERCHONE",
"StartDate": "2012-01-01",
“EndDate” : “2012-02-29”
}[/code]

Response (JSON):
[code]{ "TaxSummaryTaxReport": {
"MobilityCode": "mobile2342@gmail.com",
"Period": "2011-12-01T13:00:00Z/2011-12-15T15:30:00Z",
"ReportDate": "2012-01-05T09:30:00Z",
"TaxType": "Sales And Sellers Use",
"": [
{
"Country": "US",
"Region": "CA",
"Jurisdiction Type": "STATE",
"Jurisdiction": "CALIFORNIA",
"Sales Amount": "674.51",
"Sales(less discounts)": "674.51",
"Taxable Freight": "0.00",
"Exempt Sales": "0.00",
"Non Taxable Sales": "674.51",
"Non Taxable Freight": "120.71",
"Total Exempt/ Non Taxable Sales": "674.51",
"Total Taxable Sales": "0.00",
"Tax Rate": "0.0000",
"Tax Amount": "0.00"
},
{
"Country": "US",
"Region": "CA",
"Jurisdiction Type": "COUNTY",
"Jurisdiction": "ORANGE",
"Sales Amount": "34.12",
"Sales(less discounts)": "34.12",
"Taxable Freight": "0.00",
"Exempt Sales": "0.00",
"Non Taxable Sales": "0.00",
"Non Taxable Freight": "0.00",
"Total Exempt/ Non Taxable Sales": "0.00",
"Total Taxable Sales": "34.12",
"Tax Rate": "1.0000",
"Tax Amount": "37.12"
},
{
"Country": "CA",
"Region": "AB",
"Jurisdiction Type": "PROVINCE",
"Jurisdiction": "ALBERTA",
"Sales Amount": "24.12",
"Sales(less discounts)": "24.12",
"Taxable Freight": "0.00",
"Exempt Sales": "0.00",
"Non Taxable Sales": "24.12",
"Non Taxable Freight": "0.00",
"Total Exempt/ Non Taxable Sales": "24.12",
"Total Taxable Sales": "0.00",
"Tax Rate": "0.0000",
"Tax Amount": "0.00"
}
]
}[/code]
<h3>Sample XML Request (Successful)</h3>
The examples require that the proper HTTP Headers are supplied in order to function appropriately.
Development:
[code]GET https://development.avalara.net/1.0/tax/summary[/code]
Production:
[code]GET https://avatax.avalara.net/1.0/tax/summary[/code]
<h4>Request Body (XML)</h4>
[code]&lt;TaxSummaryFetchRequest&gt;
&lt;MerchantCode&gt;21121234&lt;/MerchantCode &gt;
&lt;StartDate&gt;CUST1&lt;/StartDate &gt;
&lt;EndDate&gt;SalesOrder&lt;/EndDate&gt;
&lt;/TaxSummaryFetchRequest &gt;[/code]
<h4>Response (XML)</h4>
[code]
&lt;TaxSummaryTaxReport&gt;
&lt;MobilityCode&gt;mobile2342@gmail.com&lt;/MobilityCode&gt;
&lt;Period&gt;2011-12-01T13:00:00Z/2011-12-15T15:30:00Z&lt;/Period&gt;
&lt;ReportDate&gt;2012-01-05T09:30:00Z&lt;/ReportDate&gt;
&lt;TaxType&gt;Sales And Sellers Use&lt;/TaxType&gt;
&lt;TaxSummaries&gt;
&lt;TaxSummary&gt;
&lt;Country&gt;US&lt;/Country&gt;
&lt;Region&gt;CA&lt;/Region&gt;
&lt;JurisdictionType&gt;STATE&lt;/JurisdictionType&gt;
&lt;Jurisdiction&gt;CALIFORNIA&lt;/Jurisdiction&gt;
&lt;SalesAmount&gt;674.51&lt;/SalesAmount&gt;
&lt;SalesLessDiscounts&gt;674.51&lt;/SalesLessDiscounts&gt;
&lt;TaxableFreight&gt;0.00&lt;/TaxableFreight&gt;
&lt;ExemptSales&gt;0.00&lt;/ExemptSales&gt;
&lt;NonTaxableSales&gt;674.51&lt;/NonTaxableSales&gt;
&lt;NonTaxableFreight&gt;120.71&lt;/NonTaxableFreight&gt;
&lt;TotalExemptNonTaxableSales&gt;674.51&lt;/TotalExemptNonTaxableSales&gt;
&lt;TotalTaxableSales&gt;0.00&lt;/TotalTaxableSales&gt;
&lt;TaxRate&gt;0.0000&lt;/TaxRate&gt;
&lt;TaxAmount&gt;0.0&lt;/TaxAmount&gt;
&lt;/TaxSummary&gt;
&lt;TaxSummary&gt;
&lt;Country&gt;US&lt;/Country&gt;
&lt;Region&gt;CA&lt;/Region&gt;
&lt;JurisdictionType&gt;COUNTY&lt;/JurisdictionType&gt;
&lt;Jurisdiction&gt;ORANGE&lt;/Jurisdiction&gt;
&lt;SalesAmount&gt;34.12&lt;/SalesAmount&gt;
&lt;SalesLessDiscounts&gt;34.12&lt;/SalesLessDiscounts&gt;
&lt;TaxableFreight&gt;0.00&lt;/TaxableFreight&gt;
&lt;ExemptSales&gt;0.00&lt;/ExemptSales&gt;
&lt;NonTaxableSales&gt;0.00&lt;/NonTaxableSales&gt;
&lt;NonTaxableFreight&gt;0.00&lt;/NonTaxableFreight&gt;
&lt;TotalExemptNonTaxableSales&gt;0.00&lt;/TotalExemptNonTaxableSales&gt;
&lt;TotalTaxableSales&gt;34.12&lt;/TotalTaxableSales&gt;
&lt;TaxRate&gt;1.0000&lt;/TaxRate&gt;
&lt;TaxAmount&gt;37.1&lt;/TaxAmount&gt;
&lt;/TaxSummary&gt;
&lt;TaxSummary&gt;
&lt;Country&gt;CA&lt;/Country&gt;
&lt;Region&gt;AB&lt;/Region&gt;
&lt;JurisdictionType&gt;PROVINCE&lt;/JurisdictionType&gt;
&lt;Jurisdiction&gt;ALBERTA&lt;/Jurisdiction&gt;
&lt;SalesAmount&gt;24.12&lt;/SalesAmount&gt;
&lt;SalesLessDiscounts&gt;24.12&lt;/SalesLessDiscounts&gt;
&lt;TaxableFreight&gt;0.00&lt;/TaxableFreight&gt;
&lt;ExemptSales&gt;0.00&lt;/ExemptSales&gt;
&lt;NonTaxableSales&gt;24.12&lt;/NonTaxableSales&gt;
&lt;NonTaxableFreight&gt;0.00&lt;/NonTaxableFreight&gt;
&lt;TotalExemptNonTaxableSales&gt;24.12&lt;/TotalExemptNonTaxableSales&gt;
&lt;TotalTaxableSales&gt;0.00&lt;/TotalTaxableSales&gt;
&lt;TaxRate&gt;0.0000&lt;/TaxRate&gt;
&lt;TaxAmount&gt;0.0&lt;/TaxAmount&gt;
&lt;/TaxSummary&gt;
&lt;TaxSummaries&gt;
&lt;/TaxSummaryTaxReport&gt;[/code]
<h3>Unsuccessful Requests</h3>
Note that currently all unsuccessful requests currently return a generic 500 error - this includes cases where no subscriptions are present for the MerchantCode or account, and cases where a valid subscription is present, but no records are found that fit the query criteria. This is a known issue that will be resolved in a future release.
