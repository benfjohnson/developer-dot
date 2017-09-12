---
layout: page
title: RequestedFileNotExist
number: 253
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The TaxRate content file for the date you specified does not exist.

## Example

```json
{
  "code": "RequestedFileNotExist",
  "target": "Unknown",
  "details": [
    {
      "code": "RequestedFileNotExist",
      "number": 253,
      "message": "The TaxRates file for date -0- does not exist.",
      "description": "Please use api/v2/taxratesbyzipcode/build/{date} API to build the file first.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RequestedFileNotExist",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The TaxRate API builds files periodically.  Not every date is available for download immediately.

To request a TaxRate content file for this date, please use the BuildTaxRateFile API.
