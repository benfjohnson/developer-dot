import RecipeConsoles from '../components/recipeConsoles';
import {connect} from 'react-redux';
import {actions} from '../actions';
import {replaceStringPlaceholders, buildQueryString} from '../helpers';
import {submitApiRequest} from '../../shared/helpers';

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
            const requestPath = recipe.proxy ? recipe.proxy.route : recipe.path;

            const url = replaceStringPlaceholders(requestPath, recipe.request.pathParams || {}) + buildQueryString(recipe.request.queryString || {});

            const postBody = recipe.request && recipe.request.postBody ? recipe.request.postBody : null;
            const proxy = recipe.proxy && recipe.proxy.key ? recipe.proxy : null;

            submitApiRequest(url, recipe.action, postBody, proxy)
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
