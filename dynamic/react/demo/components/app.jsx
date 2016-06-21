import React from 'react';

import ErrorComponent from './error';
import ApiComponent from './api';

const App = (props) => (
    <div>
        {props.error ? <ErrorComponent error={props.error}/> : <ApiComponent api={props.api}/>}
    </div>
);

App.displayName = 'App';
App.propTypes = {
    api: React.PropTypes.array.isRequired,
    error: React.PropTypes.string
};

export default App;
