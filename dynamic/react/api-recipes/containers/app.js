import RecipeConsoles from '../components/recipeConsoles';
import {connect} from 'react-redux';
import {actions} from '../actions';
import {replaceStringPlaceholders, buildQueryString} from '../helpers';
import AWS from 'aws-sdk';
AWS.config.region = 'us-west-2';

const mapStateToProps = (state) => {
    return {
        recipes: state
    };
};

const getRequestConfig = (recipe, authentication = '') => {
    const req = {
        method: recipe.action,
        headers: {}
    };

    if (recipe.request && recipe.request.postBody) {
        req.headers['Content-Type'] = 'application/json';
        req.body = JSON.stringify(recipe.request.postBody);
    }
    if (authentication) {
        req.headers[authentication.name] = authentication.value;
    }
    return req;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (recipeId, inputName, requestBody, newValue) => {
            dispatch(actions.inputChange(recipeId, inputName, requestBody, newValue));
        },
        onSubmitRequest: (recipe) => {
            const requestPath = recipe.proxy ? recipe.proxy.route : recipe.path;

            const url = replaceStringPlaceholders(requestPath, recipe.request.pathParams || {}) + buildQueryString(recipe.request.queryString || {});
            let status;
            let statusMessage;

            if (recipe.proxy && recipe.proxy.key) {
                const [bucket, key] = recipe.proxy.key.location.split('/');
                const keyBucket = new AWS.S3({params: {Bucket: bucket, Key: key}});

                keyBucket.makeUnauthenticatedRequest('getObject', {}).promise()
                .then((bucketResponse) => fetch(url, getRequestConfig(recipe, {
                    name: recipe.proxy.key.name,
                    value: bucketResponse.Body
                })))
                .then((rawApiRes) => {
                    status = rawApiRes.status.toString();
                    statusMessage = rawApiRes.statusText;
                    return rawApiRes.json();
                })
                .then((apiResponse) => {
                    dispatch(actions.submitRequest(recipe.id, apiResponse, status, statusMessage));
                })
                .catch((err) => {
                    dispatch(actions.submitRequest(recipe.id, err.message));
                });
            } else {
                fetch(url, getRequestConfig(recipe))
                .then((rawApiRes) => {
                    status = rawApiRes.status.toString();
                    statusMessage = rawApiRes.statusText;
                    return rawApiRes.json();
                })
                .then((apiResponse) => {
                    dispatch(actions.submitRequest(recipe.id, apiResponse, status, statusMessage));
                })
                .catch((err) => {
                    dispatch(actions.submitRequest(recipe.id, err.message));
                });
            }
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeConsoles);

export default App;
