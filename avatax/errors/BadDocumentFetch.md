---
layout: page
title: BadDocumentFetch
number: 400
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This error indicates that you have provided an incorrect "$include" value to the GET /api/v2/companies/{0}/transactions endpoint.

## Example

```json
{
  "code": "BadDocumentFetch",
  "target": "Unknown",
  "details": [
    {
      "code": "BadDocumentFetch",
      "number": 400,
      "message": "The document fetch command was incorrect.",
      "description": "Please review the documentation for this API call.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BadDocumentFetch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

By default, if you fetch a document, you will only retrieve a summary of its data.  You can optionally specify the following values in the "$include" query string parameter:

<ul class="normal">
<li>Addresses - Retrieves all addresses used for this transaction.</li>
<li>Summary - Produces a summary of tax for the transaction as a whole.</li>
<li>Lines - Lists all line items on this transaction.</li>
<li>Details - Retrieves all tax details calculated for all lines for this transaction.</li>
</ul>
