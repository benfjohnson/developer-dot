---
layout: page
title: AvaTax Errors - ParserTooManyParametersError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted a fetch call that included too many parameters.

## Example

    {
      "code": "ParserTooManyParametersError",
      "target": "Unknown",
      "details": [
        {
          "code": "ParserTooManyParametersError",
          "number": 20,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserTooManyParametersError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax restricts your fetch request to no more than 1,000 parameters.  Please consider restructuring your query so that it is less complex.
