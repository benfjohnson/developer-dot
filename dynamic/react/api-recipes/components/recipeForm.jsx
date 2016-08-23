/* Component to render an `API Console Recipe Form`
 * This form takes in:
 * `request`         : JSON Post Body with one or more fields containing a placeholder ${...}
 *  ...                value, to be replaced by values in the `inputs` variable
 * `inputs`          : Array of inputs we want to allow a user to manipulate
 * `onInputChange`   : Handler for mapping new form input to the corresponding ${} `request` fields
 * `onSubmitRequest` : Handler that determines how to render when we've received the results of an
 *  ...              : API request
 */

import React from 'react';

const RecipeForm = ({recipe, request, onInputChange, onSubmitRequest}) => {
    return (
        <form>
            {recipe.inputs.map((input, i) => {
                return (
                    <div className={'form-group'} key={i} style={{width: '40%'}}>
                        <label>{input.name}</label>
                        <input className={'form-control'} onChange={(e) => {
                            onInputChange(recipe.id, input.name, request, e.target.value);
                        }} value={input.value} />
                    </div>
                );
            })}
            <button className={'btn btn-primary'} onClick={(e) => {
                e.preventDefault();
                onSubmitRequest(recipe);
            }} style={{marginBottom: '10px'}}>{'Submit'}</button>
        </form>
    );
};

RecipeForm.displayName = 'Recipe Form';
RecipeForm.propTypes = {
    onInputChange: React.PropTypes.func.isRequired,
    onSubmitRequest: React.PropTypes.func.isRequired,
    recipe: React.PropTypes.object.isRequired,
    request: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
};

export default RecipeForm;
