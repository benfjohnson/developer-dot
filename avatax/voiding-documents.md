---
layout: page
title: Cancel Transactions
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

## Using REST v2 to Void Transactions

The `POST /api/v2/companies/{companyCode}/transactions/{transactionCode}/void` method provides a mechanism to recover from posting problems and cancelled transactions. The effect of the void endpoint depends upon the current state of the document (uncommitted/saved, posted, or committed), and the parameter `code` made in the request body.

Let's run through a couple of quick examples to see how things might look. Depending on your workflow, you may come across instances where a transaction was cancelled prior to any money transfers. Since you don't owe the customer a refund; depending on how you've submitted the transaction to AvaTax you might either attempt to void or delete the transaction.

### Using DocVoided

For the first case let's assume you've already `Saved` and `Committed` a transaction but your customer found an issue when they looked over their receipt. In this case you might like to void the transaction altogether and re-submit a new one. Since you've already committed the transaction for reporting your best option is to record the void with the `DocVoided` `code`. Here's what your request might look like in that case:

```json

{

    "companyCode": 555,
    "transactionCode": "5555555aa-5aa5-5a55-a555-55a555a5555a",
    "code": "DocVoided",
    "commit": true
}
```

The Response will be a detailed summary of this action of the following structure:

```json

{
  "id": 55555555,
  "code": "5555555aa-5aa5-5a55-a555-55a555a5555a",
  "companyId": 5555555,
  "date": "2016-09-15T00:00:00",
  "taxDate": "2016-09-15T00:00:00",
  "paymentDate": "1900-01-01T00:00:00",
  "status": "Cancelled",
  "type": "SalesInvoice",
  ...

  "lines": [
    {
      ...
    }
      "details": [
        {
          ...
        },  
      ],
      "parameters": {}
  ],
  "addresses": [
    {
      ...
    },
    {
      ...
    }
  ],
  "summary": [
    {
      ...
    },
    {
      ...
    }
  ],
  "parameters": {}
}
```

You'll notice this transaction has now been cancelled as it states in the response: `"status": "Cancelled"`. Also, when viewed in the Admin Console the transaction will now be Voided under your companies transactions tab. This will allow for the transaction to be included in any reports you might wish to file.

### Using DocDeleted

For the next example, let's this time say the customer has included items in their shopping cart and when submitted to AvaTax they're `Saved` but `Uncommitted` transactions. Then the customer abandons their cart. For this case you can either use the DocVoided method like we did above or you have the option to delete the transaction altogether. The request for deletion will be as the following:

```json

{
    "companyCode": 555,
    "transactionCode": "5555555aa-5aa5-5a55-a555-55a555a5555a",
    "code": "DocDeleted",
    "commit": false
}
```

Notice here we've used `DocDeleted` rather than `DocVoided` in place of the `code` parameter. Since the file had not yet been committed the transaction will be deleted instead of voided. Though, if you wanted to keep record of this you could use `DocVoided`.

Now that we've run through a couple of example requests using the REST API, here are the various types of REST v2 supported `code` parameters.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>code</th>
				<th>Uncommitted (Saved)</th>
				<th>Uncommitted (Posted)</th>
				<th>Committed</th>
				<th>Committed (Adjusted)</th>
				<th>Voided</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><em>Unspecified</em></td>
				<td>Uncommitted (Saved)</td>
				<td>Uncommitted (Posted)</td>
				<td>Committed</td>
				<td>Committed (Adjusted)</td>
				<td>Voided</td>
			</tr>
			<tr>
				<td>PostFailed</td>
				<td>DocStatusError</td>
				<td>Saved</td>
				<td>DocStatusError</td>
				<td>DocStatusError</td>
				<td>DocStatusError</td>
			</tr>
			<tr>
				<td>DocDeleted</td>
				<td>Deleted</td>
				<td>Deleted</td>
				<td>Voided</td>
				<td>Voided</td>
				<td>Deleted</td>
			</tr>
			<tr>
				<td>DocVoided</td>
				<td>Voided</td>
				<td>Voided</td>
				<td>Voided</td>
				<td>Voided</td>
				<td>Voided</td>
			</tr>
			<tr>
				<td>Adjustment Cancelled</td>
				<td>DocStatusError</td>
				<td>DocStatusError</td>
				<td>DocStatusError</td>
				<td>Removes last adjustment.</td>
				<td>DocStatusError</td>
			</tr>
		</tbody>
	</table>
</div>

Further reference on the request/response parameters can be found <a href="http://developer.avalara.com/api-reference/avatax/rest/v2/Transactions/#ApiV2CompaniesByCompanyCodeTransactionsByTransactionCodeVoidPost"> in our API references.</a>
