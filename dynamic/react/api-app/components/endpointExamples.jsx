// This component renders an example request or response for an API endpoint,
// based on example data provided in that API's Swagger document

/* eslint-disable react/no-multi-comp */

import {hasExampleData, fillPostBodySampleData, buildCurl} from '../../shared/helpers';
import React from 'react';
import PropTypes from 'prop-types';
import ExpanderIcon from './expanderIcon';

const replaceSpaces = (str) => str.replace(/\s/g, '');

const CodeSample = ({endpoint, example, title, type}) => {
    return (
        <div className={`${type}-container`}>
          <div className={'try-it-now-header'} data-target={`#${replaceSpaces(endpoint.operationId)}-console-body-${type}`} data-toggle={'collapse'} id={`${replaceSpaces(endpoint.operationId)}-console`} onClick={
            () => {
                $(`#${replaceSpaces(endpoint.operationId)}-console-icon-${type}`).toggleClass('rotate');
                $('.console-tool-tip').tooltip();
            }
                }>
            <div className={'documentation-expand-icon'} id={`${replaceSpaces(endpoint.operationId)}-console-icon-${type}`} style={{display: 'inline-block', marginRight: '5px'}}>
              <ExpanderIcon startPosition={'DOWN'}/>
            </div>
            <h3 className={'clickable'} style={{display: 'inline-block'}}>{title}</h3>
          </div>
          <div className={'collapse'} id={`${replaceSpaces(endpoint.operationId)}-console-body-${type}`}>
            <pre className='highlight code-example-content'>
              {example}
            </pre>
          </div>
        </div>
    );
};

CodeSample.displayName = 'Code Sample';
CodeSample.propTypes = {
    endpoint: PropTypes.object.isRequired,
    example: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

// Transforms an request or response schema into a prettified code snippet.
const formatReqOrResSchema = (schema) => JSON.stringify(fillPostBodySampleData(schema), null, 2);

const showExample = (schema) => schema && hasExampleData('POST_BODY', schema);

const EndpointExamples = ({endpoint}) => {
    return (
      <div className='endpoint-examples-container'>
        { showExample(endpoint.requestSchema) ?
          <CodeSample endpoint={endpoint}
                      example={formatReqOrResSchema(endpoint.requestSchema)}
                      formatReqOrResSchema={formatReqOrResSchema}
                      showExample={showExample}
                      title={'Example Request'}
                      type={'request'} /> : null }
        { showExample(endpoint.responseSchema) ?
          <CodeSample endpoint={endpoint}
                      example={formatReqOrResSchema(endpoint.responseSchema)}
                      title={'Example Response'}
                      type={'response'} /> : null }
        <CodeSample endpoint={endpoint}
                    example={buildCurl(endpoint.sampleAuthHeader, endpoint, true)}
                    title={'Example using CURL'}
                    type={'curl'} />
      </div>
    );
};

EndpointExamples.propTypes = {
    endpoint: PropTypes.object
};

EndpointExamples.displayName = 'EndpointExamples';
export default EndpointExamples;
