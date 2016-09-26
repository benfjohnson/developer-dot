---
layout: page
title: BearerTokenInvalid
number: 37
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The Bearer Token that you used for authentication was not valid.

## Example

    {
      "code": "BearerTokenInvalid",
      "target": "Unknown",
      "details": [
        {
          "code": "BearerTokenInvalid",
          "number": 37,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/BearerTokenInvalid",
          "severity": "Error"
        }
      ]
    }

## Explanation

You provided a bearer token that was not recognized by Avalara Identity.  Bearer tokens expire from time to time and may need to be refreshed.  

Please contact Avalara Identity and request an updated token.
