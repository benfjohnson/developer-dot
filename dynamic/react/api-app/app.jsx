import React from 'react';

import AllEndpointsContainer from './containers/allEndpointsContainer';
import DownloadPostmanCollection from './containers/downloadPostmanCollection';
import ApiDescription from './components/apiDescription';

const App = () => (
    <div>
        <ApiDescription />
        <DownloadPostmanCollection />
        <br />
        <AllEndpointsContainer />
    </div>
);

App.displayName = 'App';

export default App;
