import React from 'react';
import ApiConsole from './apiConsole';
import ReactMarkdown from 'react-markdown';
import RequestParamsDocumentation from './requestParamsDocumentation';
import ApiDocumentation from './apiDocumentation';
import {replaceSpacesInStr} from '../helpers';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = (props) => (
    <div data-magellan-target={replaceSpacesInStr(props.endpoint.name)} id={replaceSpacesInStr(props.endpoint.name)}>
        <div className={'endpoint-summary'}>
            <h2>{props.endpoint.name}</h2>
            <a
                href={`#${replaceSpacesInStr(props.endpoint.name)}-console`}
                onClick={
                    () => {
                        $(`#${replaceSpacesInStr(props.endpoint.name)}-console-body`).collapse('show');
                        store.dispatch({
                            type: actionTypes.JUMP_TO_CONSOLE,
                            endpointId: props.id
                        });
                    }
                }
            >{'Try it now!'}</a>
            <br />
            <ReactMarkdown source={props.endpoint.description} />
            <br />
            <br />
            <div>
                <div className={'api-label-text'}>{'Api Endpoint'}</div>
                <div className={'code-snippet-plaintext'}>{`${props.endpoint.action.toUpperCase()} ${props.endpoint.path}`}</div>
                {props.endpoint.postBody ? <div><br /><div className={'api-label-text'}>{'Headers'}</div><div className={'code-snippet-plaintext'}>{'Content-Type: application/json'}</div></div> : null}
            </div>
        </div>
        <br />
        {props.endpoint.queryString ? <RequestParamsDocumentation paramType={'QUERY_STRING'} params={props.endpoint.queryString} /> : null}
        {props.endpoint.pathParams ? <RequestParamsDocumentation paramType={'PATH'} params={props.endpoint.pathParams} /> : null}
        {props.endpoint.requestSchema ? <ApiDocumentation documentationFor={'REQUEST'} id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.requestSchema} /> : null}
        {props.endpoint.responseSchema ? <ApiDocumentation documentationFor={'RESPONSE'} id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.responseSchema} /> : null}
        {props.apiType === 'REST' ? <ApiConsole endpoint={props.endpoint} id={props.id} /> : null}
    </div>
);

EndPointComponent.displayName = 'EndPoint';
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
        postBody: React.PropTypes.object,
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
    id: React.PropTypes.number.isRequired
};

export default EndPointComponent;
