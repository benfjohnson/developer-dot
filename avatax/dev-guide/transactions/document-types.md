---
layout: page
title: 2.4 - Document Types
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/should-i-commit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

We've already touched on the differences between the <code>SalesOrder</code> and <code>SalesInvoice</code> document types, but it's worth delving into more details about these and the other document types.

AvaTax is a full-service engine for calculating transactional taxes, including sales, use, VAT, and many other tax types. In order to properly calculate taxes in these different circumstances, AvaTax must also support a wide variety of transaction types. Let's continue by reviewing the differences between these transactions types and how to map them to your business processes.

<h3>Transaction Types</h3>

AvaTax supports four basic transaction types - an inventory transfer, a purchase, a return (often called a refund or a reverse transaction), and a sale.  Each transaction type is available in two forms: an invoice form that is permanent, and an order form that is a temporary estimate.

When you combine those together, you get these eight transaction types:

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Transaction Type</th>
                <th>Lifetime</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>InventoryTransferInvoice</td>
                <td>Permanent</td>
                <td>A finalized shipment of inventory from one location to another</td>
            </tr>
            <tr>
                <td>InventoryTransferOrder</td>
                <td>Temporary</td>
                <td>An estimate for shipping inventory from one location to another</td>
            </tr>
            <tr>
                <td>PurchaseInvoice</td>
                <td>Permanent</td>
                <td>A purchase made from a vendor</td>
            </tr>
            <tr>
                <td>PurchaseOrder</td>
                <td>Temporary</td>
                <td>A quote for identifying estimated tax to pay to a vendor</td>
            </tr>
            <tr>
                <td>ReturnInvoice</td>
                <td>Permanent</td>
                <td>A finalized refund given to a customer</td>
            </tr>
             <tr>
                <td>ReturnOrder</td>
                <td>Temporary</td>
                <td>A quote for a refund to a customer</td>
            </tr>
            <tr>
                <td>SalesInvoice</td>
                <td>Permanent</td>
                <td>A finalized sale made to a customer</td>
            </tr>
            <tr>
                <td>SalesOrder</td>
                <td>Temporary</td>
                <td>A quote for a potential sale</td>
            </tr>
        </tbody>
    </table>
</div>

Let's discuss how all these eight types are different.

<h3>Orders vs Invoices</h3>

Our customers require both the ability to <a class="dev-guide-link" href="https://developer.avalara.com/blog/2016/11/04/estimating-tax-with-rest-v2/">estimate tax for a transaction</a>, and to record the actual tax for that transaction. Many customers use AvaTax as a way to predict taxes before taking action - for example, showing “Estimated Tax” on a web storefront. Other customers use AvaTax to calculate taxes only at the moment the transaction occurs - for example when recording a sale in their accounting system.

In AvaTax, an “Order” represents a temporary transaction that is not saved, whereas an “Invoice” represents a permanent transaction that will be maintained. Think about these documents like you are a salesperson:
<ul class="dev-guide-list">
    <li>You begin by speaking to a customer and obtaining information about what they would like to purchase. With this information, you construct a <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> request.</li>
    <li>First, you calculate that transaction in AvaTax using a <code>SalesOrder</code> transaction type. This becomes a quote (or lead, or opportunity) that you can share with the customer. The quote is as accurate as the information you have on hand, but you know that the customer will review the quote before making a decision to purchase, so we do not record it in our accounting ledger yet.</li>
    <li>The customer then reviews the quote and may or may not request changes. It could be that the customer wants to purchase one more line item, or maybe they want the shipping address changed, or maybe they have an exemption certificate they want to provide to change their taxable use conditions. These changes can be recalculated by resubmitting the transaction to AvaTax, each time using the <code>SalesOrder</code> transaction type.</li>
    <li>If the customer decides to cancel the order, or not to make a purchase, no action is required. You do not need to cancel a <code>SalesOrder</code> - because it has not been recorded as a permanent transaction yet.</li>
    <li>When the customer does choose to make a purchase, you can then recalculate the transaction in AvaTax using the <code>SalesInvoice</code> transaction type. The <code>SalesInvoice</code> transaction type represents a transaction that has occurred, and can then be recorded, queried, reported on, and eventually filed in a tax return to a taxing authority.</li>
</ul>

Because every type of transaction must be able to follow this same pattern, AvaTax supports all transaction types as both Orders and Invoices. It’s worth noting that the Invoice transaction types provide a key compatibility between Avalara’s tax calculation API and the Avalara Managed Returns Service. The Managed Returns Service supports filing taxes calculated with AvaTax - but you can only file taxes that were recorded using invoice types! Anything you calculated using an order type is considered a temporary estimate and won’t be reported.

