import React from 'react';

const ErrorPage = (props) => <div>
    <h3>{'ERROR'}</h3>
    <p>{props.error}</p>
</div>;

ErrorPage.displayName = 'Error';
ErrorPage.propTypes = {
    error: React.PropTypes.string.isRequired
};

export default ErrorPage;
