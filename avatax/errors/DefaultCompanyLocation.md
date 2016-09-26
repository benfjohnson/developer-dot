
---
layout: post
title: AvaTax Errors - DefaultCompanyLocation
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DefaultCompanyLocation

## Summary

The default location for a company must be a physical-type location rather than a salesperson-type location.

## Example

    {
      "code": "DefaultCompanyLocation",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 124,
          "Summary": "Default outlet/location must be a Location Type (not a Salesperson Type).",
          "Details": "-0- -1-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DefaultCompanyLocation",
          "Name": "DefaultCompanyLocation",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

There are two types of locations: address-oriented and person-oriented.  An example of a person-oriented address is a salesperson or conference attendee who generates location-based filing requirements, but its actual location is expected to change from month to month.

Your default location must be an address-oriented location and it must be a relatively permanent address.