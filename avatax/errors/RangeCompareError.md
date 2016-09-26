---
layout: page
title: RangeCompareError
number: 7
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You specified an out-of-bounds field value.

## Example

    {
      "code": "RangeCompareError",
      "target": "Unknown",
      "details": [
        {
          "code": "RangeCompareError",
          "number": 7,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/RangeCompareError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax requires that the field obey certain bounds rules.  You attempted to create or update an object with a value that was out of the permissible bounds.

Please review your object data and correct the values.
