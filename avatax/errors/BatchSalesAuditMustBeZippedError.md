---
layout: page
title: BatchSalesAuditMustBeZippedError
number: 200
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Sales audit files must be uploaded in ZIP or RAR formats.

## Example

    {
      "code": "BatchSalesAuditMustBeZippedError",
      "target": "Unknown",
      "details": [
        {
          "code": "BatchSalesAuditMustBeZippedError",
          "number": 200,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/BatchSalesAuditMustBeZippedError",
          "severity": "Error"
        }
      ]
    }

## Explanation

You uploaded a SalesAuditExport file and the file was not provided in the correct format.

Please recompress your file as a ZIP or RAR file.
