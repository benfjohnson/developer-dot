---
layout: page
title: UPCCodeInvalidChars
number: 137
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Your UPC code contains invalid characters.

## Example

    {
      "code": "UPCCodeInvalidChars",
      "target": "Unknown",
      "details": [
        {
          "code": "UPCCodeInvalidChars",
          "number": 137,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/UPCCodeInvalidChars",
          "severity": "Error"
        }
      ]
    }

## Explanation

A UPC, EAN or GTIN code may only contain numeric digits.
