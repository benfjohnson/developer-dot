---
layout: page
title: AccountExpiredException
number: 39
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your AvaTax account has expired, or is not yet enabled.  You may need to contact your customer account manager for assistance.

## Example

```json
{
  "code": "AccountExpiredException",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountExpiredException",
      "number": 39,
      "message": "The account -1- (#-0-) has expired.",
      "description": "The account was valid from -2- to -3-.  Please contact your customer account manager to reactivate this account.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountExpiredException",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

Your AvaTax account is not currently enabled.  

Possible troubleshooting steps:

<ul class="normal">
<li>Are you using outdated credentials?</li>
<li>Are you connecting to the sandbox server when you intend to contact the production server, or vice versa?</li>
</ul>
