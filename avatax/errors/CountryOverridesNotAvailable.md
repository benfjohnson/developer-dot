---
layout: page
title: CountryOverridesNotAvailable
number: 153
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The jurisdiction override feature is only available in the United States.

## Example

```json
{
  "code": "CountryOverridesNotAvailable",
  "target": "Unknown",
  "details": [
    {
      "code": "CountryOverridesNotAvailable",
      "number": 153,
      "message": "Jurisdiction overrides are not available in this country.",
      "description": "The Jurisdiction Override feature is available in the United States only.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CountryOverridesNotAvailable",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara provides the jurisdiction override API feature for addresses in the United States only.

If you would like to set up jurisdiction overrides for a different country, please contact your account manager.
