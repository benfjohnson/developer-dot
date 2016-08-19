import React from 'react';
import ConsoleLiveData from '../../shared/components/consoleLiveData';
// TODO: REPLACE THIS WITH A CUSTOM FORM
import ConsoleInputForm from '../../shared/components/consoleInputForm';

// Helper that determines what part of the endpoint is shown in the `Request` input of
// the ConsoleLiveData component
const getRequest = (endpoint) => {
    if (endpoint.postBodyData) {
        return endpoint.postBodyData;
    } else if (endpoint.pathParams || endpoint.queryString) {
        return endpoint.curl;
    }
    return null;
};

const Recipe = (props) => {
    return (
        <div className={'api-console-output'}>
            <ConsoleInputForm {...props} />
            <ConsoleLiveData
                    action={props.endpoint.action}
                    path={props.endpoint.path}
                    request={getRequest(props.endpoint)}
                    response={props.endpoint.apiResponse} />
        </div>
    );
};

Recipe.displayName = 'Recipe API Console';
Recipe.propTypes = {
    endpoint: React.PropTypes.object
};

export default Recipe;
