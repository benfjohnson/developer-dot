import SWAGGER_CONFIG from './SWAGGER_CONFIG';
import swaggerToApiDoc from './swagger-to-api-doc';

import fs from 'fs';
import path from 'path';

fs.readdir(path.join(__dirname, 'swagger'), (err, files) => {
    if (err) {
        throw new Error('Could not read in the Swagger directory. :(');
    }

    files.forEach((file) => {
        if (!SWAGGER_CONFIG[file]) {
            throw new Error('Unexpected file found in Swagger directory: ' + file);
        }

        swaggerToApiDoc(file, SWAGGER_CONFIG[file].name, SWAGGER_CONFIG[file].path, SWAGGER_CONFIG[file].product);
    });
});


