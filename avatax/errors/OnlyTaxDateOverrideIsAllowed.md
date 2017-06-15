---
layout: page
title: OnlyTaxDateOverrideIsAllowed
number: 1302
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Multi-company transactions may only override tax dates.

## Example

```json
{
  "code": "OnlyTaxDateOverrideIsAllowed",
  "target": "Unknown",
  "details": [
    {
      "code": "OnlyTaxDateOverrideIsAllowed",
      "number": 1302,
      "message": "Invalid TaxOverride at document level",
      "description": "Only TaxDate override is allowed for multi transactions.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/OnlyTaxDateOverrideIsAllowed",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For multi-company transactions, only the TaxDate override type is permitted.
