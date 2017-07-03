---
layout: page
title: Proxy Server Settings
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Configuring Proxy Server Settings</h2>
Our web service uses the standard SSL (secure socket layer) on port 443 with the addresses:
<ul class="normal">
	<li>https://development.avalara.net for development, and</li>
	<li>https://avatax.avalara.net for production</li>
</ul>
As “In and Out” SOAP traffic during API calls is handled during the API call, the AvaTax web service does not contact the client server at any time. Therefore, all you need to do is add one or both of the URLs to your proxy server configuration to allow outgoing calls.
<h3>In Focus:</h3>
The way that client applications connect to Avalara’s services is through our published URL:
https://avatax.avalara.net/
This URL is translated into an IP address by DNS (Domain Name System) behind the scenes. It is critical that all Avalara clients use this published URL instead of the corresponding IP address when connecting to the Avalara service. The reason is Avalara may change the IP address associated with the URL at any time without notice as part of our practice of load-balancing our services across multiple data centers and/or across multiple ISPs.
Therefore, to maintain uninterrupted access to the AvaTax web service, the client must implement “best practices” around DNS access. Otherwise, transactions destined for an outdated IP address (from a localhosts file, for example) will fail and are not protected by Avalara’s SLA (service level agreement).
Client adapters must respect the Time To Live (TTL) setting associated with the DNS record (60 seconds). Any adapter, environment variables, or configurations that “cache” the IP address longer than the TTL interval are considered to not be following best practices for accessing Internet-based SaaS products.
<h3>What this means to Java adapters:</h3>
The default Java behavior is to cache DNS lookups indefinitely, which does not follow best practices for Internet hosts. There are two properties that can be used to override the default behavior. These two Java security properties control the TTL values used for positive and negative host name resolution caching. They are:
<ol>
	<li>networkaddress.cache.ttl
This property indicates the caching policy for successful name lookups from the domain name service. The value is specified as an integer to indicate the number of seconds to cache the successful lookup. The default value of this property is -1, which means the successful DNS lookup value will be cached forever. If the value is set to 0, it means it will not cache successful DNS lookups up at all. Any other positive value indicates that successful DNS lookups will be cached for that many seconds. This value must be set to 60.</li>
	<li>networkaddress.cache.negative.ttl
This property indicates the caching policy for unsuccessful name lookups from the domain name service. The value is specified as an integer to indicate the number of seconds to cache the unsuccessful lookup. The default value of this property is 10, which means that unsuccessful DNS lookup values will be cached for 10 seconds. If the value is set to 0, it means that it will not cache successful DNS lookups up at all. Any other positive value indicates that unsuccessful DNS lookups will be cached for that many seconds. This value must be set to 60 as well.</li>
</ol>
What needs to be done:
networkaddress.cache.ttl and networkaddress.cache.negative.ttl are not typically set Java properties. They are security related properties that can be set in one of two ways:
<ol>
	<li>Edit the $JAVA_HOME/jre/lib/security/java.security by changing the value of the networkaddress cache properties in the file.
<ul class="normal">
	<li>The advantage of this solution is that it is a non-programmatic solution.</li>
	<li>The disadvantage is that since JVMs are global resources, used by multiple applications, the setting may not work well in applications that have consumed the adapter classes.</li>
</ul>
</li>
	<li>Use java.security.Security.setProperty(“propertyname”, “value”) to programmatically set the property.
<ul class="normal">
	<li>The advantage is that other applications using the same JVM are not affected.</li>
	<li>The disadvantage of this solution is that it is a programmatic solution.</li>
</ul>
</li>
</ol>
Example:
{% highlight java %}java.security.Security.setProperty ("networkaddress.cache.ttl", "60");{% endhighlight %}
<h3>Clients using a “static” host file table:</h3>
Avalara’s web services do not support host files. The system accessing our service must use DNS to lookup IP addressing. Failure to do so will put the client’s adaptor at risk in a failover situation (meaning our primary web service has been switched to a secondary due to an outage or preventative maintenance cycle).
<h3>Clients deploying security enforced firewall rules:</h3>
If your company deploys a security practice that requires locking down outbound /inbound traffic, it is recommended that you use the DNS names of development.avalara.net or avatax.avalara.net to resolve any issues.
<hr />
