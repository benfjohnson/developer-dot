import SampleConsoles from '../components/sampleConsoles';
import {connect} from 'react-redux';
import actions from '../../shared/actions';
import {replaceStringPlaceholders, reduceParamsToKeyValuePair, submitApiRequest, submitProxiedRequest} from '../../shared/helpers';

const mapStateToProps = (state) => {
    return {
        apiEndpoints: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFillConsoleSampleData: (endpointId) => {
            dispatch(actions.fillConsoleSampleData(endpointId));
        },
        onSubmitConsoleRequest: (endpoint) => {
            /* If our endpoint has a defined proxy, use that to make our API console request
            * Otherwise, just use the path specified as `host` in Swagger file
            */
            // const requestPath = endpoint.proxy ? endpoint.proxy.route : endpoint.path;

            // const url = (endpoint.pathParams ? replaceStringPlaceholders(requestPath, reduceParamsToKeyValuePair(endpoint.pathParams)) : requestPath) + (endpoint.qsPath || '');
            // const postBody = endpoint.postBody || null;
            // const proxy = endpoint.proxy && endpoint.proxy.key ? endpoint.proxy : null;

            // submitApiRequest(url, endpoint.action, postBody, proxy)
            // .then((apiResponse) => {
            //     dispatch(actions.submitConsoleRequest(endpoint.id, apiResponse.body, apiResponse.status, apiResponse.statusMessage));
            // })
            // .catch((err) => {
            //     dispatch(actions.submitConsoleRequest(endpoint.id, err, err.message, err.message));
            // });

             // create either a proxied or normal API request
            // Api Reference has complex pathParam/queryString structure (example, fieldType, etc.)
            // Just want key value pairs that our recipes use
            if (endpoint.consoleViewFreeEdit && endpoint.consoleError) {
                dispatch(actions.consoleError(endpoint.id));
            } else {
                // create either a proxied or normal API request
                let apiRequest;

                if (endpoint.proxy) {
                    // Api Reference has complex pathParam/queryString structure (example, fieldType, etc.)
                    // Just want key value pairs that our recipes use
                    apiRequest = submitProxiedRequest.bind(null, {
                        proxy: endpoint.proxy,
                        action: endpoint.action,
                        path: endpoint.path,
                        queryString: reduceParamsToKeyValuePair(endpoint.queryString),
                        pathParams: reduceParamsToKeyValuePair(endpoint.pathParams),
                        postBody: endpoint.postBody || {}
                    });
                } else {
                    const url = (endpoint.pathParams ? replaceStringPlaceholders(endpoint.path, reduceParamsToKeyValuePair(endpoint.pathParams)) : endpoint.path) + (endpoint.qsPath || '');

                    const postBody = endpoint.postBody || null;

                    apiRequest = submitApiRequest.bind(null, url, endpoint.action, postBody);
                }
                // Show Animation here until promise or isLoading comes back or w/e
                dispatch(actions.consoleLoadingAnimation(endpoint.id));

                apiRequest()
                    .then((apiResponse) => {
                        dispatch(actions.submitConsoleRequest(endpoint.id, apiResponse.body, apiResponse.status, apiResponse.statusMessage));
                    })
                    .catch((err) => {
                        dispatch(actions.submitConsoleRequest(endpoint.id, err, err.message, err.message));
                    });
            }
        },
        onPostBodyInputChanged: (endpointId, paramName, newValue) => {
            dispatch(actions.postBodyInputChanged(endpointId, paramName, newValue));
        },
        onRequestChanged: (endpointId, newValue) => {
            dispatch(actions.requestChanged(endpointId, newValue));
        },
        onConsoleToggledReadOnly: (endpointId) => {
            dispatch(actions.consoleToggledReadOnly(endpointId));
        },
        onConsoleToggledFreeEdit: (endpointId) => {
            dispatch(actions.consoleToggledFreeEdit(endpointId));
        },
        onResetConsole: (endpointId) => {
            dispatch(actions.resetConsole(endpointId));
        },
        onQueryParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.queryParamChanged(newValue, paramName, endpointId));
        },
        onAddItemToPostbodyCollection: (paramName, endpointId, itemSchema) => {
            dispatch(actions.addItemToPostbodyCollection(paramName, endpointId, itemSchema));
        },
        onRemovePostbodyCollectionItem: (paramName, endpointId) => {
            dispatch(actions.removePostbodyCollectionItem(paramName, endpointId));
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(SampleConsoles);

export default App;
