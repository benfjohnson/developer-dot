---
layout: page
title: BatchSvc
date: 2013-03-07 00:29
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: documentation
---
<h2>Introduction</h2>
Avalara offers an alternate API for process batches of transactions with a single web service call. This API uses the same TaxSvc logic on the back end for tax calculation, but provides functions similar to the Upload feature available through the Admin Console. This means that you can process transaction batches, but also use it to import batches of tax rules, exemption certificate records, and locations.

The full WSDL can be found at:
Production: <a href="https://avatax.avalara.net/Batch/batchsvc.wsdl">https://avatax.avalara.net/Batch/batchsvc.wsdl</a>
Development: <a href="https://development.avalara.net/Batch/batchsvc.wsdl">https://development.avalara.net/Batch/batchsvc.wsdl</a>

Proxy DLLs are also maintained by AvaTax for this functionality, and can be downloaded from our <a title="API Sample Code" href="/resources/api-sample-code">sample code page</a>.

Note that BatchSvc has some quirks to it: you will need to authenticate with an Account Admin level username/password combination, an account number/license key combination will not be sufficient. Also, you will need to know your CompanyId (which is not the same as the CompanyCode used in the standard TaxSvc functionality). To find your CompanyId, take a look at <a title="Finding Your CompanyID" href="/api-docs/soap/finding-your-companyid">this article</a>.
<h2>Resources</h2>
There are three primary resources in the BatchSvc: BatchSave, BatchFetch, and BatchFileFetch. Other functions are referenced in the WSDL, but we do not recommend using them in a standard use case.
<h3><a href="/api-docs/soap/batchsvc/batchsave">BatchSave</a></h3>
This function uses a BatchSaveRequest to load and save a batch into the AvaTax system. It will automatically process the loaded batch. The file loaded needs to be in a .csv, .xls, or .xlsx format, with a header row, and data consistent with the appropriate import format. This import format is the same as the format required for imports through the Admin Console. Templates and information about these formats is available through our <a href="https://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/090_Tools/090_Import_Data/9G0">Admin Console documentation</a>.
<h3><a href="/api-docs/soap/batchsvc/batchfetch">BatchFetch</a></h3>
After loading a batch into the system with BatchSave, you can retrieve the information (and processing status) of that batch with BatchFetch. You will need to call BatchFetch before calling BatchFileFetch.
<h3><a href="/api-docs/soap/batchsvc/batchfilefetch">BatchFileFetch</a></h3>
This function allows you to download input batch files, as well as the result and error files associated with them. Any given batch can have up to three files associated with it after being processed: the input file, the result file (which consists of all records from the input file that were processed successfully), and the error file (which lists all records that were not processed, with an error message). To call BatchFileFetch, you will need the BatchFileId, which can be identified by calling BatchFetch.

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
