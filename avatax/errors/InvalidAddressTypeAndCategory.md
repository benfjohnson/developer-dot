
---
layout: post
title: AvaTax Errors - InvalidAddressTypeAndCategory
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# InvalidAddressTypeAndCategory

## Summary

When creating a location, you must specify a compatible AddressType and AddressCategory value.

## Example

    {
      "code": "InvalidAddressTypeAndCategory",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 123,
          "Summary": "Invalid AddressType and AddressCategory combination.",
          "Details": "-0- -1-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/InvalidAddressTypeAndCategory",
          "Name": "InvalidAddressTypeAndCategory",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Locations can be either physical locations or mobile person locations.  Please make sure that your AddressType and AddressCategory are both referring to the same type of location.