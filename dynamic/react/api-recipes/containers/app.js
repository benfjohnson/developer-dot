import RecipeConsoles from '../components/recipeConsoles';
import {connect} from 'react-redux';
import {actions} from '../actions';
import request from 'request';
import {replaceStringPlaceholders, buildQueryString} from '../helpers';

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
            const apiReq = {
                url: url,
                headers: {}
            };

            if (recipe.proxy && recipe.proxy.key) {
                apiReq.headers[recipe.proxy.key.name] = recipe.proxy.key.value;
            }

            if (recipe.request && recipe.request.postBody) {
                apiReq.headers['Content-Type'] = 'application/json';
                apiReq.body = JSON.stringify(recipe.request.postBody);
            }

            request[recipe.action](apiReq, (error, response, body) => {
                let responseBody = {};

                try {
                    responseBody = JSON.parse(body);
                } catch (err) {
                    responseBody.error = err.message;
                }

                dispatch(actions.submitRequest(recipe.id, responseBody, response, error));
            });
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeConsoles);

export default App;
