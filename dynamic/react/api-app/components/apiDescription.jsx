import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = (state) => (
    {
        apiName: state.apiName,
        apiDescription: state.apiDescription
    }
);

const ApiDescRender = ({apiName, apiDescription}) => (
    <div className={'api-summary'}>
        <h1>{apiName}</h1>
        <ReactMarkdown source={apiDescription || ''} />
        <h2>{'Api Reference'}</h2>
        <p>{'Full reference for this API is available on the developer site:'}</p>
        <ul>
            <li><a href='methods'>{'Methods'}</a></li>
            <li><a href='models'>{'Models'}</a></li>
        </ul>
    </div>
);

ApiDescRender.displayName = 'Api Description';
ApiDescRender.propTypes = {
    apiDescription: PropTypes.string,
    apiName: PropTypes.string.isRequired
};

const ApiDescription = connect(
    mapStateToProps,
    {}
)(ApiDescRender);

export default ApiDescription;
