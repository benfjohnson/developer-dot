---
layout: page
title: Access Token
date: 2012-11-12 21:27
author: anya.stettler
comments: true
categories: []
---
The Access Token end point is used for two different operations: the conversion of an authorization code into an access token, and the issuance of a new access token using refresh token (issued with the previously generated access token). The response to a successful request is the same for both the primary and secondary operations on this end point.
<table>
<tbody>
<tr>
<td>HTTP Verb</td>
<td>POST</td>
</tr>
<tr>
<td>URI</td>
<td>/oauth/access_token</td>
</tr>
<tr>
<td>Parameters</td>
<td>redirect_uri, code, grant_type, client_id, client_secret, refresh_token</td>
</tr>
<tr>
<td>Development URL</td>
<td>https://development.avalara.net/oauth/access_token</td>
</tr>
<tr>
<td>Production URL</td>
<td>https://avatax.avalara.net/oauth/access_token</td>
</tr>
</tbody>
</table>
<h4>Parameters</h4>
The following parameters can be used to establish identity and generate an access token.
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>client_secret</td>
<td>The client secret issued to the client during the registration process.</td>
</tr>
<tr>
<td>redirect_uri</td>
<td>The redirect URI registered for the client specified.</td>
</tr>
<tr>
<td>grant_type</td>
<td>One of the following values: authorization_code, refresh_token. That specifies whether the code or refresh_token parameter can be expected.</td>
</tr>
<tr>
<td>code</td>
<td>The code received in response to a successful authorize end point request.</td>
</tr>
<tr>
<td>refresh_token</td>
<td>A refresh_token issued with the last active access_token that has since expired.</td>
</tr>
</tbody>
</table>
<h4>Sample Request</h4>
The following is a sample example of using a fictitious client_id, client_secret and client redirect_uri.
Sample using an authorization code:
[code]client_id=deadbeefdeadbeef&amp;client_secret=deadbeefdeadbeef&amp;grant_type=authorization_code&amp;code=a136c4debbc84be7911203cbbef8b629&amp;redirect_uri=http://deadbeef.org/oauth/authorizeResponse[/code]
Sample using a refresh token:
[code]client_id=deadbeefdeadbeef&amp;client_secret=deadbeefdeadbeef&amp;grant_type=refresh_token&amp;refresh_token=a136c4debbc84be7911203cbbef8b629&amp;redirect_uri=http://deadbeef.org/oauth/authorizeResponse[/code]
<h4>Sample Response</h4>
A successful response is 200 OK and the response body has the following elements:
[code]{"token_type":"avalara",
"access_token":"a136c4debbc84be7911203cbbef8b629",
"scope":"CompanyUser",
"refresh_token":"71b5389c06b54f91b40135f8e0f39dd6",
"expires_in":"9999-12-31T23:59:59.9970000", }[/code]

Possible errors and causes:
<table style="table-layout: fixed; width: 100%">
<thead>
<tr>
<th>Scenario</th>
<th>Error</th>
</tr>
</thead>
<tbody>
<tr>
<td>The client_id is not supplied.</td>
<td style="word-wrap: break-word">error=invalid_request&amp;error_description=Authorize+request+with+invalid+client_id%3a++&amp;state=</td>
</tr>
<tr>
<td>The  client_secret is not consistent with the client_id.</td>
<td style="word-wrap: break-word"> error=invalid_request&amp;error_description=Authorize+request+with+invalid+client_secret%3a++&amp;state=</td>
</tr>
<tr>
<td>The  grant_type is not supplied or not recognized.</td>
<td style="word-wrap: break-word"> error=unsupported_grant_type&amp;error_description=This+access+grant+type+is+not+supported+by+this+server.&amp;state=</td>
</tr>
<tr>
<td>The  grant_type is supplied but the associated code parameter is not provided.</td>
<td style="word-wrap: break-word"> error=invalid_grant&amp;error_description=Value+cannot+be+empty.%0d%0aParameter+name%3a+accessGrantId&amp;state=</td>
</tr>
<tr>
<td>The grant_type is supplied but the associated refresh_token parameter is not provided.</td>
<td style="word-wrap: break-word"> error=invalid_token&amp;error_description=value+argument+cannot+be+empty.%0d%0aParameter+name%3a+RefreshToken&amp;state=</td>
</tr>
<tr>
<td>The refresh_token supplied is not valid.</td>
<td style="word-wrap: break-word"> error=invalid_token&amp;error_description=access_denied&amp;state=</td>
</tr>
<tr>
<td>The code supplied is not valid.</td>
<td style="word-wrap: break-word"> error=invalid_grant&amp;error_description=access_denied&amp;state=</td>
</tr>
<tr>
<td>The refresh_token supplied has already been utilized or revoked.</td>
<td style="word-wrap: break-word"> error=invalid_token&amp;error_description=token+revoked&amp;state=</td>
</tr>
</tbody>
</table>
