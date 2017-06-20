import {connect} from 'react-redux';
import actions from '../../shared/actions';
import EndpointComponent from '../components/endpoint';
import {replaceStringPlaceholders, reduceParamsToKeyValuePair, submitApiRequest, submitProxiedRequest} from '../../shared/helpers';
const mapStateToProps = (state, ownProps) => {
    return {
        apiType: state.apiType,
        sampleContentType: state.sampleContentType,
        endpoint: ownProps.endpoint,
        userProfile: state.userProfile
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
            apiRequest()
            .then((apiResponse) => {
                dispatch(actions.submitConsoleRequest(endpoint.id, apiResponse.body, apiResponse.status, apiResponse.statusMessage));
            })
            .catch((err) => {
                dispatch(actions.submitConsoleRequest(endpoint.id, err, err.message, err.message));
            });
        },
        onPostBodyInputChanged: (endpointId, paramName, newValue) => {
            dispatch(actions.postBodyInputChanged(endpointId, paramName, newValue));
        },
        onResetConsole: (endpointId) => {
            dispatch(actions.resetConsole(endpointId));
        },
        onQueryParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.queryParamChanged(newValue, paramName, endpointId));
        },
        onPathParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.pathParamChanged(newValue, paramName, endpointId));
        },
        onAddItemToPostbodyCollection: (paramName, endpointId, itemSchema) => {
            dispatch(actions.addItemToPostbodyCollection(paramName, endpointId, itemSchema));
        },
        onRemovePostbodyCollectionItem: (paramName, endpointId) => {
            dispatch(actions.removePostbodyCollectionItem(paramName, endpointId));
        },
        onToggleShowExcludedPostBodyProps: (endpointId) => {
            dispatch(actions.toggleShowExcludedPostBodyProps(endpointId));
        }
    };
};

const EndpointContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndpointComponent);

export default EndpointContainer;
