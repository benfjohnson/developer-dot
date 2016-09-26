---
layout: page
title: InvalidCountry
number: 125
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The country code you provided is not recognized as a valid ISO 3166 country code.

## Example

    {
      "code": "InvalidCountry",
      "target": "Unknown",
      "details": [
        {
          "code": "InvalidCountry",
          "number": 125,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidCountry",
          "severity": "Error"
        }
      ]
    }

## Explanation

All Avalara country codes are two-character ISO 3166 codes.  Please verify that the country/region combination you are specifying matches the ISO 3166 definitions.

For more information on the international standard for ISO 3166 country/region codes, please see the ISO webpage: http://www.iso.org/iso/country_codes or the Wikipedia article listing current codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
