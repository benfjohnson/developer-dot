---
layout: page
title: CannotDeleteCompany
number: 152
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to delete a company with committed transactions.

## Example

```json
{
  "code": "CannotDeleteCompany",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotDeleteCompany",
      "number": 152,
      "message": "A company with committed documents cannot be deleted.",
      "description": "The company -0- has committed documents and therefore cannot be deleted.  Void any committed documents and try again.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotDeleteCompany",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A `Committed` transaction refers to a transaction that is to be reported to the government.  Any transactions that are in this status must be preserved due to auditing rules.

To delete this company, please either cancel all your existing transactions, mark the company as "inactive", or submit a help request to make changes to your account.
