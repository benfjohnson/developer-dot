import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EndpointContainer from './endpointContainer';

const mapStateToProps = (state) => {
    return {
        apiEndpoints: state.apiEndpoints
    };
};

const Endpoints = ({apiEndpoints}) => {
    return (
        <div>
            {apiEndpoints.map((endpoint, i) => <EndpointContainer endpoint={endpoint} key={i} />)}
        </div>
    );
};

Endpoints.displayName = 'All API Endpoints';
Endpoints.propTypes = {
    apiEndpoints: PropTypes.array.isRequired
};

const AllEndpointsContainer = connect(mapStateToProps, {})(Endpoints);

export default AllEndpointsContainer;
