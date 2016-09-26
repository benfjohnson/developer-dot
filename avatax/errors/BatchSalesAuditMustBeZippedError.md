
---
layout: post
title: AvaTax Errors - BatchSalesAuditMustBeZippedError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# BatchSalesAuditMustBeZippedError

## Summary

Sales audit files must be uploaded in ZIP or RAR formats.

## Example

    {
      "code": "BatchSalesAuditMustBeZippedError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 200,
          "Summary": "SalesAuditExport needs a zipped file with an extension of '.ZIP' or '.RAR'.  Your file had the extension '-0-'.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/BatchSalesAuditMustBeZippedError",
          "Name": "BatchSalesAuditMustBeZippedError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

You uploaded a SalesAuditExport file and the file was not provided in the correct format.

Please recompress your file as a ZIP or RAR file.