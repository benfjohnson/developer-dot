---
layout: page
title: BatchFileFetch
date: 2013-03-08 23:40
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: api-reference
---
<h2>Request</h2>
BatchFileFetch uses a generic <a title="Shared Formats and Methods" href="/api-docs/soap/shared-formats-and-methods">FetchRequest</a> object to return details about a specified batch file or group of batch files. Filters must be populated (as the service will otherwise return all accessible records of the specified type).
<h2>Response</h2>
The response object is returned in Common Response Format, with an array of BatchFile objects that meet the criteria of the FetchRequest.
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
