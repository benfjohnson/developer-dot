---
layout: page
title: AvaTax Errors - JurisdictionNotFoundError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The specified jurisdiction could not be found.

## Example

    {
      "code": "JurisdictionNotFoundError",
      "target": "Unknown",
      "details": [
        {
          "code": "JurisdictionNotFoundError",
          "number": 130,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/JurisdictionNotFoundError",
          "severity": "Error"
        }
      ]
    }

## Explanation

You attempted to create a jurisdiction that could not be found.

Please use the GET "/api/v2/definitions/nexus" to list available jurisdictions.
