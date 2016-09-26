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
          "number": 19,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserSyntaxError",
          "severity": "Error"
        }
      ]
    }

## Explanation

Avalara only permits certain values and operations in the "$filter" parameter.  You provided a token that is not one of the recognized tokens.
