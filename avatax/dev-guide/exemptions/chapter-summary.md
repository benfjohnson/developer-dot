---
layout: page
title: Chapter 8 - Summary
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/exemptions-for-usage/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/locations/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Because you have read this chapter, you should now know: 
<ul class="dev-guide-list">
    <li>All the factors that could cause tax on a transaction to be zero</li>
    <li>Which factors are company-related, which are product-related, and which are transaction-related</li>
    <li>How to allow a customer to choose these factors correctly in your user interface</li>
</ul>

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Document Management Certification Requirements</a></div>
<div class="dev-guide-certification-content">
    <ul class="dev-guide-list">
        <li>Customer Code - Identify customer code (number, ID) to pass to the AvaTax service. Typically this is an account name, customer name, or email address on file for the customer.</li>
        <li>Customer Creation - Creation of an exempt customer record triggers the creation of a customer record in CertCapture.</li>
        <li>Customer Updates - When exempt customer records are updated in the application, those same updates are applied to the customer record in CertCapture.</li>
        <li>Request new Certificate - As exemption certificates expire, a function to send the customer a request for a new exemption certificate is required.</li>
        <li>Retrieve Customer Exemption Status - Retrieve and display exemption certificate information associated with a customer record.</li>
        <li>View Exemption Certificate - View an exemption certificate associated with customer record.</li>
    </ul>
</div>
</div>

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">AvaTax Certification Requirements</a></div>
<div class="dev-guide-certification-content">
    <ul class="dev-guide-list">
        <li>Exemption Number - Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</li>
        <li>Entity/Use Code - This is a group of codes that indicate the type of exemption.  See the <a class="dev-guide-link" href="/avatax/handling-tax-exempt-customers/">standard codes</a>, but be aware that users are able to create custom codes as well.It is best to manage this value in your application’s Customer record and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable. Note that either Exemption Number or Entity/Use code is required (not both). Entity/Use Code is preferred.</li>
    </ul>
</div>
</div>


Test cases that must be understood to correctly handle tax exemptions, including testing for:
<ul class="dev-guide-list">
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/reasons-tax-can-be-zero/#test1">8.1.1 - Reasons Tax Can Be Zero</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/reasons-tax-can-be-zero/#test2">8.1.2 - Reasons Tax Can Be Zero</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test1">8.2.1 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test2">8.2.2 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test3">8.2.3 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test4">8.2.4 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test5">8.2.5 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test6">8.2.6 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test7">8.2.7 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemption-certificate/#test8">8.2.8 - Exemption Certificate</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/exemptions/exemptions-for-usage/#test1">8.3.1 - Exemptions for Usage</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/exemptions-for-usage/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/locations/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>