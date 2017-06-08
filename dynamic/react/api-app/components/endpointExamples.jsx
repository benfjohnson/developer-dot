// This component renders an example request or response for an API endpoint,
// based on example data provided in that API's Swagger document

/* eslint-disable react/no-multi-comp */

import {hasExampleData, fillPostBodySampleData, buildCurl} from '../../shared/helpers';
import React from 'react';
import PropTypes from 'prop-types';

const RenderExample = ({example}) => {
    return (
        <pre className='highlight' style={{overflow: 'scroll', height: '400px', marginTop: '10px'}}>
          {example}
        </pre>
    );
};

RenderExample.displayName = 'Render Example';
RenderExample.propTypes = {
    example: PropTypes.string
};

// Transforms an request or response schema into a prettified code snippet.
const formatReqOrResSchema = (schema) => JSON.stringify(fillPostBodySampleData(schema), null, 2);

const showExample = (schema) => schema && hasExampleData('POST_BODY', schema);

const EndpointExamples = ({endpoint}) => {
    return (
      <div className='endpoint-examples-container'>
        <div className='request-container'>
          <h3>{'Example Request'}</h3>
          <code className='highlight-rouge'>
            {`${endpoint.action.toUpperCase()} ${endpoint.path}`}
          </code>
          {showExample(endpoint.requestSchema) ? <RenderExample example={formatReqOrResSchema(endpoint.requestSchema)}/> : null}
        </div>
        <div className='response-container'>
          <h3>{'Example Response'}</h3>
          {showExample(endpoint.responseSchema) ? <RenderExample example={formatReqOrResSchema(endpoint.responseSchema)}/> : null}
        </div>
        <div className='curl-container'>
          <h3>{'Example Using CURL'}</h3>
          <RenderExample example={buildCurl(endpoint.sampleAuthHeader, endpoint, true)} />
        </div>
      </div>
    );
};

EndpointExamples.propTypes = {
    endpoint: PropTypes.object
};

EndpointExamples.displayName = 'EndpointExamples';
export default EndpointExamples;
