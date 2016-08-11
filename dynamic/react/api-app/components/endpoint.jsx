import React from 'react';
import ApiConsole from '../../shared/components/apiConsole';
import ReactMarkdown from 'react-markdown';
import RequestParamsDocumentation from './requestParamsDocumentation';
import ApiDocumentation from './apiDocumentation';
import ExpanderIcon from './expanderIcon';

const replaceSpaces = (str) => str.replace(/\s/g, '_');

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = ({endpoint, apiType, id, onJumpToConsole, onToggleDocCollapse, onConsoleVisibilityToggle, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => (
    <div id={replaceSpaces(endpoint.name)}>
        <div className={'endpoint-summary'}>
            <h2>{endpoint.name}</h2>
            {
                apiType === 'REST' ?
                <a
                    href={`#${replaceSpaces(endpoint.name)}-console`}
                    onClick={
                        () => {
                            $(`#${replaceSpaces(endpoint.name)}-console-body`).collapse('show');
                            onJumpToConsole(id);
                        }
                    }
                >{'Try it now!'}</a> : null
            }
            <br />
            <br />
            {
                endpoint.description ?
                <div>
                    <ReactMarkdown source={endpoint.description} />
                </div> : null
            }
            <div>
                <div className={'api-label-text'}>{'Api Endpoint'}</div>
                <div className={'code-snippet-plaintext'}>{`${endpoint.action.toUpperCase()} ${endpoint.path}`}</div>
                {endpoint.postBody ? <div><br /><div className={'api-label-text'}>{'Headers'}</div><div className={'code-snippet-plaintext'}>{'Content-Type: application/json'}</div></div> : null}
            </div>
        </div>
        <br />
        {endpoint.queryString ? <RequestParamsDocumentation paramType={'QUERY_STRING'} params={endpoint.queryString} /> : null}
        {endpoint.pathParams ? <RequestParamsDocumentation paramType={'PATH'} params={endpoint.pathParams} /> : null}
        {endpoint.requestSchema ? <ApiDocumentation documentationFor={'REQUEST'} id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} onToggleDocCollapse={onToggleDocCollapse} postBody={endpoint.requestSchema} /> : null}
        {endpoint.responseSchema ? <ApiDocumentation documentationFor={'RESPONSE'} id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} onToggleDocCollapse={onToggleDocCollapse} postBody={endpoint.responseSchema} /> : null}
        {apiType === 'REST' ?
            <div>
                <div className={'try-it-now-header'} data-target={`#${replaceSpaces(endpoint.name)}-console-body`} data-toggle={'collapse'} id={replaceSpaces(`${endpoint.name}-console`)} onClick={
                    () => {
                        onConsoleVisibilityToggle(id);
                    }
                }>
                    <div className={'documentation-expand-icon' + (endpoint.apiConsoleVisible ? ' rotate' : '')} style={{display: 'inline-block', marginRight: '5px'}}>
                        <ExpanderIcon />
                    </div>
                    <span>{'Try it now! '}</span>
                </div>
                <div className={'collapse'} id={`${replaceSpaces(endpoint.name)}-console-body`}>
                    <ApiConsole endpoint={endpoint} id={id} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onFillConsoleSampleData={onFillConsoleSampleData} onPathParamChanged={onPathParamChanged} onPostBodyInputChanged={onPostBodyInputChanged} onQueryParamChanged={onQueryParamChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onResetConsole={onResetConsole} onSubmitConsoleRequest={onSubmitConsoleRequest}/>
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
        postBody: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        postBodyData: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        requestSchema: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        responseSchema: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        }),
        apiConsoleVisible: React.PropTypes.bool.isRequired
    }).isRequired,
    id: React.PropTypes.number.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onConsoleVisibilityToggle: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onJumpToConsole: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired,
    onToggleDocCollapse: React.PropTypes.func.isRequired
};

export default EndPointComponent;
