---
layout: post
title: Batched Transactions in REST v2
date: 2016-10-24 11:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

<h2>Uploading Batched Transactions</h2>

One of the most common inquiries we get at Avalara is about the need to reconcile, or publish, a full list of a company's transactions at the end of the month.  Many businesses work by cash register day by day, and at the end of each month they produce a report listing all the transactions that they processed.  Sometimes businesses will have one report for each location, or cash register, or salesperson; and they need a batch process they can use to upload all of these transactions into AvaTax for later reconciliation, or for filing tax returns.

Today, let's walk through the process of creating a batch and submitting it via the new <a href="http://developer.avalara.com/api-reference/avatax/rest/v2/">REST v2 API</a>.

<h2>Creating Your Batch File</h2>

A batch file is a collection of transactions.  You've already seen how to <a href="http://developer.avalara.com/blog/2016/10/04/getting-started-with-avatax-rest-v2/">calculate tax for one transaction at a time</a> - the main difference here is that we'll be uploading a file with tons of individual transactions in it.  Remember, batch files are optional and they are best used if you really want to upload a large historical document set at once.

To begin, let's take a look at the template for a batch file.  It's easiest to create a batch file in a spreadsheet program like Microsoft Excel or to use a CSV export template.  Here's the list of headers in the file, as it would look in Comma Separated Values (CSV) format:

<pre>
ProcessCode,DocCode,DocType,DocDate,CompanyCode,CustomerCode,EntityUseCode,LineNo,TaxCode,TaxDate,ItemCode,Description,Qty,Amount,Discount,Ref1,Ref2,ExemptionNo,RevAcct,DestAddress,DestCity,DestRegion,DestPostalCode,DestCountry,OrigAddress,OrigCity,OrigRegion,OrigPostalCode,OrigCountry,LocationCode,SalesPersonCode,PurchaseOrderNo,CurrencyCode,ExchangeRate,ExchangeRateEffDate,PaymentDate,TaxIncluded,DestTaxRegion,OrigTaxRegion,Taxable,TaxType,TotalTax,CountryName,CountryCode,CountryRate,CountryTax,StateName,StateCode,StateRate,StateTax,CountyName,CountyCode,CountyRate,CountyTax,CityName,CityCode,CityRate,CityTax,Other1Name,Other1Code,Other1Rate,Other1Tax,Other2Name,Other2Code,Other2Rate,Other2Tax,Other3Name,Other3Code,Other3Rate,Other3Tax,Other4Name,Other4Code,Other4Rate,Other4Tax,ReferenceCode,BuyersVATNo,IsSellerImporterOfRecord,BRBuyerType,BRBuyer_IsExemptOrCannotWH_IRRF,BRBuyer_IsExemptOrCannotWH_PISRF,BRBuyer_IsExemptOrCannotWH_COFINSRF,BRBuyer_IsExemptOrCannotWH_CSLLRF,BRBuyer_IsExempt_PIS,BRBuyer_IsExempt_COFINS,BRBuyer_IsExempt_CSLL,Header_Description,Email
</pre>

Wow!  That's a lot of headers!  Don't be discouraged, though: only a handful of these fields are actually required.  Here's what you will need to process a file:

<ul class="normal">
    <li>ProcessCode - This indicates what type of transaction we want to submit.  In most cases, we want to submit code "3", which indicates a new transaction.</li>
    <li>DocCode - Also known as the "Transaction Code", this is a unique identifier for this transaction.  If you don't have your own unique ID, just put a unique GUID in this field.</li>
    <li>DocType - Use "1" to indicate a sales invoice.</li>
    <li>DocDate - The date when the transaction occurred.  Please use ISO 8601 yyyy-mm-dd format for the date; this prevents globalization issues.</li>
    <li>CompanyCode - This is where you put the company code of the company this transaction is for.</li>
    <li>CustomerCode - The unique code for the customer who participated in this transaction.</li>
    <li>LineNo - The line number of the line in this transaction.  Just default this to "1".</li>
    <li>Amount - The total value in the local currency of this transaction, for example, "100.0".</li>
    <li>OrigAddress / OrigCity / OrigRegion / OrigPostalCode / OrigCountry - The address of the origin of this transaction, for shipments.</li>
    <li>DestAddress / DestCity / DestRegion / DestPostalCode / DestCountry - The address of the destination of this transaction, for shipments.  If this transaction was not shipped, these fields should be the same as the origin address fields.</li>
