
---
layout: post
title: AvaTax Errors - RangeSetError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# RangeSetError

## Summary

You attempted to set a value that was not permitted.

## Example

    {
      "code": "RangeSetError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 8,
          "Summary": "-1- must be one of the following: -2-.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/RangeSetError",
          "Name": "RangeSetError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

The field you attempted to set has a value that is limited to a specific range of values.

To proceed, you should review the field and compare its list of values to the defined list of values.