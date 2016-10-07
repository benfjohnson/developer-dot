---
layout: page
title: Common Errors
product: avaTax
doctype: use_cases
nav: apis
community: errors
---

# Filter Operation Symbols

Filter operations are used to test the value of a field and return only those records where the test is true.

Avalara supports the following filtering operations defined in the <a href="https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering">Microsoft REST API Guidelines</a>.  Please note that in addition to the normal method of naming these operations, we also support symbols - but to use those symbols, you must properly URL encode your query string.  To avoid URL encoding problems, we encourage you to use the Microsoft syntax wherever possible.

|Filter|Symbol|Example|Notes|
|---|---|---|---|
|Equals| `field eq value` or `field = value`|`isActive eq true`||
|Greater Than| `field gt value` or `field > value`|`taxDate gt '2016-01-01'`||
|Greater Than Or Equal| `field ge value` or `field >= value`|`id ge 123`||
|Not Equal| `field ne value` or `field <> value` or `field != value`|`id ne 123`||
|Less Than| `field lt value` or `field < value`|`id lt 123`||
|Less Than Or Equal| `field le value` or `field <= value`|`id le 123`||

# Complex Filter Operations

Avalara supports a few additional complex operations not specified in the Microsoft standard:

|Filter|Symbol|Example|Notes|
|---|---|---|---|
|Between|`field between value1 and value2`|`taxableAmount between 100.00 and 200.00`|Matches all records greater than or equal to the first value, plus all records less than the second value.|
|In|`field in (item1, item2, item3...)`|`id in (123, 456, 789)`|Matches all records whose value is the same as one of the items in the list.|
|Like|`field like 'value%'`|`name like '%Bob%'`|Performsn string matching similarly to an SQL 'LIKE' statement.  Can only be used on string value fields.|
|Is|`field is null` or `field is not null`|`ref1 is null`|Matches all records where the field's null flag is a specific value.|

# Conjunctions

On occasion you may need to retrieve objects that have a combination of values.  To do this, you may need to search for objects that match a number of statements at once.  To do this, you can use conjunctions to chain together multiple statements, and you can use parenthesis symbols to define the order of operations.

|Conjunction|Symbol|Example|Notes|
|---|---|---|---|
|AND|`field1 operation value1 AND field2 operation value2`|`isActive eq true AND hasProfile eq true`|Matches only records where both tests are successful.|
|OR|`field1 operation value1 OR field2 operation value2`|`taxDate eq '2016-01-01' or taxDate eq '2016-01-02'`|Matches records where either the left or right side is true.|

# Complex Examples

Now let's put it all together, shall we?

|Example|Notes|
|---|---|
|```
name like 'Bob%' and (isActive eq true or hasProfile eq true)
```|Matches all records where the name begins with the letters 'Bob' and where the isActive flag is true or the hasProfile flag is true.|
|```
taxDate between '2016-01-01' and '2016-02-01' and status eq committed
```|Matches all records where the taxDate is in the month of January and the record's status is 'committed'.|
|```
(country eq 'US' and region eq 'CA') or (country eq 'CA')
```|Matches all records in Canada or in California|
