---
layout: page
title: WeakPassword
number: 12
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The password you specified does not meet minimum complexity requirements.

## Example

```json
{
  "code": "WeakPassword",
  "target": "Unknown",
  "details": [
    {
      "code": "WeakPassword",
      "number": 12,
      "message": "Password did not meet complexity requirements.",
      "description": "Please try again with a longer password, or add uppercase/lowercase/numbers/symbols.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/WeakPassword",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A password must be sufficiently complex that an attacker will be unable to guess it easily.  The password that you provided was not complex enough to provide security.

Please consider adding one or more of the following to your password:

<ul class="normal">
<li>Extra words or phrases in the password</li>
<li>Numbers, symbols, and both upper and lowercase letters</li>
</ul>

Additionally, AvaTax blocks certain common words and phrases from usage as a password.  These words and phrases are collected from password-guessing programs, which will help prevent usage of commonly-guessed passwords.

Please try your API call again with a more complex password.
