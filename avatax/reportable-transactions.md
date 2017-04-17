---
layout: page
title: Reportable Transactions
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Commit transactions to make them part of your reports and liability calculations.</h2>
<p>When a GetTax call is made using a DocType value of SalesInvoice, the transaction is saved on the Admin Console as uncommitted (the default value for DocType, SalesOrder, does not save a transaction record on the Admin Console). Uncommitted transactions do not appear in AvaTax Admin Console reports or liability calculations.</p>
<p><strong>There are three ways to commit documents that were previously recorded as uncommitted.</strong></p>
<p>The simplest method is to set the DocType to SalesInvoice and set Commit to true on the GetTaxRequest, and at this time <em>if you are using our REST interface, this is the only way to do it</em>.</p>
<p>If you are using the SOAP interface, you can commit documents either with that same method, by calling PostTax, or by calling PostTax and then CommitTax. PostTax will allow you to either commit a document immediately (without initiating a recalculation), or to set the document in an intermediate state between uncommitted and committed. The document can then be moved from the intermediate state to committed with CommitTax (or rolled back to an uncommitted state with CancelTax).</p>
 <div class="caption">
    <img src="/public/images/blog/DevDotDiagrams_Uncommitted_document.svg" alt="Document Status shows as document header level property in the Admin Console" width="100%" />
    Document Status shows as document header level property in the Admin Console
</div>
<p>Uncommitted and posted documents can be replaced with any subsequent GetTax calls to the same DocCode (Document Number) which has the effect of changing the Document Status back to Uncommitted. A committed transaction can not be overwritten.</p>
<p>Committing an invoice should be performed at whatever point an invoice will no longer need to be changed or modified in any way by your application. The Posted status can be used if an intermediate status is required by the business process. Any changes that must be done after committing must be completed via an adjustment function such as a CancelTax (voids the document) or a Return Invoice.</p>
<hr />
