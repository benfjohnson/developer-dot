/* Stateless component for either a query string or
 * path parameter that comes in an api request
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const PARAM_TYPES = {
    QUERY_STRING: 'QUERY_STRING',
    PATH: 'PATH'
};

const RequestParamsDocumentation = ({paramType, params}) => {
    return (
        <div>
            <h4 className={'api-doc-header'}>{paramType === PARAM_TYPES.QUERY_STRING ? 'Querystring Parameters' : 'Path Parameters'}</h4>
            {Object.keys(params).map((key, i) => {
                // return (
                //     <div className={'row documentation-parameter-body'} key={i}>
                //         <div className={'col-md-2 api-doc-left-col'}><div className={'api-doc-parameter-name s5'} title={key}>{key}</div>{params[key].required ? <div className={'small-required-text'}>{'Required'}</div> : null}</div>
                //         <div className={'col-md-8 t1'}><ReactMarkdown source={params[key].description || ''} /></div>
                //         <div className={'col-md-2 t3'}>{params[key].fieldType}</div>
                //     </div>
                // );
                return (
                    <div className={'documentation-parameter-body'} key={i}>
                        <div><div className={'api-doc-parameter-name s5'} title={key}>{key}</div>{params[key].required ? <div className={'small-required-text'}>{'Required'}</div> : null}</div>
                        <div className={'t1'}><ReactMarkdown source={params[key].description || ''} /></div>
                        <div className={'t3'}>{params[key].fieldType}</div>
                    </div>
                );
            })}
        </div>
    );
};

RequestParamsDocumentation.displayName = 'Request Parameters';
RequestParamsDocumentation.propTypes = {
    paramType: PropTypes.oneOf(['QUERY_STRING', 'PATH']).isRequired,
    params: PropTypes.objectOf(
        PropTypes.shape({
            fieldType: PropTypes.string.isRequired,
            description: PropTypes.string,
            example: PropTypes.any,
            required: PropTypes.bool,
            value: PropTypes.any.isRequired
        })
    ).isRequired
};

export default RequestParamsDocumentation;
