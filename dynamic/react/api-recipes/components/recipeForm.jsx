/* Component to render an `API Console Recipe Form`
 * This form takes in:
 * `recipe`          : Object containing the following relevant properties:
 *     -> `id`       : Simple int id so that our reducer can update the correct recipe
 *     -> `request`  : JSON Post Body with one or more fields containing a placeholder ${...}
 *     ...             value, to be replaced by values in the `inputs` variable
 *     -> `inputs`   : Array of inputs we want to allow a user to manipulate
 * `onInputChange`   : Handler for mapping new form input to the corresponding ${} `request` fields
 * `onSubmitRequest` : Handler that determines how to render when we've received the results of an
 *  ...              : API request
 */

import React from 'react';
import PropTypes from 'prop-types';

const RecipeForm = ({recipe, onInputChange, onSubmitRequest}) => {
    return (
        <form>
            {recipe.inputs.map((input, i) => {
                return (
                    <div className={'form-group'} key={i} style={{width: '40%'}}>
                        <label>{input.name}</label>
                        {input.enum ?
                            <select className={'form-control'} onChange={(e) => {
                                onInputChange(recipe.id, input.name, recipe.request, e.target.value);
                            }} value={input.value}>
                                <option value={''}>{''}</option>
                                {input.enum.map((opt, j) => (<option key={j} value={opt.value}>{opt.show}</option>))}
                            </select> :
                            <input className={'form-control'} onChange={(e) => {
                                onInputChange(recipe.id, input.name, recipe.request, e.target.value);
                            }} value={input.value} />
                        }
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
    onInputChange: PropTypes.func.isRequired,
    onSubmitRequest: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired
};

export default RecipeForm;
