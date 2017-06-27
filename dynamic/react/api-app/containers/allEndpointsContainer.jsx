import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EndpointContainer from './endpointContainer';

const mapStateToProps = (state) => {
    return {
        apiEndpoints: state.apiEndpoints,
        tagName: state.tagName
    };
};

const Endpoints = ({apiEndpoints, tagName}) => {
    return (
        <div>
            {apiEndpoints.map((endpoint, i) => <EndpointContainer endpoint={endpoint} tagName={tagName} key={i} />)}
        </div>
    );
};

Endpoints.displayName = 'All API Endpoints';
Endpoints.propTypes = {
    apiEndpoints: PropTypes.array.isRequired
};

const AllEndpointsContainer = connect(mapStateToProps, {})(Endpoints);

export default AllEndpointsContainer;
