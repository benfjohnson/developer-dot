---
layout: default
title: Certification Checklist
product: communications
nav: certification
doctype: integration_checklists
---
<h2>Certified for Avalara AvaTax for Communications</h2>
<p>Certification for Avalara AFC requires the delivery of all functional requirements shown below.</p>
<h3 id="CertifiedforAvalaraAFC-AFCGeneral">AFC General</h3>
<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
        <tr>
            <td>R</td>
            <td>AvaTax for Comms Configuration</td>
            <td>Allow customer to configure the following: username/password, company code Ensure password is properly secured using encryption.</td>
        </tr>
        <tr>
            <td>R</td>
            <td>AvaTax for Comms Test Connection button</td>
            <td>Tests the connection to the AvaTax for Comms service and verifies credentials.  This allows for troubleshooting.</td>
        </tr>
        <tr>
            <td>R</td>
            <td>Tax Calculation - Disable tax calculation option</td>
            <td>he user must have an option to turn on or off the AvaTax for Comms Calculation service independent of any other Avalara product</td>
        </tr>
        <tr>
            <td>R</td>
            <td>User Implementation Guide</td>
            <td>User Implementation Guid should contain screenshots and information allowing the end user to configure for AvaTax for Comms including where credentials, company code, and transaction/service pairs can be mapped.</td>
        </tr>
        <tr>
            <td>R</td>
            <td>Enable logging</td>
            <td>Enables detailed AvaTax for Comms logging.  Information captured is round-trip time and complete xml for request/response.</td>
        </tr>
        <tr>
            <td>R</td>
            <td>Demonstrate and document installation of software</td>
            <td>Customers should have an easy and trouble free installation of software</td>
        </tr>
    </tbody>
</table>


<h3 id="CertifiedforAvalaraAFC-AFCAPI">AFC API</h3>
<div class="row">
    <div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
    <div class="col-xs-3">Function</div>
    <div class="col-xs-8">Comment</div>
</div>

<h5>Populate Transaction structure</h5>
<p>See <a href="/api-reference/communications/afc/">AvaTax for Comms documentation</a> for description of fields and how they should be set.</p>
<p>One of the Following is required:</p>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcTaxesWithPCode</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationPcode and TerminationPCode in Transaction strcuture with PCode returned from either EZgeo (separate service) or from separate call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode.</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcTaxesWithNpaNxx</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationNpaNxx and TerminationNapNxx fields in Transaction structure with NPANXX.</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcTaxesWithZipAddress</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationAddress and TerminationAddress in Transaction structure.</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcTaxesWithFipsCode</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationFipsCode and TerminationFIpsCode with FIPS code</div>
</div>
<br />
<div class="row">
    <div class="col-xs-1">R</div>
    <div class="col-xs-3">Parse TaxData</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>See AvaTax for Comms documentation for description of returned fields.</div>
</div>
<div class="row">
    <div class="col-xs-1">R</div>
    <div class="col-xs-3">Have Avalara admin review results in system.</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>From previous call to one of the methods above, have Avalara admin review input information and output information to verify both parties agree with results.</div>
</div>
<h5>Populate Transaction structure</h5>
<p>See AvaTax for Comms documentation for description of fields and how they should be set.</p>
<p>One of the Following is required:</p>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcAdjWithPCode</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use Pcode returned from either EZgeo (separate service) or from separate call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcAdjWithNpaNxx</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use NPANXX to identify origination and termination.
</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcAdjWithZipAddress</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use zip code to identify origination and termination.</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">CalcAdjWithFipsCode</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use FIPS code to identify origination and termination.</div>
</div>
<h5>Obtain a PCode</h5>
<p>One of the Following is required:</p>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">AFC Geo</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Call to AFC Geo to obtain a PCodeor call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode</div>
</div>
<div class="row">
    <div class="col-xs-1"></div>
    <div class="col-xs-3">Local data using all_adr</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>Explain how the all_adr data is loaded and maintained.Show how this data is used for obtaining a PCode</div>
</div>
<br />
<div class="row padding-bottom">
    <div class="col-xs-1">R</div>
    <div class="col-xs-3">Have Avalara admin review results in system</div>
    <div class="col-xs-8"><span class="visible-xs"><br /></span>From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</div>
</div>
