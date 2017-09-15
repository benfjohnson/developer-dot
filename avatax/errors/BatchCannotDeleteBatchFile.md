---
layout: page
title: BatchCannotDeleteBatchFile
number: 205
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Batch file deletion is not allowed.

## Example

```json
{
  "code": "BatchCannotDeleteBatchFile",
  "target": "Unknown",
  "details": [
    {
      "code": "BatchCannotDeleteBatchFile",
      "number": 205,
      "message": "Batch file could not be deleted",
      "description": "The file '-0-' could not be deleted.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BatchCannotDeleteBatchFile",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Batch files may not be deleted.

The AvaTax Batch system begins processing batches immediately upon creation.  You may update a batch file to flag it as cancelled, but you may not delete a batch file since the system has already begun working on it.
