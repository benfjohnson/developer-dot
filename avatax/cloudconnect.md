---
layout: default
title: Avalara CloudConnect
product: CloudConnect
doctype: use_cases
nav: apis
---
<h2>Avalara CloudConnect</h2>
<h3>CloudConnect Setup Guide</h3>
<h4>Installation Recommendations</h4>
1. The preferred implementation is at least two (2) CloudConnect systems for redundancy. Each unit should require only 1U of rack space. Each unit requires two (2) power outlets, each in separate PDU’s, and one (1) Ethernet port. Either Ethernet port may be used. The fifth port is for IPMI.
2. If you need it to configure a VLAN the MAC address sticker is in the back on the underside of the Avalara CloudConnect appliance. It is also located on the shipping box.
3. The preferred implementation is to place all CloudConnect systems in a Private DMZ. This DZ should allow inbound only from the customer’s network and outbound to the Internet. The systems are fully firewalled and only expose the AvaTax API and only communicate out to Avalara to get content, customer data and security updates. Avalara’s preference is that the system be on a private IP address.

<h4>Initial Setup</h4>
Once powered on, the LCD will display a booting message and then begin scrolling after approximately one minute. At this point the system is ready to be configured.
The system defaults to DHCP. The address it acquires will be displayed on the LCD. To change to static IP address:
1. Use the LCD up/down buttons to select “CHANGE IP” and confirm the selection by using the green checkmark button. 
2. The following information needs to be confirmed in order: STATIC/DHCP, IP ADDRESS, SUBNET, GATEWAY, DNS 1, DNS 2. Use the up/down buttons to change values and the left/right buttons to change the position. Use the green checkmark button to confirm selections and the red X button to cancel tasks. 
3. The system will set the IP address and should be available after a minute. 
4. Confirm the setup by pinging the system. 
5. If the system does not respond as expected, please select “RESET FIREWALL” on the LCD. 

Note that each system will automatically have a unique DNS name in the form of *CustomerNameUnitNumber*.cloudconnect.avalara.net. This DNS entry is dynamic and updates any time the system IP changes. The unique name of your system can be found on the documentation included with the system.

<h4>Firewall Configuration</h4>
After confirming that all of the systems are online, please configure your firewall to allow the following communication with the system. This information is current as of 12/27/2016, and is subject to change. 

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Direction</th>
				<th>Port (Protocol)</th>
				<th>Source</th>
				<th>Destination Host/IP</th>
				<th>Purpose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Inbound</td>
				<td>8080 (HTTP)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>AvaTax API</td>
			</tr>
			<tr>
				<td>Inbound</td>
				<td>8084, 443 (HTTPS)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>AvaTax API</td>
			</tr>
			<tr>
				<td>Outbound</td>
				<td>7(ICMP)</td>
				<td>System IP</td>
				<td>8.8.8.8</td>
				<td>Ping</td>
			</tr>
			<tr>
				<td>Outbound</td>
				<td>53 (DNS)</td>
				<td>System IP</td>
				<td>8.8.8.8, 8.8.4.4</td>
				<td>DNS lookup</td>
		</tr>
		<tr>
				<td>Outbound</td>
				<td>123 (NTP)</td>
				<td>System IP</td>
				<td>ntp.ubuntu.com</td>
				<td>Network time protocol</td>
		</tr>
			<tr>
				<td>Inbound</td>
				<td>30001 (SSH)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>Customer SSH access</td>
		</tr>
			<tr>
				<td>Inbound</td>
				<td>30009 (HTTP)</td>
				<td>Any</td>
				<td>System IP</td>
				<td>AvaTax engine health</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>avatax.avalara.net</td>
				<td>Synchronization of content and customer data</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>api.logentries.com
					data.logentries.com
				</td>
				<td>Metrics collection</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>center.cloudconnect.avalara.net</td>
				<td>System health reporting</td>
		</tr>
			<tr>
				<td>Outbound</td>
				<td>5671 (HTTPS)</td>
				<td>System IP</td>
				<td>c4.cloudconnect.avalara.net</td>
				<td>Messaging service bus</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>package.cloudconnect.avalara.net</td>
				<td>Linux package updates</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>s3-us-west-2.amazonaws.com
					s3.amazonaws.com 
					avalara-cc-packages.s3-us-west-2.amazonaws.com
					avalara-cc-packages.s3.amazonaws.com
				</td>
				<td>Amazon S3</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>80 (HTTP), 443 (HTTPS)</td>
				<td>System IP</td>
				<td>*.download.windowsupdate.com 
					*.update.microsoft.com 
					*.windowsupdate.com 
					*.windowsupdate.microsoft.com 
					download.microsoft.com 
					ntservicepack.microsoft.com 
					stats.microsoft.com 
					windowsupdate.microsoft.com 
					wustat.windows.com
				</td>
				<td>Windows Update service</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>443 (HTTPS)</td>
				<td>System IP</td>
				<td>edelivery.oracle.com 
					download.oracle.com
				</td>
				<td>JRE Updates</td>
		</tr>
				<tr>
				<td>Outbound</td>
				<td>30001 (SSH)</td>
				<td>System IP</td>
				<td>ccarchive.avalara.net</td>
				<td>Virtual machine (VM) updates</td>
		</tr>
		</tbody>
	</table>  
