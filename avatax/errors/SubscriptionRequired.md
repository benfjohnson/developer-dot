
---
layout: post
title: AvaTax Errors - SubscriptionRequired
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# SubscriptionRequired

## Summary

This Avalara API call requires an active subscription to a specific service.

## Example

    {
      "code": "SubscriptionRequired",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 600,
          "Summary": "",
          "Details": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "FaultCode": null,
          "HelpLink": "http://developer.avalara.com/avatax/errors/SubscriptionRequired",
          "Name": "SubscriptionRequired",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

To use this API call, you must obtain a subscription to a designated service.  The Avalara sales team will be happy to assist you in adding, changing, or renewing services.

Common troubleshooting steps:
* Has your subscription expired?
* Have you requested that your subscription begin on a specific date in the future?
* Are you using a sandbox account instead of a production account, or vice versa?