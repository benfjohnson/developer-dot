---
layout: default
title: Avalara APIs
nav: apis
doctype: overview
---
<div class="row bg-map">
  <div class="col-md-6 col-md-offset-3 text-center">
    <h1 class="h1p">API solutions for end-to-end tax compliance</h1>
      <ul class="pipe padding-bottom">
          <li><a href="#tax-calculation">Tax calculation</a></li>
          <li><a href="#compliance">Compliance document management</a></li>
          <li><a href="#returns-filing">Returns and filing</a></li>
      </ul>
      <ul class="pipe padding-bottom">
          <li><a href="/avatax/dev-guide/">AvaTax Developer Guide</a></li>
      </ul>
  </div>
</div>
<div class="row border-top">
    <div class="col-md-12">
        <h1><a name="tax-calculation"></a>Tax Calculation APIs</h1>
    </div>
    <div class="col-md-7 col-md-offset-3">
        <div class="row">
            <div class="col-md-12"><h2>Calculate sales &amp; sellers use tax, consumer use, and value-added tax (VAT)</h2></div>
        </div>
        <p>Calculate transactional taxes with rooftop-level accuracy and real-time product taxability information using our AvaTax RESTful API, or SOAP API, which include class wrappers (adapters) for a variety of languages to assist in calling the web service. <a href="/avatax/get-started#signup">Get started with the AvaTax API now.</a></p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
            <span>AvaTax</span>
         </div>
        {% if site.data.api_consoles.avatax11.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.avatax11.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <div class="row">
            <div class="col-md-12"><h2>Real-time tax calculation and electronic invoices supporting transactions created by ERPs, CRMs, POS and Shopping Cart Applications.</h2></div>
        </div>
        <p>Explore the API before you build. Automate tax calculation for sales, purchases and withholdings on payments and receipts.<a href="/avataxbr/">Get started with the AvaTax Brazil API now.</a></p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
            <span>AvaTax Brazil</span>
         </div>
        {% if site.data.api_consoles.avataxbr.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.avataxbr.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <h2>Fees and taxes for telecommunications</h2>
        <p>The Avalara AvaTax for Communications API helps you quickly determine taxes for telecommunication services, as well as VoIP, internet services, satellite TV, and other communications services. <a href="/communications">Learn more about the Communications Tax API</a></p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
            <span>Communications</span>
         </div>
        {% if site.data.api_consoles.communications.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.communications.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <h2>Excise fees and taxes for fuels</h2>
        <p>The Excise Tax API allows you to determine taxes for transactions involving bulk motor fuels, petroleum products, and natural gas for thousands of jurisdictions in the U.S. and Canada. The SOAP API provides platform-independent access to Avalara AvaTax Excise, and can be used independently of other Avalara APIs. <a href="/excise">Learn more about the Excise Tax API.</a>.</p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
            <span>Excise</span>
         </div>
        {% if site.data.api_consoles.excise.nav_links %}
          <ul class="pipe padding-bottom">
          {% for api_console_hash in site.data.api_consoles.excise.nav_links %}
              <li><a href="{{api_console_hash.path}}">{{api_console_hash.title}}</a></li>
          {% endfor %}
          </ul>
        {% endif %}
        <h2>Duties and fees for international sales</h2>
        <p>The Landed Cost  Rate and Calculation API allows to you lookup rates for commodities, and determine estimated landed cost totals for an invoice. <a href="/landedcost">Learn more about the Landed Cost API.</a></p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
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
    <div class="col-md-12">
        <h1><a name="compliance"></a>Compliance Document Management API</h1>
    </div>
    <div class="col-md-7 col-md-offset-3">
        <div class="row">
            <div class="col-md-12"><h2>Manage exemption certificates, W8/W9 forms, and fuel licenses</h2></div>
        </div>
        <p>The CertCapture API enables you to retrieve or update exemption data from a remote application. This allows applications to interact with customer and certificate records, and to send automated certificate requests to customers. CertCapture may be used as a stand-alone certificate management solution, or in conjunction with AvaTax.  <a href="/certcapture">Learn more about the CertCapture API</a>.</p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
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
    <div class="col-md-12">
        <h1><a name="returns-filing"></a>Returns and Filing APIs</h1>
    </div>
    <div class="col-md-7 col-md-offset-3">
        <h2>Prepare and file AvaTax-integrated returns</h2>
        <p>Avalara Returns is a fully-managed solution that incorporates a Treasury solution for simple payment, guaranteed on-time filing, audit support, and notice management. There are currently no APIs available for Avalara Returns – data is populated from AvaTax transactions and returns are managed by the merchant through the provided Customer Portal. <a href="http://www.avalara.com/products/returns/">Learn more about Avalara Returns</a>.
        </p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
            <span>Returns</span>
        </div>
        <h2>Tax return preparation and filing for eCommerce merchants and small businesses</h2>
        <p>Avalara TrustFile is a do-it-yourself sales tax solution for small businesses and eCommerce merchants. Quick to set up and easy to use, TrustFile takes your sales data and prepares sales tax reports for every state you collected tax in. TrustFile supports eFiling in a growing number of states, so you can take advantage of One-Click Filing to save even more time. TrustFile allows you to generate sales tax reports and filing independently of the sales tax calculation, which means it can be used without any AvaTax calculation.  <a href="http://trustfile.avalara.com">Learn more about the TrustFile API</a>.</p>
        <div class="pageTitle">
            <img src="/public/images/Avalara_logo.svg" alt="Avalara">
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
