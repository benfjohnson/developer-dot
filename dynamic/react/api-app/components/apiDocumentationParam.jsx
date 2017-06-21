import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ApiDocumentationParam = ({params, type, currentOperation}) => (
    <tbody>

        {Object.keys(params || {}).map((param, i) => {
            return (<tr key={i}>
                <td>{type}</td>
                <td>
                    {(params[param].enum) ?
                        <a href={`../enums/${currentOperation.replace(/\s/g, '')} > ${param}`}>{param}</a> :
                        param
                    }
                </td>
                <td>
                    {(params[param].required) ? 'Required' : 'Optional'}
                    {', '}
                    {(params[param].enum) ? 'Enum' : params[param].fieldType}
                </td>
                <td><ReactMarkdown className={'markdown-description'} source={params[param].description || ''} /></td>
            </tr>);
        })}
    </tbody>
);

ApiDocumentationParam.displayName = 'API Documentation';
ApiDocumentationParam.propTypes = {
    currentOperation: PropTypes.string,
    params: PropTypes.object,
    type: PropTypes.string
};

export default ApiDocumentationParam;
