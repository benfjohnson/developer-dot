---
layout: default
title: "Search demo"
search: 1
permalink: /search/
---

<div class="search half">
    <form class="horizontal row search-form">
        <div class="col-sm-4 form-group">
            <label for="doctype-facet"><h4>Refine by document type</h4></label><br />
            <select id="doctype-facet" class="form-control">
                <option value="">Any</option>
                <option value="api-reference">API Reference</option>
                <option value="documentation">Documentation</option>
                <option value="certification">Certification</option>
                <option value="blog">Blog Posts</option>
            </select>
        </div>
        <div class="col-sm-3 form-group">
            <label for="product-facet"><h4>Refine by product</h4></label><br />
            <select id="product-facet" class="form-control">
                <option value="">Any</option>
                <option value="avatax">AvaTax</option>
                <option value="landedcost">LandedCost</option>
                <option value="excise">Excise</option>
                <option value="certcapture">CertCapture</option>
                <option value="trustfile">TrustFile</option>
                <option value="onboarding">Onboarding</option>
                <option value="communications">Communications</option>
            </select>
        </div>
        <div class="col-sm-5">
            <label for="query"><h4>Search again</h4></label>
            <div class="row">
                <div class="col-sm-9 form-group">
                    <input class="form-control" type="search" id="query">
                    <span class="form-control-feedback" aria-hidden="false">!</span>
                </div>
                <div class="col-sm-3 form-group">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </form>    
    <div class="row padding-bottom">
        <div class="col-sm-12">
            <div id="search-results"></div>
        </div>
    </div>
</div>

