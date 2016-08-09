import React from 'react';
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
        <ReactMarkdown source={apiDescription} />
    </div>
);

ApiDescRender.displayName = 'Api Description';
ApiDescRender.propTypes = {
    apiDescription: React.PropTypes.string,
    apiName: React.PropTypes.string.isRequired
};

const ApiDescription = connect(
    mapStateToProps,
    {}
)(ApiDescRender);

export default ApiDescription;
