import React from 'react';

import EndPoint from './endpoint';

const ApiComponent = (props) => (
    <div>
        {props.api.map((r, i) => (<EndPoint endpoint={r} id={i} key={i}/>))}
    </div>
);

ApiComponent.displayName = 'API';
ApiComponent.propTypes = {
    api: React.PropTypes.array.isRequired
};

export default ApiComponent;
