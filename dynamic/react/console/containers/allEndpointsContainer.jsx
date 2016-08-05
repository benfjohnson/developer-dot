import React from 'react';
import {connect} from 'react-redux';
// import EndpointComponents from '../components/endpointComponents';
import EndpointContainer from './endpointContainer';

const mapStateToProps = (state) => {
    return {
        apiEndpoints: state.apiEndpoints
    };
};

const Endpoints = ({apiEndpoints}) => {
    return (
        <div>
            {apiEndpoints.map((endpoint, i) => <EndpointContainer id={i} key={i} />)}
        </div>
    );
};

const AllEndpointsContainer = connect(mapStateToProps, {})(Endpoints);

export default AllEndpointsContainer;
