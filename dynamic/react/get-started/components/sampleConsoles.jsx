import React from 'react';
import ApiConsole from '../../shared/components/apiConsole';

const SampleConsoles = ({apiEndpoints, onAddItemToPostbodyCollection, onConsoleVisibilityToggle, onFillConsoleSampleData, onPathParamChanged, onPostBodyInputChanged, onQueryParamChanged, onRemovePostbodyCollectionItem, onResetConsole, onSubmitConsoleRequest}) => {
    return (
        <div>
            {apiEndpoints.map((endpoint, i) => (
                <ApiConsole endpoint={endpoint} id={i} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onConsoleVisibilityToggle={onConsoleVisibilityToggle} onFillConsoleSampleData={onFillConsoleSampleData} onPathParamChanged={onPathParamChanged} onPostBodyInputChanged={onPostBodyInputChanged} onQueryParamChanged={onQueryParamChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onResetConsole={onResetConsole} onSubmitConsoleRequest={onSubmitConsoleRequest} />
                )
            )}
        </div>
    );
};

export default SampleConsoles;
