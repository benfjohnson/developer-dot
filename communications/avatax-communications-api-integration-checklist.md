---
layout: default
title: Communications Integration Checklist
product: communications
doctype: integration_checklists
nav: apis
community: apis
---

# Certified for Avalara AvaTax for Communications

AvaTax for Communications API Integration Checklist to have your integration [certified by Avalara](developer.avalara.com/certification/) we have outlined the areas of integration that are necessary to ensure a stable and robust customer experience using AvaTax for Communication with your application. To be certified for Avalara AvaTax for Communications, all of the items with an R in the Required column listed below are required elements that must be present in your integration.

## Certified for Avalara AvaTax for Communications

Certification for Avalara AvaTax Excise requires the delivery of all functional requirements shown below:

<table>
<tr>
<td colspan="3" width="680">
<p><strong>AFC General</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p><strong>Required</strong></p>
</td>
<td width="293">
<p><strong>Function</strong></p>
</td>
<td width="308">
<p><strong>Comment</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>AvaTax for Comms Configuration</p>
</td>
<td width="308">
<p>Allow customer to configure the following: username/password, company code</p>
<p>Ensure password is properly secured using encryption.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>AvaTax for Comms Test Connection button</p>
</td>
<td width="308">
<p>Tests the connection to the AvaTax for Comms service and verifies credentials. This allows for troubleshooting.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
<td width="293">
Tax Calculation - Disable tax calculation option</td>
<td>
<p>The user must have an option to turn on or off the AvaTax for Comms Calculation service independent of any other Avalara product.</p></td>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>User Implementation Guide</p>
</td>
<td width="308">
<p>User Implementation Guide should contain screenshots and information allowing the end user to configure for AvaTax for Comms including where credentials, company code, and where transaction/service pairs can be mapped.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Enable logging</p>
</td>
<td width="308">
<p>Enables detailed AvaTax for Comms logging. Information captured is round-trip time and complete xml for request/response.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Demonstrate and document installation of software.</p>
</td>
<td width="308">
<p>Customers should have an easy and trouble free installation of software</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p><strong>AFC SOAP API (Only requiredfor SOAP API user)</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p align="center"><strong>Required</strong></p>
</td>
<td width="293">
<p align="center"><strong>Function</strong></p>
</td>
<td width="308">
<p align="center"><strong>Comment</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Verify connectivity to WSDL</p>
</td>
<td width="308">
<p>Make sure [This is accessible]("http://eztaxasp.eztax.com/EZtaxWebService/EZtaxWebService.svc?wsdl">http://EZtaxasp.EZtax.com/EZtaxWebService/EZtaxWebService.svc?wsdl") </td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Call GetServerTime</p>
</td>
<td width="308">
<p>Request requires no input from client except credentials. Verify contents is current Central time.</p>
</td>
</tr>
<tr>
<td>
<strong> Obtain a Pcode </strong>
</td>
</tr>
<tr>
<p>One of the Following is required:</p>
</tr>
<tr>
<td rowspan="4" width="75">
<p>R</p>
</td>
<td width="293">
<p>Local data using all_adr</p>
</td>
<td width="308">
<p>Explain how the all_adr data.txt is loaded and maintained. Show how this data is used for obtaining a PCode</p>
</td>
</tr>
<tr>
<td width="293">
<p> ZipToPCode</p>
</td>
<td width="308">
<p>Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="293">
<p> NpaNxxToPCode</p>
</td>
<td width="308">
<p>Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="293">
<p> FipsToPCode,</p>
</td>
<td width="308">
<p> Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify pcode information.</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p><strong>Populate Transaction structure</strong></p>
<p>See AvaTax for Comms documentation for description of fields and how they should  be set.</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p> One of the Following is required:</p>
</td>
</tr>
<tr>
<td rowspan="4" width="75">
<p>R</p>
</td>
<td width="293">
<p>CalcTaxesWithPCode</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToPcode, OriginationPcode and TerminationPCode in Transaction strcuture with PCode returned from one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode.</p>
</td>
</tr>
<tr>
<td width="293">
<p>CalcTaxesWithNpaNxx</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToNpaNxx, OriginationNpaNxx and TerminationNapNxx fields in Transaction structure with NPANXX.</p>
</td>
</tr>
<tr>
<td width="293">
<p>CalcTaxesWithZipAddress</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToAddress, OriginationAddress and TerminationAddress in Transaction structure.</p>
</td>
</tr>
<tr>
<td width="293">
<p>CalcTaxesWithFipsCode</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToFipscode, OriginationFipsCode and TerminationFIpsCode with FIPS code.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Parse TaxData</p>
</td>
<td width="308">
<p>See AvaTax for Comms documentation for a description of fields and how they should be set.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify both parties agree with results.</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p><strong>Populate Transaction structure</strong></p>
<p>See AvaTax for Comms documentation for description of fields and how they should be set.</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p>One of the Following is required:</p>
</td>
</tr>
<tr>
<td rowspan="4" width="75">
<p>R<br /> </p>
</td>
<td width="293">
<p>CalcAdjWithPCode</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use Pcode returned from either EZgeo (separate service) or from separate call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode.</p>
</td>
</tr>
<tr>
<td width="293">
<p>CalcAdjWithNpaNxx</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use NPANXX to identify origination and termination.</p>
</td>
</tr>
<tr>
<td width="293">
<p>CalcAdjWithZipAddress</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use zip code to identify origination and termination.</p>
</td>
</tr>
<tr>
<td width="293">
<p>CalcAdjWithFipsCode</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use FIPS code to identify origination and termination.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p><strong>AFC REST API (only required for REST API user)</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p align="center"><strong>Required</strong></p>
</td>
<td width="293">
<p align="center"><strong>Function</strong></p>
</td>
<td width="308">
<p align="center"><strong>Comment</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p> Verify access to Swagger UI</p>
</td>
<td width="308">
<p>Make sure <a href="https://communications.avalara.net/swagger/UI/index.html">https://communications.avalara.net/swagger/UI/index.html</a> is accesible</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Call /api/v1/Application/ServerTime</p>
</td>
<td width="308">
<p>Request requires no input from client application. Verify contents is current UTC time.</p>
</td>
</tr>
<tr>
<td>
<p> <strong> Obtain a Pcode </strong> </p>
</td>
</tr>
<tr>
<p>One of the Following is required: </p>
</tr>
<tr>
<td rowspan="2" width="75">
<p>R</p>
</td>
<td width="293">
<p>Local data using all_adr</p>
</td>
<td width="308">
<p>Explain how the all_addr.txt data is loaded and maintained.</p>
<p>Show how this data is used for obtaining a PCode</p>
</td>
</tr>
<tr>
<td width="293">
<p> /api/v1/Location/PCode</p>
</td>
<td width="308">
<p>Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify pcode information.</p>
</td>
</tr>
<tr>
<tr>
<td colspan="3" width="680">
<p><strong>Populate Transaction structure</strong></p>
<p>See AvaTax for Comms documentation for description of fields and how they should be set.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>/api/v1/CalculateTaxes</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. This method accepts transaction data and performs appropriate tax calculations.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Parse TaxData</p>
</td>
<td width="308">
<p>See AvaTax for Comms documentation for description of returned fields.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify both parties agree with results.</p>
</td>
</tr>
<tr>
<td colspan="3" width="680">
<p><strong>Populate Transaction structure</strong></p>
</td>
</tr>
<tr>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>/api/v1/CalculateAdjustments</p>
</td>
<td width="308">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. This method accepts transaction data and performs appropriate tax adjustment calculations.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</p>
</td>
</tr>

</td>
</tr>
<tr>
<td colspan="3" width="680">
<p><strong>Populate Transaction structure</strong></p>
<p>See AvaTax for Comms documentation for a description of fields and how they should be set.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>/api/v1/CalculateAdjustments</p>
</td>
<td>
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. This method accepts transaction data and performs appropriate tax adjustment calculations.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="293">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="308">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</p>
</td>
</tr>
</table>
