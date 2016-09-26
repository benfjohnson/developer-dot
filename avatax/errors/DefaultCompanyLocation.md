---
layout: page
title: AvaTax Errors - DefaultCompanyLocation
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The default location for a company must be a physical-type location rather than a salesperson-type location.

## Example

    {
      "code": "DefaultCompanyLocation",
      "target": "Unknown",
      "details": [
        {
          "code": "DefaultCompanyLocation",
          "number": 124,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DefaultCompanyLocation",
          "severity": "Error"
        }
      ]
    }

## Explanation

There are two types of locations: address-oriented and person-oriented.  An example of a person-oriented address is a salesperson or conference attendee who generates location-based filing requirements, but its actual location is expected to change from month to month.

Your default location must be an address-oriented location and it must be a relatively permanent address.
