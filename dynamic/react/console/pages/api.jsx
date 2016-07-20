import React from 'react';
import ReactMarkdown from 'react-markdown';

import EndPointComponent from '../components/endpoint';
import PostmanCollection from '../components/postmanCollection';

const ApiPage = ({api}) => (
    <div>
        <h1>{api.apiName}</h1>
        <ReactMarkdown source={api.apiDescription} />
        <br/>
        {api.apiType === 'REST' ? <PostmanCollection appLoaded={api.appLoaded} auth={api.auth} postmanCollection={api.postmanCollection} /> : null}
        {api.apiInfo.map((r, i) => (<EndPointComponent apiType={api.apiType} endpoint={r} id={i} key={i}/>))}
    </div>
);

ApiPage.displayName = 'API';
ApiPage.propTypes = {
    api: React.PropTypes.shape({
        apiName: React.PropTypes.string.isRequired,
        apiDescription: React.PropTypes.string,
        apiInfo: React.PropTypes.array.isRequired,
        apiType: React.PropTypes.oneOf(['SOAP', 'REST']).isRequired,
        postmanCollection: React.PropTypes.object.isRequired
    }).isRequired
};

export default ApiPage;
