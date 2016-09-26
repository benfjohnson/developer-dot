
---
layout: post
title: AvaTax Errors - AuthenticationException
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# AuthenticationException

## Summary

The credentials you provided to AvaTax could not be validated.

## Example

    {
      "code": "AuthenticationException",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 30,
          "Summary": "The user or account could not be authenticated.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/AuthenticationException",
          "Name": "AuthenticationException",
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

This error message indicates that the username and password you provided could not be found.  

Common troubleshooting steps:

* Have you forgotten to Base-64 encode your username+password?
* Have you mistyped your username or password?
* Are you attempting to authenticate against the sandbox server when you intended to use the production server, or vice versa?