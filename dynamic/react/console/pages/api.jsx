import React from 'react';

import EndPointComponent from '../components/endpoint';

const createPostmanLink = (postmanCollection) => {
    const json = JSON.stringify(postmanCollection);
    const blob = (typeof Blob === 'undefined') ? null : new Blob([json], {type: 'application/json'});
    const url = (typeof URL === 'undefined') ? null : URL.createObjectURL(blob);

    return <a href={url} download={`${postmanCollection.info.name.replace(/\s/g, '-')}-postman-collection.json`}><button className='btn btn-info'>{'Download a Postman collection!'}</button></a>;
};

const ApiPage = ({api}) => (
    <div>
        <h1>{api.apiName}</h1>
        <div dangerouslySetInnerHtml={{__html: api.apiDescription}}>{api.apiDescription}</div>
        <br/>
        {createPostmanLink(api.postmanCollection)}
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
