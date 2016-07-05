import React from 'react';

import EndPointComponent from '../components/endpoint';

const ApiPage = (props) => (
    <div>
        {props.api.map((r, i) => (<EndPointComponent endpoint={r} id={i} key={i}/>))}
    </div>
);

ApiPage.displayName = 'API';
ApiPage.propTypes = {
    api: React.PropTypes.array.isRequired
};

export default ApiPage;
