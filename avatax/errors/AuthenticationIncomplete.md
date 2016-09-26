
---
layout: post
title: AvaTax Errors - AuthenticationIncomplete
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# AuthenticationIncomplete

## Summary

Your API call did not contain authentication information.

## Example

    {
      "code": "AuthenticationIncomplete",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 34,
          "Summary": "You must provide an Authorization header of the type Basic or Bearer to authenticate correctly.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/AuthenticationIncomplete",
          "Name": "AuthenticationIncomplete",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax provides multiple modes by which you can authenticate your API call.  You may provide one of the following:

	Basic username:password
	Basic accountid:licensekey
	Bearer token

Avalara looks for these values in the HTTP "Authorization" header.  The Basic values are expected to be Base64 encoded as specified by the HTTP standard.

You must provide an HTTP header that matches one of these three patterns in order to authenticate correctly.  Please check your HTTP request headers and verify that you are providing the correct values.
