---
layout: page
title: Service Availability and Performance
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Service Availability and Performance</h2>
Consuming sales tax related services can be considered mission-critical, especially when making calculation queries through the Avatax product. As a cloud-based Software-as-a-Service provider, Avalara understands the need to ensure that our services are available continuously and respond in a timely manner.

Avalara’s Server Status can be viewed publicly at <a href="http://status.avalara.com">http://status.avalara.com</a>. This page outlines the availability of the service, current performance in terms of response time and a historical view of the availability for the past week.


Avalara is committed to providing a minimum service uptime of 99.5%. Certain interested customers can purchase a higher Service Level Agreement if they need a higher commitment to ensuring service availability. You can contact your assigned Avalara Account Manager for further information.
<h3>Network Latency</h3>
While there are no Latency Service Level Agreements available, Avalara will strive for a minimum of 300ms service calculation time, not taking network or other latency issues into account. A typical round-trip API call will take anywhere from 400-1000ms depending on network topology, number of hops from source to destination, (de)serialization algorithms and other factors.

All service calls are made using Secure Sockets Layer (SSL), which inherently will add more latency to each call due to certificate management and authentication processes.

If you have issues with latency when reaching Avalara’s services, you can try using the following scripts to determine if it is a network connectivity, SSL negotiation or some other problem.

Execute the following from the source machine:

For UNIX based systems:

{% highlight text %}$ export URL=https://development.avalara.net/tax/taxsvc.asmx{% endhighlight %}
{% highlight text %}$ for i in `seq 1 5`; do curl -w "tcp: %{time_connect} ssl:%{time_appconnect}\n" -sk -o /dev/null $URL; done{% endhighlight %}
For Windows systems:
{% highlight text %}C:&gt;\for /l %x in (1,1,5) do @(curl -w "tcp: %{time_connect} ssl:%{time_appconnect}\n" -sk -o /dev/null https://development.avalara.net/tax/taxsvc.asmx){% endhighlight %}
This is a sample of the result from the test script above:
{% highlight text %}
tcp: 0.049 ssl:0.220
tcp: 0.048 ssl:0.219
tcp: 0.047 ssl:0.220
tcp: 0.048 ssl:0.221
tcp: 0.047 ssl:0.220
{% endhighlight %}
It illustrates the latency of the network from the source machine to Avalara’s servers. The first number is the response time it takes to make a quick ping using plain TCP and the second making a ping with SSL negotiation turned on.

With the combination of the Avalara’s Server Status website and the script provided, you should be able to determine the source of any network latency problems and respond accordingly. If you are still experiencing latency issues, please feel free to contact Avalara’s Customer Service Department for further troubleshooting.