</div>

<h4>Load Balance Configuration</h4>
The recommended implementation is to setup a VIP with a load balancer in a round robin configuration and use the following health checks to verify availability of each unit on port 8084. Moreover, avatax.avalara.net should be configured as a lower priority endpoint such that traffic only fails over to the Avalara cloud if all CloudConnect systems are unavailable.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Service</th>
				<th>URL</th>
				<th>Type</th>
				<th>Return</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>AvaTax engine health</td>
				<td>http://<i>SystemUrl</i>:30009/calc</td>
				<td>GET</td>
				<td>{ "Status": "OK" }</td>
			</tr>
		</tbody>
	</table>  
</div>

<h4>System Monitoring</h4>

Useful system information can be obtained through the health service API.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Service</th>
				<th>URL</th>
				<th>Type</th>
				<th>Return (Example Values)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Version information</td>
				<td>http://<i>SystemUrl</i>:30009/version</td>
				<td>GET</td>
				<td>{ "CalcVersion": "16.12.0.10","LinuxVersion": "3.19.0-80- generic", "HostVersion": "6.10.6198.18605", "VMVersions": "OS: 6.3.9600; VM: CalcVM- 17.2.3; AvaTax: 16.12.0.10; PL: 2016-12-06 09:27:08Z; MD: 4.0.1.2777; MP: 1.2; GM: 1.10", "HardwareSerial": "12345" }</td>
			</tr>
			<tr>
				<td>System analytics</td>
				<td>http://<i>SystemUrl</i>:30009/system </td>
				<td>GET</td>
				<td>{ "CPULoad": "0.15", "IOLoad": "{Writes=3000,ServiceTime=0.54, ReadBytes=5000, WriteBytes=2000, Queue=0.06, Reads=1000}", "Swap": "0.0" }</td>
			</tr>
		</tbody>
	</table>  
</div>

<h4>Synchronization Window Configuration</h4>
By default, accounts are synchronized with the production AvaTax cloud every hour. This can be configured by issuing a POST to the /syncWindow endpoint with the window (in milliseconds). Similarly, the sync window can be retrieved by issuing a GET to the /syncWindow endpoint.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Service</th>
				<th>URL</th>
				<th>Type</th>
				<th>Data</th>
				<th>Response</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Sync Window Setting</td>
				<td>http://<i>SystemUrl</i>:30009/syncWindow</td>
				<td>POST</td>
				<td>3600000</td>
				<td>3600000</td>
			</tr>
			<tr>
				<td>Sync Window Retrieval</td>
				<td>http://<i>SystemUrl</i>:30009/syncWindow</td>
				<td>GET</td>
				<td></td>
				<td>3600000</td>
			</tr>
		</tbody>
	</table>  
</div>
