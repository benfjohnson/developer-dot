---
layout: page
title: InvalidRegistrarAction
number: 43
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The action you attempted is restricted.

## Example

```json
{
  "code": "InvalidRegistrarAction",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidRegistrarAction",
      "number": 43,
      "message": "You may not create users with this security role / account combination.",
      "description": "You are not allowed to create users in the account -0- with security role -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidRegistrarAction",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You attempted to make a change to a system account or grant an account system admin privileges.  This feature is restricted.
