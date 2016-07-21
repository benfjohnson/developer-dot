/* Stateless component for either a querystring or
 * path parameter that comes in an api request
 */

import React from 'react';

const PARAM_TYPES = {
    QUERY_STRING: 'QUERY_STRING',
    PATH: 'PATH'
};

const RequestParamsDocs = ({paramType, params}) => {
    return (
        <div>
            <h3>{paramType === PARAM_TYPES.QUERY_STRING ? 'Querystring Paramters' : 'Path Parameters'}</h3>
            {Object.keys(params).map((key, i) => {
                return (
                    <div className={'row'} key={i}>
                        <div className={'medium-2 columns'}>{key}{params[key].required ? <div>{'Required'}</div> : null}</div>
                        <div className={'medium-8 columns'}>{params[key].description}</div>
                        <div className={'medium-2 columns'}>{params[key].fieldType}</div>
                    </div>
                );
            })}
        </div>
    );
};

RequestParamsDocs.displayName = 'Request Parameters';
RequestParamsDocs.propTypes = {
    paramType: React.PropTypes.oneOf(['QUERY_STRING', 'PATH']).isRequired,
    params: React.PropTypes.objectOf(
        React.PropTypes.shape({
            fieldType: React.PropTypes.string.isRequired,
            description: React.PropTypes.string,
            example: React.PropTypes.any,
            required: React.PropTypes.bool,
            value: React.PropTypes.any.isRequired
        })
    ).isRequired
};

export default RequestParamsDocs;
