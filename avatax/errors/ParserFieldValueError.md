
---
layout: post
title: AvaTax Errors - ParserFieldValueError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ParserFieldValueError

## Summary

You attempted to search for a value that is not a correct value type.

## Example

    {
      "code": "ParserFieldValueError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 18,
          "Summary": "The field named '-0-' is type -1- and cannot be compared to '-2-'",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ParserFieldValueError",
          "Name": "ParserFieldValueError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error occurs if you attempt to search for a decimal value, but you provide a string as the comparator.  For example:

    $filter=TotalAmount gt 'ABC'
    
In this case, TotalAmount is expected to be a decimal field, but you provided a string.  Because this string cannot be converted to a decimal field, AvaTax throws this error.