import React from 'react';
import Recipe from './recipe';

/* eslint-disable react/prop-types */
const RecipeConsoleWrapper = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <h2>{props.endpoint.name}</h2>
            <div style={{margin: '10px'}}>
                {props.endpoint.recipeDescription}
            </div>
            <Recipe {...props} />
        </div>
    );
};

RecipeConsoleWrapper.displayName = 'Api Endpoint - Console Wrapper';

export default RecipeConsoleWrapper;
/* eslint-enable react/prop-types */
