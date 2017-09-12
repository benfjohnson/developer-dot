---
layout: page
title: InvalidJurisdictionType
number: 140
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a jurisdiction type that is not recognized.

## Example

```json
{
  "code": "InvalidJurisdictionType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidJurisdictionType",
      "number": 140,
      "message": "Invalid jurisdiction type.",
      "description": "The value '-0-' is not a valid Avalara-recognized jurisdiction type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidJurisdictionType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The jurisdiction type value is an enumerated value that can only be one of the following values:

<ul class="normal">
    <li>Country (sometimes abbreviated CNT) - This represents a country that is recognized by ISO 3166 as having its own country code.</li>
    <li>State (also known as Region, Province, or sometimes abbreviated STA) - This represents an administrative jurisdiction within the country.</li>
    <li>County (sometimes abbreviated CTY) - A smaller administrative jurisdiction than a state/region/province, but typically larger than a city.  Not all countries have county jurisdictions.</li>
    <li>City (sometimes abbreviated CIT) - An administrative jurisdiction representing a single city.</li>
    <li>Special (sometimes abbreviated STJ for Special Tax Jurisdiction) - An administrative jurisdiction created for the purpose of taxing transactions within a boundary.</li>
</ul>
