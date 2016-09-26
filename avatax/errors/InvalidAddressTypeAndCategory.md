---
layout: page
title: AvaTax Errors - InvalidAddressTypeAndCategory
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

When creating a location, you must specify a compatible AddressType and AddressCategory value.

## Example

    {
      "code": "InvalidAddressTypeAndCategory",
      "target": "Unknown",
      "details": [
        {
          "code": "InvalidAddressTypeAndCategory",
          "number": 123,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAddressTypeAndCategory",
          "severity": "Error"
        }
      ]
    }

## Explanation

Locations can be either physical locations or mobile person locations.  Please make sure that your AddressType and AddressCategory are both referring to the same type of location.
