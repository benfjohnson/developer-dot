import PropTypes from 'prop-types';

const SwaggerType = PropTypes.oneOf(['object', 'array', 'number', 'string', 'boolean']);

const ModelBasicPropertyType = PropTypes.shape({
    type: SwaggerType,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    format: PropTypes.oneOf(['int16', 'int32', 'int64', 'date-time', 'double']),
    example: PropTypes.any,
    description: PropTypes.string,
    enum: PropTypes.arrayOf(PropTypes.string)
});

const ModelReferencePropertyType = PropTypes.oneOfType([
    PropTypes.shape({
        items: PropTypes.shape({
            $ref: PropTypes.string
        })
    }),
    PropTypes.shape({
        $ref: PropTypes.string
    })
]);

const ModelPropertyType = PropTypes.oneOfType([ModelBasicPropertyType, ModelReferencePropertyType]);

const ModelType = {
    description: PropTypes.string,
    type: SwaggerType,
    properties: PropTypes.objectOf(ModelPropertyType),
    required: PropTypes.arrayOf(PropTypes.string)
};

export {
    ModelType
};
