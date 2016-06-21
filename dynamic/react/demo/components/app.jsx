import React from 'react';

import ErrorComponent from './error';
import ApiComponent from './api';

const App = (props) => {
    return <div>{props.error.status ? <ErrorComponent error={props.error.error}/> : <ApiComponent api={props.api}/>}</div>;
};

App.displayName = 'App';
App.propTypes = {
    api: React.PropTypes.array.isRequired,
    error: React.PropTypes.object.isRequired
};

export default App;
