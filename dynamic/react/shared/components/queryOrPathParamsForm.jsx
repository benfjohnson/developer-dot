/* Stateless component for either a querystring or
 * path parameter that comes in an api request
 */

import React from 'react';

const PARAM_TYPES = {
    QUERY_STRING: 'QUERY_STRING',
    PATH: 'PATH'
};

const QueryOrPathParamsForm = ({endpoint, endpointId, paramType, params, onInputChange, onSubmitConsoleRequest}) => {
    return (
        <form className={'api-console-input-section'} onSubmit={
            (e) => {
                e.preventDefault();
                onSubmitConsoleRequest(endpoint, endpointId);
            }
        }>
            <h4 className={'api-console-section-header'}>{paramType === PARAM_TYPES.QUERY_STRING ? 'Query String' : 'Path Parameters'}</h4>
            {Object.keys(params).map((key, i) => {
                return (
                    <div className={'form-group'} key={i}>
                        <label className={'api-label-text'} htmlFor={`${endpointId}-qs-${i}`}>{key}</label>
                        {params[key].enum && params[key].enum.length ?
                            <select
                                className={'form-control'}
                                id={`${endpointId}-qs-${i}`}
                                onChange={(e) => {
                                    onInputChange(e.target.value, key, endpointId);
                                }}
                                value={params[key].value}
                            >
                                <option value={''}>{''}</option>
                                {params[key].enum.map((option, ii) => (<option key={ii} value={option}>{option}</option>))}
                            </select> :
                            <input
                                className={'form-control'}
                                id={`${endpointId}-qs-${i}`}
                                onChange={
                                    (e) => {
                                        onInputChange(e.target.value, key, endpointId);
                                    }
                                }
                                value={params[key].value}
                            />
                        }
                    </div>
                );
            })}
            <input style={{display: 'none'}} type={'submit'} value={'submit'}/>
        </form>
    );
};

QueryOrPathParamsForm.displayName = 'Request Parameters';
QueryOrPathParamsForm.propTypes = {
    endpoint: React.PropTypes.shape({
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        }),
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        curl: React.PropTypes.string.isRequired,
        isAuthenticated: React.PropTypes.bool.isRequired,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        queryString: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        pathParams: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        postBody: React.PropTypes.object
    }).isRequired,
    endpointId: React.PropTypes.number.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired,
    paramType: React.PropTypes.oneOf(['QUERY_STRING', 'PATH']).isRequired,
    params: React.PropTypes.objectOf(
        React.PropTypes.shape({
            description: React.PropTypes.string,
            example: React.PropTypes.any,
            required: React.PropTypes.bool,
            value: React.PropTypes.any.isRequired
        })
    )
};

export default QueryOrPathParamsForm;
