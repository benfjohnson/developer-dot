import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ApiDocumentationParam = ({params, type}) => (
    <tbody>

        {Object.keys(params || {}).map((param, i) => {
            return (<tr key={i}>
                <td>{type}</td>
                <td>{param}</td>
                <td>
                    {(params[param].required) ? 'Required' : 'Optional'}
                    {', '}
                    {params[param].fieldType}
                </td>
                <td><ReactMarkdown source={params[param].description || ''} /></td>
            </tr>);
        })}
    </tbody>
);

ApiDocumentationParam.displayName = 'API Documentation';
ApiDocumentationParam.propTypes = {
    params: PropTypes.object,
    type: PropTypes.string
};

export default ApiDocumentationParam;
