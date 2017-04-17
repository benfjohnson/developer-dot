---
layout: page
title: ZTBListConnectorFail
number: 604
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Zero Touch Buying service did not respond in a timely manner.

## Example

```json
{
  "code": "ZTBListConnectorFail",
  "target": "Unknown",
  "details": [
    {
      "code": "ZTBListConnectorFail",
      "number": 604,
      "message": "ZTB endpoints fails to list all available connectors.",
      "description": "Fail to fetch all available connectors '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ZTBListConnectorFail",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error message indicates that an internal connection failed, and an issue has been created for our service reliability engineering team.

No action is required upon receiving this error.
