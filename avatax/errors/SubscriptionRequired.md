---
layout: page
title: SubscriptionRequired
number: 600
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This Avalara API call requires an active subscription to a specific service.

## Example

```json
{
  "code": "SubscriptionRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "SubscriptionRequired",
      "number": 600,
      "message": "This API requires a subscription to '-0-'.",
      "description": "Your subscription may not be in effect or it may have expired.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/SubscriptionRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

To use this API call, you must obtain a subscription to a designated service.  The Avalara sales team will be happy to assist you in adding, changing, or renewing services.

Common troubleshooting steps:

<ul class="normal">
<li>Has your subscription expired?</li>
<li>Have you requested that your subscription begin on a specific date in the future?</li>
<li>Are you using a sandbox account instead of a production account, or vice versa?</li>
</ul>
