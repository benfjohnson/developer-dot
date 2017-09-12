---
layout: page
title: CertCaptureFieldValidationError
number: 1202
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You called an exemption certificate API with an invalid value.

## Example

```json
{
  "code": "CertCaptureFieldValidationError",
  "target": "Unknown",
  "details": [
    {
      "code": "CertCaptureFieldValidationError",
      "number": 1202,
      "message": "CertCapture API request has an invalid field '-0-'",
      "description": "-1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CertCaptureFieldValidationError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please review the error and try your API call again with a corrected value.
