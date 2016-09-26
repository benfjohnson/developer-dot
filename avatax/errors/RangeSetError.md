---
layout: page
title: AvaTax Errors - RangeSetError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to set a value that was not permitted.

## Example

    {
      "code": "RangeSetError",
      "target": "Unknown",
      "details": [
        {
          "code": "RangeSetError",
          "number": 8,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/RangeSetError",
          "severity": "Error"
        }
      ]
    }

## Explanation

The field you attempted to set has a value that is limited to a specific range of values.

To proceed, you should review the field and compare its list of values to the defined list of values.
