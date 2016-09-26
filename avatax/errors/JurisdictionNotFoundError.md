
---
layout: post
title: AvaTax Errors - JurisdictionNotFoundError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# JurisdictionNotFoundError

## Summary

The specified jurisdiction could not be found.

## Example

    {
      "code": "JurisdictionNotFoundError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 130,
          "Summary": "Unable to determine the taxing jurisdictions.",
          "Details": "-0- -1- -2- -3-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/JurisdictionNotFoundError",
          "Name": "JurisdictionNotFoundError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

You attempted to create a jurisdiction that could not be found.

Please use the GET "/api/v2/definitions/nexus" to list available jurisdictions.