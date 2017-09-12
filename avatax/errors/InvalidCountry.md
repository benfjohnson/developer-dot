---
layout: page
title: InvalidCountry
number: 125
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The country code you provided is not recognized as a valid ISO 3166 country code.

## Example

```json
{
  "code": "InvalidCountry",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidCountry",
      "number": 125,
      "message": "The country '-0-' is not a recognized country code.",
      "description": "Please use the `ListCountries` API to identify a list of ISO 3166 countries and codes.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidCountry",
      "severity": "Error"
    }
  ]
}
```

## Explanation

All Avalara country codes are two-character ISO 3166 codes.  Please verify that the country/region combination you are specifying matches the ISO 3166 definitions.

For more information on the international standard for ISO 3166 country/region codes, please see the ISO webpage: <a href="http://www.iso.org/iso/country_codes">http://www.iso.org/iso/country_codes</a> or the Wikipedia article listing current codes: <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</a>
