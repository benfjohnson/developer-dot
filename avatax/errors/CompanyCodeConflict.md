---
layout: page
title: CompanyCodeConflict
number: 307
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The company code in the URL of your API call did not match the company code of the transaction you uploaded.

## Example

```json
{
  "code": "CompanyCodeConflict",
  "target": "Unknown",
  "details": [
    {
      "code": "CompanyCodeConflict",
      "number": 307,
      "message": "You attempted to create a transaction at the wrong URL.",
      "description": "You attempted to create a transaction for company '-1-' using the URL for company '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CompanyCodeConflict",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In AvaTax, you can create a transaction using one of two endpoints: the universal transaction endpoint, `/api/v2/transactions/create`, or the company-specific
endpoint `/api/v2/transactions/(companyCode)/create`.  If you create a transaction with the universal transaction endpoint, you must provide the company code
for your transaction with the data you upload.  If you create a transaction with the company-specific endpoint, the company code in the URL must provide the company
code for the model.

This error occurs when the company code in your URL does not match the company code for your model.
