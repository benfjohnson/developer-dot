import SwaggerParser from 'swagger-parser';
import parseSwaggerUi from '../../parseSwaggerUI';
import path from 'path';

export default (filename, callback) => {
    const parser = new SwaggerParser();

    parser.dereference(path.join(__dirname, '..', '..', '..', 'public', 'data', filename)).then((swaggerDoc) => {
        const getStartedState = parseSwaggerUi(swaggerDoc, null).apiEndpoints;

        callback(getStartedState);
    }).catch((error) => {
        /* eslint-disable no-console */
        console.error(error);
        /* eslint-enable no-console */
    });
};
