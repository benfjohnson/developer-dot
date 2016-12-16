---
layout: page
title: Communications Certification
product: communications
doctype: integration_checklists
nav: apis
community: apis
---


Depending on the scope of your integration and your business practice, your test cases
will vary. For development partners, many of these are requirements for certification. If
you were to give us a full functionality demo, here's what we'd like to see.

<table class="styled-table">
<tr>
<td><strong>Use Case</strong></td>
<td><strong>Expected Outcome</strong></td>
<td><strong>Demonstrate</strong></td>
</tr>
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
<td> You should have the ability to pass through all types of inputs through with transactions:
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
<td> You should have the ability to pass through all types of inputs through with transactions:
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
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> You should have the ability to pass through all types of inputs through with transactions:
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
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> You should have the ability to pass through all types of inputs through with transactions:
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
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> You should have the ability to pass through all types of inputs through with transactions:
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
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> You should have the ability to pass through all types of inputs through with transactions:
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
<td> Validate Company specific data in AFC transactional inputs. </td>
<td> You should have the ability to pass through all types of inputs through with transactions:
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
</table>
