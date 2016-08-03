---
layout: default
title: Certification Checklist
date: 2016-06-07 14:03
author: anya.stettler
comments: true
categories: []
product: communications
nav: apis
doctype: integration_checklists
---
<h2>Certified for Avalara AvaTax for Communications</h2>
Certification for Avalara AFC requires the delivery of all functional requirements shown below.

Key: R - Functionality required for certification    N - Functionality not required, but noted

&nbsp;
<h3 id="CertifiedforAvalaraAFC-AFCGeneral">AFC  General</h3>
<div class="table-wrap">
<table class="wrapped confluenceTable tablesorter tablesorter-default stickyTableHeaders"><colgroup> <col /> <col /> <col /></colgroup>
<thead class="tableFloatingHeaderOriginal">
<tr class="tablesorter-headerRow">
<th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" tabindex="0" scope="col" data-column="0">
<div class="tablesorter-header-inner">Required</div></th>
<th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" tabindex="0" scope="col" data-column="1">
<div class="tablesorter-header-inner">Function</div></th>
<th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" tabindex="0" scope="col" data-column="2">
<div class="tablesorter-header-inner">Comment</div></th>
</tr>
</thead>
<tbody>
<tr>
<td class="confluenceTd">R</td>
<td class="confluenceTd">AvaTax for Comms Configuration</td>
<td class="confluenceTd">Allow customer to configure the following: username/password, company code

Ensure password is properly secured using encryption.</td>
</tr>
<tr>
<td class="confluenceTd">R</td>
<td class="confluenceTd">AvaTax for Comms Test Connection button</td>
<td class="confluenceTd">Tests the connection to the AvaTax for Comms service and verifies credentials.  This allows for troubleshooting.</td>
</tr>
<tr>
<td class="confluenceTd">R</td>
<td class="confluenceTd">Tax Calculation - Disable tax calculation option</td>
<td class="confluenceTd">The user must have an option to turn on or off the AvaTax for Comms Calculation service independent of any other Avalara product</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> R</td>
<td class="confluenceTd" colspan="1"> User Implementation Guide</td>
<td class="confluenceTd" colspan="1"> User Implementation Guid should contain screenshots and information allowing the end user to configure for AvaTax for Comms including where credentials,

company code, and transaction/service pairs can be mapped.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> R</td>
<td class="confluenceTd" colspan="1"> Enable logging</td>
<td class="confluenceTd" colspan="1"> Enables detailed AvaTax for Comms logging.  Information captured is round-trip time and complete xml for request/response.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> R</td>
<td class="confluenceTd" colspan="1"> Demonstrate and document installation of software.</td>
<td class="confluenceTd" colspan="1"> Customers should have an easy and trouble free installation of software</td>
</tr>
</tbody>
</table>
</div>
&nbsp;
<h3 id="CertifiedforAvalaraAFC-AFCAPI">AFC API</h3>
<div class="table-wrap">
<table class="wrapped confluenceTable"><colgroup> <col /> <col /> <col /></colgroup>
<tbody>
<tr>
<th class="confluenceTh">Required</th>
<th class="confluenceTh">Function</th>
<th class="confluenceTh">Comment</th>
</tr>
<tr>
<td class="confluenceTd">R</td>
<td class="confluenceTd">Verify connectivity to WSDL</td>
<td class="confluenceTd">Make sure <a class="external-link" href="http://eztaxasp.eztax.com/EZtaxWebService/EZtaxWebService.svc?wsdl" rel="nofollow">http://EZtaxasp.EZtax.com/EZtaxWebService/EZtaxWebService.svc?wsdl</a> is accesible</td>
</tr>
<tr>
<td class="confluenceTd">R</td>
<td class="confluenceTd">Call GetServerTime</td>
<td class="confluenceTd">Request requires no input from client application.  Verify contents is current Central time.</td>
</tr>
<tr>
<th class="confluenceTh" colspan="2">Populate Transaction structure</th>
<th class="confluenceTh">See AvaTax for Comms documentation for description of fields and how they should be set.</th>
</tr>
<tr>
<th class="confluenceTh" colspan="2">One of the Following is required:</th>
<th class="confluenceTh" colspan="1"></th>
</tr>
<tr>
<td class="confluenceTd" rowspan="4">&nbsp;

