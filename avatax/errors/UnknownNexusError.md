---
layout: page
title: UnknownNexusError
number: 145
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to declare nexus in a jurisdiction that is not recognized by AvaTax.

## Example

    {
      "code": "UnknownNexusError",
      "target": "Unknown",
      "details": [
        {
          "code": "UnknownNexusError",
          "number": 145,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/UnknownNexusError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax allows you to declare nexus in any jurisdiction recognized by our database of taxing authorities.  

For a full list of recognized jurisdictions, please call the endpoint GET "/api/v2/definitions/nexus".
