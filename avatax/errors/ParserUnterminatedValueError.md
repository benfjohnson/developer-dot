---
layout: page
title: AvaTax Errors - ParserUnterminatedValueError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to retrieve data with a "$filter" parameter that contained syntax errors.

## Example

    {
      "code": "ParserUnterminatedValueError",
      "target": "Unknown",
      "details": [
        {
          "code": "ParserUnterminatedValueError",
          "number": 21,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserUnterminatedValueError",
          "severity": "Error"
        }
      ]
    }

## Explanation

In your "$filter" parameter, you specified a condition that included a string that was not terminated with an apostrophe.  

Please review your fetch request and check your "$filter" parameter carefully.
