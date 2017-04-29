---
layout: page
title: CommonPassword
number: 11
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The password you have chosen is a commonly-guessed password and cannot be used.

## Example

```json
{
  "code": "CommonPassword",
  "target": "Unknown",
  "details": [
    {
      "code": "CommonPassword",
      "number": 11,
      "message": "Password is a common password.",
      "description": "This password showed up on a list of commonly used passwords.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CommonPassword",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A password must be sufficiently complex that an attacker will be unable to guess it easily.  The password that you provided was found on a 'commonly-guessed' list of passwords.

Please ensure that

<ul class="normal">
<li>Your password must be a mixture of words and numbers</li>
<li>Your password should not appear in the list of commonly-guessed passwords provided by security researchers</li>
<li>Your password should not have the word 'Password' in it</li>
</ul>

Please try your API call again with a more complex password.
