---
layout: page
title: Communications Certification
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

Depending on the scope of your integration and your business practice, your test cases
will vary. For development partners, many of these are requirements for certification. If
you were to give us a full functionality demo, here's what we'd like to see.

<table class="styled-table">
<thead>
<tr>
<th>Use Case</th>
<th>Expected Outcome</th>
<th>Demonstrate</th>
</tr>
</thead>
<tbody>
<tr>
<td> Validate ability to asociate materials/products to AFC Transaction Service type pair (T/S pair). </td>
<td> You should be able to run a transaction with valid AFC T/S pair. </td>
<td> How AFC T/S pairs are   aligned to material/product in source system. </td>
</tr>
<tr>
<td> Validate process to determine Jurisdiction(s). </td>
<td> You should be able to obtain correct Pcode/FIPS/NPaNxx for the jurisdiction. For example, ability to obtain correct Pcode using ZipToPCode API. </td>
<td> Display the correct Pcode for the jurisdiction. </td>
</tr>
<tr>
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> <p>You should have the ability to pass through all types of inputs through with transactions: </p>
<ul class="normal">
<li> Service Class: Primary Local or Primary Long Distance. </li>
<li> Regulated or Unregulated. </li>
<li> Customer Type: Business, Residential, Industrial, Senior Citizen. </li>
<li> Business Class: ILEC, CLEC, or Other. </li>
<li> Facilities Based. </li>
<li> Franchise. </li>
<li> Sale Type. </li>
<li> Company Identifier. </li>
</ul>
</td>
<td> Display the correct Pcode for the jurisdiction. </td>
</tr>
<tr>
<td> Validate execution of base calculate tax function. </td>
<td> You Should be able to submit basic transactions with required data values. For example, ability to calculate taxes using CalcTaxesWithPcode API call and get correct tax results. </td>
<td>
<ul class="normal">
<li> Display in source system how each of the input values are configured and passed to the API fields.</li>
<li> Demonstrate results in source system based upon differrent input parameters required for a basic transaction.</li>
</ul>
</td>
</tr>
<tr>
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> You should be able to submit basic transaction with required data values. For example, ability to  calculate taxes using CalcTaxesWithPcode API call and get correct tax results. </td>
<td>
<ul class="normal">
<li>Display in source system how each of the input values are configured and passed to the API fields. </li>
<li> Demonstrate results in source system based upon different input parameters required for a basic transaction. </li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Validate Adjustment handling</p>
<ul class="normal">
<li>Ability to use an adjustment call for a normal transaction </li>
<li> Ability to apply adjustment call for current/previous month transactions </li>
</ul>
</td>
<td> You should be able to submit adjustment transactions. For example, ability to apply adjustments using CalcAdjWithPcode API call and get correct tax results.</td>
<td>Pre API call setup and display adjustment results in source system </td>
</tr>
<tr>
<td>
<p>Validate Exemption handling</p>
<ul class="normal">
<li>Ability to handle specific exemptions</li>
<li>Ability to handle category exemptions</li>
<li>Ability to handle level exemptions - optional</li>
</ul>
<p>Applies to both Customer Mode and non customer mode</p>
</td>
<td>
<p>You should be able to submit transactions with exemption information for Level, category, and specific exemption. The results should reflect the exempted taxes.</p>
<p>For example, Ability to submit Tax exemption[] along with Transaction[] using CalcTaxesWithPcode API call and verify correct tax results.</p>
</td>
<td>
<ul class="normal">
<li>Display Pre API setup and execute transaction without exemption, displaying results in originating system.</li>
<li>Display Pre API setup with level exemptions and execute transaction, displaying results in originating system.</li>
<li>Display Pre API setup with specify exemptions and execute transaction, displaying results in originating system.</li>
<li>Display Pre API setup with category exemptions and execute transaction, displaying results in originating system.</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Validate Invoice transaction (Customer Mode):</p>
<ul class ="normal">
<li>Batch customer mode.</li>
<li>Transaction Customer Mode.</li>
</ul>
</td>
<td> User should be able to submit invoice mode/customer mode transactions and  received results from API service For example, Ability to submit a single transaction to be processed for a customer batch using "CalcCustTaxes" API and verify results using "ProcessCustomerbatch" API. </td>
<td>
<ul class="normal">
<li>Show API setup in Invoice mode and execute transaction, displaying results in source system.</li>
<li>Show API setup in Batch mode and execute transaction, displaying results in source system.</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Validate Batch Invoice/Customer Mode Adjustment handling</p>
<ul class ="normal">
<li>How to apply adjustment to current batch/previous batch</li>
<li>Ability to use an adjustment call for batch transaction</li>
</ul>
</td>
<td> User should be able to submit invoice mode/customer mode adjustment transactions and received results from API service. For example, Ability to submit a single adjustment transaction to be processed for a customer batch using "CalcCustAdj" API and verify results using "ProcessCustomerbatch" API.</td>
<td>
<ul class="normal">
<li>Show API setup in Invoice mode and execute adjustment transaction, displaying results in source system.</li>
<li>Show API setup in Batch mode and execute adjustment transaction, displaying results in source system.</li>
</ul>
</td>
</tr>
<tr>
<td>Validate ability to pass a single channel line and a multi-channel line.</td>
<td>
<p>Ability to pass following line transactions together for system to return taxes.</p>
<ul class="normal">
<li>Local/PBX Trunk, Local/PBX Extension, Local/PBX outbound channel.</li>
</ul>
<p>Ability to pass following Trunk transactions together</p>
<ul class="normal">
<li>Local/Centrex/DID Extension, Local/Centrex Trunk, Local/Centrex, outbound Channel.</li>
</ul>
<p>Ability to pass following channel transactions together</p>
<ul class="normal">
<li>Local/High Capacity Trunk Bundle, Local/High Capacity Extension Bundle,Local/High Capacity Outbound Channel Bundle.</li>
</ul>
</td>
<td>Display API set and execute transaction, showing results in source system.</td>
</tr>
<tr>
<td>
<p>Validate ability to treat common AFC returned exceptions</p>
<ul class="normal">
<li> Invalid Address </li>
<li> No Jurisdiction found </li>
</ul>
</td>
<td>
<p>Ability to distinguish between these exceptions and how to handle these: </p>
</td>
<td>
Display error code
</td>
</tr>
</tbody>
</table>
