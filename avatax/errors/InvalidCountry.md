
---
layout: post
title: AvaTax Errors - InvalidCountry
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# InvalidCountry

## Summary

The country code you provided is not recognized as a valid ISO 3166 country code.

## Example

    {
      "code": "InvalidCountry",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 125,
          "Summary": "The country '-0-' is not a recognized country code.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/InvalidCountry",
          "Name": "InvalidCountry",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

All Avalara country codes are two-character ISO 3166 codes.  Please verify that the country/region combination you are specifying matches the ISO 3166 definitions.

For more information on the international standard for ISO 3166 country/region codes, please see the ISO webpage: http://www.iso.org/iso/country_codes or the Wikipedia article listing current codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

