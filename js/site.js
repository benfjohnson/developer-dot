submitSearch = function() {
    var $searchInput = $('#nav-query');

    $('.hdr-search-form').on('submit', function(e) {
        e.preventDefault();

        $searchInput.parents('.form-group').removeClass('has-error').removeClass('has-feedback');
        if (!$searchInput.val()) {
            $searchInput.parents('.form-group').addClass('has-error').addClass('has-feedback');
            return false;
        }

        var newurl = '/search/?q=' + encodeURIComponent($searchInput.val());
        var product = $('#product').text();

        if (product) {
            newurl += '&product=' + encodeURIComponent(product);
        }
        window.location.href = newurl;
    });
};

showSearchForm = function() {
    var $searchForm = $('.hdr-search-form');
    var $searchFormIcon = $('.hdr-search-icon');

    $searchForm.hide();

    $searchFormIcon.on('click', function() {
        $searchFormIcon.hide();
        $searchForm.show();
        $('#nav-query').focus();
    });

    // Setup click handler to close searh form
    $(document).unbind('click');
    $(document).click(function(e) {
        if ((!$searchForm.is(e.target) && $searchForm.has(e.target).length === 0) &&
            (!$searchFormIcon.is(e.target) && $searchFormIcon.has(e.target).length === 0)) {
            $searchFormIcon.show();
            $searchForm.hide();
        }
    });

};

getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

handleSearch = function() {
    var queryparam = getParameterByName('q');
    $("#query").val(queryparam);

    var productfacet = getParameterByName('product');
    var doctypefacet = getParameterByName('doctype');

    $("#product-facet").val(productfacet);
    $("#doctype-facet").val(doctypefacet);

    var client = algoliasearch("19A6FWAAB3", 'a480e1583c97f14a6ad92c7c605d9f23');
    var index = client.initIndex('developer-dot');
    var facets = [];

    if (productfacet) facets.push("product:" + productfacet);
    if (doctypefacet) facets.push("doctype:" + doctypefacet);

    index.search(queryparam, {
        attributesToRetrieve: ['title', 'url'],
        hitsPerPage: 50,
        facetFilters: facets,
    }, function searchDone(err, content) {
        if (err) {
            console.error(err);
            return;
        }

        var results = "";
        if (content.hits.length === 0) {
            results += "<li>No Results Found</li>"
        }
        for (var h in content.hits) {
            results += "<li><a href='" + content.hits[h].url + "'>" + content.hits[h].title + "</a></li>";
        }
        document.getElementById("search-results").innerHTML = results;
    });

    $('.search-button').click(function(e) {
        var newurl = '/search/?q=' + encodeURIComponent($("#query").val());

        if ($("#product-facet").val()) {
            newurl += "&product=" + encodeURIComponent($("#product-facet").val());
        }
        if ($("#doctype-facet").val()) {
            newurl += "&doctype=" + encodeURIComponent($("#doctype-facet").val());
        }

        location.href = newurl;
    });
};

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
//    $('.collapse').collapse();


    submitSearch();
    showSearchForm();
});
