---
layout: page
title: UPCCodeInvalidChars
number: 137
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your UPC code contains invalid characters.

## Example

```json
{
  "code": "UPCCodeInvalidChars",
  "target": "Unknown",
  "details": [
    {
      "code": "UPCCodeInvalidChars",
      "number": 137,
      "message": "Invalid UPC.",
      "description": "A UPC, EAN or GTIN code may only contain the digits 0 through 9.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UPCCodeInvalidChars",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A UPC, EAN or GTIN code may only contain numeric digits.
