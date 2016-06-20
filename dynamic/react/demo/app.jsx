import React from 'react';
import {render} from 'react-dom';

import ErrorComponent from './components/error';
import ApiComponent from './components/api';

const API = window.location.hash.match(/[^/]*$/)[0];
const API_SWAGGER_URLS = {
    landedcost: 'http://localhost:8082/v3/api-definition'
};

function checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
}

const App = (props) => <div>{!props.error.status ? <ErrorComponent error={props.error.error}/> : <ApiComponent api={props.api}/>}</div>;

App.displayName = 'API Proxy';
App.propTypes = {
    api: React.PropTypes.object.isRequired,
    error: React.PropTypes.object.isRequired
};

App.swaggerDoc = fetch(API_SWAGGER_URLS[API]).then(checkFetchStatus).then((swaggerDoc) => {
    render(<App api={swaggerDoc} error={{
        status: true
    }}/>, document.getElementById('api-demo'));
}).catch((err) => {
    render(<App api={{}} error={{
        status: false,
        error: err.response.statusText
    }}/>, document.getElementById('api-demo'));
});
