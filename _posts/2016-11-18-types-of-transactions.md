---
layout: post
title: Types of Transactions
date: 2016-11-18 16:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

AvaTax is a full service engine for calculating transactional taxes, including sales, use, VAT, and many other tax types.  In order to properly calculate taxes in these different circumstances, AvaTax must also support a wide variety of transaction types.  In today's article, I will walk you through the differences between these transactions and describe how to map them to your business processes.

<h2>Orders vs Invoices</h2>

Our customers require both the ability to <a href="http://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/">estimate tax for a transaction</a>, and to record the actual tax for that transaction.  Many customers use AvaTax as a way to predict taxes before taking action - for example, showing "Estimated Tax" on a web storefront.  Other customers use AvaTax to calculate taxes only at the moment the transaction occurs - for example, when recording a sale in their accounting system.

In AvaTax, an "Order" represents a temporary transaction that is not saved, whereas an "Invoice" represents a permanent transaction that will be maintained.  Think about these documents like you are a salesperson:

<ul class="normal">
	<li>You begin by speaking to a customer and obtaining information about what they would like to purchase.  With this information, you construct a 'Create Transaction' request.</li>
	<li>First, you calculate that transaction in AvaTax using a <code class="highlighter-rouge">SalesOrder</code> transaction type.  This becomes a quote (or lead, or opportunity) that you can share with the customer.  The quote is as accurate as the information you have on hand, but you know that the customer will review the quote before making a decision to purchase, so we do not record it in our accounting ledger yet.</li>
	<li>The customer then reviews the quote and may or may not request changes.  It could be that the customer wants to purchase one more line item, or maybe they want the shipping address changed, or maybe they have an exemption certificate they want to provide to change their taxable use conditions.  These changes can be recalculated by resubmitting the transaction to AvaTax, each time using the <code class="highlighter-rouge">SalesOrder</code> transaction type.</li>
	<li>If the customer decides to cancel the order, or not to make a purchase, no action is required.  You do not need to cancel a <code class="highlighter-rouge">SalesOrder</code> - because it has not been recorded as a permanent transaction yet.</li>
	<li>When the customer does choose to make a purchase, you can then recalculate the transaction in AvaTax using the <code class="highlighter-rouge">SalesInvoice</code> transaction type.  The <code class="highlighter-rouge">SalesInvoice</code> transaction type represents a transaction that has occurred, and can then be recorded, queried, reported on, and eventually filed in a tax return to a taxing authority.</li>
</ul>

Because every type of transaction must be able to follow this same pattern, AvaTax supports all transaction types as both Orders and Invoices.  It's worth noting that the `Invoice` transaction type provides a key compatibility between Avalara's tax calculation API and the Avalara Managed Returns Service.  The Managed Returns Service only supports filing taxes calculated with AvaTax - but you can only file taxes that were recorded in `Invoice` types!  Anything you calculated using `Order` types is considered a temporary estimate and won't be reported.

Because Order transaction types are temporary documents, it's also worth noting that your transaction will not be retrievable later.  All Order transactions will have ID numbers that are `-1`, indicating that they cannot be fetched back using the API.  Invoice transactions have positive ID numbers and can be retrieved back.

Next, let's describe the various types of transactions and see how they work.

<h2>Sales Transactions</h2>

A `SalesOrder` or `SalesInvoice` transaction represents a sale that your company made to a customer.  This is by far the most common type of transaction that AvaTax handles.  As usual, a `SalesOrder` is an estimate and a `SalesInvoice` is a record of a transaction that occurred.  SalesOrders are typically used to represent web shopping cart calculations, sales recorded through an accounting or ledger system, or service contracts signed on a particular date for future delivery.

In the case of a Sales transaction, a positive currency value means that your company received money from the customer; and a negative currency value means that your company paid the customer.  It is generally expected that sales transactions are reported as positive currency values.

Sales transactions are generally expected to be recorded as they occur.  For example, if you calculate an estimate for a customer using a `SalesOrder` on the 11th of the month, then convert it to a `SalesInvoice` on the 20th of the month, it is customary to choose the transaction date as the 20th.  The AvaTax API natively supports this date behavior - just omit the `date` field from your `/api/v2/transactions/create` API call and the date will be automatically selected for you.

<h2>Return Transactions</h2>

