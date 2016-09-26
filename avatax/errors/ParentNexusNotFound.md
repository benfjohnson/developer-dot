
---
layout: post
title: AvaTax Errors - ParentNexusNotFound
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ParentNexusNotFound

## Summary

You attempted to create a nexus in a tax authority that is underneath a parent tax authority, but you have not yet declared nexus with the parent tax authority.

## Example

    {
      "code": "ParentNexusNotFound",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 146,
          "Summary": "To declare nexus here, you must also declare nexus for -0-.",
          "Details": "Nexus without parent: Country: -1-, Region: -2-, JurisTypeId: -3-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ParentNexusNotFound",
          "Name": "ParentNexusNotFound",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In AvaTax, certain jurisdictions fall under the authority of parent jurisdictions.  

For example, the tax authority "Denver, CO, US" is a city tax jurisdiction that falls within the State/Region jurisdiction "Colorado", which falls under the Country jurisdiction of "United States".

To declare nexus in Denver, you must first declare nexus in the United States, then in the state of Colorado.

