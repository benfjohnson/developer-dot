import React from 'react';
import ConsoleLiveData from '../../shared/components/consoleLiveData';
import RecipeForm from './recipeForm';

// Helper that determines what part of the recipe is shown in the `Request` input of
// the ConsoleLiveData component
const getRequest = (recipe) => {
    if (recipe.postBodyData) {
        return recipe.postBodyData;
    } else if (recipe.pathParams || recipe.queryString) {
        return recipe.curl;
    }
    return null;
};

const Recipe = (props) => {
    return (
        <div>
            <RecipeForm recipe={props.recipe} inputs={props.recipe.inputs} onInputChange={props.onInputChange} onSubmitRequest={props.onSubmitRequest} request={props.recipe.request} />
            <div className={'api-console-output'}>
                <ConsoleLiveData
                    action={props.recipe.action}
                    path={props.recipe.path}
                    request={props.recipe.request.postBody}
                    response={props.recipe.response} />
            </div>
        </div>
    );
};

Recipe.displayName = 'Recipe API Console';
Recipe.propTypes = {
    onInputChange: React.PropTypes.func.isRequired,
    onSubmitRequest: React.PropTypes.func.isRequired,
    recipe: React.PropTypes.object.isRequired
};

export default Recipe;
