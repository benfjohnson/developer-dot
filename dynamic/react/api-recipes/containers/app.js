import RecipeConsoles from '../components/recipeConsoles';
import {connect} from 'react-redux';
import {actions} from '../actions';
import {replaceStringPlaceholders, buildQueryString, submitApiRequest, submitProxiedRequest} from '../../shared/helpers';

const mapStateToProps = (state) => {
    return {
        recipes: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (recipeId, inputName, requestBody, newValue) => {
            dispatch(actions.inputChange(recipeId, inputName, requestBody, newValue));
        },
        onSubmitRequest: (recipe) => {
            let apiRequest;

            if (recipe.proxy) {
                apiRequest = submitProxiedRequest.bind(null, {
                    proxy: recipe.proxy,
                    action: recipe.action,
                    path: recipe.path,
                    queryString: recipe.request.queryString || {},
                    pathParams: recipe.request.pathParams || {},
                    postBody: recipe.request.postBody || {}
                });
            } else {
                const url = replaceStringPlaceholders(recipe.path, recipe.request.pathParams || {}) + buildQueryString(recipe.request.queryString || {});
                const postBody = recipe.request && recipe.request.postBody ? recipe.request.postBody : null;

                apiRequest = submitApiRequest.bind(null, url, recipe.action, postBody);
            }

            apiRequest()
            .then((apiResponse) => {
                dispatch(actions.submitRequest(recipe.id, apiResponse.body, apiResponse.status, apiResponse.statusMessage));
            })
            .catch((err) => {
                dispatch(actions.submitRequest(recipe.id, err, err.message, err.message));
            });
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeConsoles);

export default App;
