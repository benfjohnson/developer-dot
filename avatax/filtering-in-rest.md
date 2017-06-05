---
layout: page
title: Filtering in AvaTax REST v2
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

<h2>Filter Operation Symbols</h2>

Filter operations are used to test the value of a field and return only those records where the test is true.

Avalara supports the following filtering operations defined in the <a href="https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering">Microsoft REST API Guidelines</a>.  Please note that in addition to the normal method of naming these operations, we also support symbols - but to use those symbols, you must properly URL encode your query string.  To avoid URL encoding problems, we encourage you to use the Microsoft syntax wherever possible.

<h3>Using Filters</h3>

Filters are present all throughout the AvaTax REST v2 API.  You can use filters in most every place as a way to search for objects matching specific criteria.  For example, let's say you want to search for all companies with an address in California.  You might do the following:

<pre>GET /api/v2/companies?$filter=region eq 'CA'</pre>

In this example, calling `GET /api/v2/companies` is an API call that returns all companies in your account.  However, the `$filter=region eq 'CA'` adds a test: the API call will only return those companies who have a field `region` with value `CA`.

As you can imagine, there's a lot you can do with filtering.  Let's walk through the basics.

<h3>Filter Criteria</h3>

The Microsoft standard defines an english-language shortcut for all filter criteria; Avalara supports both this english-language shortcut as well as the common mathematical symbols for filter criteria. 

Here's a list of filters supported in REST v2:

<div class="mobile-table">
    <table class="styled-table">
        <tr>
            <th>Filter</th>
            <th>Symbol</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>Equals (EQ or =)</td>
            <td>EQ or =</td>
            <td><pre>isActive eq true</pre></td>
        </tr>
        <tr>
            <td>Greater Than</td>
            <td>GT or &gt;</td>
            <td><pre>taxDate gt '2016-01-01'</pre></td>
        </tr>
        <tr>
            <td>Greater Than Or Equal</td>
            <td>GE or &gt;=</td>
            <td><pre>id ge 123</pre></td>
        </tr>
        <tr>
            <td>Not Equal</td>
            <td>NE or &lt;&gt; or !=</td>
            <td><pre>id ne 123</pre></td>
        </tr>
        <tr>
            <td>Less Than</td>
            <td>LT or &lt;</td>
            <td><pre>id lt 123</pre></td>
        </tr>
        <tr>
            <td>Less Than Or Equal</td>
            <td>LE or &lt;=</td>
            <td><pre>id le 123</pre></td>
        </tr>
    <table>
</div>

<h2>Avalara-Specific Filters</h2>

The following filters are not defined in the Microsoft standard, but are available in the Avalara REST v2 API:
<div class="mobile-table">
    <table class="styled-table">
        <tr>
            <th>Filter</th>
            <th>Example</th>
            <th>Notes</th>
        </tr>
        <tr>
            <td>Between</td>
            <td><pre>amount between 10 and 20</pre></td>
            <td>Matches all records greater than or equal to the first value, plus all records less than the second value.</td>
        </tr>
        <tr>
            <td>In</td>
            <td><pre>id in (123, 456, 789)</pre></td>
            <td>Matches all records whose value is the same as one of the items in the list.</td>
        </tr>
        <tr>
            <td>Contains</td>
            <td><pre>name contains 'Bob'</pre></td>
            <td>Matches all records whose value contains the specified filter string.  To represent an apostrophe, use two apostrophe characters in a row, for example <span class="highlight-rouge">'Bob''s Hardware'</span>.</td>
        </tr>
        <tr>
            <td>StartsWith</td>
            <td><pre>name startswith 'Bob'</pre></td>
            <td>Matches all records whose value begins with the specified filter string.  To represent an apostrophe, use two apostrophe characters in a row, for example <span class="highlight-rouge">'Bob''s Hardware'</span>.</td>
        </tr>
        <tr>
            <td>EndsWith</td>
            <td><pre>name endswith 'Bob'</pre></td>
            <td>Matches all records whose value ends with the specified filter string.  To represent an apostrophe, use two apostrophe characters in a row, for example <span class="highlight-rouge">'Bob''s Hardware'</span>.</td>
        </tr>
        <tr>
            <td>Is Null / Is Not Null</td>
            <td><pre>ref1 is null</pre></td>
            <td>Matches all records where the field's null flag is a specific value.</td>
        </tr>
    <table>
</div>

<h2>Conjunctions</h2>

On occasion you may need to retrieve objects that have a combination of values.  To do this, you may need to search for objects that match a number of statements at once.  To do this, you can use conjunctions to chain together multiple statements, and you can use parenthesis symbols to define the order of operations.

When using parenthesis, remember that all elements within the parenthesis are resolved first before any elements outside of the parenthesis.  If you have multiple clauses enclosed in parenthesis, they may be resolved in any order.  The following are examples of valid conjunctions:

<pre>
isActive eq true AND hasProfile eq true
taxDate eq '2016-01-01' or taxDate eq '2016-01-02'
(firstName = 'bob' or firstName = 'alice') and lastName = 'smith'
</pre>

<h2>Complex Examples</h2>

Now let's put it all together, shall we?

<pre>GET /api/v2/companies/$filter=name startswith 'Bob' and (isActive eq true or hasProfile eq true)</pre>

This example retrieves all companies with a name begins with the letters 'Bob' and where either the isActive flag is true or the hasProfile flag is true.

<pre>GET /api/v2/companies/123/transactions?$filter=taxDate between '2016-01-01' and '2016-02-01' and status eq committed</pre>

Matches all records where the taxDate is in the month of January and the record's status is 'committed'.</td>

<pre>GET /api/v2/locations$filter=(country eq 'US' and region eq 'CA') or (country eq 'CA')</pre>

Matches all locations for all companies where the location is either in the country of Canada or in California in the United States.  This filter carefully ensures that even if a different country has a region whose code is "CA", this filter will still only return those locations in the United States.

<pre>GET /api/v2/companies$filter=code startswith 'Franchise' and name contains 'Bob''s'</pre>

Matches all companies whose code begins with the characters `Franchise` and whose name contains the phrase `Bob's`.  Note the apostrophe is doubled up.


