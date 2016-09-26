
---
layout: post
title: AvaTax Errors - DeletedObjectsCannotBeChangedError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DeletedObjectsCannotBeChangedError

## Summary

You attempted to modify an object that is in a deleted state.

## Example

    {
      "code": "DeletedObjectsCannotBeChangedError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 110,
          "Summary": "An object that has been deleted cannot be modified.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DeletedObjectsCannotBeChangedError",
          "Name": "DeletedObjectsCannotBeChangedError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

When an object has been deleted, its URL is reserved and may not be reused.

No further modifications may be made after an object has been deleted.