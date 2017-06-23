/* Renders a form to input data into an Avalara DevDot API Console */

import React from 'react';
import PropTypes from 'prop-types';
import QueryOrPathParamsForm from './queryOrPathParamsForm';
import PostBodyForm from './postBodyForm';
import {hasExampleData} from '../helpers';

const ConsoleInputForm = ({endpoint, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, onToggleShowExcludedPostBodyProps, userProfile}) => {
    return (
        <div>
            <div>
                <h3 style={{display: 'inline-block'}}>{'Input'}</h3>
                {hasExampleData('QUERY_STRING', endpoint.queryString) || hasExampleData('POST_BODY', endpoint.requestSchema) || hasExampleData('PATH_PARAM', endpoint.pathParams) ?
                <span
                    className='m-l-1 clickable hdr-btn-adj-text fill-sample-data'
                    onClick={onFillConsoleSampleData.bind(null, endpoint.id)}
                >
                {' Fill with Sample Data'}
                </span> : null}
            </div>
            <div style={{marginBottom: '10px'}}>
                    <button
                        className='btn btn-primary submit'
                        onClick={
                            (e) => {
                                e.preventDefault();
                                onSubmitConsoleRequest(endpoint, userProfile);
                            }
                        }
                        type={'button'}
                    >
                        {'Submit'}
                    </button>
                    <span
                        className='m-l-1 clickable hdr-btn-adj-text'
                        onClick={onResetConsole.bind(null, endpoint.id)}
                        type='reset'>
                    {'Reset'}
                    </span>
            </div>
            <div className={'consoleScroll'}>
                {endpoint.pathParams ? <QueryOrPathParamsForm endpoint={endpoint} onInputChange={onPathParamChanged} onSubmitConsoleRequest={onSubmitConsoleRequest} paramType={'PATH'} params={endpoint.pathParams}/> : null}
                {endpoint.queryString ? <QueryOrPathParamsForm endpoint={endpoint} onInputChange={onQueryParamChanged} onSubmitConsoleRequest={onSubmitConsoleRequest} paramType={'QUERY_STRING'} params={endpoint.queryString}/> : null}
                {endpoint.requestSchema ? <PostBodyForm endpoint={endpoint} name={endpoint.name.toLowerCase() + '_' + endpoint.action} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onPostBodyInputChanged={onPostBodyInputChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onSubmitConsoleRequest={onSubmitConsoleRequest} onToggleShowExcludedPostBodyProps={onToggleShowExcludedPostBodyProps} /> : null}
            </div>
            <div style={{background: 'blue', height: 'auto'}} />
        </div>
    );
};

ConsoleInputForm.displayName = 'Console Input Form';
ConsoleInputForm.propTypes = {
    endpoint: PropTypes.object,
    onAddItemToPostbodyCollection: PropTypes.func.isRequired,
    onFillConsoleSampleData: PropTypes.func.isRequired,
    onPathParamChanged: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onQueryParamChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    onResetConsole: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: PropTypes.func.isRequired,
    userProfile: PropTypes.object
};

export default ConsoleInputForm;
