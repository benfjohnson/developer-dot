/* Stateless component for either a querystring or
 * path parameter that comes in an api request
 */

import React from 'react';

const PARAM_TYPES = {
    QUERY_STRING: 'QUERY_STRING',
    PATH: 'PATH'
};

const RequestParams = ({endpointId, paramType, params, onInputChange}) => {
    return (
        <form className={'api-console-input-section'}>
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
                                value={params[key].value || '*select*'}
                            >
                                <option disabled={true} value={'*select*'}>{''}</option>
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
                                   placeholder={params[key].example || null}
                                   value={params[key].value}
                            />
                        }
                    </div>
                );
            })}
        </form>
    );
};

RequestParams.displayName = 'Request Parameters';
RequestParams.propTypes = {
    endpointId: React.PropTypes.number.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
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

export default RequestParams;
