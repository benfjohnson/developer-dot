---
layout: page
title: InvitationOnly
number: 602
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to contact an API that is available by invitation only.

## Example

```json
{
  "code": "InvitationOnly",
  "target": "Unknown",
  "details": [
    {
      "code": "InvitationOnly",
      "number": 602,
      "message": "The user is not whitelisted to use this API. This API is available by invitation only.",
      "description": "You have attempted to contact an API that is available to specially invited partners and developers only.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvitationOnly",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Some AvaTax APIs, such as Returns-related and Onboarding-related APIs, are available to specially approved partners only.

For more information about these APIs, please contact your account manager.
