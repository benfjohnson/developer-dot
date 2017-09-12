---
layout: page
title: InvalidTaxType
number: 173
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a tax type that does not exist.

## Example

```json
{
  "code": "InvalidTaxType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidTaxType",
      "number": 173,
      "message": "TaxType not found.",
      "description": "-0- Please provide a tax type that exists.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidTaxType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please use the `ListTaxTypes` API to list available tax types and try your call again.
