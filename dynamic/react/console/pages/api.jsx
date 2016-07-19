import React from 'react';

import EndPointComponent from '../components/endpoint';
import PostmanCollection from '../components/postmanCollection';

const ApiPage = ({api}) => (
    <div>
        <h1>{api.apiName}</h1>
        <div dangerouslySetInnerHtml={{__html: api.apiDescription}}>{api.apiDescription}</div>
        <br/>
        <PostmanCollection appLoaded={api.appLoaded} postmanCollection={api.postmanCollection} />
        {api.apiInfo.map((r, i) => (<EndPointComponent endpoint={r} id={i} key={i}/>))}
    </div>
);

ApiPage.displayName = 'API';
ApiPage.propTypes = {
    api: React.PropTypes.shape({
        apiName: React.PropTypes.string.isRequired,
        apiDescription: React.PropTypes.string,
        apiInfo: React.PropTypes.array.isRequired,
        postmanCollection: React.PropTypes.object.isRequired
    }).isRequired
};

export default ApiPage;
