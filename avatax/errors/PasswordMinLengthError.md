---
layout: post
title: AvaTax Errors - SubscriptionRequired
date: 2016-09-21 17:00
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# SubscriptionRequired

This error message indicates that a subscription is required to use this API.  Your account does not currently have this subscription, or the subscription has expired.

## Example

	{
		"error": {
			"code": "SubscriptionRequired",
			"message": "The user or account could not be authenticated.",
			"target": "SubscriptionRequired",
			"details": [
				{
					"ErrorCode": 30,
					"Name": "SubscriptionRequired",
					"Summary": "Using this API requires a subscription to 'AvaTaxST'.",
					"Details": "Please contact your customer account manager for more details about this product.",
					"FaultCode": "CustomerAccountSetup",
					"HelpLink": "http://developer.avalara.com/avatax/errors/SubscriptionRequired",
					"Severity": "Exception"
				}
			]
		}
	}

## Explanation

Some APIs within Avalara AvaTax are available to all customers.  Other APIs are only available to customers who subscribe to certain features.

For example, a customer with a subscription to "Avalara AvaTax Sales Tax", also known as "AvaTaxST", can create transactions, adjust them, and verify them.  A customer with a subscription to Avalara Managed Returns, also known as "MRS", can request filing services to file taxes for some transactions and can preview some data from their tax returns.

If you encounter this message on an API you wish to use, you should contact your customer account manager.  Please be prepared to provide information about the API you were trying to use.
