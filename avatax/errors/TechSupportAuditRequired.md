---
layout: page
title: TechSupportAuditRequired
number: 158
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

To make this API call, you must provide tech support audit requirements.

## Example

```json
{
  "code": "TechSupportAuditRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "TechSupportAuditRequired",
      "number": 158,
      "message": "Tech Support users must satisfy audit requirements.",
      "description": "A tech support user may only call APIs if they provide all mandatory audit headers.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TechSupportAuditRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error message is intended for technical support team usage only.

To make this API call, you must provide tech support audit requirements.
