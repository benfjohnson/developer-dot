---
layout: post
title: Filtering in AvaTax REST v2
date: 2016-10-06 10:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

<h2>I'm sure I left this somewhere...</h2>

The REST API pattern is designed to make it easy to store and retrieve data.  Every piece of data in REST is assigned a single unique URL - and you can always fetch that item back by retrieving its URL.  It works a bit like this:

<h3>Request</h3>
`POST /api/v2/companies`

```json
{ 
    "name": "Bob's Artisan Pottery" 
}
```
<h3>Result</h3>
In the result headers, you'll get back this response that tells you the URL of your newly created object:

`Location: /api/v2/companies/123`

Then, when it's time to fetch something back, you can retrieve it back using that location, and you'll get the original object you created back.

This works great as long as you know the URL you want - but how do you find something if you don't know its URL?

<h2>Listing All Objects</h2>

Let's say you have three companies, and these are their URLs:

```
    /api/v2/companies/123
    /api/v2/companies/456
    /api/v2/companies/789
```

You can fetch all of them back as follows:

<h3>Request</h3>

`GET /api/v2/companies`

<h3>Result</h3>

```json
[ 
    { "id": 123 }, 
    { "id": 456 }, 
    { "id": 789 }
]
```

Voila! In AvaTax, your credentials will automatically allow you to access all companies within your account with no extra hassle.  The query to `GET /api/v2/companies` will return all three objects.  If you only have three objects this is the easiest way to find what you want.

<h2>What if I have more than three objects?</h2>

Sooner or later it will be a nuisance to fetch everything.  To reduce the number of records you get, you'll have to start filtering.

In the <a href="https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering">Microsoft REST API Guidelines</a>, Microsoft established a nice and friendly standard for finding objects.  You can use a simplified search syntax to find something you want.  Let's say you want to search for the company whose names start with 'A':

<h3>Request</h3>

`GET /api/v2/companies?$filter=name ge A and name lt B`

<h3>Result</h3>

```json
[ 
    { "name": "Aardvark" }, 
    { "name": "Aaron's Antiques" }, 
    { "name": "Andes Climbing Supply" }
]
```

You can use these same types of filters in lots of different ways - here are a few samples:

```
GET /api/v2/companies?$filter=name eq 'Bob''s Artisan Pottery'
GET /api/v2/companies?$filter=id gt 100000
GET /api/v2/companies?$filter=isTest eq true and isActive eq true
```

<h2>What filtering options are available?</h2>

Avalara supports all filtering language options specified by Microsoft in its standard, plus a few extra items.  We support some useful features like the ability to nest filter statements - you can use AND and OR clauses to construct more complex searches.  You can retrieve a large number of items in a list.

The full list of <a href="/avatax/filtering-in-rest">available filtering options is here</a>.  Please let us know what you think!

Happy Filtering!

--Ted Spence, Director, AvaTax Core Engine
