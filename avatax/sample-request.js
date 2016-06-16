'use strict';

// just routes data to the view
var dumbController = function(data) {
    return data;
};

// renders sample request metadata
var renderMetadata = function(metadata) {
    return metadata.map(function(md) {
        return m('tr', [
            m('td', [m('strong', md.header)]),
            m('td', md.val)
        ]);
    });
};

// renders query string info
var renderQuerystring = function(querystring) {
    return m('form', [
        querystring.map(function(qs) {
            return m('fieldset', [
                m('label', {for: qs.name}, qs.name),
                m('input', {name: qs.name, placeholder: qs.default})
            ]);
        })
    ]);
};

var renderPostBody = function(postBody) {
    if (!Object.keys(postBody).length) {
        return;
    }

    return m('textarea', {rows: "10", cols: "50"}, JSON.stringify(postBody, null, 2));
}

// view for a Sample API Request
var SampleReq = {
    controller: dumbController,
    view: function(ctrl) {
        return m('div', [
            m('h3', ctrl.title),
            m('table', renderMetadata(ctrl.metadata)),
            renderQuerystring(ctrl.querystring),
            renderPostBody(ctrl.postBody)
        ]);
    }
};

// app wrapper
var App = {
    controller: dumbController,
    view: function(data) {
        return m('div', [
           data.map(function(reqObj) {return m.component(SampleReq, reqObj)}) 
        ]);
    }
};