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

const RecipeForm = ({recipe, request, inputs, onInputChange, onSubmitRequest}) => {
    return (
        <form>
            {inputs.map((input, i) => {
                return (
                    <div className={'form-group'} key={i}>
                        <label>{input.name}</label>
                        <input onChange={(e) => {
                            onInputChange(recipe.id, input.name, request, e.target.value);
                        }} value={input.value} />
                    </div>
                );
            })}
            <button onClick={(e) => {
                e.preventDefault();
                onSubmitRequest(recipe);
            }}>{'Submit son'}</button>
        </form>
    );
};

RecipeForm.displayName = 'Recipe Form';
RecipeForm.propTypes = {
    inputs: React.PropTypes.array.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
    onSubmitRequest: React.PropTypes.func.isRequired,
    request: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
};

export default RecipeForm;
