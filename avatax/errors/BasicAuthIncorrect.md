---
layout: page
title: BasicAuthIncorrect
number: 35
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Your Basic authorization header was not encoded correctly.

## Example

    {
      "code": "BasicAuthIncorrect",
      "target": "Unknown",
      "details": [
        {
          "code": "BasicAuthIncorrect",
          "number": 35,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/BasicAuthIncorrect",
          "severity": "Error"
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
