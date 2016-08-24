import React from 'react';
import ConsoleInputForm from './consoleInputForm';
import ConsoleLiveData from './consoleLiveData';

// Helper that determines what part of the endpoint is shown in the `Request` input of
// the ConsoleLiveData component
const getRequest = (endpoint) => {
    if (endpoint.postBodyData) {
        return endpoint.postBodyData;
    } else if (endpoint.pathParams || endpoint.queryString) {
        return endpoint.curl;
    }
    return null;
};

const ApiConsole = (props) => {
    return (
        <div className={'row api-console'}>
            <div className={'col-md-4 col-xs-12 api-console-form-wrapper'}>
                <ConsoleInputForm {...props} />
            </div>
            <div className={'col-md-8 col-xs-12 api-console-output'}>
                <ConsoleLiveData
                    action={props.endpoint.action}
                    path={props.endpoint.path}
                    request={getRequest(props.endpoint)}
                    response={props.endpoint.apiResponse} />
            </div>
        </div>
    );
};

ApiConsole.displayName = 'API Console';
ApiConsole.propTypes = {
    endpoint: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        }),
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
        requestSchema: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        showExcludedPostBodyFields: React.PropTypes.bool.isRequired
    }).isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: React.PropTypes.func.isRequired
};

export default ApiConsole;
