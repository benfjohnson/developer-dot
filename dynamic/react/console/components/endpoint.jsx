import React from 'react';
import ApiConsole from './apiConsole';
import ReactMarkdown from 'react-markdown';
import RequestParamsDocs from './requestParamsDocs';
import PostBodyDocs from './PostBodyDocs';

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = (props) => (
    <div data-magellan-target={props.endpoint.name.replace(/\s/g, '_')} id={props.endpoint.name.replace(/\s/g, '_')}>
        <h2>{props.endpoint.name}</h2>
        <a href={'#'}>{'Try it now!'}</a>
        <br />
        <ReactMarkdown source={props.endpoint.description} />
        <br />
        <div>
            <div>{'API ENDPOINT'}</div>
            <div className={'code-snippet-plaintext'}>{`${props.endpoint.action.toUpperCase()} ${props.endpoint.path}`}</div>
            {props.endpoint.postBody ? <div><br /><div>{'HEADERS'}</div><div className={'code-snippet-plaintext'}>{'Content-Type: application/json'}</div></div> : null}
        </div>
        <br />
        {props.endpoint.queryString ? <RequestParamsDocs paramType={'QUERY_STRING'} params={props.endpoint.queryString} /> : null}
        {props.endpoint.pathParams ? <RequestParamsDocs paramType={'PATH'} params={props.endpoint.pathParams} /> : null}
        {props.endpoint.postBody ? <PostBodyDocs documentationFor={'REQUEST'} id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.postBody} /> : null}
        {props.endpoint.responseSchema ? <PostBodyDocs documentationFor={'RESPONSE'} id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.responseSchema} /> : null}
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
        responseSchema: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        })
    }).isRequired,
    id: React.PropTypes.number.isRequired
};

export default EndPointComponent;
