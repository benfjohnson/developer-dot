---
layout: page
title: Develop
date: 2016-01-18 02:34
author: jeremy.buller
comments: true
categories: []
product: onboarding
doctype: documentation
---
<h2>Develop Your Integration</h2>
Once you have access to the Onboarding API, there are a number of options and simplifications you can present to your users.
<h3>Provisioning Workflow</h3>
<h3>Registered in more than one jurisdiction?</h3>
Account creation also creates a default company, with a single-location nexus set up. This tax registration (nexus) reflects all triggered jurisdictions for the provided merchant address. If the merchant needs to collect sales tax in additional locations (e.g. other states), nexus needs to be set up in those jurisdictions as well. You can call POST /nexus with additional addresses to set nexus associated with those merchant addresses. If a merchant prefers to choose nexus jurisdictions by name (rather than triggering them by address), they should set up their nexus in the Avalara Admin Console.
<h3>Why Set Locations?</h3>
When a company is created, a single location is also created. If a merchant needs to report out sales by physical location within a single jurisdiction (note: this is uncommon), additional locations should be created. Locations do not need to represent every merchant origin address, or every end-customer address (in fact, they should never represent an end-customer address).
<h3>Credential Management</h3>
Provisioning an account creates the account number and license key required to call that account. This credential information is returned in the response to POST /accounts. You should store this information in a secure, merchant-specific location. The merchant will also be emailed this credential information, but since it is specifically used for calling the AvaTax API (separate credentials are issued to the merchant to log in to the Avalara Admin Console), it is most useful when entered in your connector.
<h3>Processing Payment</h3>
Currently only free trial accounts can be created through the Onboarding API. Payment information does not need to be collected or provided to provision free trial accounts.
<h3>Product Attachment</h3>
If a merchant wants to upgrade from a free trial account to a full account, or to add additional services (tax return filing, certificate management) to their existing paid account, they should reach out to Avalara directly. Product attachment is not currently supported through the Onboarding API.