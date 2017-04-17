---
layout: page
title: InvalidAddressTypeAndCategory
number: 123
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

When creating a location, you must specify a compatible AddressType and AddressCategory value.

## Example

```json
{
  "code": "InvalidAddressTypeAndCategory",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidAddressTypeAndCategory",
      "number": 123,
      "message": "Invalid AddressType and AddressCategory combination.",
      "description": "-0- -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAddressTypeAndCategory",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Locations can be either physical locations or mobile person locations.  Please make sure that your `AddressType` and `AddressCategory` values are both referring to the same type of location.
