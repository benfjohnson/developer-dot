---
layout: page
title: TINFormatError
number: 143
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The U.S. Taxpayer Identification Number you provided is not in a recognized format.

## Example

```json
{
  "code": "TINFormatError",
  "target": "Unknown",
  "details": [
    {
      "code": "TINFormatError",
      "number": 143,
      "message": "Taxpayer ID Number (TIN) is not in the correct format.",
      "description": "The TIN is a nine digit number. Acceptable formats: 123456789, 12-3456789, 123-456-789, and 123-45-6789.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TINFormatError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In the United States, a Taxpayer Identification Number is a nine digit number that is either an Employer Identification Number (in the case of a company) or a Social Security Number (in the case of an individual).

Recognized TIN/EIN/SSN numbers are in the format:

<ul class="normal">
<li>12-3456789 (generally an Employer ID number)</li>
<li>123-45-6789 or 123-456-789 (generally a Social Security Number)</li>
</ul>

You may also provide a number with no dashes if desired.

If you do not have an employer identification number, you may request one from the IRS online: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online">https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online</a>
