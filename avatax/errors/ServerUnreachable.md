---
layout: page
title: AvaTax Errors - ServerUnreachable
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

One of the servers in the Avalara AvaTax API cluster is unreachable and your API call could not be completed.

## Example

    {
      "code": "ServerUnreachable",
      "target": "Unknown",
      "details": [
        {
          "code": "ServerUnreachable",
          "number": 500,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ServerUnreachable",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs when Avalara's service reliability team has been alerted to a problem in the Avalara data cluster.  In normal operation you will not see this error.

There is no action to be taken about this error.  The problem has already been reported to avalara's service reliability team.
