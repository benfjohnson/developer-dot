import React from 'react';
import PropTypes from 'prop-types';
import ApiConsole from '../../shared/components/apiConsole';
import ApiDocumentation from './apiDocumentation';
import EndpointExamples from './endpointExamples';
import ExpanderIcon from './expanderIcon';

const replaceSpaces = (str) => str.replace(/\s/g, '');

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = ({endpoint, apiType, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, onToggleShowExcludedPostBodyProps}) => (
    <div className={'endpoint-summary'}>
        <ApiDocumentation endpoint={endpoint} />
        <br />
        {apiType === 'REST' ?
            <div>
                <div className={'try-it-now-header'} data-target={`#${replaceSpaces(endpoint.operationId)}-console-body`} data-toggle={'collapse'} id={`${replaceSpaces(endpoint.operationId)}-console`} onClick={
                    () => {
                        $(`#${replaceSpaces(endpoint.operationId)}-console-icon`).toggleClass('rotate');
                    }
                }>
                    <div className={'documentation-expand-icon'} id={`${replaceSpaces(endpoint.operationId)}-console-icon`} style={{display: 'inline-block', marginRight: '5px'}}>
                        <ExpanderIcon startPosition={'DOWN'}/>
                    </div>
                    <h5 className={'clickable'} style={{display: 'inline-block'}}>{'Try ' + endpoint.name + ' now!'}</h5>
                </div>
                <div className={'collapse'} id={`${replaceSpaces(endpoint.operationId)}-console-body`}>
                    <ApiConsole endpoint={endpoint} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onFillConsoleSampleData={onFillConsoleSampleData} onPathParamChanged={onPathParamChanged} onPostBodyInputChanged={onPostBodyInputChanged} onQueryParamChanged={onQueryParamChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onResetConsole={onResetConsole} onSubmitConsoleRequest={onSubmitConsoleRequest} onToggleShowExcludedPostBodyProps={onToggleShowExcludedPostBodyProps} showExcludedPostBodyFields={endpoint.showExcludedPostBodyFields}/>
                </div>
            </div> : null}
            <EndpointExamples endpoint={endpoint} />
    </div>
);

EndPointComponent.displayName = 'Api Endpoint';

EndPointComponent.propTypes = {
    apiType: PropTypes.oneOf(['REST', 'SOAP']).isRequired,
    endpoint: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        curl: PropTypes.string.isRequired,
        sampleAuthHeader: PropTypes.string,
        path: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        queryString: PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                example: PropTypes.any,
                required: PropTypes.bool,
                value: PropTypes.any.isRequired
            })
        ),
        pathParams: PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                example: PropTypes.any,
                required: PropTypes.bool,
                value: PropTypes.any.isRequired
            })
        ),
        postBody: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        requestSchema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        responseSchema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        showExcludedPostBodyFields: PropTypes.bool.isRequired,
        apiResponse: PropTypes.shape({
            status: PropTypes.string.isRequired,
            statusMessage: PropTypes.string.isRequired,
            body: PropTypes.oneOfType([
                PropTypes.object, PropTypes.array
            ]).isRequired
        })
    }).isRequired,
    onAddItemToPostbodyCollection: PropTypes.func.isRequired,
    onFillConsoleSampleData: PropTypes.func.isRequired,
    onPathParamChanged: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onQueryParamChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    onResetConsole: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: PropTypes.func.isRequired,
    sampleContentType: PropTypes.array
};

export default EndPointComponent;
