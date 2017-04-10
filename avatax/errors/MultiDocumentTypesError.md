---
layout: page
title: MultiDocumentTypesError
number: 314
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The API you called does not support transaction code overloading.

## Example

```json
{
  "code": "MultiDocumentTypesError",
  "target": "Unknown",
  "details": [
    {
      "code": "MultiDocumentTypesError",
      "number": 314,
      "message": "Mutliple document types exist for the company '-0-' with the document code '-1-'",
      "description": "Please call /api/v2/companies/transactions/types to fetch again.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MultiDocumentTypesError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

By default, AvaTax will assign a GUID to every transaction created using the AvaTax API.

Some customers choose to use their own custom transaction codes.  Additionally, it is permissible to create two transactions that have the same code, provided that the two transactions differ by document type.  For example, you can create a SalesInvoice transaction with the code `ABC` and also create a ReturnInvoice transaction with the same code `ABC`.

Some AvaTax APIs contain a reduced number of parameters to simplify certain API calls.  If you are using transaction code overloading, and you are calling an API with a simplified number of parameters, you will receive this error.
