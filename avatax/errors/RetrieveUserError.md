---
layout: page
title: RetrieveUserError
number: 161
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your bearer token does not have a provisioned AvaTax account.

## Example

```json
{
  "code": "RetrieveUserError",
  "target": "Unknown",
  "details": [
    {
      "code": "RetrieveUserError",
      "number": 161,
      "message": "Unable to retrieve Avalara user ID.",
      "description": "The account associated with this request is not authorized to make AvaTax API calls. Please contact your CAM and verify that you have a valid AvaTax subscription.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/RetrieveUserError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You attempted to call an API using an OAuth 2.0 bearer token, but this token does not correspond to a provisioned AvaTax user account.

Please contact your customer support representative and request an account.
