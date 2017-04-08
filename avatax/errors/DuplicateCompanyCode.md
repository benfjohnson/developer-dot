---
layout: page
title: DuplicateCompanyCode
number: 142
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You cannot create two companies with the same company code.

## Example

```json
{
  "code": "DuplicateCompanyCode",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateCompanyCode",
      "number": 142,
      "message": "The company code '-0-' has already been defined.",
      "description": "Please select a different company code.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateCompanyCode",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In AvaTax, each company you create needs a unique code that distinguishes it from other companies.

You must ensure that each company has a unique code.  If you attempt to create two companies with the same code, you will get this error message.
