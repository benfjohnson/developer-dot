---
layout: page
title: AvaTax Errors - RangeError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to set a value that must be within a range, but your value was outside of the range.

## Example

    {
      "code": "RangeError",
      "target": "Unknown",
      "details": [
        {
          "code": "RangeError",
          "number": 6,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/RangeError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax requires the value of this field to be within the defined parameters.  Please review the data you attempted to upload and correct it so that it is within the specified value.
