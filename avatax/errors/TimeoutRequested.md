---
layout: page
title: TimeoutRequested
number: 316
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You requested a timeout error from the AvaTax API.

## Example

```json
{
  "code": "TimeoutRequested",
  "target": "Unknown",
  "details": [
    {
      "code": "TimeoutRequested",
      "number": 316,
      "message": "You requested a timeout error for this API call.",
      "description": "You passed the parameter `$include=-0-` to this API.  The `ForceTimeout` include option simulates a timeout error to make tests easier.  To stop receiving this error code, remove the word `ForceTimeout`.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TimeoutRequested",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The `ForceTimeout` parameter is available to developers.  It allows them to simulate a timeout so that their software can evaluate how best to respond in the case of a connection interruption.

You are receiving this error because you specifically requested a timeout error.  To stop receiving this error, please remove the word `ForceTimeout` from your API call.
