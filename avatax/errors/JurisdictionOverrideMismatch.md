---
layout: page
title: JurisdictionOverrideMismatch
number: 154
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

An address override cannot be created for this jurisdiction.

## Example

```json
{
  "code": "JurisdictionOverrideMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "JurisdictionOverrideMismatch",
      "number": 154,
      "message": "The jurisdiction you provided cannot be found.",
      "description": "Please use /api/v2/definitions/jurisdictionsnearaddress to determine nearby jurisdictions for use in overrides.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/JurisdictionOverrideMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Jurisdiction Override service provides the capability for an AvaTax customer to fix minor addressing errors when discovered.

For example, a customer who lives on the boundary between two jurisdictions may have a tax ruling that specifies that they should receive the tax rates for one of the two jurisdictions.

This functionality is intentionally limited to only nearby jurisdictions.  Since AvaTax uses the input from multiple address validation and resolution services, and since Avalara maintains accurate boundary jurisdictions for a broad variety of locations, it is not permissible to redirect tax rates for an address beyond a specific range of nearby jurisdictions.

To use the API successfully, you must call `/api/v2/definitions/jurisdictionsnearaddress` to determine a list of available choices, and you must select one of those choices when creating an override.  You will receive this error message if you do not exactly provide the output of the `GET /api/v2/definitions/jurisdictionsnearaddress` function to the `POST /api/v2/companies/ABC/jurisdictionoverrides` API.
