
---
layout: post
title: AvaTax Errors - InvalidCountryRegion
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# InvalidCountryRegion

## Summary

You specified a country/region that was not recognized by the ISO 3166 country/region code system.

## Example

    {
      "code": "InvalidCountryRegion",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 126,
          "Summary": "The region '-1-' is not a recognized region within country '-0-'.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/InvalidCountryRegion",
          "Name": "InvalidCountryRegion",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Avalara recognizes all ISO 3166 country codes and some regions within these countries.  Please verify that the country/region combination you are specifying matches the ISO 3166 definitions.

For more information on the international standard for ISO 3166 country/region codes, please see the ISO webpage: http://www.iso.org/iso/country_codes or the Wikipedia article listing current codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
