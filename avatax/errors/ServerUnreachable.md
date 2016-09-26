
---
layout: post
title: AvaTax Errors - ServerUnreachable
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ServerUnreachable

## Summary

One of the servers in the Avalara AvaTax API cluster is unreachable and your API call could not be completed.

## Example

    {
      "code": "ServerUnreachable",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 500,
          "Summary": "The AvaTax API server is currently unable to reach the data service.  Please check https://status.avalara.com/ for more information.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ServerUnreachable",
          "Name": "ServerUnreachable",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error occurs when Avalara's service reliability team has been alerted to a problem in the Avalara data cluster.  In normal operation you will not see this error.

There is no action to be taken about this error.  The problem has already been reported to avalara's service reliability team.