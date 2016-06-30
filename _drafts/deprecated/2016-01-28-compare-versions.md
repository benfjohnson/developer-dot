---
layout: page
title: Compare Versions
date: 2016-01-28 13:08
author: jeremy.buller
comments: true
categories: []
---
[fullwidth background_color="" background_image="" background_parallax="none" enable_mobile="no" parallax_speed="0.3" background_repeat="no-repeat" background_position="left top" video_url="" video_aspect_ratio="16:9" video_webm="" video_mp4="" video_ogv="" video_preview_image="" overlay_color="" overlay_opacity="0.5" video_mute="yes" video_loop="yes" fade="no" border_size="0px" border_color="" border_style="" padding_top="20" padding_bottom="20" padding_left="0" padding_right="0" hundred_percent="no" equal_height_columns="no" hide_on_mobile="no" menu_anchor="" class="" id=""][fusion_text]
<h3 id="determine-your-version">How to Determine Your Version</h3>
You should mention the release you’re working on when seeking help or support. Avalara uses the “16.x.x.x” or “15.x.x.x” convention for AvaTax service versions. If you're unsure if you have AvaTax 15 or AvaTax 16, you can check your login page:

[caption id="attachment_10418" align="alignleft" width="300"]<a href="https://developer.avalara.com/wp-content/uploads/2016/01/Screen-Shot-2016-03-21-at-11.51.04-AM.png"><img class="wp-image-10418 size-medium" src="https://developer.avalara.com/wp-content/uploads/2016/01/Screen-Shot-2016-03-21-at-11.51.04-AM-300x207.png" alt="Log in to the AvaTax 15 Admin Console at https://admin-avatax.avalara.net/login.aspx" width="300" height="207" /></a> Log in to the AvaTax 15 Admin Console at <a href="https://admin-avatax.avalara.net/login.aspx">https://admin-avatax.avalara.net/login.aspx</a>[/caption]

[caption id="attachment_10419" align="alignleft" width="300"]<a href="https://developer.avalara.com/wp-content/uploads/2016/01/Screen-Shot-2016-03-21-at-11.51.17-AM.png"><img class="size-medium wp-image-10419" src="https://developer.avalara.com/wp-content/uploads/2016/01/Screen-Shot-2016-03-21-at-11.51.17-AM-300x208.png" alt="Log in to the AvaTax 15 Customer Portal at https://portal.avalara.com/login" width="300" height="208" /></a> Log in to the AvaTax 16 Customer Portal at <a href="https://portal.avalara.com/login">https://portal.avalara.com/login</a>[/caption]

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

AvaTax 15 uses a single API version, but AvaTax 16 explicitly versions the API in the URL (e.g. <code>POST https://tax.api.avalara.com/v2/calculations</code>) .
<h3 id="comparison">AvaTax 15 versus AvaTax 16 – Full Feature Comparison Chart</h3>
<table border="1">
<tbody>
<tr>
<td><strong> </strong></td>
<td><strong>Feature</strong></td>
<td><strong>AvaTax 15 </strong></td>
<td><strong>AvaTax 16</strong></td>
</tr>
<tr>
<td rowspan="7"><strong>Calculation</strong></td>
<td>Rates and Boundaries</td>
<td>US, CA, EU, Brazil, India, all other global regions</td>
<td>US, CA, Non-VAT EU, all flat-rate global regions</td>
</tr>
<tr>
<td>Address Validation</td>
<td>US, CA</td>
<td>US</td>
</tr>
<tr>
<td>Tax Types</td>
<td>Sales, Seller's Use, Consumer Use, Excise</td>
<td>Sales, Seller's Use, Consumer Use, Lodging Tax, Bottle Deposit Tax</td>
</tr>
<tr>
<td>Product-based taxability</td>
<td>Avalara-specific category, UPC</td>
<td>Avalara-specific category</td>
</tr>
<tr>
<td>Product Discounts</td>
<td>Included in line amounts or distributed from document-level discount</td>
<td>Included in line amounts</td>
</tr>
<tr>
<td>Tax Rules</td>
<td>Avalara-maintained jurisdiction and category content, creation of custom category taxability rules</td>
<td>Avalara-maintained jurisdiction and category content</td>
</tr>
<tr>
<td>Tax Jurisdiction Customization</td>
<td>Avalara-maintained jurisdiction boundaries, creation of custom jurisdiction boundaries</td>
<td>Avalara-maintained jurisdiction boundaries</td>
</tr>
<tr>
<td rowspan="4"><strong>Filing</strong></td>
<td>Filing services</td>
<td>US, CA, EU</td>
<td>US</td>
</tr>
<tr>
<td>Filing setup</td>
<td>Manual enrollment with Avalara</td>
<td>Self-service tax filing enrollment</td>
</tr>
<tr>
<td>Currency Support</td>
<td>Recorded at transaction level for reporting</td>
<td>Recorded at transaction level for reporting</td>
</tr>
<tr>
<td>SST</td>
<td>Approved</td>
<td>Pending</td>
</tr>
<tr>
<td><strong>Exemption Certificates</strong></td>
<td>Persistent certificate records</td>
<td>CertCapture, ECMS</td>
<td>CertCapture, ECMS</td>
</tr>
<tr>
<td rowspan="2"><strong>Account Management</strong></td>
<td>User Account Access</td>
<td>User has access to one account, role is managed per account.</td>
<td>User has access to one or many accounts, role is maintained per account.</td>
</tr>
<tr>
<td>User Access Roles</td>
<td>AccountAdmin, AccountUser, Company Admin, CompanyUser</td>
<td>AccountAdmin, AccountUser</td>
</tr>
</tbody>
</table>
This feature comparison was last updated 2/1/2016

[/fusion_text][/fullwidth]
