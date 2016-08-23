import React from 'react';
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
    onInputChange: React.PropTypes.func.isRequired,
    onSubmitRequest: React.PropTypes.func.isRequired,
    recipes: React.PropTypes.array.isRequired
};

export default RecipeConsoles;
