import {connect} from 'react-redux';
import actions from '../../shared/actions';
import EndpointComponent from '../components/endpoint';
import {replacePathParams, submitApiRequest} from '../../shared/helpers';
const mapStateToProps = (state, ownProps) => {
    return {
        apiType: state.apiType,
        sampleAuthHeader: state.sampleAuthHeader,
        sampleContentType: state.sampleContentType,
        endpoint: ownProps.endpoint
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
            const requestPath = endpoint.proxy ? endpoint.proxy.route : endpoint.path;

            const url = (endpoint.pathParams ? replacePathParams(requestPath, endpoint.pathParams) : requestPath) + (endpoint.qsPath || '');
            const postBody = endpoint.postBody || null;
            const proxy = endpoint.proxy && endpoint.proxy.key ? endpoint.proxy : null;

            submitApiRequest(url, endpoint.action, postBody, proxy)
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
