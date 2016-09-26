
---
layout: post
title: AvaTax Errors - IncorrectPathError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# IncorrectPathError

## Summary

You attempted to modify an object but you provided an object that matches a different URL.

## Example

    {
      "code": "IncorrectPathError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 139,
          "Summary": "You attempted to update the model at URL '-0-', but the model you supplied belongs to URL '-1-'.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/IncorrectPathError",
          "Name": "IncorrectPathError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This problem commonly occurs if you have fetched an object from one URL but attempt to update it by posting it to a different URL.

Common troubleshooting errors:
* When updating an object, you must provide all fields.  Avalara REST v2 does not currently support "partial updates" to an object.
* To update an object, you should do first call GET "/api/v2/(myobjecturl)", then change one value on that object, then PUT "/api/v2/(myobjecturl)" to update it.  This ensures that you are fetching the most recent object and only changing the designated field.