</ul>

Everything other than these fields is optional!  So, let's put together a very simple transaction import file.

<pre>
ProcessCode,DocCode,DocType,DocDate,CompanyCode,CustomerCode,EntityUseCode,LineNo,TaxCode,TaxDate,ItemCode,Description,Qty,Amount,Discount,Ref1,Ref2,ExemptionNo,RevAcct,DestAddress,DestCity,DestRegion,DestPostalCode,DestCountry,OrigAddress,OrigCity,OrigRegion,OrigPostalCode,OrigCountry,LocationCode,SalesPersonCode,PurchaseOrderNo,CurrencyCode,ExchangeRate,ExchangeRateEffDate,PaymentDate,TaxIncluded,DestTaxRegion,OrigTaxRegion,Taxable,TaxType,TotalTax,CountryName,CountryCode,CountryRate,CountryTax,StateName,StateCode,StateRate,StateTax,CountyName,CountyCode,CountyRate,CountyTax,CityName,CityCode,CityRate,CityTax,Other1Name,Other1Code,Other1Rate,Other1Tax,Other2Name,Other2Code,Other2Rate,Other2Tax,Other3Name,Other3Code,Other3Rate,Other3Tax,Other4Name,Other4Code,Other4Rate,Other4Tax,ReferenceCode,BuyersVATNo,IsSellerImporterOfRecord,BRBuyerType,BRBuyer_IsExemptOrCannotWH_IRRF,BRBuyer_IsExemptOrCannotWH_PISRF,BRBuyer_IsExemptOrCannotWH_COFINSRF,BRBuyer_IsExemptOrCannotWH_CSLLRF,BRBuyer_IsExempt_PIS,BRBuyer_IsExempt_COFINS,BRBuyer_IsExempt_CSLL,Header_Description,Email
3,9ac280c3-3a55-4a35-bed2-a83db53b051e,1,1/1/2014,DEFAULT,Cust1,,1,,,,,,1000,,,,,,235 E 42nd St ,New York,NY,10017-5703  ,US,900 Winslow Way,Bainbridge Island,WA,98110,US,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
</pre>

As you can see, this represents a transaction of value $1,000, shipped from Bainbridge Island to New York, on January 1st 2014.  Despite how many headers you see, the file is actually pretty simple.

For our next step, we need to convert this into a JSON request.

<h2>Building our JSON Request</h2>

In order to upload a batch, you need to know two things: First, the AccountID of your account, and second, the CompanyID of the company you want to upload this transaction for.  The easiest way to do this is to <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/">list all companies in your account</a>, and copy those values off that result.  Here's how you do it:

```
GET /api/v2/companies
```

The results you'll get will include all the companies in your account.  Each one will have an ID number, which is the Company ID; and an Account ID number, which is the account ID.  Next, we'll put them into a JSON request as follows:

```json
[
  {
    "name": "TestBatch",
    "accountId": 123456789,
    "companyId": 987654321,
    "type": "TransactionImport",
    "batchAgent": "manual",
    "files": [
      {
        "name": "samplebatch.csv",
        "content": "",
        "contentType": "text/csv",
        "fileExtension": ".csv"
      }
    ]
  }
]
```

First things first, what do we see here?  There are a few things worth mentioning:

<ul class="normal">
    <li>You can create multiple objects at a time in REST v2.  To create multiple batches at once, you can put lots of different batches.</li>
    <li>Each transaction upload batch should have one (only one) file in it.  To upload multiple transaction import files, upload multiple separate batches.</li>
    <li>The result object you get back will have more fields, but in this case you only need to provide a handful of these fields.</li>
</ul>

But the biggest thing you'll notice is that I've left the content field blank.  Why is that?

<h2>Byte Arrays in JSON</h2>

The AvaTax batch service allows the upload of both binary and text files.  In JSON, the method for uploading a binary file is to treat it as a Base64 text encoded string - so we'll need to take our CSV file from above and pass it through a Base64 encoder.  Here's how to do it:

