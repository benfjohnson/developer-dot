---
layout: page
title: BatchSalesAuditMustBeZippedError
number: 200
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Sales audit files must be uploaded in ZIP or RAR formats.

## Example

```json
{
  "code": "BatchSalesAuditMustBeZippedError",
  "target": "Unknown",
  "details": [
    {
      "code": "BatchSalesAuditMustBeZippedError",
      "number": 200,
      "message": "File was not a compressed archive.",
      "description": "SalesAuditExport needs a zipped file with an extension of '.ZIP' or '.RAR'.  Your file had the extension '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BatchSalesAuditMustBeZippedError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You uploaded a SalesAuditExport file and the file was not provided in the correct format.

Please recompress your file as a ZIP or RAR file.
