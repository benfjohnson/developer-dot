
---
layout: post
title: AvaTax Errors - RangeCompareError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# RangeCompareError

## Summary

You specified an out-of-bounds field value.

## Example

    {
      "code": "RangeCompareError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 7,
          "Summary": "-1- is expected to be -2- -3-.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/RangeCompareError",
          "Name": "RangeCompareError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax requires that the field obey certain bounds rules.  You attempted to create or update an object with a value that was out of the permissible bounds.

Please review your object data and correct the values.