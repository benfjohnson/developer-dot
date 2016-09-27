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
          "number": 0,
          "message": "The field named '-0-' is type -1- and cannot be compared to '-2-'",
          "description": "",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserFieldValueError",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs if you attempt to search for a decimal value, but you provide a string as the comparator.  For example:

    $filter=TotalAmount gt 'ABC'
    
In this case, TotalAmount is expected to be a decimal field, but you provided a string.  Because this string cannot be converted to a decimal field, AvaTax throws this error.
