import React from 'react';
import ApiConsole from '../../shared/components/apiConsole';
import ApiDocumentation from './apiDocumentation';
import EndpointExamples from './endpointExamples';
import ExpanderIcon from './expanderIcon';

const replaceSpaces = (str) => str.replace(/\s/g, '');

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = ({endpoint, apiType, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, onToggleShowExcludedPostBodyProps}) => (
    <div>
        <ApiDocumentation endpoint={endpoint} />
        <br />
        {apiType === 'REST' ?
            <div>
                <div className={'try-it-now-header'} data-target={`#${replaceSpaces(endpoint.operationId)}-console-body`} data-toggle={'collapse'} id={`${replaceSpaces(endpoint.operationId)}-console`} onClick={
                    () => {
                        $(`#${replaceSpaces(endpoint.operationId)}-console-icon`).toggleClass('rotate');
                        const intervalId = setInterval(() => {
                            $('#the-nav').affix('checkPosition');
                        }, 20);

                        setTimeout(() => clearInterval(intervalId), 350);
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
    apiType: React.PropTypes.oneOf(['REST', 'SOAP']).isRequired,
    endpoint: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        curl: React.PropTypes.string.isRequired,
        sampleAuthHeader: React.PropTypes.string,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        queryString: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        pathParams: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        postBody: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        requestSchema: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        responseSchema: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        showExcludedPostBodyFields: React.PropTypes.bool.isRequired,
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        })
    }).isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: React.PropTypes.func.isRequired,
    sampleContentType: React.PropTypes.array
};

export default EndPointComponent;
