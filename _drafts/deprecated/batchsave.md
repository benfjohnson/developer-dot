---
layout: page
title: BatchSave
date: 2013-03-08 22:44
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: api-reference
---
This function uses a Batch object to load and save a batch into the AvaTax system. It will automatically process the loaded batch. The file loaded needs to be in a .csv, .xls, or .xlsx format, with a header row, and data consistent with the appropriate import format. This import format is the same as the format required for imports through the Admin Console. Templates and information about these formats is available through our <a href="https://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/055_Add_or_Import_Transactions">Admin Console documentation.</a>
<h2>Request</h2>
<h3>Batch</h3>
The BatchSave request input is a single Batch object. Because this object is also used as the response to BatchFetch, many properties are optional for BatchSave.
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
<td>AccountId</td>
<td>Account number of the target account (e.g. 1100012345).</td>
<td>Y</td>
<td>Integer</td>
</tr>
<tr>
<td>BatchId</td>
<td>The BatchId uniquely identifies the batch in the Avalara system. A unique BatchId will be assigned upon saving the batch, 0 is the only accepted value. Output only.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>BatchStatusId</td>
<td>This value is used to display the batch status on when viewed on the Admin Console, but has no effect on the processing of a new batch.</td>
<td>N</td>
<td>String</td>
</tr>
<tr>
<td>BatchTypeId</td>
<td>An indicator of the type of batch being saved. Permitted values are:
<ul>
	<li>TransactionImport</li>
	<li>TaxRuleImport</li>
	<li>ExemptCertImport</li>
	<li>CompanyLocationImport</li>
	<li>ItemImport</li>
</ul>
</td>
<td>Y</td>
<td>String</td>
</tr>
<tr>
<td>CompanyId</td>
<td>The unique identifier of the target company. Note that this is different from the CompanyCode. For information on finding your CompanyId, look <a href="http://developer.avalara.com/api-docs/soap/finding-your-companyid">here.</a></td>
<td>Y</td>
<td>Integer</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>Date the batch was created in the AvaTax system. Output only.</td>
<td>N</td>
<td>DateTime</td>
</tr>
<tr>
<td>CreatedUserId</td>
<td>UserId of the user who created the Batch in the system. Output only.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>CompletedDate</td>
<td>Date the batch process was completed. Output only.</td>
<td>N</td>
<td>DateTime</td>
</tr>
<tr>
<td>Files</td>
<td>The file that is uploaded in the batch, as a single element array of type BatchFile. Note that although this is an array, multiple batchFile objects cannot be loaded with a single BatchSave.</td>
<td>Y</td>
<td>Array of BatchFile</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Date the batch was last modified in the database. Output only.</td>
<td>N</td>
<td>DateTime</td>
</tr>
<tr>
<td>ModifiedUserId</td>
<td>UserId of the user who last modified the batch. Output only.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>Name</td>
<td>Name of the file to be imported - this should match the FileName specified in Files.</td>
<td>Y</td>
<td>String</td>
</tr>
<tr>
<td>Options</td>
<td>For internal use only.</td>
<td>N</td>
<td>String</td>
</tr>
<tr>
<td>RecordCount</td>
<td>For internal use only.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>CurrentRecord</td>
<td>For internal use only.</td>
<td>N</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h3>BatchFile</h3>
The BatchFile object is used both as an input parameter to save batches, as well as an output parameter to retrieve batch content. As such, many properties are not required upon save.
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
<td>BatchFileId</td>
<td>Upon saving a batch file, the system assigns that file a unique BatchFileId. This field is output only.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>BatchId</td>
<td>Unique identifier for the uploaded batch, matched the BatchId specified in the containing Batch object, output only.</td>
<td>N</td>
<td>Integer</td>
</tr>
<tr>
<td>Content</td>
<td>File content to be processed, as a byte array.</td>
<td>Y</td>
<td>base64Binary</td>
</tr>
<tr>
<td>ContentType</td>
<td>MIME type of file contained in Content.</td>
<td>Y</td>
<td>String</td>
</tr>
<tr>
<td>Ext</td>
<td>File extension of the batch import data.</td>
<td>Y</td>
<td>String</td>
</tr>
<tr>
<td>FilePath</td>
<td>File path of the batch file being saved</td>
<td>Y</td>
<td>String</td>
</tr>
<tr>
<td>Name</td>
<td>Name of the file being saved, should match the name specified in the parent Batch object.</td>
<td>Yes</td>
<td>String</td>
</tr>
<tr>
<td>Size</td>
<td>Size of byte array in Content.</td>
<td>Y</td>
<td>Integer</td>
</tr>
<tr>
<td>ErrorCount</td>
<td>Number of errors encountered in processing the file, output for error files only.</td>
<td>N</td>
<td>Integer</td>
</tr>
</tbody>
</table>
<h2>Response</h2>
The BatchSave returns a BatchSaveResponse, which contains a BatchSaveResult, and complies with our common response format.
<h3>BatchSaveResult</h3>
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
<td>BatchId</td>
<td>Unique identifier of the batch assigned by AvaTax. This will be important to record so the result files may be retrieved once the batch is processed.</td>
<td>Integer</td>
</tr>
<tr>
<td>EstimatedCompletion</td>
<td>Estimated time to complete the processing of the batch.</td>
<td>DateTime</td>
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
