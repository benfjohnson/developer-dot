'use strict';

var getTaxSample = {
    title: 'Get Tax',
    metadata: [
        {header: 'Description', val: 'Calculates taxes on a document such as a sales order, sales invoice or purchase order'},
        {header: 'Endpoint', val: 'https://developer.avalara.com/1.0/tax/get'},
        {header: 'HTTP Method', val: 'POST'}
    ],
    querystring: [],
    postBody: {
        "context": {
            "resource-path": "/tax/get",
            "http-method": "POST"
        },
        "params": {
            "header": {
                "api-key": ""
            }
        },
        "body-json": {
            "DocDate": "2016-02-11",
            "CustomerCode": "0000",
            "CompanyCode": "APITrialCompany",
            "Addresses": [
                {
                    "AddressCode": "1",
                    "Line1": "435 Ericksen Avenue Northeast",
                    "Line2": "#250",
                    "PostalCode": "98110"
                }
            ],
            "Lines": [
                {
                    "LineNo": "1",
                    "DestinationCode": "1",
                    "OriginCode": "1",
                    "Qty": 1,
                    "Amount": 10
                }
            ]
        }
    }
};

var busyCursor = function() {
    $('body').css('cursor', 'progress');
};

var resetCursor = function() {
    $('body').css('cursor', 'default');
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

$(function() {
// ADDRESS VALIDATION API STUFF
    var $validateAddress = $('#validateAddress');
    var $validateAddressResponse = $('#validateAddressResponse');

    $validateAddressResponse.hide();
    $validateAddress.on('submit', function(e) {
        e.preventDefault();
        var isAddressValidationFormValid = true;

        $validateAddress.find('input[data-required]').each(function() {
            $(this).parent().removeClass('error');
            if (!$(this).val()) {
                $(this).parent().addClass('error');
                isAddressValidationFormValid = false;
            }
        });

        if (isAddressValidationFormValid) {
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
                            $validateAddressResponse.show().find('textarea').val(JSON.stringify(data, null, 2));
                            resetCursor();
                        },
                        error: function(err) {
                            console.error('validate address error', err);
                            resetCursor();
                        }
                    });
                }
            });
        }
    });
    $('#fillSampleAddressData').on('click', function(e) {
        e.preventDefault();
        $validateAddress.find('input').each(function() {
            $(this).val($(this).attr('placeHolder')).parent().removeClass('error');
        });
    });

// GET TAX API STUFF
    $('#showGetTaxSamplePost').on('click', function(e) {
        e.preventDefault();
        $('#getTaxPostBody').val(JSON.stringify(getTaxSample.postBody['body-json'], null, 2));
    });
});
