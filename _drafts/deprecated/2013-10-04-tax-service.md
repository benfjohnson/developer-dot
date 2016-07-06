---
layout: page
title: Tax Service
date: 2013-10-04 23:07
author: seanrust
comments: true
categories: []
---
This general resource includes all operations dealing with the calculation of tax and the modification of tax documents.
<table>
<thead>
<tr>
<th>Operation</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a title="GetTax" href="http://developer.avalara.com/api-docs/soap/tax-service/gettax">GetTax</a></td>
<td>Calculates tax for one or more invoiced items and displays details describing the calculation of tax for each line item. It can also be used to create transaction records on the Admin Console for reporting.</td>
</tr>
<tr>
<td><a title="PostTax">PostTax</a></td>
<td>Changes the document status for a prior SalesInvoice or ReturnInvoice Document Type to either Posted or Committed. It's most commonly used in an ERP system that has separate invoicing and posting steps that may occur at different times.</td>
</tr>
<tr>
<td><a title="CancelTax">CancelTax</a></td>
<td>Cancels the tax document specified by the DocId, DocCode, and DocType parameters.</td>
</tr>
<tr>
<td><a title="GetTaxHistory">GetTaxHistory</a></td>
<td>Allows you to retrieve the history of a prior saved document (Invoice DocTypes).</td>
</tr>
</tbody>
</table>
