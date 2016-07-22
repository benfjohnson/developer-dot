import React from 'react';

import ApiPage from './pages/api';
import ErrorPage from './pages/error';

const App = (props) => (
    <div>
        {props.error ? <ErrorPage error={props.error}/> : <ApiPage api={props.api}/>}
    </div>
);

App.displayName = 'App';
App.propTypes = {
    api: React.PropTypes.shape({
        apiName: React.PropTypes.string.isRequired,
        apiDescription: React.PropTypes.string,
        apiInfo: React.PropTypes.array.isRequired,
        apiType: React.PropTypes.oneOf(['SOAP', 'REST']).isRequired,
        postmanCollection: React.PropTypes.object.isRequired
    }).isRequired,
    error: React.PropTypes.string
};

export default App;
