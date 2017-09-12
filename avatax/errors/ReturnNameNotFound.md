---
layout: page
title: ReturnNameNotFound
number: 122
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a filing calendar for a return that is not recognized by AvaTax.

## Example

```json
{
  "code": "ReturnNameNotFound",
  "target": "Unknown",
  "details": [
    {
      "code": "ReturnNameNotFound",
      "number": 122,
      "message": "The form named '-0-' cannot be found.",
      "description": "Please use the ListTaxAuthorityForms API to identify the list of relevant forms.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ReturnNameNotFound",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error occurs if you attempt to create a filing calendar for a tax return whose name is not recognized.

For a full list of recognized forms, please use the `GET /api/v2/definitions/taxforms` endpoint.
