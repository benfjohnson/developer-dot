---
layout: page
title: InvalidEffectiveDate
number: 901
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The effective date for your filing request is not valid.

## Example

```json
{
  "code": "InvalidEffectiveDate",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidEffectiveDate",
      "number": 901,
      "message": "Invalid Effective Date",
      "description": "The effective date in the Filing Request is invalid.  Please call the cycle safe api to view valid effective dates.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidEffectiveDate",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When using the automated filing request API, you may only request filing dates in the future that are permitted by the filing frequency of the form you are attempting to file.

To request a more complex filing calendar with a different filing date, please contact Avalara Support and request a custom filing service.
