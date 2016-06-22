---
layout: page
title: Typical Workflows
date: 2016-01-21 15:27
author: jeremy.buller
comments: true
categories: []
---
When provisioning customer accounts with the onboarding API, you must perform various provisioning steps in a specific order.
<h2>Provisioning Workflow</h2>
<h3>Request 1: /accounts</h3>
The first request in the workflow creates a single account with:
<ul>
	<li>one Account Admin-level user</li>
	<li>one default company profile</li>
	<li>one defined location</li>
	<li>tax registration (nexus) designated for the single location</li>
</ul>
The account will be a free or paid account depending on the ProductRatePlan information provided in the request.
The credentials for this account will be returned in the response, an should be stored for use in future calls to set up company profile elements, and to calculate tax.
<h3>Request 2: /companies</h3>
Once the account is provisioned, additional companies can be created.
<h3>Request 3: /locations</h3>
If a company requires more than one reportable location, additional locations can be defined.
<h3>Request 4: /nexus</h3>
If a company requires more than one nexus location, additional nexus can be set.
