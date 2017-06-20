import React from 'react';
import PropTypes from 'prop-types';
import ConsoleInputForm from './consoleInputForm';
import ConsoleLiveData from './consoleLiveData';

// Helper that determines what part of the endpoint is shown in the `Request` input of
// the ConsoleLiveData component
const getRequest = (endpoint) => {
    if (endpoint.postBody) {
        return endpoint.postBody;
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
    endpoint: PropTypes.shape({
        id: PropTypes.number.isRequired,
        apiResponse: PropTypes.shape({
            status: PropTypes.string.isRequired,
            statusMessage: PropTypes.string.isRequired,
            body: PropTypes.oneOfType([
                PropTypes.object, PropTypes.array
            ]).isRequired
        }),
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
        requestSchema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        showExcludedPostBodyFields: PropTypes.bool.isRequired
    }).isRequired,
    onAddItemToPostbodyCollection: PropTypes.func.isRequired,
    onFillConsoleSampleData: PropTypes.func.isRequired,
    onPathParamChanged: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onQueryParamChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    onResetConsole: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: PropTypes.func.isRequired
};

export default ApiConsole;
