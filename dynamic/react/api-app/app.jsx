import React from 'react';
import PropTypes from 'prop-types';

import EndpointContainer from './containers/endpointContainer';
import DownloadPostmanCollection from './containers/downloadPostmanCollection';
import ApiDescription from './components/apiDescription';
import {connect} from 'react-redux';

const App = ({hasEndpoint}) => (
    <div>
        {!hasEndpoint ?
            <div>
                <ApiDescription />
                <DownloadPostmanCollection />
            </div> :
            <EndpointContainer />
        }
        <br />
    </div>
);

const mapStateToProps = (state) => {
    return {
        endpoint: state.apiEndpoint || null,
        hasEndpoint: Boolean(state.apiEndpoint)
    };
};

App.displayName = 'App';
App.propTypes = {
    endpoint: PropTypes.object,
    hasEndpoint: PropTypes.bool
};

export default connect(mapStateToProps)(App);
