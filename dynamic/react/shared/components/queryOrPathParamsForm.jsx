/* Stateless component for either a query string or
 * path parameter that comes in an api request
 */

import React from 'react';

const PARAM_TYPES = {
    QUERY_STRING: 'QUERY_STRING',
    PATH: 'PATH'
};

const QueryOrPathParamsForm = ({endpoint, paramType, params, onInputChange, onSubmitConsoleRequest}) => {
    return (
        <form className={'api-console-input-section'} onSubmit={
            (e) => {
                e.preventDefault();
                onSubmitConsoleRequest(endpoint);
            }
        }>
            <h4 className={'api-console-section-header'}>{paramType === PARAM_TYPES.QUERY_STRING ? 'Query String' : 'Path Parameters'}</h4>
            {Object.keys(params).map((key, i) => {
                return (
                    <div className={'form-group'} key={i}>
                        <label className={'api-label-text'} htmlFor={`${endpoint.id}-qs-${i}`}>{key}</label>
                        {params[key].enum && params[key].enum.length ?
                            <select
                                className={'form-control'}
                                id={`${endpoint.id}-qs-${i}`}
                                onChange={(e) => {
                                    onInputChange(e.target.value, key, endpoint.id);
                                }}
                                value={params[key].value}
                            >
                                <option value={''}>{''}</option>
                                {params[key].enum.map((option, ii) => (<option key={ii} value={option}>{option}</option>))}
                            </select> :
                            <input
                                className={'form-control'}
                                id={`${endpoint.id}-qs-${i}`}
                                onChange={
                                    (e) => {
                                        onInputChange(e.target.value, key, endpoint.id);
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
        id: React.PropTypes.number.isRequired,
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
        requestSchema: React.PropTypes.object,
        postBody: React.PropTypes.oneOf([React.PropTypes.object, React.PropTypes.array])
    }).isRequired,
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
