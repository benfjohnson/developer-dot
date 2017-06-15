---
layout: page
title: InvalidConfigurationValue
number: 163
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The configuration value you supplied was invalid.

## Example

```json
{
  "code": "InvalidConfigurationValue",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidConfigurationValue",
      "number": 163,
      "message": "The configuration value you provided was not the correct type.",
      "description": "The value '-2-' for the setting -0-.-1- is invalid.  The value must be of type -3-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidConfigurationValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara defined configuration values have a specified data type - for example, numeric, string, or boolean.

The data value you provided was not of the correct type.
