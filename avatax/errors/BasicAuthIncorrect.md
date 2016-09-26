
---
layout: post
title: AvaTax Errors - BasicAuthIncorrect
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# BasicAuthIncorrect

## Summary

Your Basic authorization header was not encoded correctly.

## Example

    {
      "code": "BasicAuthIncorrect",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 35,
          "Summary": "The Basic header must be in the format 'Basic (Base64Encoded(value))' where Value is either 'username' + ':' + 'password' or 'accountid' + ':' + 'licensekey'.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/BasicAuthIncorrect",
          "Name": "BasicAuthIncorrect",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

The published standard for HTTP authorization headers specifies that Basic authentication is performed by setting the "Authorization" header in the HTTP request to the following string:

	Basic Base64(credential + ':' + secret)

An example header looks like this:

	Basic AhD72dhkS8=
	
In the HTTP request you provided to AvaTax, your information was not correctly encoded.  Common troubleshooting steps:

* Did you forget to provide either a username or a password?
* Did you remember to put a colon in between your username and your password?
* Did you forget to Base64 encode the resulting string?
* Did you accidentally Base64 encode the word "Basic"?
* Are you using a library that automatically handles this encoding for you, and you accidentally encoded the value twice?