import React from 'react';
import ReactMarkdown from 'react-markdown';

const ApiDocumentationParam = ({params, type}) => (
    <tbody>

        {Object.keys(params || {}).map((param) => {
            return (<tr>
                <td>{type}</td>
                <td>{param}</td>
                <td>
                    {(params[param].required) ? 'Required' : 'Optional'}
                    {', '}
                    {params[param].fieldType}
                </td>
                <td><ReactMarkdown source={params[param].description} /></td>
            </tr>);
        })}
    </tbody>
);

ApiDocumentationParam.displayName = 'API Documentation';
ApiDocumentationParam.propTypes = {
    params: React.PropTypes.object,
    type: React.PropTypes.string
};

export default ApiDocumentationParam;
