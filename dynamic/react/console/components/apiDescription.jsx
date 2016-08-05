import React from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = (state) => (
    {
        apiName: state.apiName,
        apiDescription: state.apiDescription
    }
);

const render = ({apiName, apiDescription}) => (
    <div className={'api-summary'}>
        <h1>{apiName}</h1>
        <ReactMarkdown source={apiDescription} />
    </div>
);

const ApiDescription = connect(
    mapStateToProps,
    {}
)(render);

export default ApiDescription;
