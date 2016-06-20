import React from 'react';

const ApiComponent = (props) => <div>
    <h3>{'API Swgger Doc'}</h3>
    <pre>{JSON.stringify(props.api, null, 2)}</pre>
</div>;

ApiComponent.displayName = 'API';
ApiComponent.propTypes = {
    api: React.PropTypes.object.isRequired
};

export default ApiComponent;
