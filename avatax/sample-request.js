'use strict';

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
                m('label', {for: qs.name}, qs.name + (qs.required ? '*' : '')),
                m('input', {name: qs.name, placeholder: qs.default})
            ]);
        })
    ]);
};

var renderPostBody = function(showPostBody, postBody, samplePostBody) {
    if (!showPostBody) {
        return;
    }

    return [
        m('textarea', {rows: "10", cols: "50", onchange: m.withAttr('value', postBody), value: postBody()}),
        m('br'),
        m('button', {onclick: function(e) {postBody(samplePostBody)}}, 'Fill sample data')
    ];
};

var controller = function(data) {
        var vm = {
            title: data.title,
            metadata: data.metadata,
            querystring: data.querystring,
            showPostBody: data.postBody ? true : false,
            samplePostBody: JSON.stringify(data.postBody, null, 2),
            postBody: m.prop('')
        };

        return vm;
};

var view = function(vm) {
    logState(vm);
    return m('div', [
        m('h3', vm.title),
        m('table', renderMetadata(vm.metadata)),
        renderQuerystring(vm.querystring),
        renderPostBody(vm.showPostBody, vm.postBody, vm.samplePostBody),
    ]);
};

var viewModel = {};

// view for a Sample API Request
var SampleReq = {
    controller: controller,
    view: view,
    viewModel: viewModel
};

function logState(vm) {
    console.log('Post Body', JSON.stringify(vm.postBody(), null, 2));
}