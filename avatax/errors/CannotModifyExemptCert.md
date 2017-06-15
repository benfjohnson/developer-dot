---
layout: page
title: CannotModifyExemptCert
number: 1201
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Exemption certificates cannot be modified using the Company API.

## Example

```json
{
  "code": "CannotModifyExemptCert",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotModifyExemptCert",
      "number": 1201,
      "message": "Modify exempt certificate with company is not allowed",
      "description": "Exempt certificate can't be modified using Company endpoints",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotModifyExemptCert",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please use the CertCapture API to modify these records.
