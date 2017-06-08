/* Stateless component for either a query string or
 * path parameter that comes in an api request
 */

import React from 'react';
import PropTypes from 'prop-types';

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
    endpoint: PropTypes.shape({
        id: PropTypes.number.isRequired,
        apiResponse: PropTypes.shape({
            status: PropTypes.string.isRequired,
            statusMessage: PropTypes.string.isRequired,
            body: PropTypes.oneOfType([
                PropTypes.object, PropTypes.array
            ]).isRequired
        }),
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        curl: PropTypes.string.isRequired,
        sampleAuthHeader: PropTypes.string,
        path: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        queryString: PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                example: PropTypes.any,
                required: PropTypes.bool,
                value: PropTypes.any.isRequired
            })
        ),
        pathParams: PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                example: PropTypes.any,
                required: PropTypes.bool,
                value: PropTypes.any.isRequired
            })
        ),
        requestSchema: PropTypes.object,
        postBody: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    }).isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired,
    paramType: PropTypes.oneOf(['QUERY_STRING', 'PATH']).isRequired,
    params: PropTypes.objectOf(
        PropTypes.shape({
            description: PropTypes.string,
            example: PropTypes.any,
            required: PropTypes.bool,
            value: PropTypes.any.isRequired
        })
    )
};

export default QueryOrPathParamsForm;
