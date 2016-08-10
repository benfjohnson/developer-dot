import React from 'react';
import ApiConsole from '../../shared/components/apiConsole';

/* eslint-disable react/prop-types */
const ApiConsoleWrapper = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <h3>{props.endpoint.name}</h3>
            <ApiConsole {...props} />
        </div>
    );
};

ApiConsoleWrapper.displayName = 'Api Endpoint - Console Wrapper';

export default ApiConsoleWrapper;

/* eslint-enable react/prop-types */
