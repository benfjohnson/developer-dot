---
layout: post
title: Batched Transactions in REST v2
date: 2016-10-20 11:00
author: Ted Spence
comments: true
categories: [Sales Tax APIs]
product: blog
doctype: blog
disqus: 1
---

<h2>Uploading Batched Transactions</h2>

One of the most common inquiries we get at Avalara is about the need to reconcile, or publish, a full list of a company's transactions at the end of the month.  Many businesses work by cash register day by day, and at the end of each month they produce a report listing all the transactions that they processed.  Sometimes businesses will have one report for each location, or cash register, or salesperson; and they need a batch process they can use to upload all of these transactions into AvaTax for later reconciliation, or for filing tax returns.

Today, let's walk through the process of creating a batch and submitting it via the new <a href="http://developer.avalara.com/avatax/api-reference/tax/v2/">REST v2 API</a>.

<h2>Creating Your Batch File</h2>

A batch file is a collection of transactions.  You've already seen how to <a href="http://developer.avalara.com/blog/2016/10/04/getting-started-with-avatax-rest-v2/">calculate tax for one transaction at a time</a> - the main difference here is that we'll be uploading a file with tons of individual transactions in it.  To create this file, let's start off with a small subset of fields:

<table>
<tr>
    <th>ProcessCode</th>
    <th>DocCode</th>
    <th>DocType</th>
    <th>DocDate</th>
    <th>CompanyCode</th>
    <th>CustomerCode</th>
    <th>LineNo</th>
    <th>Amount</th>
    <th>DestAddress</th>
    <th>DestCity</th>
    <th>DestRegion</th>
    <th>DestPostalCode</th>
    <th>DestCountry</th>
    <th>OrigAddress</th>
    <th>OrigCity</th>
    <th>OrigRegion</th>
    <th>OrigPostalCode</th>
    <th>OrigCountry</th>
</tr>
<tr>
    <td>3</td>
    <td>1234sdfw2</td>
    <td>1</td>
    <td>6/6/2016</td>
    <td>DEFAULT</td>
    <td>ABC Customer</td>
    <td>1</td>
    <td>100</td>
    <td>123 Main Street</td>
    <td>Irvine</td>
    <td>CA</td>
    <td>92615</td>
    <td>US</td>
    <td>100 Ravine Lane NE</td>
    <td>Bainbridge Island</td>
    <td>WA</td>
    <td>98110</td>
    <td>US</td>
</tr></table>

Although most of these values may be obvious to you, let's look closer at a few of them.

<ul class="normal">
    <li>ProcessCode - This is a code that indicates whether you are creating a new transaction or adjusting a previous transaction.  Choose 3 to indicate this transaction is new.</li>
</ul>

For information about other fields, please consult the <a href="http://developer.avalara.com/avatax/batch-file-reference/">Batch File Reference</a> page.

AvaTax limits batch files to 100,000 transactions at a time - that should be more than enough to process large locations with only a few batch uploads.

<h2>Match the Batch to a Company</h2>

<h2>Our Batch File Creation Request</h2>

Now that we've got our request, let's visit the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Batches/ApiV2CompaniesByCompanyIdBatchesPost">online API tool for batch creation.</a>  Here's what we're going to submit:

```json
[
  {
    "id": 0,
    "name": "TestBatch",
    "accountId": 1987654354,
    "companyId": 238146,
    "type": "DocumentImport",
    "batchAgent": "manual",
    "files": [
      {
        "id": 0,
        "batchId": 0,
        "name": "samplebatch.csv",
        "content": "UHJvY2Vzc0NvZGUJRG9jQ29kZQlEb2NUeXBlCURvY0RhdGUJQ29tcGFueUNvZGUJQ3VzdG9tZXJDb2RlCUxpbmVObwlBbW91bnQJRGVzdEFkZHJlc3MJRGVzdENpdHkJRGVzdFJlZ2lvbglEZXN0UG9zdGFsQ29kZQlEZXN0Q291bnRyeQlPcmlnQWRkcmVzcwlPcmlnQ2l0eQlPcmlnUmVnaW9uCU9yaWdQb3N0YWxDb2RlCU9yaWdDb3VudHJ5DQpDb21taXR0ZWQJMTIzNHNkZncyCVNhbGVzSW52b2ljZQk2LzYvMjAxNglERUZBVUxUCUFCQyBDdXN0b21lcgkxCTEwMAkxMjMgTWFpbiBTdHJlZXQJSXJ2aW5lCUNBCTkyNjE1CVVTCTEwMCBSYXZpbmUgTGFuZSBORQlCYWluYnJpZGdlIElzbGFuZAlXQQk5ODExMAlVUw0K",
        "contentLength": 0,
        "contentType": "text/csv",
        "fileExtension": ".csv"
      }
    ]
  }
]
```

<h2>More Complex Batch Files</h2>

--Ted Spence, Director, AvaTax Core Engine
