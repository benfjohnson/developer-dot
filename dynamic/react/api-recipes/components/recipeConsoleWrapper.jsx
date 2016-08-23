import React from 'react';
import Recipe from './recipe';

// TODO: This component is pointless, just move this into the recipe.jsx comp.

/* eslint-disable react/prop-types */
const RecipeConsoleWrapper = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <h2>{props.recipe.recipeName}</h2>
            <div style={{margin: '10px'}}>
                {props.recipe.recipeDescription}
            </div>
            <Recipe {...props} />
        </div>
    );
};

RecipeConsoleWrapper.displayName = 'Api Endpoint - Console Wrapper';

export default RecipeConsoleWrapper;
/* eslint-enable react/prop-types */
