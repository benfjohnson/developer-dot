---
layout: page
title: Chapter 11 - Summary
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/guide-credits/">Credits<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Consuming sales tax related services can be considered mission-critical, especially when making calculation queries through the AvaTax product. As a cloud-based Software-as-a-Service provider, Avalara understands the need to ensure that our services are available continuously and respond in a timely manner.  Avalara’s Server Status can be viewed publicly at <a class="dev-guide-link" href="status.avalara.com<">status.avalara.com</a>. This page outlines the availability of the service, current performance in terms of response time and a historical view of the availability for the past week.

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
<div class="dev-guide-certification-content">
    <ul class="dev-guide-list">
      <li>Your software must be able to handle a timeout and retry the transaction.</li>
      <li>If your software allows fallback to a default tax rate, your program must store transactions for later reconciliation using a TaxOverride.</li>
    </ul>
</div>
</div>

Your software should be able to pass these integration tests:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/avatax/dev-guide/calculating-tax-offline/detecting-a-dropped-connection/#test1">11.1.1- Detecting a Dropped Connection</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/#test2">11.2.1 - Retry or Fallback</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/#test3">11.3.1 - Reconcile Transactions After Outage</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/guide-credits/">Credits<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
