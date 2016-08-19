import React from 'react';
import RecipeConsoleWrapper from './recipeConsoleWrapper';

const RecipeConsoles = (props) => {
    return (
        <div>
            {props.apiEndpoints.map((endpoint, i) => (
                <RecipeConsoleWrapper endpoint={endpoint} id={i} key={i} onAddItemToPostbodyCollection={props.onAddItemToPostbodyCollection} onFillConsoleSampleData={props.onFillConsoleSampleData} onPathParamChanged={props.onPathParamChanged} onPostBodyInputChanged={props.onPostBodyInputChanged} onQueryParamChanged={props.onQueryParamChanged} onRemovePostbodyCollectionItem={props.onRemovePostbodyCollectionItem} onResetConsole={props.onResetConsole} onSubmitConsoleRequest={props.onSubmitConsoleRequest} onToggleShowExcludedPostBodyProps={props.onToggleShowExcludedPostBodyProps} />
            ))}
        </div>
    );
};

RecipeConsoles.displayName = 'Recipe Consoles';
RecipeConsoles.propTypes = {
    apiEndpoints: React.PropTypes.array.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: React.PropTypes.func.isRequired
};

export default RecipeConsoles;
