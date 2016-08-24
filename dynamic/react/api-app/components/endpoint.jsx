import React from 'react';
import ApiConsole from '../../shared/components/apiConsole';
import ReactMarkdown from 'react-markdown';
import RequestParamsDocumentation from './requestParamsDocumentation';
import ApiDocumentation from './apiDocumentation';
import ExpanderIcon from './expanderIcon';

const replaceSpaces = (str) => str.replace(/\s/g, '');

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = ({endpoint, sampleAuthHeader, sampleContentType, apiType, id, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, onToggleShowExcludedPostBodyProps}) => (
    <div id={replaceSpaces(endpoint.operationId)}>
        <div className={'endpoint-summary'}>
            <h2>{endpoint.name}</h2>
            {
                apiType === 'REST' ?
                <div>
                    <h5 className={'try-it-now-link'}><a
                        href={`#${replaceSpaces(endpoint.operationId)}-console`}
                        onClick={
                            () => {
                                $(`#${replaceSpaces(endpoint.operationId)}-console-body`).collapse('show');
                                $(`#${replaceSpaces(endpoint.operationId)}-console-icon`).addClass('rotate');
                                const intervalId = setInterval(() => {
                                    $('#the-nav').affix('checkPosition');
                                }, 20);

                                setTimeout(() => clearInterval(intervalId), 350);
                            }
                        }
                    >{'Try ' + endpoint.name + ' now!'}</a></h5>
                    <br />
                    <br />
                </div> : null
            }
            {
                endpoint.description ?
                <div>
                    <ReactMarkdown source={endpoint.description} />
                </div> : null
            }
            <div>
                <div className={'api-label-text'}>{'Api Endpoint'}</div>
                <div className={'code-snippet-plaintext'}>
                    <span>{`${endpoint.action.toUpperCase()} ${endpoint.path}`}</span>
                </div>
                {sampleAuthHeader || sampleContentType ?
                    <div>
                        <br />
                        <div className={'api-label-text'}>{'Headers'}</div>
                        <div className={'code-snippet-plaintext'}>
                            {sampleAuthHeader ? <span style={{display: 'block'}}>{`Authorization: ${sampleAuthHeader}`}</span> : null}
                            {sampleContentType ? <span style={{display: 'block'}}>{`Content-Type: ${sampleContentType}`}</span> : null}
                            {endpoint.headerParams && endpoint.headerParams.SOAPAction ? <span style={{display: 'block'}}>{`SOAPAction: ${endpoint.headerParams.SOAPAction.example}`}</span> : null}
                        </div>
                    </div> :
                null}
            </div>
            <br />
        </div>
        {endpoint.queryString ? <RequestParamsDocumentation paramType={'QUERY_STRING'} params={endpoint.queryString} /> : null}
        {endpoint.pathParams ? <RequestParamsDocumentation paramType={'PATH'} params={endpoint.pathParams} /> : null}
        {endpoint.requestSchema ? <ApiDocumentation documentationFor={'REQUEST'} id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} requestOrResponseSchema={endpoint.requestSchema} /> : null}
        {endpoint.responseSchema ? <ApiDocumentation documentationFor={'RESPONSE'} id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} requestOrResponseSchema={endpoint.responseSchema} /> : null}
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
                    <ApiConsole endpoint={endpoint} id={id} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onFillConsoleSampleData={onFillConsoleSampleData} onPathParamChanged={onPathParamChanged} onPostBodyInputChanged={onPostBodyInputChanged} onQueryParamChanged={onQueryParamChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onResetConsole={onResetConsole} onSubmitConsoleRequest={onSubmitConsoleRequest} onToggleShowExcludedPostBodyProps={onToggleShowExcludedPostBodyProps} showExcludedPostBodyFields={endpoint.showExcludedPostBodyFields}/>
                </div>
            </div> : null}
    </div>
);

EndPointComponent.displayName = 'Api Endpoint';

EndPointComponent.propTypes = {
    apiType: React.PropTypes.oneOf(['REST', 'SOAP']).isRequired,
    endpoint: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        curl: React.PropTypes.string.isRequired,
        isAuthenticated: React.PropTypes.bool.isRequired,
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
        postBodyData: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
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
    id: React.PropTypes.number.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: React.PropTypes.func.isRequired,
    sampleAuthHeader: React.PropTypes.string,
    sampleContentType: React.PropTypes.array
};

export default EndPointComponent;
