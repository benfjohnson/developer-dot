---
layout: page
title: Shared Formats and Methods
date: 2013-03-31 20:29
author: anya.stettler
comments: true
categories: []
product: avaTax
doctype: documentation
---
There are a few shared formats and methods that appear in all of the SOAP services. For the sake of simplicity, they are assembled here, and linked in the service-specific documentation.
<h3>Ping</h3>
The ping function allows the user to test connectivity to the AvaTax service, verify the supplied credentials, and return the service version used. The response is in common response format, with the addition of version number.
<h4>Request</h4>
The request for this ping is an empty string.
<h4>Response</h4>
The response for this ping is in common response format, with these additional fields:
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Version</td>
<td>The service version contacted by the ping.</td>
<td>String</td>
</tr>
</tbody>
</table>
&nbsp;
<h4>Sample</h4>
Request (in c#):
<pre class="prettyprint lang-cs">PingResult res = TaxSvc.Ping("");
</pre>
Response:
<pre class="prettyprint lang-text">PingResult.ResultCode: Success
PingResult.Version: 13.3.0.0
</pre>
<h3>IsAuthorized</h3>
The isAuthorized function allows the user to specify a number of methods or services, and see if they are permitted for the credential set used to make the call.
<h4>Request</h4>
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>Operations</td>
<td>The operations for which authorization should be verified.</td>
<td>String</td>
<td>No, but if no operations are specified, none will be returned</td>
</tr>
</tbody>
</table>
<h4>Response</h4>
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Operations</td>
<td>Any operations specified in the request that are authorized.</td>
<td>String</td>
</tr>
<tr>
<td>Expires</td>
<td>The expiration date of the account.</td>
<td>DateTime</td>
</tr>
</tbody>
</table>
<h4>Sample</h4>
Request (in c#):
<pre class="prettyprint lang-cs">IsAuthorizedResult res = IsAuthorized("GetTax,PostTax");
</pre>
Response:
<pre class="prettyprint lang-text">IsAuthorizedResult.ResultCode: Success
IsAuthorizedResult.Operations: "GetTax,PostTax"
IsAuthorizedResult.Expires: 4/27/2013 12:00:00 AM
</pre>
<h3><a name="CommonResponseFormat"></a>Common Response Format</h3>
The common response format is returned for all requests, and specified generic information about the processed request. Depending on the operation, additional values are usually returned in addition to these generic ones.
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>ResultCode</td>
<td>An indication of the success of the request. Possible SeverityLevel values are: Success, Error, Warning, Exception.</td>
<td>SeverityLevel</td>
</tr>
<tr>
<td>Messages</td>
<td>If ResultCode is Success, Messages is null. Otherwise, it describes any warnings, errors, or exceptions encountered while processing the request.</td>
<td>Message[]</td>
</tr>
<tr>
<td>TransactionId</td>
<td>The unique transaction ID assigned by AvaTax to this request/response set. This value need only be retained for troubleshooting.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h4>Message</h4>
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td>The name of the error or warning that occurred.</td>
<td>String</td>
</tr>
<tr>
<td>Summary</td>
<td>The summary of the cause of the error or warning.</td>
<td>String</td>
</tr>
<tr>
<td>Details</td>
<td>The detail of the error or warning, if applicable.</td>
<td>String</td>
</tr>
<tr>
<td>Severity</td>
<td>The severity level of the issue described.</td>
<td>SeverityLevel</td>
</tr>
<tr>
<td>RefersTo</td>
<td>The data element that caused the error or warning.</td>
<td>String</td>
</tr>
<tr>
<td>Source</td>
<td>The service that returned the error or warning.</td>
<td>String</td>
</tr>
<tr>
<td>HelpLink</td>
<td>Currently not used - all values return a generic value.</td>
<td>String</td>
</tr>
</tbody>
</table>
<h3>FetchRequest</h3>
Many operations (particularly those in AccountSvc and BatchSvc) use a generic FetchRequest to pull a set of relevant objects. When using a FetchRequest, it is highly recommended that Filters be populated to limit the number of returned records. There is a service-level upper limit of 100,000 records returned for any FetchRequest.
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Required</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fields</td>
<td>Allows the user to specify which properties of the specified object are desired. If not populated, all fields at the root level will be returned. Default and optional fields are documented at the operation level.</td>
<td>N</td>
<td>String</td>
</tr>
<tr>
<td>Filters</td>
<td>Allows the user to specify filter criteria for the result set. e.g. to return all batches with BatchId=12345, the filter would be "BatchId=12345".</td>
<td>N, but highly recommended</td>
<td>String</td>
</tr>
<tr>
<td>Sort</td>
<td>Returns the records sorted by the specified field. Especially useful when used with RecordCount.</td>
<td>N</td>
<td>String</td>
</tr>
<tr>
<td>MaxCount</td>
<td>Maximum number of records to be returned</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>PageIndex</td>
<td>PageIndex and PageSize (along with Sort) allow for pagination of records. PageIndex will determine the page number returned, as determined by Sort and PageSize from the result set.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>PageSize</td>
<td>See PageIndex.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>RecordCount</td>
<td>Specifies the maximum number of records to be returned. Note that there is a service-level RecordCount limit of 100,000.</td>
<td>N</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>FilterRequest</h3>
Many operations (especially in AccountSvc) use a generic FilterRequest format for requests, although the request object itself may have a different name.
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Required</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>Filters</td>
<td>Allows the user to specify filter criteria for the result set. e.g. to affect all batches with BatchId=12345, the filter would be "BatchId=12345".</td>
<td>N, but highly recommended</td>
<td>String</td>
</tr>
<tr>
<td>MaxCount</td>
<td>Maximum number of records to be modified.</td>
<td>N</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>FilterResult</h3>
An operation that uses a FilterRequest often returns a FilterResult, which is a common response with the added value of Count.
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>RecordCount</td>
<td>The number of records found that fit the filter criteria specified in the request.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
