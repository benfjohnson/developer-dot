---
layout: post
title: Lifecycle of a Transaction
description: How does a transaction begin its life, and how does it change over time?
date: 2017-01-23 17:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

The centerpiece of Avalara's world-leading AvaTax service is the 'Transaction'.  A Transaction can reflect <a href="http://developer.avalara.com/blog/2016/11/18/types-of-transactions/">one of many different types of business documents</a>, and it's worth discussing how a transaction can change over time.  Let's begin by understanding how a "Sales" transaction is created, and how it can change over time.

<h2>The Transaction State Diagram</h2>

In AvaTax, a sales transaction is an exchange that occurs between two companies.  Although other types of transactions exist that can be within a single company - for example, inventory transfer transactions - in today's use case we will only examine transactions that occur between two companies.

When you create a transaction, the information about that transaction is referred to as a "Document".  You will see many comments or articles that refer to "Documents" rather than transactions - it helps if you think of the "Transaction" as the API call, and the "Document" as the data that is stored on disk.  For today's article, we will refer to Transactions as the API, and Documents as the values returned back from the API calls.

<img src="/public/images/blog/DocumentLifecycle20170123.png" alt="Document Lifecycle 2017-01-23" />

As you can see from the lifecycle document above, a transaction can go through a number of steps before it is finalized.  We have designed these steps to be flexible enough to solve problems for a variety of different customers and different types of tax processes.  Clearly, the way you use AvaTax can be uniquely suited to your business.  Let's start with a few common use cases.

<h3>Scenario 1: Online Storefront</h3>

In an online store, your first task is to provide a sales tax estimate for the user casually browsing through your website.  These casual visitors have not purchased anything yet; but by giving them an accurate tax estimate you can show off your store's high quality and commitment to accuracy.  To help out this customer, you call <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> with the transaction type set to `SalesOrder`.  This gives you an accurate estimate of tax (assuming the customer put in their address correctly!), but it won't record any tax data yet, because the customer hasn't bought anything.

When the customer chooses to finish their transaction, your storefront should call <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> again, but this time you should set the transaction type to `SalesInvoice`.  This causes the transaction to be recorded into AvaTax, and you'll be able to check on it later.  The reason you have to contact the API a second time may not be immediately obvious - but the customer may have waited long enough that the tax rates might have changed, or their address may have changed, or your company configuration may have changed.  Any one of these small changes can affect the accuracy of a tax calculation, especially when an online storefront is still capable of selling to customers at 11:59 PM on the night before a sales tax holiday!

<h3>Scenario 2: Reconciliation</h3>

Let's say your company has a reconciliation process in place.  Perhaps you know that your customers tend to ask for adjustments to their orders frequently, or perhaps you just like assigning someone to verify all the orders placed by the sales team each night.  In this case, you should submit your `SalesInvoice` transaction with the `commit` flag set to false, and your transaction will be recorded in the `Saved` status.

How is this different than the alternative?  If you don't have a reconciliation process, you should set the `commit` flag to true on all transactions, and they will all be created directly into `Committed` status.  A transaction in `Committed` is eligible for reporting - that means that, if you subscribe to Avalara Managed Returns, Avalara will take this transaction, bundle it up into a monthly, quarterly, or annual tax return, and file it for you.  We won't file any transactions that are in `Saved` status.

This process flow is designed to allow you to have an independent verification step before any taxes are filed on your behalf.  There are millions of different reasons to want to have a multi-step process; but to Avalara, every use case is business critical for someone.  Here's how it would work for your team:

<ul class="normal">
    <li><strong>Alice</strong> creates a transaction on Monday using <code class="highlight-rouge">commit</code> =  <code class="highlight-rouge">false</code>.  The transaction is recorded in <code class="highlight-rouge">Saved</code> status.</li>
    <li><strong>Bob</strong> reviews the nightly transaction list, and calls <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a> to make sure that the data stored in AvaTax matches the data stored in his accounting system.  If any disrepancies exist, the Verify call will return an error; otherwise, the Verify call will move the transaction to <code class="highlight-rouge">Posted</code> status.</li>
    <li><strong>Charlie</strong> works in the warehouse, and she reviews the transactions a second time prior to fulfillment.  She makes the final decision whether to accept, reject, or adjust transactions.  If the transaction is accepted, she calls <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a>, and if the transaction should be voided, she calls <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a>.</li>
</ul>

You can easily bypass the `Posted` step if you would like to go directly to `Committed`; but please be careful.  If you file a document and then someone requests a refund, you'll have to handle ...

<h3>Scenario 3: Refunds and Changes</h3>

Refunds are the next big complication.  How do you properly issue a refund to a customer?  The answer, not surprisingly, is that the correct answer varies depending on where the document is in the lifecycle.

<ul class="normal">
    <li>If the transaction is in <code class="highlight-rouge">Saved</code>, <code class="highlight-rouge">Posted</code>, or <code class="highlight-rouge">Committed</code>, it's easy to give a refund.  This transaction hasn't been reported to the government yet!  You can simply call <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a> - and the document will be moved to the <code class="highlight-rouge">Cancelled</code>.</li>
    <li>If the transaction is in <code class="highlight-rouge">Locked</code> status, things are a bit tougher.  You will need to create a <code class="highlight-rouge">ReturnInvoice</code> transaction to issue a refund to the customer.  The <code class="highlight-rouge">ReturnInvoice</code> transaction should be basically the opposite of the original transaction you sent.  This <code class="highlight-rouge">ReturnInvoice</code> now has to go through the same steps that the original <code class="highlight-rouge">SalesInvoice</code> went through above - it needs to be reviewed, committed, and then eventually reported to the government.  Just like you gave the customer their money back, the government will now refund you the sales tax you paid on the original invoice.</li>
    <li>If the customer doesn't want to refund the entire transaction, you can consider calling <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction</a>.  This API call marks the old transaction as <code class="highlight-rouge">Adjusted</code> and creates a new transaction with the same transaction code with the updated information.  This works well if the salesperson made a mistake and needs to adjust a shipping address, or if a small change was made before anything shipped out of the warehouse.</li>
</ul>

In many accounting systems, a transaction is considered a permanent record that cannot be modified.  If your company elects to use this approach, you should not void any transactions for any reason.  You should allow the original transaction to be `Committed` and then `Locked`, and proceed directly to creating a `ReturnInvoice` for the refund.

<h2>Putting it All Together</h2>

The document lifecycle in AvaTax supports more features and use cases than I can describe briefly here.  There are dozens of different ways to design an integration with AvaTax, and our sales engineers are constantly meeting with new customers and ensuring that your business is supported properly throughout AvaTax.

Here's hoping your orders are committed smoothly!

--Ted Spence, Director, AvaTax Core Engine
