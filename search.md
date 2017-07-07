---
layout: default
title: "Search demo"
search: 1
permalink: /search/
---

<div class="search half">
    <form class="horizontal row search-form">
        <div class="col-md-4 form-group">
            <label for="doctype-facet"><h4>Refine by document type</h4></label><br />
            <select id="doctype-facet" class="form-control">
                <option value="">Any</option>
                <option value="overview">Overview</option>
                <option value="use_cases">Use Cases</option>
                <option value="api_references">API Reference</option>
                <option value="set_up_your_sandbox">Set up your sandbox</option>
                <option value="test_your_integration">Test Your Integration</option>
                <option value="integration_checklists">Integration Checklists</option>
                <option value="blog">Blog Posts</option>
            </select>
        </div>
        <div class="col-md-3 form-group">
            <label for="product-facet"><h4>Refine by product</h4></label><br />
            <select id="product-facet" class="form-control">
                <option value="">Any</option>
                <option value="avaTax">AvaTax</option>
                <option value="landedCost">LandedCost</option>
                <option value="excise">Excise</option>
                <option value="certCapture">CertCapture</option>
                <option value="trustFile">TrustFile</option>
                <option value="communications">Communications</option>
                <option value="blog">Blog</option>
            </select>
        </div>
        <div class="col-md-5">
            <label for="query"><h4>Search again</h4></label>
            <div class="row">
                <div class="col-md-9 form-group">
                    <input class="form-control" type="search" id="query">
                    <span class="form-control-feedback" aria-hidden="false">!</span>
                </div>
                <div class="col-md-3 form-group">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </form>
    <div class="row padding-bottom">
        <div class="col-md-12">
            <div id="search-results"></div>
        </div>
    </div>
</div>

