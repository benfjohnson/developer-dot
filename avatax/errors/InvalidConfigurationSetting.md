---
layout: page
title: InvalidConfigurationSetting
number: 162
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The configuration setting you specified is invalid.

## Example

```json
{
  "code": "InvalidConfigurationSetting",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidConfigurationSetting",
      "number": 162,
      "message": "The configuration setting you provided was not recognized.",
      "description": "The setting -0-.-1- is invalid.  The category -0- is defined by Avalara and only specific names are recognized.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidConfigurationSetting",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara supports configuration values at the account level and the company level.  To set configuration values at the account level, call [SetAccountConfiguration](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/SetAccountConfiguration/).  To set configuration values at the company level, call [SetCompanyConfiguration](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/SetCompanyConfiguration/).

Configuration values are either Avalara-defined name/value pairs, or customer-defined name/value pairs.  All customer-defined name/value pairs have the prefix `X-`.  To define your own configuration setting values, please prefix the name with `X-.

For a list of Avalara-defined name/value pairs, please call [GetAccountConfiguration](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/GetAccountConfiguration/) or [GetCompanyConfiguration](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/GetCompanyConfiguration/).
