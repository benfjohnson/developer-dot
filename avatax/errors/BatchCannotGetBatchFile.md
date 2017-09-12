---
layout: page
title: BatchCannotGetBatchFile
number: 204
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Batch file could not be found.

## Example

```json
{
  "code": "BatchCannotGetBatchFile",
  "target": "Unknown",
  "details": [
    {
      "code": "BatchCannotGetBatchFile",
      "number": 204,
      "message": "Batch file could not be fetched",
      "description": "The file '-0-' could not be fetched.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BatchCannotGetBatchFile",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax cannot find the file associated with this batch.
