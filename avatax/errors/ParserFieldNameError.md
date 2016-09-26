
---
layout: post
title: AvaTax Errors - ParserFieldNameError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ParserFieldNameError

## Summary

You attempted to search on a field that does not exist or cannot be searched.

## Example

    {
      "code": "ParserFieldNameError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 17,
          "Summary": "The field named '-0-' could not be found.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ParserFieldNameError",
          "Name": "ParserFieldNameError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax only permits certain fields to be searched.  You attempted to search on a field that either does not exist or cannot be searched.