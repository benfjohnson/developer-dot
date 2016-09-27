---
layout: page
title: ParserSyntaxError
number: 19
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You provided an unrecognized string or token in the "$filter" parameter of your fetch request.

## Example

    {
      "code": "ParserSyntaxError",
      "target": "Unknown",
      "details": [
        {
          "code": "ParserSyntaxError",
          "number": 0,
          "message": "Unexpected token '-0-' in the filter.  Expected '-1-'",
          "description": "-2-",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserSyntaxError",
          "severity": "Error"
        }
      ]
    }

## Explanation

Avalara only permits certain values and operations in the "$filter" parameter.  You provided a token that is not one of the recognized tokens.
