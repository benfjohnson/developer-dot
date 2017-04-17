---
layout: page
title: InvalidAddressTextCase
number: 312
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You provided an invalid parameter to the address resolution endpoint.

## Example

```json
{
  "code": "InvalidAddressTextCase",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidAddressTextCase",
      "number": 312,
      "message": "Address Text case must either be null or one of predefined enum.",
      "description": "Address text case is invalid '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAddressTextCase",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The address resolution endpoint can only accept two options: `Upper` or `Mixed`.  

When you request `textCase: "Upper"` all your results will be returned in uppercase, which is the default if you omit the `textCase` parameter.  

If you request `textCase: "Mixed"` you will receive mixed upper-and-lowercase address results when supported by Avalara's address resolution providers.  If our only data source provides only uppercase results, you may sometimes receive only uppercase results.

If you provide any value other than `Upper` or `Mixed` you will receive this error message.