&nbsp;

R</td>
<td class="confluenceTd" colspan="1">CalcTaxesWithPCode</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationPcode and TerminationPCode in Transaction strcuture with PCode returned from either EZgeo (separate service) or from separate call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> CalcTaxesWithNpaNxx</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationNpaNxx and TerminationNapNxx fields in Transaction structure with NPANXX.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> CalcTaxesWithZipAddress</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationAddress and TerminationAddress in Transaction structure.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> CalcTaxesWithFipsCode</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, populate OriginationFipsCode and TerminationFIpsCode with FIPS code</td>
</tr>
<tr>
<th class="confluenceTh" colspan="1"></th>
<th class="confluenceTh" colspan="1"></th>
<th class="confluenceTh" colspan="1"></th>
</tr>
<tr>
<td class="confluenceTd" colspan="1">  R</td>
<td class="confluenceTd" colspan="1"> Parse TaxData</td>
<td class="confluenceTd" colspan="1">  See AvaTax for Comms documentation for description of returned fields.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> R</td>
<td class="confluenceTd" colspan="1"> Have Avalara admin review results in system.</td>
<td class="confluenceTd" colspan="1"> From previous call to one of the methods above, have Avalara admin review input information and output information to verify both parties agree with results.</td>
</tr>
<tr>
<th class="confluenceTh" colspan="2">  Populate Transaction structure</th>
<th class="confluenceTh" colspan="1"> See AvaTax for Comms documentation for description of fields and how they should be set.</th>
</tr>
<tr>
<th class="confluenceTh" colspan="2"> One of the Following is required:</th>
<th class="confluenceTh" colspan="1"></th>
</tr>
<tr>
<td class="confluenceTd" rowspan="4"> R</td>
<td class="confluenceTd" colspan="1"> CalcAdjWithPCode</td>
<td class="confluenceTd" colspan="1">Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use Pcode returned from either EZgeo (separate service) or from separate call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> CalcAdjWithNpaNxx</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use NPANXX to identify origination and termination.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> CalcAdjWithZipAddress</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use zip code to identify origination and termination.</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> CalcAdjWithFipsCode</td>
<td class="confluenceTd" colspan="1"> Populate Transaction data structure with appropriate data.  Parse returned TaxData data structure for results.  In this instance, use FIPS code to identify origination and termination.</td>
</tr>
<tr>
<th class="confluenceTh" colspan="2"> Obtain a PCode</th>
<th class="confluenceTh" colspan="1"></th>
</tr>
<tr>
<th class="confluenceTh" colspan="2"> One of the Following is required:</th>
<th class="confluenceTh" colspan="1"></th>
</tr>
<tr>
<td class="confluenceTd" rowspan="2"> R</td>
<td class="confluenceTd" colspan="1"> AFC Geo</td>
<td class="confluenceTd" colspan="1"> Call to AFC Geo to obtain a PCodeor call to one of utility functions FipsToPCode, ZipToPCode, or NpaNxxToPCode</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1">Local data using all_adr</td>
<td class="confluenceTd" colspan="1"> Explain how the all_adr data is loaded and maintained.Show how this data is used for obtaining a PCode</td>
</tr>
<tr>
<td class="confluenceTd" colspan="1"> R</td>
<td class="confluenceTd" colspan="1"> Have Avalara admin review results in system</td>
<td class="confluenceTd" colspan="1"> From previous call to one of the methods above, have Avalara admin review input information and output information to verify adjustment was made and both parties agree with results.</td>
</tr>
</tbody>
</table>
</div>
&nbsp;
