---
layout: page
title: SubscriptionRequired
number: 600
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

This Avalara API call requires an active subscription to a specific service.

## Example

    {
      "code": "SubscriptionRequired",
      "target": "Unknown",
      "details": [
        {
          "code": "SubscriptionRequired",
          "number": 600,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/SubscriptionRequired",
          "severity": "Error"
        }
      ]
    }

## Explanation

To use this API call, you must obtain a subscription to a designated service.  The Avalara sales team will be happy to assist you in adding, changing, or renewing services.

Common troubleshooting steps:
* Has your subscription expired?
* Have you requested that your subscription begin on a specific date in the future?
* Are you using a sandbox account instead of a production account, or vice versa?
