---
layout: page
title: Filtering in AvaTax REST v2
product: avaTax
doctype: use_cases
nav: apis
community: apis
---

# Filter Operation Symbols

Filter operations are used to test the value of a field and return only those records where the test is true.

Avalara supports the following filtering operations defined in the <a href="https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering">Microsoft REST API Guidelines</a>.  Please note that in addition to the normal method of naming these operations, we also support symbols - but to use those symbols, you must properly URL encode your query string.  To avoid URL encoding problems, we encourage you to use the Microsoft syntax wherever possible.

<table class="styled-table">
    <tr>
        <th>Filter</th>
        <th>Symbol</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Equals</td>
        <td>`field eq value` or `field = value`</td>
        <td>`isActive eq true`</td>
    </tr>
    <tr>
        <td>Greater Than</td>
        <td>`field gt value` or `field > value`</td>
        <td>`taxDate gt '2016-01-01'`</td>
    </tr>
    <tr>
        <td>Greater Than Or Equal</td>
        <td>`field ge value` or `field >= value`</td>
        <td>`id ge 123`</td>
    </tr>
    <tr>
        <td>Not Equal</td>
        <td>`field ne value` or `field <> value` or `field != value`</td>
        <td>`id ne 123`</td>
    </tr>
    <tr>
        <td>Less Than</td>
        <td>`field lt value` or `field < value`</td>
        <td>`id lt 123`</td>
    </tr>
    <tr>
        <td>Less Than Or Equal</td>
        <td>`field le value` or `field <= value`</td>
        <td>`id le 123`</td>
    </tr>
<table>

# Complex Filter Operations

Avalara supports a few additional complex operations not specified in the Microsoft standard:

<table class="styled-table">
    <tr>
        <th>Filter</th>
        <th>Symbol</th>
        <th>Example</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>Between</td>
        <td>`field between value1 and value2`</td>
        <td>`taxableAmount between 100.00 and 200.00`</td>
        <td>Matches all records greater than or equal to the first value, plus all records less than the second value.</td>
    </tr>
    <tr>
        <td>In</td>
        <td>`field in (item1, item2, item3...)`</td>
        <td>`id in (123, 456, 789)`</td>
        <td>Matches all records whose value is the same as one of the items in the list.</td>
    </tr>
    <tr>
        <td>Like</td>
        <td>`field like 'value%'`</td>
        <td>`name like '%Bob%'`</td>
        <td>Performsn string matching similarly to an SQL 'LIKE' statement.  Can only be used on string value fields.</td>
    </tr>
    <tr>
        <td>Is Null / Is Not Null</td>
        <td>`field is null` or `field is not null`</td>
        <td>`ref1 is null`</td>
        <td>Matches all records where the field's null flag is a specific value.</td>
    </tr>
<table>

# Conjunctions

On occasion you may need to retrieve objects that have a combination of values.  To do this, you may need to search for objects that match a number of statements at once.  To do this, you can use conjunctions to chain together multiple statements, and you can use parenthesis symbols to define the order of operations.

<table class="styled-table">
    <tr>
        <th>Conjunction</th>
        <th>Symbol</th>
        <th>Example</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>AND</td>
        <td>`field1 operation value1 AND field2 operation value2`</td>
        <td>`isActive eq true AND hasProfile eq true`</td>
        <td>Matches only records where both tests are successful.</td>
    </tr>
    <tr>
        <td>OR</td>
        <td>`field1 operation value1 OR field2 operation value2`</td>
        <td>`taxDate eq '2016-01-01' or taxDate eq '2016-01-02'`</td>
        <td>Matches records where either the left or right side is true.</td>
    </tr>
<table>

# Complex Examples

Now let's put it all together, shall we?

<table class="styled-table">
    <tr>
        <th>Example</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>`name like 'Bob%' and (isActive eq true or hasProfile eq true)`</td>
        <td>Matches all records where the name begins with the letters 'Bob' and where the isActive flag is true or the hasProfile flag is true.</td>
    </tr>
    <tr>
        <td>`taxDate between '2016-01-01' and '2016-02-01' and status eq committed`</td>
        <td>Matches all records where the taxDate is in the month of January and the record's status is 'committed'.</td>
    </tr>
    <tr>
        <td>`(country eq 'US' and region eq 'CA') or (country eq 'CA')`</td>
        <td>Matches all records in Canada or in California</td>
    </tr>
</table>