---
layout: page
title: BatchInvalidFileTypeError
number: 202
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You uploaded a batch file with an incorrect file type.

## Example

    {
      "code": "BatchInvalidFileTypeError",
      "target": "Unknown",
      "details": [
        {
          "code": "BatchInvalidFileTypeError",
          "number": 202,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/BatchInvalidFileTypeError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax supports batch files that contain CSV (comma-delimited) files, Microsoft Excel files (in either XLS or XLSX formats), XML files, or POSTED/UNPOSTED files.

If you upload a compressed file, AvaTax will decompress that file and verify that the enclosed file type is correct.  Please check the file extension on your uploaded file to verify that it matches one of the known file types.
