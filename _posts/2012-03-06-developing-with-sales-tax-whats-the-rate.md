---
layout: post
title: "Developing With Sales Tax: What's the Rate?"
date: 2012-03-06 15:50
author: steven.dunston
comments: true
categories: [older]
product: avaTax
doctype: blog
---
<em>This is the first of three posts aimed at giving developers a basic understanding of options for implementing a sales tax solution.</em>

<strong><em>Developing With Sales Tax:</em></strong>
<ol>
	<li><em><strong>What's The Rate?</strong></em></li>
	<li><em><a href="/blog/2012/03/20/developing-with-sales-tax-should-i-tax-it/">Should I Tax It?</a></em></li>
	<li><em>I Taxed It: Now What?</em></li>
</ol>
If you're building or installing an application to process U.S. transactions, odds are that you'll need to account for a sales tax rate.

At the minimum you'll need to identify a target tax location, and then look up a rate for that location. Looking up rates is fairly simple. The tricky part can be finding the location. Here are the five ways it's done, along with the ramifications for each.<!--more-->
<h4>1. Five digit ZIP Code</h4>
<strong>What's Good About It</strong>

Most businesses are probably calculating sales tax rates by ZIP Code. A five-digit ZIP Code is the simplest part of an address to use for a calculation. If you have a customer address, you have (or can look up) a five digit ZIP Code. There are about 42,000 ZIP Codes in the US, and most locations have a ZIP Code.

Five-digit ZIP Code tax tables are readily available. You can download them from individual state department of revenue websites, or buy them from various providers. You can even find <a href="http://www.taxrates.com/state-rates/">free tax tables</a>! The simplest way to add sales tax rates to an application is to use a lookup table such as this.

<strong>What's Not Good Enough</strong>

ZIP Codes don't align neatly with tax jurisdictions. Why? Because that's not what they are for. ZIP Codes are created by the Federal Government to deliver mail. Sales tax is levied by local and regional governments, and so there is no necessary correlation between boundaries of ZIP Codes and boundaries of tax jurisdictions. A ZIP Code doesn't help you to find city or county or other boundaries, making it difficult to decipher the layers of tax from counties, cities and other entities.

ZIP Code tables are inaccurate, and tend to show the highest possible rate for that ZIP Code. That can lead to a competitive disadvantage because you may be overcharging your customers by 3% or more.
<h4>2. ZIP+4</h4>
In 1983, the U.S. Postal Service introduced extended ZIP Codes with an extra four digits.

<strong>What's Good About It</strong>

Some ZIP+4 (or nine-digit) ZIP Codes represent single buildings, PO Boxes or mailing entities, which is of limited use for sales tax calculation. But others can narrow down to individual city blocks or neighborhoods, which can be more accurate for sales tax calculation than a five-digit zip.

<strong>What's Not Good Enough</strong>

A nine-digit zip brings complexity and cost without bringing clarity. The data costs more than the five-digit version. You may not have the +4 part of the ZIP Code for much of your contact database, which means you will need to do manual address verification.

While nine-digit ZIP Codes are more complex and costly, and require you to have better address data, you still won't have city, county and other taxing authority information.
<h4>3. ZIP Plus County, City (ZIP CC)</h4>
<strong>What's Good About It</strong>
This is ZIP Code plus information about city and county boundaries, which can help create a more accurate rate match. Tax rates are more likely to align with city or county boundaries than with ZIP Codes.

<strong>What's Not Good Enough</strong>
In order to take advantage of the greater accuracy, ZIP CC files may require a human to select a location from a picklist. This can complicate your user interface and make ordering or invoicing less efficient. It may not always be obvious at first glance which rate is correct, requiring further research or guessing.

Even with county and city information and human intervention, you will still be missing tax zones representing metro, stadium, tourism and other sales taxes.
<h4>4. Street Address Table</h4>
This solution divides the map into block-level sections by street address ranges.

<strong>What's Good About It</strong>
Unlike other table-based solutions, Street Address Tables can be fairly accurate, at least for destinations where you have a known street address.

<strong>What's Not Good Enough</strong>
These tables are huge, consisting of millions of records, which dramatically increases the cost. And they are out of date even before they are published.

Street Addresses don't help you in situations where you don't have an address. Digital goods or deliveries to off-the-grid locations like construction sites, rural cell towers, and ranches are a few examples.
<h4>5. Geolocation</h4>
Now we're talking. This method takes latitude/longitude and places it precisely within the geometry of a particular tax zone.

<strong>What's Good About It</strong>
Geolocation creates unparalleled accuracy without requiring a database of millions of addresses. You don't even need an address: A lat/long and a quick web service call will suffice to produce an accurate tax rate.

<strong>What's Not Good Enough</strong>
Geolocation can get you the perfect rate, but it can't tell you whether or not you should apply the rate to a given transaction. For that, stay tuned for Developing With Sales Tax: Should I Tax It?, where we discuss nexus (seller's status), taxability (product's status) and exemptions (buyer's status).
