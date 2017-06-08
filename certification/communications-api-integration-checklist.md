---
layout: page
title: Communications Integration Checklist
product: communications
doctype: integration_checklists
nav: certification
---

<style>
.styled-table {
  border-collapse: collapse;}
  .styled-table tbody {
    background-color: #f5f6fa; }
    .styled-table tbody td {
      border-top: 1px solid #ffff; }
  .styled-table tbody {
    background-color: #ffffff; }
</style>

<p>AvaTax for Communications API Integration Checklist to have your integration <a href="http://developer.avalara.com/certification/"> certified by Avalara</a> we have outlined the areas of integration that are necessary to ensure a stable and robust customer experience using AvaTax for Communication with your application. To be certified for Avalara AvaTax for Communications, all of the items with an R in the Required column listed below are required elements that must be present in your integration.</p>

<h4>Certified for Avalara AvaTax for Communications</h4>

<h3> AFC General </h3>

<div class="mobile-table">
<table class="styled-table">
<tr>
<td width="75">
<p><strong>Required</strong></p>
</td>
<td width="200">
<p><strong>Function</strong></p>
</td>
<td width="300">
<p><strong>Comment</strong></p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>AvaTax for Comms Configuration</p>
</td>
<td width="300">
<p>Allow customer to configure the following: username/password, company code.</p>
<p>Ensure password is properly secured using encryption.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>AvaTax for Comms Test Connection button</p>
</td>
<td width="300">
<p>Tests the connection to the AvaTax for Comms service and verifies credentials. This allows for troubleshooting.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200"> Tax Calculation - Disable tax calculation option</td>
<td width="300">
<p>The user must have an option to turn on or off the AvaTax for Comms Calculation service independent of any other Avalara product.</p></td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>User Implementation Guide</p>
</td>
<td width="300">
<p>User Implementation Guide should contain screenshots and information allowing the end user to configure for AvaTax for Comms including where credentials, company code, and where transaction/service pairs can be mapped.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Enable logging</p>
</td>
<td width="300">
<p>Enables detailed AvaTax for Comms logging. Information captured is round-trip time and complete xml for request/response.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Demonstrate and document installation of software.</p>
</td>
<td width="300">
<p>Customers should have an easy and trouble free installation of software.</p>
</td>
</tr>
</table>
</div>

<h3> AFC SOAP API (Only required for SOAP API user) </h3>

<div class="mobile-table">
<table class="styled-table">
<tr>
<td width="75">
<p><strong>Required</strong></p>
</td>
<td width="200">
<p><strong>Function</strong></p>
</td>
<td width="300">
<p><strong>Comment</strong></p>
</td>
</tr>
</table>
</div>

<h4> Obtain a Pcode </h4>
<div class="mobile-table">
<table class="styled-table">
<tr>
<td colspan="3" width="575">
<p>One of the Following is required:</p>
</td>
</tr>
<tr>
<td rowspan="4" width="75">
<p>R</p>
</td>
<td width="200">
<p>Local data using all_adr</p>
</td>
<td width="300">
<p>Explain how the all_adr data.txt is loaded and maintained. Show how this data is used for obtaining a PCode</p>
</td>
</tr>
<tr>
<td width="200">
<p> ZipToPCode</p>
</td>
<td width="300">
<p>Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="200">
<p> NpaNxxToPCode</p>
</td>
<td width="300">
<p>Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="200">
<p> FipsToPCode,</p>
</td>
<td width="300">
<p> Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="300">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify pcode information.</p>
</td>
</tr>
</table>
</div>

<h4>Populate Transaction structure</h4>
<p>See <a href = "http://developer.avalara.com/api-reference/communications/afc/">AvaTax for Comms documentation</a> for a description of the fields and how they should be set.</p>
<div class="mobile-table">
<table class="styled-table">
<tr>
<td colspan="3" width="575">
<p> One of the Following is required:</p>
</td>
</tr>
<tr>
<td rowspan="4" width="75">
<p>R</p>
</td>
<td width="200">
<p>CalcTaxesWithPCode</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToPcode, OriginationPcode and TerminationPCode in Transaction strcuture with PCode returned from one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode.</p>
</td>
</tr>
<tr>
<td width="200">
<p>CalcTaxesWithNpaNxx</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToNpaNxx, OriginationNpaNxx and TerminationNapNxx fields in Transaction structure with NPANXX.</p>
</td>
</tr>
<tr>
<td width="200">
<p>CalcTaxesWithZipAddress</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToAddress, OriginationAddress and TerminationAddress in Transaction structure.</p>
</td>
</tr>
<tr>
<td width="200">
<p>CalcTaxesWithFipsCode</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, populate BillToFipscode, OriginationFipsCode and TerminationFIpsCode with FIPS code.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Parse TaxData</p>
</td>
<td width="300">
<p>See AvaTax for Comms documentation for a description of fields and how they should be set.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="300">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify both parties agree with results.</p>
</td>
</tr>
</table>
</div>

<h4>Populate Transaction structure</h4>
<p>See <a href = "http://developer.avalara.com/api-reference/communications/afc/">AvaTax for Comms documentation</a> for a description of the fields and how they should be set.</p>
<div class="mobile-table">
<table class="styled-table">
<tr>
<td colspan="3" width="575">
<p>One of the Following is required:</p>
</td>
</tr>
<tr>
<td rowspan="4" width="75">
<p>R<br /> </p>
</td>
<td width="200">
<p>CalcAdjWithPCode</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use Pcode returned from either EZgeo (separate service) or from separate call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode.</p>
</td>
</tr>
<tr>
<td width="200">
<p>CalcAdjWithNpaNxx</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use NPANXX to identify origination and termination.</p>
</td>
</tr>
<tr>
<td width="200">
<p>CalcAdjWithZipAddress</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use zip code to identify origination and termination.</p>
</td>
</tr>
<tr>
<td width="200">
<p>CalcAdjWithFipsCode</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. In this instance, use FIPS code to identify origination and termination.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="300">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</p>
</td>
</tr>
</table>
</div>

<h3>AFC REST API (only required for REST API user)</h3>

<div class="mobile-table">
<table class="styled-table">
<tr>
<td width="75">
<p><strong>Required</strong></p>
</td>
<td width="200">
<p><strong>Function</strong></p>
</td>
<td width="300">
<p><strong>Comment</strong></p>
</td>
</tr>
</table>
</div>

<h4> Obtain a Pcode </h4>

<div class="mobile-table">
<table class="styled-table">
<tr>
<td colspan="3" width="575">
<p>One of the Following is required: </p>
</td>
</tr>
<tr>
<td rowspan="2" width="75">
<p>R</p>
</td>
<td width="200">
<p>Local data using all_adr</p>
</td>
<td width="300">
<p>Explain how the all_addr.txt data is loaded and maintained.</p>
<p>Show how this data is used for obtaining a PCode</p>
</td>
</tr>
<tr>
<td width="200">
<p> /api/v1/Location/PCode</p>
</td>
<td width="300">
<p>Get Pcode by populating required information</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="300">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify pcode information.</p>
</td>
</tr>
</table>
</div>

<h4>Populate Transaction structure</h4>
<p>See <a href = "http://developer.avalara.com/api-reference/communications/afc/">AvaTax for Comms documentation</a> for a description of the fields and how they should be set.</p>
<div class="mobile-table">
<table class="styled-table">
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>/api/v1/CalculateTaxes</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. This method accepts transaction data and performs appropriate tax calculations.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Parse TaxData</p>
</td>
<td width="300">
<p>See AvaTax for Comms documentation for description of returned fields.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="300">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify both parties agree with results.</p>
</td>
</tr>
</table>
</div>

<h4>Populate Transaction structure</h4>
<p>See <a href = "http://developer.avalara.com/api-reference/communications/afc/">AvaTax for Comms documentation</a> for a description of the fields and how they should be set.</p>
<div class="mobile-table">
<table class="styled-table">
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>/api/v1/CalculateAdjustments</p>
</td>
<td width="300">
<p>Populate Transaction data structure with appropriate data. Parse returned TaxData data structure for results. This method accepts transaction data and performs appropriate tax adjustment calculations.</p>
</td>
</tr>
<tr>
<td width="75">
<p>R</p>
</td>
<td width="200">
<p>Have Avalara admin review results in system.</p>
</td>
<td width="300">
<p>From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</p>
</td>
</tr>
</table>
</div>
