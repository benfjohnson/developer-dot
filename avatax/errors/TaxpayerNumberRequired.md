---
layout: page
title: TaxpayerNumberRequired
number: 9
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Customers subscribing to Avalara Returns must identify each company by its United States Taxpayer ID Number (TIN).

## Example

```json
{
  "code": "TaxpayerNumberRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxpayerNumberRequired",
      "number": 9,
      "message": "taxpayerIdNumber is required for customers subscribing to Avalara Returns.",
      "description": "Customers who have an active MRS or CSP service must provide taxpayerIdNumber for all company records.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxpayerNumberRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Customers who subscribe to Avalara Managed Returns or Certified Service Provider services must identify all companies by their US Taxpayer ID Numbers (TIN).
In general, a taxpayer ID number is either an Employer Identification Number (EIN) assigned by the Internal Revenue Service, or a Social Security Number (SSN)
assigned by the Social Security Administration.  

EIN numbers are in the format 12-3456789, whereas most SSN numbers are in the format 123-45-6789.

This number is used to correctly report taxes on your returns and to correctly match your corporate entities with your tax returns.
