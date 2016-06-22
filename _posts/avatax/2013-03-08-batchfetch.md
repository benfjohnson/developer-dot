---
layout: page
title: BatchFetch
date: 2013-03-08 23:37
author: anya.stettler
comments: true
categories: []
---
<h2>Request</h2>
BatchFetch uses a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> object to return details about a specified batch or group of batches. Filters must be populated (as the service will otherwise return all accessible records of the specified type).
<h2>Response</h2>
The response object is returned in Common Response Format, with an array of Batch objects that meet the criteria of the FetchRequest.
<h3>Batch</h3>
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
<td>AccountId</td>
<td>Account number of the target account (e.g. 1100012345).</td>
<td>Integer</td>
</tr>
<tr>
<td>BatchId</td>
<td>A unique Id assigned by the Avalara system to the given batch.</td>
<td>Integer</td>
</tr>
<tr>
<td>BatchStatusId</td>
<td>This value is used to display the batch status on when viewed on the Admin Console. Possible values are Waiting, Processing, Completed, Errors. Result/Error files are only available for batches with a status of Completed or Errors.</td>
<td>String</td>
</tr>
<tr>
<td>BatchTypeId</td>
<td>An indicator of the type of batch. Permitted values are:
<ul>
	<li>TransactionImport</li>
	<li>TaxRuleImport</li>
	<li>ExemptCertImport</li>
	<li>CompanyLocationImport</li>
	<li>ItemImport</li>
</ul>
</td>
<td>String</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The unique identifier of the target company. Note that this is different from the CompanyCode. For information on finding your CompanyId, look <a href="http://developer.avalara.com/api-docs/soap/finding-your-companyid">here.</a></td>
<td>Integer</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>Date the batch was created in the AvaTax system.</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>UserId of the user who created the Batch in the system.</td>
<td>Integer</td>
</tr>
<tr>
<td>CompletedDate</td>
<td>Date the batch process was completed.</td>
<td>DateTime</td>
</tr>
<tr>
<td>Files</td>
<td>An array of files associated with the batch. There may be up to three files: an input file, a results file (of those records that were successfully processed), and an error file (of those records which were not successfully processed).</td>
<td>Array of BatchFile</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Date the batch was last modified in the database.</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>UserId of the user who last modified the batch.</td>
<td>Integer</td>
</tr>
<tr>
<td>Name</td>
<td>Name of the batch - this will be the same as the Name of the input file.</td>
<td>String</td>
</tr>
<tr>
<td>Options</td>
<td>For internal use only.</td>
<td>String</td>
</tr>
<tr>
<td>RecordCount</td>
<td>For internal use only.</td>
<td>Integer</td>
</tr>
<tr>
<td>CurrentRecord</td>
<td>For internal use only.</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>BatchFile</h3>
The BatchFile object is used both as an input parameter to save batches, as well as an output parameter to retrieve batch content. Up to three batchFiles may be associated with a given completed batch: an input file, an error file, and a results file. For batches with no errors, no error file is generated. Similarly, for batches with no successfully processed records, no results file is generated.
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
<td>BatchFileId</td>
<td>A system-assigned unique identifier of the file.</td>
<td>Integer</td>
</tr>
<tr>
<td>BatchId</td>
<td>Unique identifier for the uploaded batch, matches the BatchId specified in the containing Batch object.</td>
<td>Integer</td>
</tr>
<tr>
<td>Content</td>
<td>File content, as a byte array. Note that this is not returned in BatchFetch, and must be retrieved with BatchFileFetch.</td>
<td>base64Binary</td>
</tr>
<tr>
<td>ContentType</td>
<td>MIME type of file contained in Content.</td>
<td>String</td>
</tr>
<tr>
<td>Ext</td>
<td>Extension of the file.</td>
<td>String</td>
</tr>
<tr>
<td>FilePath</td>
<td>Applicable only for input, is not returned.</td>
<td>String</td>
</tr>
<tr>
<td>Name</td>
<td>Name of the file.</td>
<td>String</td>
</tr>
<tr>
<td>Size</td>
<td>Size of byte array in Content.</td>
<td>Integer</td>
</tr>
<tr>
<td>ErrorCount</td>
<td>Number of records contained in the file (for error files only).</td>
<td>Integer</td>
</tr>
</tbody>
</table>

<hr />

<h2>Related Community Discussions</h2>
<div id="gsfn_list_widget">
<div id="gsfn_content">Loading...</div>
</div>
<script src="https://getsatisfaction.com/avalara/widgets/javascripts/f585970/widgets.js" type="text/javascript"></script><script src="https://getsatisfaction.com/avalara/topics.widget?callback=gsfnTopicsCallback&amp;length=240&amp;limit=5&amp;sort=recently_active&amp;user_defined_code=batch" type="text/javascript"></script>
<div id="getsat-widget-8157"></div>
<script src="https://loader.engage.gsfn.us/loader.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
if (typeof GSFN !== "undefined") { GSFN.loadWidget(8157,{"containerId":"getsat-widget-8157"}); }
// ]]></script>
