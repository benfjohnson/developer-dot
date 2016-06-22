---
layout: page
title: Address Validation
date: 2012-05-21 15:10
author: anya.stettler
comments: true
categories: []
---
<h3>Description</h3>
This operation validates the supplied address, returning canonical form and additional delivery details if successfully validated. For a full discussion of Address Validation usage and a list of error messages, see the <a title="Common Errors" href="http://developer.avalara.com/api-docs/designing-your-integration/errors-and-outages/common-errors#address-validation">error list</a>.
<h3>URI</h3>
Production:
[code]https://avatax.avalara.net/1.0/address/validate[?&lt;request-parameters&gt;][/code]
Development:
[code]https://development.avalara.net/1.0/address/validate[?&lt;request-parameters&gt;][/code]

where:
&lt;request-parameters&gt; are URI query parameters describing the address separated by the ampersand (&amp;) character. Spaces in single parameters should be replaced by the plus (+) character.
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>Line1</td>
<td>Address line 1</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>Line2</td>
<td>Address line 2</td>
<td>String</td>
<td>N</td>
</tr>
<tr>
<td>Line3</td>
<td>Address line 3</td>
<td>String</td>
<td>N</td>
</tr>
<tr>
<td>City</td>
<td>City name</td>
<td>String</td>
<td>Y, when PostalCode is not specified.</td>
</tr>
<tr>
<td>Region</td>
<td>State, province, or region name</td>
<td>String</td>
<td>Y, when PostalCode is not specified.</td>
</tr>
<tr>
<td>Country</td>
<td>Country code</td>
<td>String</td>
<td>N</td>
</tr>
<tr>
<td>PostalCode</td>
<td>Postal or ZIP code</td>
<td>String</td>
<td>Y, when City and Region are not specified</td>
</tr>
</tbody>
</table>
<h3>Supported Request Methods</h3>
GET: Returns a single validated address.
<h3>Required Request Headers</h3>
[code]Authorization Basic &lt;Base64(username:password)&gt;[/code]

where &lt;Base64(username:password)&gt; is the<a href="http://en.wikipedia.org/wiki/Base64"> Base64</a>-encoded credential (username and password, delimited with the colon (:) character, as specified by HTTP <a href="http://en.wikipedia.org/wiki/Basic_access_authentication">basic access authentication</a>)
<h3>Request Body</h3>
(empty)
<h3>Response Status Codes</h3>
<ul>
	<li>200 (OK): request was processed successfully</li>
	<li>401 (Unauthorized): no authentication credentials were included in the request</li>
	<li>500 (Internal Server Error): the request was not processed successfully, and an error message is returned in the body of the response.</li>
</ul>
<h3>Response Headers</h3>
[code]WWW-Authenticate (Only if status code 401 is returned.)
Basic realm= "AvaTax Services"
Content-Type:&lt;media-type&gt;
Content-Length:&lt;media-size&gt;
Server:&lt;server-id&gt;
Date:&lt;HTTP-date&gt;[/code]

Where:

&lt;media-type&gt; represents message format of response. Supported formats are text/json and text/xml. The value of Content-Type will be identical to that supplied in the Content-Type request header, unless a format specifier was provided on the URL.
&lt;media-size&gt; is the length in bytes of the body in the response.
&lt;server-id&gt; is the identifier of the server that generated the response.
&lt;HTTP-date&gt; represents the date and time at which the message was originated in RFC 1036 or RFC 1123 format
<h3>GET Response Body</h3>
The response will contain:
<ul>
	<li>The validated form of the address provided in the request (as an address object), if successful,</li>
	<li>ResultCode in Common Response Format,</li>
	<li>Error messages relevant to failed requests (500 error only).</li>
