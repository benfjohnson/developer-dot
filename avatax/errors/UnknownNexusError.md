---
layout: page
title: UnknownNexusError
number: 145
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to declare nexus in a jurisdiction that is not recognized by AvaTax.

## Example

```json
{
  "code": "UnknownNexusError",
  "target": "Unknown",
  "details": [
    {
      "code": "UnknownNexusError",
      "number": 145,
      "message": "Unknown nexus: Country: -0-, Region: -1-, JurisCode: -2-, JurisTypeId: -3-, JurisName: -4-, ShortName: -5-, SignatureCode: -6-, StateAssignedNo: -7-. ",
      "description": "For a list of defined nexus, please use /api/v2/definitions/nexus",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnknownNexusError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax allows you to declare nexus in any jurisdiction recognized by our database of taxing authorities.  

For a full list of recognized jurisdictions, please call the endpoint `GET /api/v2/definitions/nexus`.
