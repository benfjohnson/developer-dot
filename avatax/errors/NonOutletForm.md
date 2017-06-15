---
layout: page
title: NonOutletForm
number: 902
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This form does not permit Outlet or Location-based reporting.

## Example

```json
{
  "code": "NonOutletForm",
  "target": "Unknown",
  "details": [
    {
      "code": "NonOutletForm",
      "number": 902,
      "message": "Form does not permit per-location reporting.",
      "description": "The form '-0-' uses location-reporting rule '-1-', which does not permit per-location reporting.  Please resubmit your request without a `locationCode` value to file once for all locations.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NonOutletForm",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This form does not permit Outlet or Location-based reporting, and you attempted to attach it to a `locationCode` value.

Please resubmit your request while specifying the `locationCode` value of `NULL`.
