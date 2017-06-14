---
layout: page
title: InvalidBusinessType
number: 1200
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The business type field on the ECMS record is invalid.

## Example

```json
{
  "code": "InvalidBusinessType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidBusinessType",
      "number": 1200,
      "message": "The field 'businessTypeId' has an incorrect value.",
      "description": "The value '-0-' is invalid.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidBusinessType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

ECMS records may only be updated by Avalara CertCapture team members.
