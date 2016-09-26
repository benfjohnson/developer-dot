
---
layout: post
title: AvaTax Errors - ReturnNameNotFound
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ReturnNameNotFound

## Summary

You attempted to create a filing calendar for a return that is not recognized by AvaTax.

## Example

    {
      "code": "ReturnNameNotFound",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 122,
          "Summary": "The form named '-0-' cannot be found.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ReturnNameNotFound",
          "Name": "ReturnNameNotFound",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error occurs if you attempt to create a filing calendar for a tax return whose name is not recognized.

For a full list of recognized forms, please use the GET "/api/v2/definitions/taxforms" endpoint.