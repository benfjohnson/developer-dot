---
layout: page
title: CertCaptureError
number: 1203
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Avalara CertCapture service reported an error during the API call.

## Example

```json
{
  "code": "CertCaptureError",
  "target": "Unknown",
  "details": [
    {
      "code": "CertCaptureError",
      "number": 1203,
      "message": "CertCapture API returned error",
      "description": "-0-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CertCaptureError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara's exemption certificates service, CertCapture, could not process your request and returned this error message.

Please review the error message and try your API call again with corrections.
