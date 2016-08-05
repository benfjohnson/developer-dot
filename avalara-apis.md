---
layout: default
title: Avalara APIs
nav: apis
doctype: overview
---
<div class="row bg-map">
  <div class="col-sm-6 col-sm-offset-3 text-center">
    <h1 class="h1p">A wide breadth of API solutions<br/>for tax compliance</h1>
      <ul class="pipe padding-bottom">
          <li><a href="#tax-calculation">Tax calculation</a></li>
          <li><a href="#compliance">Compliance document management</a></li>
          <li><a href="#returns-filing">Returns and filing</a></li>
      </ul>
  </div>
</div>
<div class="row border-top">
    <div class="col-sm-12">
        <h1><a name="tax-calculation"></a>Tax calculation</h1>
    </div>
    <div class="col-sm-7 col-sm-offset-3">
        <div class="row">
            <div class="col-sm-4"><h2>Sales &amp; sellers use tax</h2></div>
            <div class="col-sm-4"><h2>Value-added tax (VAT)</h2></div>
            <div class="col-sm-4"><h2>Consumer use tax</h2></div>
        </div>
        <p>Avalara AvaTax gives you an automated end-to-end tax compliance solution, including rooftop-level tax determination, product taxability information, and reporting and returns filing. Avalara AvaTax has a RESTful API, a SOAP API, and class wrappers (adapters) for a variety of languages to assist in calling the web service, which can be used to calculate sales tax, sellers use tax, consumer use tax, and some excise taxes. <a href="/avatax/get-started#signup">Get started now.</a></p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>AvaTax</span>
         </div>
        {% if site.data.api_consoles.avatax.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.avatax.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <h2>Fees and taxes for telecommunications</h2>
        <p>Avalara AvaTax for Communications helps you quickly determine taxes for telecommunication services, as well as VoIP, internet services, satellite TV, and other communications services. Avalara Returns for Communications provides tax filing, regulatory reporting, and remittance services for companies in the communications industry. <a href="https://www.avalara.com/products/communications-tax/">Learn more about Communications Tax</a></p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>AvaTax Communication</span>
         </div>
        {% if site.data.api_consoles.communications.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.communications.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <h2>Excise fees and taxes for fuels</h2>
        <p>The Excise Tax API allows you to automate tax for transactions involving motor fuels, petroleum products, and natural gas for thousands of jurisdictions in the U.S. and Canada. The API is a SOAP web service that is the external programmatic interface into the Avalara AvaTax Excise application, providing for a platform-independent mechanism to obtain tax calculation information. AvaTax Excise can be used independently of other Avalara APIs. <a href="http://www.avalara.com/products/excise-tax/">Learn more about the Excise Tax API</a>.</p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>AvaTax Excise</span>
         </div>
        {% if site.data.api_consoles.excise.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.excise.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <h2>Duties and fees for international sales</h2>
        <p>The Landed Cost  Rate and Calculation API allows to you lookup rates for commodities, and determine estimated landed cost totals for an invoice. <a href="http://landedcost.avalara.com">Learn more about the Landed Cost API</a></p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>LandedCost</span>
         </div>
         {% if site.data.api_consoles.landed_cost.nav_links %}
             <ul class="pipe padding-bottom">
             {% for api_console_hash in site.data.api_consoles.landed_cost.nav_links %}
                 <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
             {% endfor %}
             </ul>
         {% endif %}
    </div>
</div>
<div class="row border-top bg-fill padding-bottom">
    <div class="col-sm-12">
        <h1><a name="compliance"></a>Compliance document management</h1>
    </div>
    <div class="col-sm-7 col-sm-offset-3">
        <div class="row">
            <div class="col-sm-4"><h2>Exemption certificates</h2></div>
            <div class="col-sm-4"><h2>W8 and W9 forms</h2></div>
            <div class="col-sm-4"><h2>Fuel licenses</h2></div>
        </div>
        <p>Create, validate, and store sales tax exemption and reseller certificates with ease. The CertCapture API enables you to retrieve or update CertCapture data from a remote application. This allows applications to interact with customer and certificate records, and to send automated certificate requests to customers. CertCapture may be used as a stand-alone certificate management solution, or in conjunction with AvaTax. <a href="http://certcapture.avalara.com">Learn more about the CertCapture API</a>.</p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>CertCapture</span>
         </div>
          {% if site.data.api_consoles.certcapture.nav_links %}
              <ul class="pipe">
              {% for api_console_hash in site.data.api_consoles.certcapture.nav_links %}
                  <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
              {% endfor %}
              </ul>
          {% endif %}
    </div>
</div>
<div class="row border-top padding-bottom">
    <div class="col-sm-12">
        <h1><a name="returns-filing"></a>Returns and filing</h1>
    </div>
    <div class="col-sm-7 col-sm-offset-3">    
        <h2>Use the AvaTax API to prepare and file AvaTax-integrated returns</h2>
        <p>
            Avalara Returns is a fully-managed solution that incorporates a Treasury 
            solution for simple payment, guaranteed on-time filing, audit support, and notice management. 
            There are currently no APIs available for Avalara Returns – data is populated from AvaTax 
            transactions and returns are managed by the merchant through the provided Customer Portal. <a href="http://www.avalara.com/products/returns/">Learn more about Avalara Returns</a>.
        </p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>Returns</span>
        </div>
        <h2>Standalone solution for preparing &amp; filing tax returns</h2>
        <p>Avalara TrustFile is a do-it-yourself sales tax solution for small businesses and eCommerce merchants. Quick to set up and easy to use, TrustFile takes your sales data and prepares sales tax reports for every state you collected tax in. TrustFile supports eFiling in a growing number of states, so you can take advantage of One-Click Filing to save even more time. TrustFile allows you to generate sales tax reports and filing independently of the sales tax calculation, which means it can be used without any AvaTax calculation. <a href="http://trustfile.avalara.com">Learn more about the TrustFile API</a>.</p>
        <div class="pageTitle">
            <img src="/images/AvLogo.svg" alt="Avalara">
            <span>TrustFile</span>
         </div>
       {% if site.data.api_consoles.trustfile.nav_links %}
           <ul class="pipe">
           {% for api_console_hash in site.data.api_consoles.trustfile.nav_links %}
               <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
           {% endfor %}
           </ul>
       {% endif %}
    </div>
</div>
