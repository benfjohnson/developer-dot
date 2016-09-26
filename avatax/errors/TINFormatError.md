---
layout: page
title: AvaTax Errors - TINFormatError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The U.S. Taxpayer Identification Number you provided is not in a recognized format.

## Example

    {
      "code": "TINFormatError",
      "target": "Unknown",
      "details": [
        {
          "code": "TINFormatError",
          "number": 143,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/TINFormatError",
          "severity": "Error"
        }
      ]
    }

## Explanation

In the United States, a Taxpayer Identification Number is a nine digit number that is either an Employer Identification Number (in the case of a company) or a Social Security Number (in the case of an individual).

Recognized TIN/EIN/SSN numbers are in the format:
* 12-3456789 (generally an Employer ID number)
* 123-45-6789 or 123-456-789 (generally a Social Security Number)

You may also provide a number with no dashes if desired.

If you do not have an employer identification number, you may request one from the IRS online: https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
