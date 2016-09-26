
---
layout: post
title: AvaTax Errors - BatchZipMustContainOneFileError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# BatchZipMustContainOneFileError

## Summary

Compressed files uploaded to the Batch service must contain exactly one file.

## Example

    {
      "code": "BatchZipMustContainOneFileError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 201,
          "Summary": "The zip file -0- did not contain exactly one file.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/BatchZipMustContainOneFileError",
          "Name": "BatchZipMustContainOneFileError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax processes one file per batch.  You may only upload one file per batch, even if that file is a compressed ZIP.  The ZIP must decompress to exactly one file.

If you wish to upload more than one file, please upload more than one batch.