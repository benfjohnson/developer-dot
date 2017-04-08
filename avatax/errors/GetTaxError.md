---
layout: page
title: GetTaxError
number: 300
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A problem occurred when you attempted to create a transaction through AvaTax.

## Example

```json
{
  "code": "GetTaxError",
  "target": "Unknown",
  "details": [
    {
      "code": "GetTaxError",
      "number": 300,
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/GetTaxError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Creating a transaction was known as "GetTax" in Avalara's SOAP API.  For compatibility reasons, this error message is also labeled a "GetTax" error message.

Please refer to the <a href="http://developer.avalara.com/avatax/common-errors/">Common GetTax Errors</a> page for specific details about this error message and next steps.