<ul class="normal">
    <li>Launch your favorite <a href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a></li>
    <li>Copy and paste the CSV file from above into the <b>Type (or paste) here</b> box, or into the program's UI, or use the command line</li>
    <li>Click <b>Encode</b></li>
    <li>Copy and paste the results into your JSON text</li>
</ul>

The end result should now look like this:

```json
[
  {
    "name": "TestBatch",
    "accountId": 123456789,
    "companyId": 987654321,
    "type": "TransactionImport",
    "batchAgent": "manual",
    "files": [
      {
        "name": "samplebatch.csv",
        "content": "UHJvY2Vzc0NvZGUsRG9jQ29kZSxEb2NUeXBlLERvY0RhdGUsQ29tcGFueUNvZGUsQ3VzdG9tZXJDb2RlLEVudGl0eVVzZUNvZGUsTGluZU5vLFRheENvZGUsVGF4RGF0ZSxJdGVtQ29kZSxEZXNjcmlwdGlvbixRdHksQW1vdW50LERpc2NvdW50LFJlZjEsUmVmMixFeGVtcHRpb25ObyxSZXZBY2N0LERlc3RBZGRyZXNzLERlc3RDaXR5LERlc3RSZWdpb24sRGVzdFBvc3RhbENvZGUsRGVzdENvdW50cnksT3JpZ0FkZHJlc3MsT3JpZ0NpdHksT3JpZ1JlZ2lvbixPcmlnUG9zdGFsQ29kZSxPcmlnQ291bnRyeSxMb2NhdGlvbkNvZGUsU2FsZXNQZXJzb25Db2RlLFB1cmNoYXNlT3JkZXJObyxDdXJyZW5jeUNvZGUsRXhjaGFuZ2VSYXRlLEV4Y2hhbmdlUmF0ZUVmZkRhdGUsUGF5bWVudERhdGUsVGF4SW5jbHVkZWQsRGVzdFRheFJlZ2lvbixPcmlnVGF4UmVnaW9uLFRheGFibGUsVGF4VHlwZSxUb3RhbFRheCxDb3VudHJ5TmFtZSxDb3VudHJ5Q29kZSxDb3VudHJ5UmF0ZSxDb3VudHJ5VGF4LFN0YXRlTmFtZSxTdGF0ZUNvZGUsU3RhdGVSYXRlLFN0YXRlVGF4LENvdW50eU5hbWUsQ291bnR5Q29kZSxDb3VudHlSYXRlLENvdW50eVRheCxDaXR5TmFtZSxDaXR5Q29kZSxDaXR5UmF0ZSxDaXR5VGF4LE90aGVyMU5hbWUsT3RoZXIxQ29kZSxPdGhlcjFSYXRlLE90aGVyMVRheCxPdGhlcjJOYW1lLE90aGVyMkNvZGUsT3RoZXIyUmF0ZSxPdGhlcjJUYXgsT3RoZXIzTmFtZSxPdGhlcjNDb2RlLE90aGVyM1JhdGUsT3RoZXIzVGF4LE90aGVyNE5hbWUsT3RoZXI0Q29kZSxPdGhlcjRSYXRlLE90aGVyNFRheCxSZWZlcmVuY2VDb2RlLEJ1eWVyc1ZBVE5vLElzU2VsbGVySW1wb3J0ZXJPZlJlY29yZCxCUkJ1eWVyVHlwZSxCUkJ1eWVyX0lzRXhlbXB0T3JDYW5ub3RXSF9JUlJGLEJSQnV5ZXJfSXNFeGVtcHRPckNhbm5vdFdIX1BJU1JGLEJSQnV5ZXJfSXNFeGVtcHRPckNhbm5vdFdIX0NPRklOU1JGLEJSQnV5ZXJfSXNFeGVtcHRPckNhbm5vdFdIX0NTTExSRixCUkJ1eWVyX0lzRXhlbXB0X1BJUyxCUkJ1eWVyX0lzRXhlbXB0X0NPRklOUyxCUkJ1eWVyX0lzRXhlbXB0X0NTTEwsSGVhZGVyX0Rlc2NyaXB0aW9uLEVtYWlsDQozLDlhYzI4MGMzLTNhNTUtNGEzNS1iZWQyLWE4M2RiNTNiMDUxZSwxLDEvMS8yMDE0LERFRkFVTFQsQ3VzdDEsLDEsLCwsLCwxMDAwLCwsLCwsMjM1IEUgNDJuZCBTdCAsTmV3IFlvcmssTlksMTAwMTctNTcwMyAgLFVTLDkwMCBXaW5zbG93IFdheSxCYWluYnJpZGdlIElzbGFuZCxXQSw5ODExMCxVUywsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwNCg==",
        "contentType": "text/csv",
        "fileExtension": ".csv"
      }
    ]
  }
]
```

