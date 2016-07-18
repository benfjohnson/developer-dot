import React from 'react';

import EndPointComponent from '../components/endpoint';

const createPostmanLink = (postmanCollection, appLoaded) => {
    const json = JSON.stringify(postmanCollection);
    const blob = (appLoaded && typeof Blob !== 'undefined') ? new Blob([json], {type: 'application/json'}) : null;
    const url = (appLoaded && typeof URL !== 'undefined') ? URL.createObjectURL(blob) : null;

    return <a download={`${postmanCollection.info.name.replace(/\s/g, '-')}-postman-collection.json`} href={url}><button className='btn btn-info'>{'Download a Postman collection!'}</button></a>;
};

const ApiPage = ({api}) => (
    <div>
        <h1>{api.apiName}</h1>
        <div dangerouslySetInnerHtml={{__html: api.apiDescription}}>{api.apiDescription}</div>
        <br/>
        {createPostmanLink(api.postmanCollection, api.appLoaded)}
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
