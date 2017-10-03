---
layout: page
title: Chapter 4 - Reconciliation
product: avaTax
doctype: dev_guide
chapter: reconciliation
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/committing-a-transaction/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Now that you've calculated tax on your transaction, your next step is to ensure that your transactions are recorded and reconciled correctly.  Reconciliation is necessary in order to ensure that you report the correct transactions in each jurisdiction and on each tax form.  In the event of an audit, most jurisdictions will ask you to demonstrate that your sales transaction data fully matches the data reported on your tax form, and reconciliation support will ensure that you can answer those questions.

We will look at how to address the following:
<ul class="normal">
  <li>Reporting an estimate as a transaction</li>
  <li>Reporting a single transaction more than once</li>
  <li>Reporting a transaction that should have been canceled</li>
  <li>Mis-reporting a transaction that was adjusted</li>
  <li>Refunding the wrong tax amount to a customer</li>
  <li>Modifying a transaction after it has been reported</li>
  <li>Failing to report a valid transaction</li>
</ul>

To address these challenges, AvaTax separates transactions into those that are <code>Uncommitted</code>, those that are <code>Committed</code>, and those that have been <code>Locked</code> for Reporting.  Here's a brief description of how to use these statuses:

<ul class="normal">
  <li><code>Uncommitted</code> transactions cannot be reported to a tax authority.  They can be reviewed, reconciled, modified, and voided.  They must be committed before they will be reported to a tax authority.</li>
  <li><code>Committed</code> transactions are waiting to be reported, and can still be adjusted or voided.  All committed transactions for the filing period will automatically be locked for reporting when you approve your next filing using Avalara's Managed Returns Service.</li>
  <li><code>Locked</code> for Reporting transactions have been attached to an approved tax filing.  They can no longer be modified, adjusted, or voided.</li>
</ul>

This chapter will explain how to make use of the reconciliation features in AvaTax to ensure that your transactions are reported correctly.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/committing-a-transaction/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>