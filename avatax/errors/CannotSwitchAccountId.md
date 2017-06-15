---
layout: page
title: CannotSwitchAccountId
number: 166
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You may not change the accountId value on a company.

## Example

```json
{
  "code": "CannotSwitchAccountId",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotSwitchAccountId",
      "number": 166,
      "message": "Switching accountId during company update is not allowed!",
      "description": "The accountId '-0-' in your request does not match with the one for company to be updated.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotSwitchAccountId",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The `accountId` data field on the company is read-only and may not be changed.
