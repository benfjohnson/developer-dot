---
layout: page
title: UPCCodeInvalidLength
number: 138
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Your UPC code was too long to fit into the standard UPC object field.

## Example

    {
      "code": "UPCCodeInvalidLength",
      "target": "Unknown",
      "details": [
        {
          "code": "UPCCodeInvalidLength",
          "number": 138,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/UPCCodeInvalidLength",
          "severity": "Error"
        }
      ]
    }

## Explanation

The Global Trade Item Number (GTIN) system is a worldwide system of product codes that uniquely identifies products from a variety of countries.  GTIN supercedes the UPC and EAN code systems which were originally designed for the United States and Europe respectively.

In the GTIN system, all codes must be no longer than 14 characters.  You uploaded a code that was longer than 14 characters.
