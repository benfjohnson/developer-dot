var $searchForm = $('.hdr-search-form');
var $searchFormCloseBtn = $searchForm.find('.close');
var $searchFormIcon = $('.hdr-search-icon');
var $searchInput = $searchForm.find('input[type="search"]');

var submitSearch = function() {
    $searchForm.on('submit', function(e) {
        e.preventDefault();
        $searchForm.addClass('submitted');

        $searchInput.parents('.form-group').removeClass('has-error').removeClass('has-feedback');
        if (!$searchInput.val()) {
            $searchInput.parents('.form-group').addClass('has-error').addClass('has-feedback');
        } else {
            var newurl = '/search/?q=' + encodeURIComponent($searchInput.val());
            var product = $('body').attr('data-product');

            if (product) {
                newurl += '&product=' + encodeURIComponent(product);
            }
            window.location.href = newurl;
        }
    });
};
var showSearchForm = function() {
    $searchFormIcon.on('click', function() {
        $searchFormIcon.addClass('hidden');
        $searchForm.removeClass('hidden');
        $searchInput.focus().parents('.form-group').removeClass('has-error').removeClass('has-feedback');
    });

    $searchInput.on('input', function() {
        if ($searchForm.hasClass('submitted') && !$searchInput.val()) {
            $searchInput.parents('.form-group').addClass('has-error').addClass('has-feedback');
        } else {
            $searchInput.parents('.form-group').removeClass('has-error').removeClass('has-feedback');
        }
    });

    // Setup click handler to close searh form
    $('body').on('click', function(e) {
        if (
            // clicked search close button
        ($searchFormCloseBtn.is(e.target) || $searchFormCloseBtn.has(e.target).length) ||
        // not search form and not the search icon
        ((!$searchForm.is(e.target) && !$searchForm.has(e.target).length) && (!$searchFormIcon.is(e.target) && !$searchFormIcon.has(e.target).length))
        ) {
            $searchFormIcon.removeClass('hidden');
            $searchForm.addClass('hidden');
        }
    });
};

handleSearch = function() {
    getParameterByName = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    var queryParam = getParameterByName('q');

    if (queryParam) {
        $('#query').val(queryParam);

        var productfacet = getParameterByName('product');
        var doctypefacet = getParameterByName('doctype');

        $('#product-facet').val(productfacet);
        $('#doctype-facet').val(doctypefacet);

        var client = algoliasearch('19A6FWAAB3', 'a480e1583c97f14a6ad92c7c605d9f23');
        var index = client.initIndex('developer-dot');
        var facets = [];

        if (productfacet) {
            facets.push('product:' + productfacet);
        }
        if (doctypefacet) {
            facets.push('doctype:' + doctypefacet);
        }

        index.search(queryParam, {
            attributesToRetrieve: ['title', 'url', 'text'],
            hitsPerPage: 10,
            facetFilters: facets,
        }, function searchDone(err, content) {
            var $searchResults = $('#search-results');

            if (err || (!content || !content.hits || !content.hits.length)) {
                if (err) {
                    console.error(err);
                }
                $searchResults.html('<h1>No Results Found</h1>');
            } else {
                content.hits.forEach(function(result) {
                    $searchResults.append('<div><h4><a href="' + result.url + '">' + result.title + '</a></h4><p>' + result.text + '</p></div>');
                });
            }
        });

        $('.search-button').click(function(e) {
            var newurl = '/search/?q=' + encodeURIComponent($('#query').val());

            if ($('#product-facet').val()) {
                newurl += '&product=' + encodeURIComponent($('#product-facet').val());
            }
            if ($('#doctype-facet').val()) {
                newurl += '&doctype=' + encodeURIComponent($('#doctype-facet').val());
            }

            location.href = newurl;
        });
    }
};

$(document).ready(function() {
    submitSearch();
    showSearchForm();

    setTimeout(function() {
        $('.dropdown-large').each(function() {
            var left = $(this).position().left;
            console.log('left', left);

            $(this).find('.dropdown-menu-large').css('left', left);
        });
    }, 100);
});
