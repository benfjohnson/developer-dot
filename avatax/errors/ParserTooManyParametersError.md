
---
layout: post
title: AvaTax Errors - ParserTooManyParametersError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ParserTooManyParametersError

## Summary

You attempted a fetch call that included too many parameters.

## Example

    {
      "code": "ParserTooManyParametersError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 20,
          "Summary": "Your filter was too large to parse.  Please create a filter with fewer values.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ParserTooManyParametersError",
          "Name": "ParserTooManyParametersError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax restricts your fetch request to no more than 1,000 parameters.  Please consider restructuring your query so that it is less complex.