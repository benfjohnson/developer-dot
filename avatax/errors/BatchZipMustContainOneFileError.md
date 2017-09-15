---
layout: page
title: BatchZipMustContainOneFileError
number: 201
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Compressed files uploaded to the Batch service must contain exactly one file.

## Example

```json
{
  "code": "BatchZipMustContainOneFileError",
  "target": "Unknown",
  "details": [
    {
      "code": "BatchZipMustContainOneFileError",
      "number": 201,
      "message": "Compressed archive did not contain one file.",
      "description": "The compressed archive file -0- did not contain exactly one file when uncompressed.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BatchZipMustContainOneFileError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax processes one file per batch.  You may only upload one file per batch, even if that file is a compressed ZIP.  The ZIP must decompress to exactly one file.

If you wish to upload more than one file, please upload more than one batch.
