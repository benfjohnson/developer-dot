---
layout: page
title: ServerConfiguration
number: 1
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Indicates that there is a server configuration problem with one of the servers in Avalara's AvaTax cluster.

## Example

```json
{
  "code": "ServerConfiguration",
  "target": "Unknown",
  "details": [
    {
      "code": "ServerConfiguration",
      "number": 1,
      "message": "The AvaTax API Server has a configuration error.",
      "description": "This error has been logged and reported to Avalara system administrators.  No action is required.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/ServerConfiguration",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error indicates that Avalara's service reliability team has been notified of a server configuration problem.  There is no action to take for this error.
