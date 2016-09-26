---
layout: page
title: ParserFieldNameError
number: 17
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to search on a field that does not exist or cannot be searched.

## Example

    {
      "code": "ParserFieldNameError",
      "target": "Unknown",
      "details": [
        {
          "code": "ParserFieldNameError",
          "number": 17,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserFieldNameError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax only permits certain fields to be searched.  You attempted to search on a field that either does not exist or cannot be searched.
