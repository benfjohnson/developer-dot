
---
layout: post
title: AvaTax Errors - UPCCodeInvalidChars
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# UPCCodeInvalidChars

## Summary

Your UPC code contains invalid characters.

## Example

    {
      "code": "UPCCodeInvalidChars",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 137,
          "Summary": "A UPC or EIN/GTIN code may only contain the digits 0 through 9.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/UPCCodeInvalidChars",
          "Name": "UPCCodeInvalidChars",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

A UPC, EAN or GTIN code may only contain numeric digits.