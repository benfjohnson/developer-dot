---
layout: page
title: AvaTax Errors - ReturnNameNotFound
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to create a filing calendar for a return that is not recognized by AvaTax.

## Example

    {
      "code": "ReturnNameNotFound",
      "target": "Unknown",
      "details": [
        {
          "code": "ReturnNameNotFound",
          "number": 122,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ReturnNameNotFound",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs if you attempt to create a filing calendar for a tax return whose name is not recognized.

For a full list of recognized forms, please use the GET "/api/v2/definitions/taxforms" endpoint.
