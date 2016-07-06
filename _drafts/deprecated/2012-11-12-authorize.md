---
layout: page
title: Authorize
date: 2012-11-12 20:56
author: anya.stettler
comments: true
categories: []
---
<h4>Description</h4>
The Authorize end point is used by a client that wants access Avalara customer's account. The access provided by authorization is determined by the scope permitted - at this point, only CompanyUser access is permitted.  A user interface is presented to the target customer: the request must be made via HTTP and is used from within a web browser client.
<table>
<tbody>
<tr>
<td>HTTP Verb</td>
<td>GET</td>
</tr>
<tr>
<td>URI</td>
<td>/oauth/authorize</td>
</tr>
<tr>
<td>Parameters</td>
<td>redirect_uri, state, client_id, response_type, scope</td>
</tr>
<tr>
<td>Development URL</td>
<td>https://development.avalara.net/oauth/authorize</td>
</tr>
<tr>
<td>Production URL</td>
<td>https://avatax.avalara.net/oauth/authorize</td>
</tr>
</tbody>
</table>
<h4>Parameters</h4>
The following parameters can be used to establish identity and request authorization of an Avalara customer.
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>client_id</td>
<td>The client identifier issued to the client during the registration process.</td>
</tr>
<tr>
<td>redirect_uri</td>
<td>The redirect URI registered for the client specified.</td>
</tr>
<tr>
<td>state</td>
<td>Any state supplied that the sender wants returned in the response regardless of success or error.</td>
</tr>
<tr>
<td>response_type</td>
<td>The value for response type is code.</td>
</tr>
<tr>
<td>scope</td>
<td>The set of permissions that the Authorization Partner is requesting of the Avalara Customer.</td>
</tr>
</tbody>
</table>
<h4>Sample Request</h4>
[code]https://development.avalara.net/oauth/authorize?response_type=code&amp;client_id=deadbeefdeadbeef&amp;scope=CompanyUser&amp;redirect_uri=http://deadbeef.org/oauth/authorizeResponse[/code]
<h4>Responses</h4>
Upon error, if the client cannot be verified, the user is presented with a user interface from Avalara. This occurs if the client_id cannot be found or if the redirect_uri does not match the provided client_id.
Upon successfully processing the request, if the Avalara customer chooses to grant the request from the Authorization Partner, the browser is redirected to the partner's redirect_uri on their registration and is provided with the state and code that can be redeemed for an access token using the Access Token end point.
[code] http://deadbeef.org/oauth/authorizeResponse?code=682b31206e324e77b3e926a75d76c0f8&amp;state= [/code]

Upon successfully processing the request, if the Avalara customer chooses to deny the request from the Authorization Partner, the browser will be redirected to the partner's redirect_uri on their registration and be provided with the state and error.
[code]http://deadbeef.org/oauth/authorizeResponse?error=access_denied&amp;error_description=You+are+now+allowed+to+access+this+resource.&amp;state=[/code]

If the scope requested is not within the set of scopes for which the registration is accepted, an error is returned.
[code]http://deadbeef.org/oauth/authorizeResponse?error=invalid_scope&amp;error_description=The+requested+scope+is+not+supported.&amp;state=[/code]
