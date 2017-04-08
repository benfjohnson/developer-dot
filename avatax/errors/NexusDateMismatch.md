---
layout: page
title: NexusDateMismatch
number: 157
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You declared nexus on a date when that nexus was not available.

## Example

```json
{
  "code": "NexusDateMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "NexusDateMismatch",
      "number": 157,
      "message": "Nexus not available on dates specified.",
      "description": "The Nexus for Country: -0-, Region: -1-, JurisCode: -2-, JurisTypeId: -3-, JurisName: -4-, ShortName: -5-, SignatureCode: -6-, StateAssignedNo: -7- was only valid from -8- to -9-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NexusDateMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When you declare that your company has nexus in a particular jurisdiction, AvaTax checks to make sure that nexus was in existence on the dates you specified.

Since tax authorities create and change their tax rules periodically, some locations are only available for nexus declarations on some dates.  This error message occurs when there is a mismatch between dates.
