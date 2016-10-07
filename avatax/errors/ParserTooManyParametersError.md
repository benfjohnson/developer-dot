---
layout: page
title: ParserTooManyParametersError
number: 20
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
          "message": "Your filter was too large to parse.  Please create a filter with fewer values.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/ParserTooManyParametersError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax restricts your fetch request to no more than 1,000 parameters.  Please consider restructuring your query so that it is less complex.
