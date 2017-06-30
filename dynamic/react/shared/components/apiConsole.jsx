import React from 'react';
import PropTypes from 'prop-types';
import ConsoleInputForm from './consoleInputForm';
import ConsoleLiveData from './consoleLiveData';
import userManager from '../../api-app/user-manager';

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
    userManager.events.addAccessTokenExpired(function() {
        document.getElementById('tokenExpirationAlert').style.display = 'block';

        setTimeout(function() {
            $('#tokenExpirationAlert').fadeOut();
        }, 60000);
        userManager.removeUser()
        .then(function() {
            props.onAccessTokenExpiration();
        });
    });
    return (
        <div>
            <div className={'alert alert-warning alert-dismissible'} id={'tokenExpirationAlert'} style={{display: 'none'}}>
                <strong>{'Warning!'}</strong>
                <span>{' Access token has expired. Log out and login again to renew.'}</span>
                <button aria-label={'Close'} className={'close'} data-dismiss={'alert'} type={'button'}>
                    <span aria-hidden={'true'}>{'×'}</span>
                </button>
            </div>
            <div className={'row api-console'}>
                <div className={'col-md-4 col-xs-12 api-console-form-wrapper'}>
                    <ConsoleInputForm {...props} />
                </div>
                <div className={'col-md-8 col-xs-12 api-console-output'}>
                    <ConsoleLiveData
                        action={props.endpoint.action}
                        consoleLoading={props.endpoint.apiConsoleLoading}
                        endpoint={props.endpoint}
                        onConsoleToggledFreeEdit={props.onConsoleToggledFreeEdit}
                        onConsoleToggledReadOnly={props.onConsoleToggledReadOnly}
                        onRequestChanged={props.onRequestChanged}
                        onToggleAiForRequest={props.onToggleAiForRequest}
                        path={props.endpoint.path}
                        request={getRequest(props.endpoint)}
                        response={props.endpoint.apiResponse}
                        userProfile={props.userProfile} />
                </div>
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
    onConsoleToggledFreeEdit: PropTypes.func.isRequired,
    onConsoleToggledReadOnly: PropTypes.func.isRequired,
    onFillConsoleSampleData: PropTypes.func.isRequired,
    onPathParamChanged: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onQueryParamChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    onRequestChanged: PropTypes.func.isRequired,
    onResetConsole: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired,
    onToggleAiForRequest: PropTypes.func.isRequest,
    onToggleShowExcludedPostBodyProps: PropTypes.func.isRequired,
    userProfile: PropTypes.object
};

export default ApiConsole;