Because order transaction types are temporary documents, it’s also worth noting that your transaction will not be retrievable later. All order transactions will have ID numbers that are -1, indicating that they cannot be fetched back using the API. Invoice transactions have positive ID numbers and can be retrieved back.

Next, let’s describe the various types of transactions and see how they work.

<h3>Sales Transactions</h3>

A <code>SalesOrder</code> or <code>SalesInvoice</code> transaction represents a sale that your company made to a customer. This is by far the most common type of transaction that AvaTax handles. As usual, a SalesOrder is an estimate and a SalesInvoice is a record of a transaction that occurred. Sales transactions are typically used to represent web shopping cart calculations, sales recorded through an accounting or ledger system, or service contracts signed on a particular date for future delivery.

In the case of a Sales transaction, a positive currency value means that your company received money from the customer; and a negative currency value means that your company paid the customer. It is generally expected that sales transactions are reported as positive currency values.

Sales transactions are generally expected to be recorded as they occur. For example, if you calculate an estimate for a customer using a SalesOrder on the 11th of the month, then convert it to a <code>SalesInvoice</code> on the 20th of the month, it is customary to choose the transaction date as the 20th. The AvaTax API natively supports this date behavior - just provide the date field on the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> and your transaction will be recorded on that date.

<h3>Return Transactions</h3>

When a customer changes their mind and asks for a refund, you can process that refund by specifying a <code>ReturnOrder</code> or <code>ReturnInvoice</code> transaction, or you can call the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a>. This transaction type refers to a reversal of the charges that occurred when you originally made the sale. As usual, the <code>ReturnOrder</code> can be used for estimating and the <code>ReturnInvoice</code> is a permanent record.

A return transaction with a negative currency value refers to money that your company refunded to your customer; a return transaction with a positive currency value represents money the customer gives to your company. It is generally expected that return transactions are reported as negative currency values.

Unlike sales transactions, return transactions have two dates.  The first date is the date when the return occurred, and the second date is the date when the original purchase was made.  Two dates are needed because the tax rate may have changed since the customer made the original purchase!  Here's how to refund the customer the exact amount they paid originally:

<ul class="dev-guide-list">
    <li>The <code>date</code> field of your <code>ReturnInvoice</code> is the date when the customer received the refund.  If you are filing tax returns using Avalara's Managed Returns Service, this date controls when the refund will be reported to the tax authority.</li>
    <li>To specify the date when the original sale occurred, you use a <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TaxOverrideModel/">TaxOverride</a> object in the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a>.  Set the <code>type</code> of the tax override to <code>TaxDate</code>, and set the <code>taxDate</code> field to the date when the original purchase occurred.  This will tell AvaTax to calculate the tax amount returned to the customer as of the tax override date.</li>
    <li>If the customer's original purchase was recorded in AvaTax as a <code>SalesInvoice</code>, you can use the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a> to automatically refund the exact amount they paid originally.  This API takes care of all the hard work of setting up the tax overrides for you.</li>
</ul>

<h3>Purchase Transactions</h3>

A purchase transaction represents a purchase made by your company from a vendor. A <code>PurchaseOrder</code> represents a quote you request from a vendor, and a <code>PurchaseInvoice</code> represents a finalized purchase transaction.

In the United States, most vendors will automatically charge and remit transactional taxes on your behalf. However, some companies choose to use AvaTax to identify any discrepancies between the tax rate you were charged by a vendor and the correct tax rate for a product or service. This calculation can assist a company in recovering overpaid taxes, or in identifying any cases where their vendor relationships are not in full compliance with tax laws.

You may use a <code>PurchaseOrder</code> to get an estimate of the tax that you should pay on a transaction, and you may choose to use a <code>PurchaseInvoice</code> to record a transaction that occurred. When reporting a <code>PurchaseInvoice</code>, you may specify the tax amount that you were charged by the vendor and have Avalara calculate the actual tax discrepancy. This allows you to correctly report Consumer Use Tax via Avalara’s Managed Returns Service - we’ll delve further into Consumer Use Tax in <a class="dev-guide-link" href="/avatax/dev-guide/consumer-use-tax/">Chapter 10 - Consumer Use Tax</a>.

<h3>Inventory Transfer Transactions</h3>

Inventory transfers are another way of tracking transactions that have Consumer Use Tax implications. For companies with multiple warehouses and offices, there are tax implications involved in shifting inventory from one location to another. 

As with the other document types, an <code>InventoryTransferOrder</code> represents an estimate and an <code>InventoryTransferInvoice</code> represents a permanent transaction. We’ll discuss Consumer Use Tax further in <a class="dev-guide-link" href="/avatax/dev-guide/consumer-use-tax/">Chapter 10 - Consumer Use Tax</a>.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/should-i-commit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>