---
layout: page
title: RemoteServerError
number: 44
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A remote server AvaTax depends on is not working.

## Example

```json
{
  "code": "RemoteServerError",
  "target": "Unknown",
  "details": [
    {
      "code": "RemoteServerError",
      "number": 44,
      "message": "A remote server did not respond to this request.",
      "description": "The server at '-0-' responded with error code '-1-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RemoteServerError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A component of the AvaTax server platform is not functioning or was not responding.  This event has been automatically logged and escalated to the AvaTax Service Reliability Engineering team.

No user action is required for this message.
