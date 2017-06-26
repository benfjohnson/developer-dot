import React from 'react';
import PropTypes from 'prop-types';
import ApiConsoleWrapper from './apiConsoleWrapper';

const SampleConsoles = ({apiEndpoints, onAddItemToPostbodyCollection, onConsoleToggledFreeEdit, onConsoleToggledReadOnly, onFillConsoleSampleData, onPostBodyInputChanged, onQueryParamChanged, onRemovePostbodyCollectionItem, onResetConsole, onRequestChanged, onSubmitConsoleRequest}) => {
    return (
        <div>
            <ul className='nav nav-tabs' role='tablist'>
                {apiEndpoints.map((endpoint, i) => (
                        <li className={(i === 0 ? 'active' : '')} key={i}><a data-toggle='tab' href={'#' + endpoint.name.replace(/\s/g, '')} id={endpoint.name.replace(/\s/g, '') + 'tab'} role='tab'>{endpoint.name}</a></li>
                    )
                )}
            </ul>
            <div className='tab-content'>
                {apiEndpoints.map((endpoint, i) => (
                        <ApiConsoleWrapper endpoint={endpoint} key={i} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onConsoleToggledFreeEdit={onConsoleToggledFreeEdit} onConsoleToggledReadOnly={onConsoleToggledReadOnly} onFillConsoleSampleData={onFillConsoleSampleData} onPostBodyInputChanged={onPostBodyInputChanged} onQueryParamChanged={onQueryParamChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} onRequestChanged={onRequestChanged} onResetConsole={onResetConsole} onSubmitConsoleRequest={onSubmitConsoleRequest} />
                    )
                )}
            </div>
        </div>
    );
};

SampleConsoles.displayName = 'Sample API Consoles';
SampleConsoles.propTypes = {
    apiEndpoints: PropTypes.array.isRequired,
    onAddItemToPostbodyCollection: PropTypes.func.isRequired,
    onConsoleToggledFreeEdit: PropTypes.func.isRequired,
    onConsoleToggledReadOnly: PropTypes.func.isRequired,
    onFillConsoleSampleData: PropTypes.func.isRequired,
    onPathParamChanged: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onQueryParamChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    onRequestChanged: PropTypes.func.isRequired,
    onResetConsole: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired
};

export default SampleConsoles;