Now, our next step is to create this batch file in AvaTax REST v2.  Here's how we do that:

<ul class="normal">
    <li>Launch the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Batches/CreateBatches/">Batch Creation API</a> in REST v2</li>
    <li>In the <b>models</b> box, paste your JSON snippet from above.</li>
    <li>In the <b>companyId</b> box, type the company ID you selected above.</li>
    <li>In the <b>Authorization</b> box, type in your AvaTax API credentials.</li>
    <li>Click the <b>Try it now!</b> button.</li>
</ul>

The result you get back should look like this:

```json
[
  {
    "id": 12345,
    "name": "TestBatch",
    "accountId": 123456789,
    "companyId": 987654321,
    "type": "TransactionImport",
    "status": "Waiting",
    "options": "",
    "batchAgent": "manual",
    "recordCount": 0,
    "currentRecord": 0,
    "createdDate": "2016-10-25T17:17:33.413793Z",
    "createdUserId": 7097,
    "modifiedDate": "2016-10-25T17:17:33.413793Z",
    "modifiedUserId": 7097,
    "files": [
        ...
    ]
  }
]
```

First, note that the batch you just created is in status "Waiting".  That means that you've created the batch, but AvaTax has not yet begun processing it.  AvaTax is continually processing batches, and your batch may be processed quickly if there are few other batches waiting in the queue, or it may take a few minutes if there are lots of other batches waiting.  There's no way to know in advance how busy AvaTax Batch Processor is, so let's check to see how we're doing!

<h2>Checking on the Status of your Batch</h2>

We'll continue by fetching our batch back from the server.  Launch the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Batches/GetBatch/">Batch GET API</a> and type in your company ID and the batch ID you got back from your Batch Create API call.  The result you'll get back will either still say <code class="highlight-rouge">"status": "Waiting"</code>, or it will say <code class="highlight-rouge">"Completed"</code> or <code class="highlight-rouge">"Errors"</code>.  If the batch is still <code class="highlight-rouge">"Waiting"</a>, you'll just want to keep checking back periodically to see when it has finished.

If you received back a result - whether that result is success or whether errors occurred - you will also see something new in the result: a "Batch Results" file, which will have the resulting tax amounts.

<h2>How do I process my results?</h2>

When your batch has completed or errored out, you'll get a result file like this:

