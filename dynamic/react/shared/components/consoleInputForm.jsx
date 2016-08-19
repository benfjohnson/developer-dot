/* Renders a form to input data into an Avalara DevDot API Console */

import React from 'react';
import QueryOrPathParamsForm from './queryOrPathParamsForm';
import PostBodyForm from './postBodyForm';
import {hasExampleData} from '../helpers';

const ConsoleInputForm = ({endpoint, id, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, onToggleShowExcludedPostBodyProps}) => {
    return (
        <div>
            <div>
                <h3 style={{display: 'inline-block'}}>{'Input'}</h3>
                {hasExampleData('QUERY_STRING', endpoint.queryString) || hasExampleData('POST_BODY', endpoint.postBody) || hasExampleData('PATH_PARAM', endpoint.pathParams) ?
                <span
                    className='m-l-1 clickable hdr-btn-adj-text'
                    onClick={onFillConsoleSampleData.bind(null, id)}
                >
                {' Fill with Sample Data'}
                </span> : null}
            </div>
            <div style={{marginBottom: '10px'}}>
                    <button
                        className='btn btn-primary'
                        onClick={
                            (e) => {
                                e.preventDefault();
                                onSubmitConsoleRequest(endpoint, id);
                            }
                        }
                        type={'button'}
                    >
                        {'Submit'}
                    </button>
                    <span
                        className='m-l-1 clickable hdr-btn-adj-text'
                        onClick={onResetConsole.bind(null, id)}
                        type='reset'>
                    {'Reset'}
                    </span>
            </div>
        {endpoint.pathParams ? <QueryOrPathParamsForm endpoint={endpoint} endpointId={id} onInputChange={onPathParamChanged} onSubmitConsoleRequest={onSubmitConsoleRequest} paramType={'PATH'} params={endpoint.pathParams}/> : null}
        {endpoint.queryString ? <QueryOrPathParamsForm endpoint={endpoint} endpointId={id} onInputChange={onQueryParamChanged} onSubmitConsoleRequest={onSubmitConsoleRequest} paramType={'QUERY_STRING'} params={endpoint.queryString}/> : null}
        {endpoint.postBody ? <PostBodyForm endpoint={endpoint} id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onPostBodyInputChanged={onPostBodyInputChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onSubmitConsoleRequest={onSubmitConsoleRequest} onToggleShowExcludedPostBodyProps={onToggleShowExcludedPostBodyProps} postBody={endpoint.postBody} postBodyData={endpoint.postBodyData} showExcludedPostBodyFields={endpoint.showExcludedPostBodyFields}/> : null}
        {endpoint.postBody ?
            <div style={{marginBottom: '10px'}}>
                <button
                    className='btn btn-primary'
                    onClick={
                        (e) => {
                            e.preventDefault();
                            onSubmitConsoleRequest(endpoint, id);
                        }
                    }
                    type={'button'}
                >
                {'Submit'}
                </button>
                <span
                    className='m-l-1 hdr-btn-adj-text clickable'
                    onClick={onResetConsole.bind(null, id)}
                    type='reset'>
                    {'Reset'}
                </span>
            </div> : null}
            <div style={{background: 'blue', height: 'auto'}}></div>
        </div>
    );
};

ConsoleInputForm.displayName = 'Console Input Form';
ConsoleInputForm.propTypes = {

};

export default ConsoleInputForm;
