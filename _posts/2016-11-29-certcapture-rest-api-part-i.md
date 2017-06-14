---
layout: post
title: CertCapture REST API Part I
date: 2016-11-29 11:00
author: Bob Maidens
comments: true
categories: [certcapture]
product: blog
doctype: blog
disqus: 1
---
# Relationships and Filtering

Today I wanted to discuss two pieces of the CertCapture v2 REST API that are important to any customers of CertCapture who wish to consume our API and critical to any developers who wish to build anything fancy with our available functionality.

### Managing Relationships and Saving Related Data

The CertCapture API can save or attach related data whenever you do a POST or PUT request. The way the save is handled is based off what type of relationship occurs between the data.

#### Associating Related Data

If you wish to save or associate some related data via an update request, just supply the information via the request.

`PUT URL: /v2/exposure-zones/1`

**DATA:**
```JSON
{
    "country":{
        "id": 1
        "name": "United States"
        "initials": "US"
    }
}
```
The above PUT request to /v2/exposure-zones/1/ would update Exposure Zone 1 to have the country United States. If the below criteria are met:
1.	The country relationship is a valid for the current model and it's not a read-only relationship.
2.	The country data provided is valid and exists. (United States exists with id of 1 and initials of US.)

The below requests are also valid when associating a country with an exposure zone:

`PUT URL: /v2/exposure-zones/1`

**DATA:**
```JSON
{
    "country":{
        "id": 1
    }
}
```
**And:**

`PUT URL: /v2/exposure-zones/1`

**DATA:**
```JSON
{
    "country":{
        "name": "United States"
        "initials": "US"
    }
}
```
CertCapture will look at ALL the data provided for country and see if it can find a single matching result, before assigning it to an Exposure Zone.

#### Unassociating Related Data

To remove an existing data relationship, simply pass that relationship with null
`PUT URL: /v2/exposure-zones/1`

**DATA:**

```Json
{
    "country":null
}
```
**Or:**

`PUT URL: /v2/exposure-zones/1`

**DATA:**

```Json
{
    "country":
}
```

`NOTE:` Removing an association will NOT remove the related entity.

#### Associating Non-Existent Data

If you wish to associate a relationship with something that doesn't exist yet, the API call will fail. You will need to create it manually via the API endpoint, then do the association.

`NOTE:` This is not the case for One to Many relationships. One to Many relationships will ALWAYS create a new entity before associating it.

#### Associated Many Relationships
Some relationships are not able to be modified via a POST or PUT request on a normal resource. These are usually for relationships that are One to Many or Many to Many and there are specific API endpoints to handle them.

**One to Many**

Associating an entity with a one to many relationship:

`PUT URL: /v2/customers/1/log`

**DATA:**
```json
{
    "logs":[{
        "account": "Account Name",
        "entry": "Updated customer Information"
    }]
}
```

The above request would CREATE a log for Customer 1, if the below criteria is met:
* Each log data provided is valid.

Removing a many to many entity association:

`DELETE URL: /v2/customers/1/log/`

**DATA:**
```json
{
    "logs":[{"id": 10}]
}
```
The above request would DELETE the Log, if the below criteria is met:
* The log data provided is valid and the relationship exists.

**Many to Many**

Associating an entity with a many to many relationship:

`PUT URL: /v2/certificates/1/customers`

**DATA:**
```json
{
    "customers":[{"id": 10},{"id": 20}]
}
```
The above request would associate Customer 10 and Customer 20 with Certificate 1, if the below criteria is met:
* Each customer data provided is valid and exists.

Removing a many to many entity association:

`DELETE URL: /v2/certificates/1/customers/`

**DATA:**
```json
{
    "customers": [{"id": 10}]
}
```
The above request would remove the associate of Customer 10 with Certificate 1, if the below criteria is met:
* The customer data provided is valid and the relationship exists.

`NOTE:` Removing an association will NOT remove the related entity.

**Many to Many Pivot Data**

Some Many to Many relationships have pivot data, E.G. Customer 1has a Custom Field 10 with a value of custom field value
If you wish to update the value of that, simply do the same action as you would if you were assigning a Many to Many relationship, and pass in the updated value field.

`PUT URL: /v2/customers/1/custom-fields/`

**DATA:**
```JSON
{
    "custom_fields": {"id": 10, "value":"update my customer custom field value!"}
}
```


### Collection Filtering

When getting a list of a resource ( GET /v2/exposure-zones for example) the CertCapture REST API provides a robust way to filter down your results, on top of the standard ordering and pagination.

#### Format
When accessing a collection, you can filter on any field that is shown in the results using this format: `[[FIELD, OPERATOR, VALUE], [FIELD, OPERATOR, VALUE]]`

Example:

`/v2/customers?filter=[["id","=",5],["name","=","my name"],["customer_number","in","abc123,cc00005"]]
`

#### Operators
The following operators are also available, but limited to the field type you are searching on. For example, you cannot use `<` with a boolean field.
`"=", "<", ">","=<", "=>", "like", "ilike", "<>", "in"`

#### Booleans
Filtering by booleans is available with the following case insensitive values:
`"yes", "y", "1", "true", 1, true, "false", "no", "n", "0", 0, false
`
#### Multiple Values (in)
Filtering can be done on multiple values by using the "in" operator and splitting the value by commas.
`?filter=[["id","in","1,2,3,4,5"]]
`
`?filter=[["customer_number","in","abc123,123abc,cc0000005"]]
`
`?filter=[["exposure_zone.name","in","Washington,Arizona"]]
`

`NOTE:` Ids and numeric values need to be encapsulated in a string, `["id","in","1,2,3,4,5"]` not `["id","in",1,2,3,4,5]`

#### URL Encoding
In some cases URL encoding may be required to make sure the filter JSON is valid:

`?filter=[["name","=","Bob & Nicks Emporium"]]
`
Will cause an 'Invalid JSON' error so url encode the & symbol:

`?filter=[["name","=","Bob %26 Nicks Emporium"]]
`
#### Filtering on Null
Filtering by null is also available, but it must be raw null value (not in quotes).

`?filter=[["customer_number","=",null]]
`
#### Filtering on Empty
Filtering by "" can sometimes cause an error:

`?filter=[["calc_id","=",""]]
`
The solution is to change from an empty string to null:

`?filter=[["calc_id","=",null]]
`

#### Filtering on Relationships
Filtering based on expanded relationships is also available:

`?filter=[["relationship.name", "=", "value"]]
`

`NOTE:` All of the expanded relationship filters are custom set white listed filters, if you feel you should be able to filter on something but can't, let us know at support@certcapture.com.
