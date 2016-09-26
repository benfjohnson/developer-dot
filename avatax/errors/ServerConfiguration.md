---
layout: page
title: ServerConfiguration
number: 1
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Indicates that there is a server configuration problem with one of the servers in Avalara's AvaTax cluster.

## Example

    {
      "code": "ServerConfiguration",
      "target": "Unknown",
      "details": [
        {
          "code": "ServerConfiguration",
          "number": 0,
          "message": "The AvaTax API Server has a configuration error.",
          "description": "",
          "faultCode": "Server",
          "helpLink": "http://developer.avalara.com/avatax/errors/ServerConfiguration",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error indicates that Avalara's service reliability team has been notified of a server configuration problem.  There is no action to take for this error.
