---
layout: page
title: TaxCodeAssociatedTaxRule
number: 165
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This tax code cannot be deleted because it is in use.

## Example

```json
{
  "code": "TaxCodeAssociatedTaxRule",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxCodeAssociatedTaxRule",
      "number": 165,
      "message": "Cannot delete tax code associated to tax rule.",
      "description": "The Tax Code '-0-' is associated with a tax rule and cannot be deleted.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxCodeAssociatedTaxRule",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A [TaxCode](https://developer.avalara.com/api-reference/avatax/rest/v2/models/TaxCodeModel/) can be associated with a [TaxRule](https://developer.avalara.com/api-reference/avatax/rest/v2/models/TaxRuleModel/).

When a TaxCode is associated with a TaxRule, the TaxCode cannot be deleted.
