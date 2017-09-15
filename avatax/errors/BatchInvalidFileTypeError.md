---
layout: page
title: BatchInvalidFileTypeError
number: 202
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You uploaded a batch file with an incorrect file type.

## Example

```json
{
  "code": "BatchInvalidFileTypeError",
  "target": "Unknown",
  "details": [
    {
      "code": "BatchInvalidFileTypeError",
      "number": 202,
      "message": "Compressed archive file contained wrong file type",
      "description": "The BatchFile '-1-' had a compressed file of type '-0-'.  Compressed files can only contain CSV, XLS, XLSX, XML, POSTED, and UNPOSTED file types.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BatchInvalidFileTypeError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax supports batch files that contain CSV (comma-delimited) files, Microsoft Excel files (in either XLS or XLSX formats), XML files, or POSTED/UNPOSTED files.

If you upload a compressed file, AvaTax will decompress that file and verify that the enclosed file type is correct.  Please check the file extension on your uploaded file to verify that it matches one of the known file types.
