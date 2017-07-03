---
layout: page
title: Overview
product: avaTax
doctype: use_cases
nav: apis
---
<h3>Account Provisioning and Company Management</h3>
The Onboarding API allows Avalara partners to create customer accounts, company profiles, and user credentials.
<h4>What You Can Do</h4>
This API allows partners to automatically provision individual customer accounts and assist with company profile setup on those accounts, allowing for a quick, automated account setup for these customers.
<h4>Get API Key</h4>
To get access to this API, contact your Customer Account Manager or email <a href="mailto:developer@avalara.com">developer@avalara.com</a>.
<h4>Documentation</h4>
Here is the <a href="/api-reference/onboarding/">Onboarding API Documentation</a> for the RESTful Onboarding API. This API is designed so that a single operation represents a group of provisioning steps; an account can be provisioned with a company and single location (with associated nexus) and a single admin user with a single POST /accounts.

<h3>Develop Your Integration</h3>
Once you have access to the Onboarding API, there are a number of options and simplifications you can present to your users.
<h4>Provisioning Workflow</h4>
<h4>Registered in more than one jurisdiction?</h4>
Account creation also creates a default company, with a single-location nexus set up. This tax registration (nexus) reflects all triggered jurisdictions for the provided merchant address. If the merchant needs to collect sales tax in additional locations (e.g. other states), nexus needs to be set up in those jurisdictions as well. You can call POST /nexus with additional addresses to set nexus associated with those merchant addresses. If a merchant prefers to choose nexus jurisdictions by name (rather than triggering them by address), they should set up their nexus in the Avalara Admin Console.
<h4>Why Set Locations?</h4>
When a company is created, a single location is also created. If a merchant needs to report out sales by physical location within a single jurisdiction (note: this is uncommon), additional locations should be created. Locations do not need to represent every merchant origin address, or every end-customer address (in fact, they should never represent an end-customer address).
<h4>Credential Management</h4>
Provisioning an account creates the account number and license key required to call that account. This credential information is returned in the response to POST /accounts. You should store this information in a secure, merchant-specific location. The merchant will also be emailed this credential information, but since it is specifically used for calling the AvaTax API (separate credentials are issued to the merchant to log in to the Avalara Admin Console), it is most useful when entered in your connector.
<h4>Processing Payment</h4>
Currently only free trial accounts can be created through the Onboarding API. Payment information does not need to be collected or provided to provision free trial accounts.
<h4>Product Attachment</h4>
If a merchant wants to upgrade from a free trial account to a full account, or to add additional services (tax return filing, certificate management) to their existing paid account, they should reach out to Avalara directly. Product attachment is not currently supported through the Onboarding API.


<h3>Provisioning Workflow</h3>
When provisioning customer accounts with the onboarding API, you must perform various provisioning steps in a specific order.
<h4>Request 1: /accounts</h4>
The first request in the workflow creates a single account with:
<ul class="normal">
	<li>one Account Admin-level user</li>
	<li>one default company profile</li>
	<li>one defined location</li>
	<li>tax registration (nexus) designated for the single location</li>
</ul>
The account will be a free or paid account depending on the ProductRatePlan information provided in the request.
The credentials for this account will be returned in the response, an should be stored for use in future calls to set up company profile elements, and to calculate tax.
<h4>Request 2: /companies</h4>
Once the account is provisioned, additional companies can be created.
<h4>Request 3: /locations</h4>
If a company requires more than one reportable location, additional locations can be defined.
<h4>Request 4: /nexus</h4>
If a company requires more than one nexus location, additional nexus can be set.
