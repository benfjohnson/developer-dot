import React from 'react';
import PropTypes from 'prop-types';

import AllEndpointsContainer from './containers/allEndpointsContainer';
import DownloadPostmanCollection from './containers/downloadPostmanCollection';
import ApiDescription from './components/apiDescription';
import {connect} from 'react-redux';

const App = ({isEmpty}) => (
    <div>
        {isEmpty ?
            <div>
                <ApiDescription />
                <DownloadPostmanCollection />
            </div> :
            <AllEndpointsContainer />
        }
        <br />
    </div>
);

const mapStateToProps = (state) => ({
    isEmpty: state.apiEndpoints.length === 0
});

App.displayName = 'App';
App.propTypes = {
    isEmpty: PropTypes.bool
};

export default connect(mapStateToProps)(App);
