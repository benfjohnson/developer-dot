---
layout: page
title: AccountExists
number: 601
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

An account tied to this email address already exists.

## Example

```json
{
  "code": "AccountExists",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountExists",
      "number": 601,
      "message": "An account with this email already exists.",
      "description": "Unable to create a new account for email address '-0-'.  That email address is already associated with an existing account.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountExists",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You tried to use a Registrar or Onboarding API to create an account, but the account already exists.

In AvaTax, a user is uniquely identified by their email address.  The same email address cannot belong to two separate accounts.  

Next steps:

<ul class="normal">
    <li>This user may have created a free trial account in the past.</li>
    <li>The user may have mistyped an email address.</li>
    <li>If the user is incorrectly attached to a different account, they should request their account be updated through support.</li>
</ul>
