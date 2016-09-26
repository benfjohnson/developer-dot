---
layout: page
title: AvaTax Errors - DuplicateNexusError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Nexus is a concept used to declare that your business is subject to taxation by a particular jurisdiction; you may not declare any one jurisdiction more than once.

## Example

    {
      "code": "DuplicateNexusError",
      "target": "Unknown",
      "details": [
        {
          "code": "DuplicateNexusError",
          "number": 144,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateNexusError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax uses the name "Nexus" to refer to all jurisdictions where your company wishes to collect and remit transactional taxes.

In the United States, the concept of "Nexus" indicates that your company is subject to the tax laws of a particular jurisdiction.  Even though some locations worldwide may use a different term, the concept remains the same.

When declaring that you are subject to the tax laws of a particular jurisdiction, you may only declare that jurisdiction once.  This error message occurs when you attempt to create a new Nexus declaration that conflicts with an existing declaration.
