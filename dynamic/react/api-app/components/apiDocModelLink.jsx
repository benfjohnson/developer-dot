import React from 'react';
import PropTypes from 'prop-types';

const ApiDocModelLink = ({refSchema}) => {
    if (!refSchema) {
        return null;
    }

    const schema = refSchema.schema;

    if (schema.type === 'array' && schema.items && schema.items.$ref) {
        return (
            <span>
                {'Array['}
                <a href={`/${window.modelsPath}/${encodeURI(schema.items.$ref.split('/').pop())}`}>
                    {schema.items.$ref.split('/').pop()}
                </a>
                {']'}
            </span>
        );
    } else if (schema.$ref) {
        return (
            <a href={`/${window.modelsPath}/${encodeURI(schema.$ref.split('/').pop())}`}>
                {schema.$ref.split('/').pop()}
            </a>
        );
    }

    return null;
};

ApiDocModelLink.propTypes = {
    refSchema: PropTypes.object
};

ApiDocModelLink.displayName = 'Link to Model Documentation';

export default ApiDocModelLink;
