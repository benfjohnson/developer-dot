---
layout: post
title: Troubleshooting Connectivity Problems
description: Ways to diagnose problems with connecting to AvaTax
date: 2017-05-15 12:00
author: Charlie Morrisette
comments: true
categories: [avatax, howto, troubleshooting]
product: blog
doctype: blog
disqus: 1
---

Getting started with any new piece of software can take a bit of time.  AvaTax is in use today by tens of thousands of customers processing billions of transactions per year – but they all had to start first by connecting to the software. For today’s article, let’s look at the common challenges you can face when first getting started.

<h2>Can I contact the AvaTax API servers?</h2>

First, let’s get the correct URL for AvaTax and verify that we can contact it.  AvaTax has four different servers available to choose from:

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Environment</th>
				<th>URL</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Production - REST</td>
				<td>https://rest.avatax.com</td>
				<td>For live customer data using the latest REST API </td>
			</tr>
			<tr>
				<td>Production - SOAP</td>
				<td>https://avatax.avalara.net</td>
				<td>For a live customer using our mainstream SOAP interface</td>
			</tr>
			<tr>
				<td>Sandbox - REST</td>
				<td>https://sandbox-rest.avatax.com</td>
				<td>For testing and development purposes; uses our latest REST API</td>
			</tr>
			<tr>
				<td>Sandbox - SOAP</td>
				<td>https://development.avalara.net</td>
				<td>For testing and development purposes; uses our mainstream SOAP API</td>
		</tr>
		</tbody>
	</table>  
</div>

If you’re just getting started and you’re not sure which to choose, pick Sandbox – REST.  You can get a [free trial account](https://developer.avalara.com/avatax/signup/) right now and make use of the REST interface immediately.

Now that you’ve selected the URL for your AvaTax API server, can you view that page in your web browser?  Here’s what you should see:

<h4>REST</h4>
<img src="/public/images/blog/rest_site_resize.png">

<h4>SOAP</h4>
<img src="/public/images/blog/soap_site_resize.png">

If you can’t visit these sites, try these steps:

<ul class="normal">
    <li>Visit the URL in your web browser on your desktop computer</li>
    <li>Visit the URL from your mobile phone</li>
    <li>Visit the URL in a web browser on a server in your data center</li>
</ul>

If any of these three steps fail, you may have a problem with your Internet service provider, your Ethernet connection, or your firewall.  Here’s how to proceed:

<ul class="normal">
    <li>If you can see the site from your mobile phone, but you can’t see it from your office, chances are you have a firewall problem.  You’ll need to contact your IT vendor or your firewall software provider for help; please provide them with the URL of AvaTax and they should be able to unblock the URL.</li>
    <li>If you can sometimes see the site and other times get an error message, it’s likely there is a problem in your network or Internet connection.</li>
    <li>Check to make sure your Ethernet switches and servers are all set to the same auto negotiation settings.</li>
    <li>Check your network router for dropped or bad packets. Bad packets or Ethernet frame errors may indicate old wires that need to be replaced.</li>
    <li>If your Internet connection splits between two separate service providers, check to see if both are up and functioning normally.  Try disabling one at a time to check for problems or unreliable connections.</li>
    <li>Note that there’s no need to test your connection using ping or traceroute.  Due to the volume of connections Avalara receives, we don’t respond to ping requests.</li>
</ul>

<h2>Troubleshooting Code Problems</h2>

If you can visit the AvaTax API website in your web browser, but your code still doesn’t connect, let’s try checking a few common problems.

<ul class="normal">
    <li>Does your company mandate a Proxy server for communication?  If so, you may need to write custom code to support the proxy server.</li>
    <li>Check to see if you are using a Sandbox account with a Production URL, or vice versa.</li>
    <li>Check for an AvaTax SDK available for your favorite programming language - it might save you some time!</li>
    <li>Check whether your application is being blocked by a software firewall.  Some Linux and Windows servers block all attempts to contact remote servers unless specifically permitted.</li>
</ul>

<h2>Troubleshooting SSL Certificates</h2>

If you are running into certificate issues, you may find the steps below to help resolve the issue: 

<ul class="normal">
    <li>The <a href="https://development.avalara.net">https://development.avalara.net</a> (Sandbox) and <a href="https://avatax.avalara.net">https://avatax.avalara.net</a> (Production) endpoints support only TLS 1.0, 1.1, and 1.2.  If you are attempting to access these from a system which does not support TLS, you will need to use <a href="https://development-ssl.avalara.net">https://development-ssl.avalara.net</a> and <a href="https://avatax-ssl.avalara.net">https://avatax-ssl.avalara.net</a> for Sandbox and Production access as these endpoints are configured to support only SSLv3.</li>
    <li>The endpoints above (standard and SSLv3) utilize a full SHA256 certificate chain, and it is possible that you do not have those certificates installed as a trusted root and intermediate.  To get the full certificate chain, you will need to download the ZIP file containing the individual certificates located <a href="https://help.avalara.com/@api/deki/files/20147/SHA256_Symantec-Signed_Bundle.zip?revision=1">here</a> and assembled them into a single file in the order of: certificate, intermediate, root.  The resulting file can be imported.</li>
    <li>If you are attempting to access these endpoints from a system that does not support SHA256 certificates, you will need to use <a href="https://development-sha1.avalara.net">https://development-sha1.avalara.net</a> and <a href="https://avatax-sha1.avalara.net">https://avatax-sha1.avalara.net</a> for Sandbox and Production access as these endpoints are configured with SHA1 certificates.  Note that these endpoints use an Avalara-signed certificate as SHA1 is deprecated and no longer issued.  To get the full certificate chain, you will need to download the ZIP file containing the individual certificates located <a href="https://help.avalara.com/@api/deki/files/20148/SHA1_Avalara-Signed_Bundle.zip?revision=1">here</a> and assembled them into a single file in the order of: certificate, intermediate, root.  The resulting file can be imported.</li>
</ul>

The good news is that once you’re connected to AvaTax, you have all the privileges of using the world’s best tax calculation service, and the rock solid reliability you’ve come to expect from Avalara.

-- Charlie Morrisette, Program Manager, Connector Development



