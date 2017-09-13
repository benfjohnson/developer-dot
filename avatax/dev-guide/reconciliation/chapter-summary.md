---
layout: page
title: Chapter 4 - Summary
product: avaTax
doctype: dev_guide
chapter: reconciliation
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/modifying-a-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
In this chapter, you've seen all the features available in AvaTax for designing a transaction reconciliation process.  You can choose which process best fits your company.

<ul class="dev-guide-list">
    <li>For a simple web store, you may prefer to use a direct-commit process, and refund any transaction if an error is discovered.  This process only uses two API calls: <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> and <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction.</a></li>
    <li>For a small accounting system, you may prefer to use a one-stage commit process, and void any transactions when an error is discovered.  This process would also use <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a> and <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a>.</li>
    <li>More complex processes will use all available APIs, including <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a>, <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionByCode</a>, and <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction.</a></li>
</ul>

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
<div class="dev-guide-certification-content">
AvaTax Certified Connectors must ensure that transactions are processed through a logical document lifecycle
    <ul class="dev-guide-list">
      <li>Ensure that invoices are posted/committed for reporting appropriately.</li>
      <li>When invoices are deleted/cancelled, the transaction is updated to reflect the status.</li>
      <li>Ensure that Credit Memos are posted/committed for reporting appropriately.</li>
      <li>When Credit Memos are deleted/cancelled, the transaction is updated to reflect the status.</li>
    </ul>
</div>
</div>

Tests in this chapter:
<ul class="dev-guide-list">
  <li><a class='dev-guide-link' href="/avatax/dev-guide/reconciliation/committing-a-transaction/#test1">4.1.1 - Committing a Transaction</a></li>
  <li><a class='dev-guide-link' href="/avatax/dev-guide/reconciliation/committing-a-transaction/#test2">4.1.2 - Committing a Transaction</a></li>
  <li><a class='dev-guide-link' href="/avatax/dev-guide/reconciliation/modifying-a-transaction/#test1">4.2.1 - Modifying a Transaction</a></li>
  <li><a class='dev-guide-link' href="/avatax/dev-guide/reconciliation/modifying-a-transaction/#test2">4.2.2 - Modifying a Transaction</a></li>
  <li><a class='dev-guide-link' href="/avatax/dev-guide/reconciliation/modifying-a-transaction/#test3">4.2.3 - Modifying a Transaction</a></li>
</ul>

Connector developers are free to customize the use of the reconciliation API suite to match their business processes.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/modifying-a-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>