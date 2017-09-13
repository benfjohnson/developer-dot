---
layout: page
title: Chapter 11 - Calculating Tax Offline
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/detecting-a-dropped-connection/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Designing robust software means planning for every eventuality.  To create a world-class product using AvaTax, you need to be prepared for when things go wrong - and one of the problems you may face is the loss of your Internet connection.  Fortunately, there are ways to write your software to gracefully handle a dropped connection.

It's first important to identify a few different types of connection issues:
<ul class="dev-guide-list">
  <li>Temporary Outage - Your connection has gone offline, and you need to be able to process transactions for a short period of time until the connection is restored.  In this case, the biggest challenge is ensuring that your software keeps track of all calculations handled offline and reconciles them when you come back online.  An example of a temporary outage would be when your network router loses power and needs a few minutes to reboot.</li>
  <li>Intermittent Connection - Your connection works most of the time, but its behavior is unpredictable. In this case, you need to be able to handle a timeout problem or a connection interruption problem gracefully and still perform tax calculation as precisely as possible.  An example of an intermittent connection would be mobile cellular internet service for a remote cash register at a city park.</li>
  <li>Unable to Reach AvaTax - If your connection is up, but you are unable to reach AvaTax, there may be a more complex problem - there could be a routing problem, or a denial-of-service attack on an Internet service provider, or AvaTax could be temporary offline due to an outage.  In this case, you need to continue to provide tax determination for your customers and store transactions for later reconciliation.</li>
</ul>

These three types of outages have similar characteristics, so it's straightforward to design a single process to handle all of them.  Here is how we handle a broken connection:
<ul class="dev-guide-list">
  <li>Detect the dropped connection and prevent a crash</li>
  <li>Retry the transaction, or fallback to a default tax rate</li>
  <li>Reconcile offline transactions after the outage</li>
</ul>

Let's look at each of these challenges separately.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/detecting-a-dropped-connection/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>