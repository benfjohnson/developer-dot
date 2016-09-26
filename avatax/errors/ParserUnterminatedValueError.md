
---
layout: post
title: AvaTax Errors - ParserUnterminatedValueError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ParserUnterminatedValueError

## Summary

You attempted to retrieve data with a "$filter" parameter that contained syntax errors.

## Example

    {
      "code": "ParserUnterminatedValueError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 21,
          "Summary": "The filter contained a string value that was not properly terminated.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ParserUnterminatedValueError",
          "Name": "ParserUnterminatedValueError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In your "$filter" parameter, you specified a condition that included a string that was not terminated with an apostrophe.  

Please review your fetch request and check your "$filter" parameter carefully.