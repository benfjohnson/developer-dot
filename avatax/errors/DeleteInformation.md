
---
layout: post
title: AvaTax Errors - DeleteInformation
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DeleteInformation

## Summary

This message represents information provided about an object that was deleted.

## Example

    {
      "code": "DeleteInformation",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 100,
          "Summary": "-0- -2- was deleted.",
          "Details": "The -0- -2- (#-1-) had an active flag of -3- before deletion.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DeleteInformation",
          "Name": "DeleteInformation",
          "RefersTo": null,
          "Severity": "Success",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In AvaTax, some objects can be deleted.  When you successfully delete an object, this information is returned to help you understand what object was deleted.  You may log this information if you wish.