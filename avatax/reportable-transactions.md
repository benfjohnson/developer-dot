---
layout: default
title: Commit Transactions
date: 2012-05-14 16:02
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: documentation
---
<h2>Commit transactions to make them part of your reports and liability calculations.</h2>
When a GetTax call is made using a DocType value of SalesInvoice, the transaction is saved on the Admin Console as uncommitted (the default value for DocType, SalesOrder, does not save a transaction record on the Admin Console). Uncommitted transactions do not appear in AvaTax Admin Console reports or liability calculations.

<b>There are three ways to commit documents that were previously recorded as uncommitted.</b>
The simplest method is to set the DocType to SalesInvoice and set Commit to true on the GetTaxRequest, and at this time <em>if you are using our REST interface, this is the only way to do it</em>.
If you are using the SOAP interface, you can commit documents either with that same method, by calling PostTax, or by calling PostTax and then CommitTax. PostTax will allow you to either commit a document immediately (without initiating a recalculation), or to set the document in an intermediate state between uncommitted and committed. The document can then be moved from the intermediate state to committed with CommitTax (or rolled back to an uncommitted state with CancelTax).

<a href="/images/2012/05/Document-Status.jpg"><img class="size-full wp-image-330" src="/images/2012/05/Document-Status.jpg" alt="Document Status shows as document header level property in the Admin Console" width="776" height="215" /></a> 

<div class="caption">Document Status shows as document header level property in the Admin Console</div>

Uncommitted and posted documents can be replaced with any subsequent GetTax calls to the same DocCode (Document Number) which has the effect of changing the Document Status back to Uncommitted. A committed transaction can not be overwritten.

Committing an invoice should be performed at whatever point an invoice will no longer need to be changed or modified in any way by your application. The Posted status can be used if an intermediate status is required by the business process. Any changes that must be done after committing must be completed via an adjustment function such as a CancelTax (voids the document) or a Return Invoice.

<hr />

<h2>Related Community Discussions</h2>
<div id="gsfn_list_widget">
<div id="gsfn_content">Loading...</div>
</div>
<script src="https://getsatisfaction.com/avalara/widgets/javascripts/f585970/widgets.js" type="text/javascript"></script><script src="https://getsatisfaction.com/avalara/topics.widget?callback=gsfnTopicsCallback&amp;length=240&amp;limit=5&amp;sort=recently_active&amp;user_defined_code=commit" type="text/javascript"></script>
<div id="getsat-widget-8157"></div>
<script src="https://loader.engage.gsfn.us/loader.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
if (typeof GSFN !== "undefined") { GSFN.loadWidget(8157,{"containerId":"getsat-widget-8157"}); }
// ]]></script>