</ul>
<h3>Address fields</h3>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Line1</td>
<td>Address line 1</td>
<td>String</td>
</tr>
<tr>
<td>Line2</td>
<td>Address line 2</td>
<td>String</td>
</tr>
<tr>
<td>Line3</td>
<td>Address line 3</td>
<td>String</td>
</tr>
<tr>
<td>City</td>
<td>City name</td>
<td>String</td>
</tr>
<tr>
<td>Region</td>
<td>State, province or region name</td>
<td>String</td>
</tr>
<tr>
<td>Country</td>
<td>Country code</td>
<td>ISO 3166-1 (Alpha-2) country code (e.g. “US”)</td>
</tr>
<tr>
<td>AddressType</td>
<td>Address type code</td>
<td>Enumeration {F,G,H,P,R,S} where
F - Firm or company address
G - General Delivery address
H - High-rise or business complex
P - PO Box address
R - Rural route address
S - Street or residential address</td>
</tr>
<tr>
<td>PostalCode</td>
<td>Postal or ZIP code</td>
<td>String</td>
</tr>
<tr>
<td>County</td>
<td>County name</td>
<td>String</td>
</tr>
<tr>
<td>FipsCode</td>
<td>FIPSCode is a unique 10-digit code representing each geographic combination of state, county, and city. The code is made up of the Federal Information Processing Code (FIPS) that uniquely identifies each state, county, and city in the U.S. (US only)</td>
<td>String, where digits represent jurisdiction codes:
1-2 State code
3-5 County code
6-10 City code</td>
</tr>
<tr>
<td>CarrierRoute</td>
<td>CarrierRoute is a four-character string representing a US postal carrier route. The first character of this property, the term, is always alphabetic, and the last three numeric. For example, "R001" or "C027" would be typical carrier routes. The alphabetic letter indicates the type of delivery associated with this address. (US only)</td>
<td>Enumeration {B,C,G,H,R} where
B - PO Box
C - City delivery
G - General delivery
H - Highway contract
R - Rural route</td>
</tr>
<tr>
<td>TaxRegionId</td>
<td>AvaTax tax region identifier</td>
<td>String</td>
</tr>
<tr>
<td>PostNet</td>
<td>POSTNet is a 12-digit barcode containing the ZIP Code, ZIP+4 Code, and the delivery point code, used by the USPS to direct mail. (US only)</td>
<td>String, where digits represent delivery information:
1-5 ZIP code
6-9 Plus4 code
10-11 Delivery point
12 Check digit</td>
</tr>
</tbody>
</table>
<h2>Samples</h2>
<h3>Sample Request (Successful)</h3>
For production accounts:
[code]https://avatax.avalara.net/1.0/address/validate?Line1=435+Ericksen+Ave+NE&amp;City=Bainbridge%20Island&amp;Region=WA&amp;PostalCode=98110[/code]

For development accounts:
[code]https://development.avalara.net/1.0/address/validate?Line1=435+Ericksen+Ave+NE&amp;City=Bainbridge%20Island&amp;Region=WA&amp;PostalCode=98110[/code]

Sample Response Headers (for a successful GET)

[code]HTTP/1.1 200 OK
Date: Thu, 01 Mar 2012 00:21:47 GMT
Content-Length: 311
Server: Microsoft-IIS/7.5
Content-Type: text/json; charset=utf-8[/code]

Sample Response Body (for a successful GET)

[code]{
"Address": {
"Line1": "435 Ericksen Ave NE",
"City": "Bainbridge Island",
"Region": "WA",
"PostalCode": "98110-1896",
"Country": "US",
"County": "Kitsap",
"FipsCode": "5303500000",
"CarrierRoute": "C051",
"PostNet": "981101896999",
"AddressType": "H"}
,
"ResultCode": "Success"}[/code]
<h3>Sample Request (Unsuccessful)</h3>
For production accounts:
[code]https://avatax.avalara.net/1.0/address/validate?Line1=PO+Box+123&amp;City=Bainbridge%20Island&amp;Region=WA&amp;PostalCode=98110[/code]

For development accounts:
[code]https://avatax.avalara.net/1.0/address/validate?Line1=PO+Box+123&amp;City=Bainbridge%20Island&amp;Region=WA&amp;PostalCode=98110[/code]

Sample Response Headers (when an error occurs)

[code]HTTP/1.1 500 Internal Server Error Date: Thu, 01 Mar 2012 00:24:54 GMT
Content-Length: 336
Server: Microsoft-IIS/7.5
Content-Type: text/json; charset=utf-8[/code]

Sample Response Body (when an error occurs)

[code]{
"ResultCode": "Error",
"Messages": [
{
"Summary": "The address number is out of range",
"Details": "The address was found but the street number in the input address was not between the low and high range of the post office database.",
"RefersTo": "Address.Line1",
"Severity": "Error",
"Source": "Avalara.AvaTax.Services.Address"}
]
}[/code]
