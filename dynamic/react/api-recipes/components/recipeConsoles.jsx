import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './recipe';

const RecipeConsoles = (props) => {
    return (
        <div>
            {props.recipes.map((recipe, i) => (
                <Recipe key={i} onInputChange={props.onInputChange} onSubmitRequest={props.onSubmitRequest} recipe={recipe} />
            ))}
        </div>
    );
};

RecipeConsoles.displayName = 'Recipe Consoles';
RecipeConsoles.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onSubmitRequest: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired
};

export default RecipeConsoles;
