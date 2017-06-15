---
layout: post
title: CertCapture REST API Part II
date: 2016-12-06 9:00
author: Bob Maidens
comments: true
categories: [certcapture]
product: blog
doctype: blog
disqus: 1
imgsrc: /public/images/blog/DevDot_ValidationScreenWithMario.png
---

# Creating a Certificate

Today I would like to demonstrate how with one POST call to the CertCapture REST API, you can do the following:

* Create a Document
* Send it for validation
* Associate an Exempt Reason
* Associate an Exposure Zone
* Create a Customer
* Associate that new Customer with the new Certificate

## The payload:

You can access a text file containing the <a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/public/images/blog/raw_mario_payload.txt" download>payload here. </a>

## The Result:

Certificate:

<img src="/public/images/blog/DevDot_DocResult.png" alt="Document Result for Certificate" height="450" width = "700" />

### Validation List:

<img src="/public/images/blog/DevDot_ValidationList.png" alt="Validation List" height="25" width = "700"/>

### Customer:

<img src="/public/images/blog/DevDot_CustomerScreen.png" alt="Admin console View" height="400" width = "700" />

### Validation Screen:

<img
 src="/public/images/blog/DevDot_ValidationScreenWithMario.png" alt="Mario Being Validated" height="400" width = "700" />

### The breakdown

`pages[0]=`

This is an attribute you can pass a base64 url encoded string to, to convert it into a PDF document. You can even pass multiple pages to create a multipage PDF document. In this case it is a base64 encoded PNG of Mario.

`submit_to_stack=true`

This makes sure the document created goes through the validation process, by default all documents/certificates created through the API are marked as COMPLETED.

`exposure_zone={"name":"Mushroom Kingdom"}`

This parameter ties the document to the exposure zone ‘Mushroom Kingdom’. You can provide an ID, or initials here, as long as your exposure_zone JSON object returns a single unique exposure zone value.

`expected_tax_code={"name":"PRINCESS RESCUE"}`

Tax codes are the equivalent of Exempt Reasons and are just the internal nomenclature for exempt reasons. This means the created document will be associated with PRINCESS RESCUE.

`customers={"customer_number":"mario1","name":"Mario Mario"}`

Customers and Certificates/Documents have a many to many relationship. That is to say, one customer can have lots of certificates and a certificate can have multiple customers associated with it. You can provide multiple customer JSON objects here to associate multiple customers. Also if the customer you are associating does not exist, it will automatically be created and then associated.

### The Result

The result of that single API call means that for our customer ‘Mario Mario’ he is now exempt in ‘Mushroom Kingdom’ whenever he is doing a ‘PRINCESS RESCUE’ transaction, assuming our certificate passes validation.
