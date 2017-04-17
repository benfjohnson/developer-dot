---
layout: page
title: DefaultCompanyLocation
number: 124
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The default location for a company must be a physical-type location rather than a salesperson-type location.

## Example

```json
{
  "code": "DefaultCompanyLocation",
  "target": "Unknown",
  "details": [
    {
      "code": "DefaultCompanyLocation",
      "number": 124,
      "message": "The default outlet/location must be a Location Type and not a Salesperson Type.",
      "description": "-0- -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DefaultCompanyLocation",
      "severity": "Error"
    }
  ]
}
```

## Explanation

There are two types of locations: address-oriented and person-oriented.  An example of a person-oriented address is a salesperson or conference attendee who generates location-based filing requirements, but its actual location is expected to change from month to month.

Your default location must be an address-oriented location and it must be a relatively permanent address.
