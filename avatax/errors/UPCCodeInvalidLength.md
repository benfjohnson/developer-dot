---
layout: page
title: UPCCodeInvalidLength
number: 138
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your UPC code was too long to fit into the standard UPC object field.

## Example

```json
{
  "code": "UPCCodeInvalidLength",
  "target": "Unknown",
  "details": [
    {
      "code": "UPCCodeInvalidLength",
      "number": 138,
      "message": "The supplied code was -0- characters in length.",
      "description": "The maximum length for a UPC is 12 characters, an EIN code is 13, and a GTIN code is 14 characters.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UPCCodeInvalidLength",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Global Trade Item Number (GTIN) system is a worldwide system of product codes that uniquely identifies products from a variety of countries.  GTIN supercedes the UPC and EAN code systems which were originally designed for the United States and Europe respectively.

In the GTIN system, all codes must be no longer than 14 characters.  You uploaded a code that was longer than 14 characters.
