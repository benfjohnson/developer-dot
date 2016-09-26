
---
layout: post
title: AvaTax Errors - ParserSyntaxError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ParserSyntaxError

## Summary

You provided an unrecognized string or token in the "$filter" parameter of your fetch request.

## Example

    {
      "code": "ParserSyntaxError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 19,
          "Summary": "Unexpected token '-0-' in the filter.  Expected '-1-'",
          "Details": "-2-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ParserSyntaxError",
          "Name": "ParserSyntaxError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Avalara only permits certain values and operations in the "$filter" parameter.  You provided a token that is not one of the recognized tokens.