When a customer changes their mind and asks for a refund, you can process that refund by specifying a `ReturnOrder` or `ReturnInvoice` transaction.  This transaction type refers to a reversal of the charges that occurred when you originally made the sale.  As usual, the `ReturnOrder` can be used for estimating and the `ReturnInvoice` is a permanent record.

A Return transaction with a negative currency value refers to money that your company refunded to your customer; a return transaction with a positive currency value represents money the customer gives to your company.  It is generally expected that return transactions are reported as negative currency values.

Return transactions are usually reported on the day when the refund took place, but they often need to calculate tax for the date of the original transaction that is being reversed.  For an example, imagine you purchase a sweater at the local shop and pay 7% sales tax.  A month later, you return the sweater to the shop for a refund - but the tax rate is now 7.25%.  In this case, the store is expected to refund you your original purchase price and the original sales tax you paid, not the new tax that you would pay if you purchased it today.  AvaTax allows you to calculate tax for a different day by specifying the `taxDate` parameter on your `ReturnInvoice` or `ReturnOrder`.  To use this feature, you specify the `date` of the transaction as the date when the refund occurred, and set the `taxDate` to the date of the original purchase.

<h2>Purchase Transactions</h2>

A purchase transaction represents a purchase made by your company from a vendor.  A `PurchaseOrder` represents a quote you request from a vendor, and a `PurchaseInvoice` represents a finalized purchase transaction.

In the United States, most vendors will automatically charge and remit transactional taxes on your behalf.  However, some companies choose to use AvaTax to identify any discrepancies between the tax rate you were charged by a vendor and the correct tax rate for a product or service.  This calculation can assist a company in recovering overpaid taxes, or in identifying any cases where their vendor relationships are not in full compliance with tax laws.

You may use a `PurchaseOrder` to get an estimate of the tax that you should pay on a transaction, and you may choose to use a `PurchaseInvoice` to record a transaction that occurred.  When reporting a `PurchaseInvoice`, you may specify the tax amount that you were charged by the vendor and have Avalara calculate the actual tax discrepancy.  This allows you to correctly report Consumer Use Tax via Avalara's Managed Returns Service - we'll delve further into Consumer Use Tax in a future article!

<h2>Inventory Transfer Transactions</h2>

Inventory transafers are another way of tracking transactions that have Consumer Use Tax implications.  For companies with multiple warehouses and offices, there are tax implications involved in shifting inventory from one location to another.  As always, an `InventoryTransferOrder` represents an estimate and an `InventoryTransferInvoice` represents a permanent transaction.  Again, we'll discuss Consumer Use Tax further in a future article.

<h2>List of Transaction Types</h2>

Now that we've walked through a few of the implications, let's finish with an overview of all these transaction types:

<div class="mobile-table">
	<table class="styled-table">
		<tr>
			<th>Transaction Type</th>
			<th>Lifetime</th>
			<th>Example</th>
		</tr>
		<tr>
			<td>SalesOrder</td>
			<td>Temporary</td>
			<td>A quote for a potential sale</td>
		</tr>
		<tr>
			<td>SalesInvoice</td>
			<td>Permanent</td>
			<td>A finalized sale made to a customer</td>
		</tr>
		<tr>
			<td>ReturnOrder</td>
			<td>Temporary</td>
			<td>A quote for a refund to a customer</td>
		</tr>
		<tr>
			<td>ReturnInvoice</td>
			<td>Permanent</td>
			<td>A finalized refund given to a customer</td>
		</tr>
		<tr>
			<td>PurchaseOrder</td>
			<td>Temporary</td>
			<td>A quote for identifying estimated tax to pay to a vendor</td>
		</tr>
		<tr>
			<td>PurchaseInvoice</td>
			<td>Permanent</td>
			<td>A purchase made from a vendor</td>
		</tr>
		<tr>
			<td>InventoryTransferOrder</td>
			<td>Temporary</td>
			<td>An estimate for shipping inventory from one location to another</td>
		</tr>
		<tr>
			<td>InventoryTransferInvoice</td>
			<td>Permanent</td>
			<td>A finalized shipment of inventory from one location to another</td>
		</tr>
	</table>
</div>

With all these tax types, AvaTax can help your business be ready for the onrush of holiday traffic!

--Ted Spence, Director, AvaTax Core Engine
