import SwaggerParser from 'swagger-parser';
import parseSwaggerUi from '../../parseSwaggerUI';
import path from 'path';

export default (filename, callback) => {
    var parser = new SwaggerParser();
    parser.dereference(path.join(__dirname, '..', '..', 'swagger', filename)).then((swaggerDoc) => {
        const getStartedState = parseSwaggerUi(swaggerDoc, null).apiEndpoints;

        callback(getStartedState);
    }).catch( error => {
        console.error(error);
    });
};
