---
layout: page
title: InvalidDocumentTypesToFetch
number: 315
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Temporary documents cannot be fetched from the API.

## Example

```json
{
  "code": "InvalidDocumentTypesToFetch",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentTypesToFetch",
      "number": 315,
      "message": "Document with type of -0- is a temporary document, and can not be fetched.",
      "description": "Please call /api/v2/companies/transactions/types to fetch again.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentTypesToFetch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara provides two different kinds of documents: Orders and Invoices.  An Order is considered an estimate and is not saved in the database.  An Invoice is considered permanent and will be stored and tracked in the database.

You cannot fetch Order documents because they are not saved in the database.
