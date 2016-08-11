import SwaggerParser from 'swagger-parser';
import parseSwaggerUi from '../../parseSwaggerUI';
import path from 'path';

export default (filename, callback) => {
    new SwaggerParser().dereference(path.join(__dirname, '..', '..', 'swagger', filename)).then((swaggerDoc) => {
        const getStartedState = parseSwaggerUi(swaggerDoc, null).apiEndpoints.map((endpoint) => {
            return {...endpoint, apiConsoleVisible: true};
        });

        callback(getStartedState);
    });
};
