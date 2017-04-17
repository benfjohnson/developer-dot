---
layout: page
title: DeleteInformation
number: 100
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This message represents information provided about an object that was deleted.

## Example

```json
{
  "code": "DeleteInformation",
  "target": "Unknown",
  "details": [
    {
      "code": "DeleteInformation",
      "number": 100,
      "message": "-0- -2- was deleted successfully.",
      "description": "The -0- -2- (#-1-) had an active flag of -3- before deletion.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DeleteInformation",
      "severity": "Success"
    }
  ]
}
```

## Explanation

In AvaTax, some objects can be deleted.  When you successfully delete an object, this information is returned to help you understand what object was deleted.  You may log this information if you wish.
