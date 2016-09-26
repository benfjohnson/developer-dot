
---
layout: post
title: AvaTax Errors - UnknownNexusError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# UnknownNexusError

## Summary

You attempted to declare nexus in a jurisdiction that is not recognized by AvaTax.

## Example

    {
      "code": "UnknownNexusError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 145,
          "Summary": "Nexus is unknown.",
          "Details": "Unknown nexus: Country: -0-, Region: -1-, JurisCode: -2-, JurisTypeId: -3-, JurisName: -4-, ShortName: -5-, SignatureCode: -6-, StateAssignedNo: -7-. For a list of defined nexus, please use /api/v2/definitions/nexus",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/UnknownNexusError",
          "Name": "UnknownNexusError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax allows you to declare nexus in any jurisdiction recognized by our database of taxing authorities.  

For a full list of recognized jurisdictions, please call the endpoint GET "/api/v2/definitions/nexus".