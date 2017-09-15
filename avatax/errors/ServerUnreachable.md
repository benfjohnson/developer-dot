---
layout: page
title: ServerUnreachable
number: 500
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

One of the servers in the Avalara AvaTax API cluster is unreachable and your API call could not be completed.

## Example

```json
{
  "code": "ServerUnreachable",
  "target": "Unknown",
  "details": [
    {
      "code": "ServerUnreachable",
      "number": 500,
      "message": "AvaTax server unable to reach data services",
      "description": "This error has been logged and reported to Avalara system administrators.  No action is required.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ServerUnreachable",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error occurs when Avalara's service reliability team has been alerted to a problem in the Avalara data cluster.  In normal operation you will not see this error.

There is no action to be taken about this error.  The problem has already been reported to avalara's service reliability team.
