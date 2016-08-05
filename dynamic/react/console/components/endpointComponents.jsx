import React from 'react';
import EndpointComponent from './endpoint';

const EndpointComponents = ({apiEndpoints, apiType, onJumpToConsole, onToggleDocCollapse}) => (
    <div id={'api-endpoints'}>
        {apiEndpoints.map((endpoint, i) => (<EndpointComponent apiType={apiType} endpoint={endpoint} id={i} key={i} onJumpToConsole={onJumpToConsole} onToggleDocCollapse={onToggleDocCollapse} />))}
    </div>
);

export default EndpointComponents;
