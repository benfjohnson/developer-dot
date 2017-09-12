---
layout: page
title: InvalidCertCaptureOperation
number: 1212
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Certificate service was unable to parse a filter parameter in your query.

## Example

```json
{
  "code": "InvalidCertCaptureOperation",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidCertCaptureOperation",
      "number": 1212,
      "message": "Filtering operation is not supported",
      "description": "The API -0- does not currently support the -1- filter command.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidCertCaptureOperation",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Avalara Certificate service supports most `$filter` operations.  Unfortunately, due to the data storage system used by Avalara's certificate environment, we do not currently support every operation.

Please consider rewriting your API call to use supported filter operations, or fetch all data then perform client side filtering.
