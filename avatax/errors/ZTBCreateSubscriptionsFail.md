---
layout: page
title: ZTBCreateSubscriptionsFail
number: 605
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Zero Touch Buying service did not respond in a timely manner.

## Example

```json
{
  "code": "ZTBCreateSubscriptionsFail",
  "target": "Unknown",
  "details": [
    {
      "code": "ZTBCreateSubscriptionsFail",
      "number": 605,
      "message": "ZTB endpoints fails to create subscriptions.",
      "description": "Fail to create subscriptions through ZBT service for account '-0-' at '-1-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ZTBCreateSubscriptionsFail",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error message indicates that an internal connection failed, and an issue has been created for our service reliability engineering team.

No action is required upon receiving this error.
