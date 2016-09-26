
---
layout: post
title: AvaTax Errors - BatchInvalidFileTypeError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# BatchInvalidFileTypeError

## Summary

You uploaded a batch file with an incorrect file type.

## Example

    {
      "code": "BatchInvalidFileTypeError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 202,
          "Summary": "The BatchFile '-1-' had a compressed file of type '-0-'.  Compressed files can only contain CSV, XLS, XLSX, XML, POSTED, and UNPOSTED file types.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/BatchInvalidFileTypeError",
          "Name": "BatchInvalidFileTypeError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax supports batch files that contain CSV (comma-delimited) files, Microsoft Excel files (in either XLS or XLSX formats), XML files, or POSTED/UNPOSTED files.

If you upload a compressed file, AvaTax will decompress that file and verify that the enclosed file type is correct.  Please check the file extension on your uploaded file to verify that it matches one of the known file types.