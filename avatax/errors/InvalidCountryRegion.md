---
layout: page
title: InvalidCountryRegion
number: 126
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a country/region that was not recognized by the ISO 3166 country/region code system.

## Example

```json
{
  "code": "InvalidCountryRegion",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidCountryRegion",
      "number": 126,
      "message": "Invalid country and region combination.",
      "description": "The region '-1-' is not a recognized region within country '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidCountryRegion",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara recognizes all ISO 3166 country codes and some regions within these countries.  Please verify that the country/region combination you are specifying matches the ISO 3166 definitions.

For more information on the international standard for ISO 3166 country/region codes, please see the ISO webpage: <a href="http://www.iso.org/iso/country_codes">http://www.iso.org/iso/country_codes</a> or the Wikipedia article listing current codes: <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</a>
