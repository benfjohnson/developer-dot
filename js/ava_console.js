'use strict';

var busyCursor = function() {
    $('body').css('cursor', 'progress');
    $('.loading').fadeIn();
};
var resetCursor = function() {
    $('body').css('cursor', 'default');
    $('.loading').fadeOut();
};

var getApiKey = function(callback) {
    $.ajax({
        type: 'GET',
        url: 'https://s3-us-west-2.amazonaws.com/api-proxy-key/key',
        success: function(data) {
            callback(data);
        },
        error: function(err) {
            console.error('s3 error', err);
            callback();
        }
    });
};

var fillSampleData = function(e) {
    e.preventDefault();
    $(e.currentTarget).parent('form').find('input').each(function() {
        $(this).val($(this).attr('placeHolder')).parents('tr').removeClass('error');
    });

};
var validateForm = function(form) {
    var isFormValid = true;

    form.find('input[data-required]').each(function() {
        var $parent = $(this).parents('tr').removeClass('error');

        if (!$(this).val()) {
            $parent.addClass('error');
            isFormValid = false;
        }
    });
    return isFormValid;
};
var showResponse = function(field, data) {
    field.show().find('textarea').val(JSON.stringify(data, null, 2));
};

$(function() {
// ADDRESS VALIDATION API STUFF
    var $validateAddress = $('#validateAddress');
    var $validateAddressResponse = $('#validateAddressResponse').hide();

    $validateAddress.on('submit', function(e) {
        e.preventDefault();

        if (validateForm($validateAddress)) {
            var addressData = {};

            $validateAddress.find('input').each(function() {
                addressData[$(this).attr('name')] = $(this).val()
            });

            busyCursor();
            getApiKey(function(apiKey) {
                if (!apiKey) {
                    resetCursor();
                } else {
                    $.ajax({
                        type: 'GET',
                        url: 'https://swn36zl7ba.execute-api.us-west-2.amazonaws.com/prod/address/validate',
                        headers: {'api-key': apiKey},
                        data: addressData,
                        success: function(data) {
                            $('#validate-address-status').text(data.ResultCode);
                            showResponse($validateAddressResponse, data);
                            resetCursor();
                        },
                        error: function(err) {
                            $('#validate-address-status').text(err.status + ' (' + err.message + ')');
                            console.error('validate address error', err);
                            resetCursor();
                        }
                    });
                }
            });
        }
    });
    $('#fillSampleAddressData').on('click', fillSampleData);

// GET TAX API STUFF
    var $getTax = $('#getTax');
    var $getTaxResponse = $('#getTaxResponse').hide();

    $getTax.on('submit', function(e) {
        e.preventDefault();

        if (validateForm($getTax)) {
            var getTaxData = {
                Addresses: [],
                Lines: []
            };

            $getTax.find('#gtRequest input').each(function() {
                getTaxData[$(this).attr('name')] = $(this).val();
            });

            var address = {};
            $getTax.find('#gtRequestAddresses input').each(function() {
                address[$(this).attr('name')] = $(this).val();
            });
            getTaxData.Addresses.push(address);

            var line = {};
            $getTax.find('#gtRequestLines input').each(function() {
                line[$(this).attr('name')] = $(this).val();
            });
            getTaxData.Lines.push(line);

            busyCursor();
            getApiKey(function(apiKey) {
                if (!apiKey) {
                    resetCursor();
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'https://swn36zl7ba.execute-api.us-west-2.amazonaws.com/prod/tax/get',
                        headers: {'api-key': apiKey, 'content-type': 'application/json'},
                        data: JSON.stringify(getTaxData),
                        success: function(data) {
                            $('#get-tax-status').text(data.ResultCode);
                            showResponse($getTaxResponse, data);
                            resetCursor();
                        },
                        error: function(err) {
                            $('#get-tax-status').text(err.status + ' (' + err.message + ')');
                            console.error('get tax error', err);
                            resetCursor();
                        }
                    });
                }
            });
        }
    });
    $('#fillGetTaxSamplePost').on('click', fillSampleData);
});