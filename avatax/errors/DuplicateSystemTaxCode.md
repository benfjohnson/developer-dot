---
layout: page
title: DuplicateSystemTaxCode
number: 155
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a duplicate TaxCode object.

## Example

```json
{
  "code": "DuplicateSystemTaxCode",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateSystemTaxCode",
      "number": 155,
      "message": "Taxcode -0- already exists.",
      "description": "This tax code already exists in Avatax and cannot be duplicated. Please designate a different tax code identifier.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateSystemTaxCode",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In AvaTax, each tax code is expected to have a unique name.  When you create a new tax code, you should not reuse an existing tax code string.

For example, the AvaTax system tax code `P0000000` refers to general tangible personal property.  In order to reduce confusion, you are not permitted to create a custom tax code that shares the same name as this tax code.  Please choose a new, unique, tax code.
