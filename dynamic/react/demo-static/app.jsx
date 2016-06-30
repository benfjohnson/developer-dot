import React from 'react';

import ApiPage from './pages/api';
import ErrorPage from './pages/error';

const App = (props) => (
    <div>
        <h1>STATIC DEMO</h1>
        {props.error ? <ErrorPage error={props.error}/> : <ApiPage api={props.api}/>}
    </div>
);

App.displayName = 'App';
App.propTypes = {
    api: React.PropTypes.array.isRequired,
    error: React.PropTypes.string
};

export default App;