```json
    {
      "id": 123456789,
      "batchId": 12345,
      "name": "Error",
      "content": "UHJvY2Vzc0NvZGUsRG9jQ29kZSxEb2NUeXBlLERvY0RhdGUsQ29tcGFueUNvZGUsQ3VzdG9tZXJDb2RlLEVudGl0eVVzZUNvZGUsTGluZU5vLFRheENvZGUsVGF4RGF0ZSxJdGVtQ29kZSxEZXNjcmlwdGlvbixRdHksQW1vdW50LERpc2NvdW50LFJlZjEsUmVmMixFeGVtcHRpb25ObyxSZXZBY2N0LERlc3RBZGRyZXNzLERlc3RDaXR5LERlc3RSZWdpb24sRGVzdFBvc3RhbENvZGUsRGVzdENvdW50cnksT3JpZ0FkZHJlc3MsT3JpZ0NpdHksT3JpZ1JlZ2lvbixPcmlnUG9zdGFsQ29kZSxPcmlnQ291bnRyeSxMb2NhdGlvbkNvZGUsU2FsZXNQZXJzb25Db2RlLFB1cmNoYXNlT3JkZXJObyxDdXJyZW5jeUNvZGUsRXhjaGFuZ2VSYXRlLEV4Y2hhbmdlUmF0ZUVmZkRhdGUsUGF5bWVudERhdGUsVGF4SW5jbHVkZWQsRGVzdFRheFJlZ2lvbixPcmlnVGF4UmVnaW9uLFRheGFibGUsVGF4VHlwZSxUb3RhbFRheCxDb3VudHJ5TmFtZSxDb3VudHJ5Q29kZSxDb3VudHJ5UmF0ZSxDb3VudHJ5VGF4LFN0YXRlTmFtZSxTdGF0ZUNvZGUsU3RhdGVSYXRlLFN0YXRlVGF4LENvdW50eU5hbWUsQ291bnR5Q29kZSxDb3VudHlSYXRlLENvdW50eVRheCxDaXR5TmFtZSxDaXR5Q29kZSxDaXR5UmF0ZSxDaXR5VGF4LE90aGVyMU5hbWUsT3RoZXIxQ29kZSxPdGhlcjFSYXRlLE90aGVyMVRheCxPdGhlcjJOYW1lLE90aGVyMkNvZGUsT3RoZXIyUmF0ZSxPdGhlcjJUYXgsT3RoZXIzTmFtZSxPdGhlcjNDb2RlLE90aGVyM1JhdGUsT3RoZXIzVGF4LE90aGVyNE5hbWUsT3RoZXI0Q29kZSxPdGhlcjRSYXRlLE90aGVyNFRheCxSZWZlcmVuY2VDb2RlLEJ1eWVyc1ZBVE5vLElzU2VsbGVySW1wb3J0ZXJPZlJlY29yZCxCUkJ1eWVyVHlwZSxCUkJ1eWVyX0lzRXhlbXB0T3JDYW5ub3RXSF9JUlJGLEJSQnV5ZXJfSXNFeGVtcHRPckNhbm5vdFdIX1BJU1JGLEJSQnV5ZXJfSXNFeGVtcHRPckNhbm5vdFdIX0NPRklOU1JGLEJSQnV5ZXJfSXNFeGVtcHRPckNhbm5vdFdIX0NTTExSRixCUkJ1eWVyX0lzRXhlbXB0X1BJUyxCUkJ1eWVyX0lzRXhlbXB0X0NPRklOUyxCUkJ1eWVyX0lzRXhlbXB0X0NTTEwsSGVhZGVyX0Rlc2NyaXB0aW9uLEVtYWlsLE90aGVyNU5hbWUsT3RoZXI1Q29kZSxPdGhlcjVSYXRlLE90aGVyNVRheCxPdGhlcjZOYW1lLE90aGVyNkNvZGUsT3RoZXI2UmF0ZSxPdGhlcjZUYXgsT3RoZXI3TmFtZSxPdGhlcjdDb2RlLE90aGVyN1JhdGUsT3RoZXI3VGF4LEVycm9ycw0KMyw5YWMyODBjMy0zYTU1LTRhMzUtYmVkMi1hODNkYjUzYjA1MWUsMSwxLzEvMjAxNCAxMjowMDowMCBBTSxERUZBVUxULEN1c3QxLCwxLCwsLCwxLDEwMDAsMCwsLCwsMjM1IEUgNDJuZCBTdCxOZXcgWW9yayxOWSwxMDAxNy01NzAzLFVTLDkwMCBXaW5zbG93IFdheSxCYWluYnJpZGdlIElzbGFuZCxXQSw5ODExMCxVUywsLCwsLCwsMCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwwLElORCwwLDAsMCwwLDAsMCwwLCwsLCwsLCwsLCwsLCwsRG9jU3RhdHVzIGlzIGludmFsaWQgZm9yIHRoaXMgb3BlcmF0aW9uLiBFeHBlY3RlZCBTYXZlZHxQb3N0ZWQNCg==",
      "contentLength": 1546,
      "contentType": "text/csv",
      "fileExtension": "CSV",
      "errorCount": 1
    }
```

If you decode this result with your favorite <a href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a>, you'll see that AvaTax has added an error message to the end of your file that says <code class="highlight-rouge">DocStatus is invalid for this operation. Expected Saved|Posted</code>.  That error message means that AvaTax attempted to create the document you specified, but it found an already existing document with that same code that was in "Committed" status - so you will have to either void that existing transaction, or upload a new transaction.

With this, you now know enough to submit batches via AvaTax.  Good luck with your month-end data processing!

--Ted Spence, Director, AvaTax Core Engine
