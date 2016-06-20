import React from 'react';

const ErrorComponent = (props) => <div>
    <h3>{'ERROR'}</h3>
    <p>{props.error}</p>
</div>;

ErrorComponent.displayName = 'Error';
ErrorComponent.propTypes = {
    error: React.PropTypes.string.isRequired
};

export default ErrorComponent;
