---
layout: page
title: ParserFieldValueError
number: 18
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to search for a value that is not a correct value type.

## Example

    {
      "code": "ParserFieldValueError",
      "target": "Unknown",
      "details": [
        {
          "code": "ParserFieldValueError",
          "number": 18,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserFieldValueError",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs if you attempt to search for a decimal value, but you provide a string as the comparator.  For example:

    $filter=TotalAmount gt 'ABC'
    
In this case, TotalAmount is expected to be a decimal field, but you provided a string.  Because this string cannot be converted to a decimal field, AvaTax throws this error.
