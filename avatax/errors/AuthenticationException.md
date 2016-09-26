---
layout: page
title: AuthenticationException
number: 30
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The credentials you provided to AvaTax could not be validated.

## Example

    {
      "code": "AuthenticationException",
      "target": "Unknown",
      "details": [
        {
          "code": "AuthenticationException",
          "number": 30,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/AuthenticationException",
          "severity": "Error"
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
