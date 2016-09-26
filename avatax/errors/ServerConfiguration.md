
---
layout: post
title: AvaTax Errors - ServerConfiguration
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ServerConfiguration

## Summary

Indicates that there is a server configuration problem with one of the servers in Avalara's AvaTax cluster.

## Example

    {
      "code": "ServerConfiguration",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 1,
          "Summary": "The AvaTax API Server has a configuration error.",
          "Details": "",
          "FaultCode": "Server",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ServerConfiguration",
          "Name": "ServerConfiguration",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error indicates that Avalara's service reliability team has been notified of a server configuration problem.  There is no action to take for this error.