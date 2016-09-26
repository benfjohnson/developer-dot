
---
layout: post
title: AvaTax Errors - CannotModifyDeletedObjects
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# CannotModifyDeletedObjects

## Summary

If an object has been deleted, you may not modify it further after its deletion.

## Example

    {
      "code": "CannotModifyDeletedObjects",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 121,
          "Summary": "You cannot modify an object to set its inactive / deleted flag.  To delete an object, call DELETE.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/CannotModifyDeletedObjects",
          "Name": "CannotModifyDeletedObjects",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Deleting objects is done via the DELETE endpoint.  

Once an object has been deleted, its URL is reserved and may not be reused.

