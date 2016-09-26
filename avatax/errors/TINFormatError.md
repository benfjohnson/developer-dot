
---
layout: post
title: AvaTax Errors - TINFormatError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# TINFormatError

## Summary

The U.S. Taxpayer Identification Number you provided is not in a recognized format.

## Example

    {
      "code": "TINFormatError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 143,
          "Summary": "Taxpayer ID Number (TIN) is not in the correct format.",
          "Details": "The TIN is a nine digit number. Acceptable formats: 123456789, 12-3456789, 123-456-789, and 123-45-6789.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/TINFormatError",
          "Name": "TINFormatError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
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