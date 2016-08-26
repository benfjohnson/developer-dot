import SWAGGER_CONFIG from './SWAGGER_CONFIG';
import swaggerToApiDoc from './swagger-to-api-doc';

import fsRecursive from 'fs-readdir-recursive';
import path from 'path';

const files = fsRecursive(path.join(__dirname, 'swagger'));

files.forEach((file) => {
    if (SWAGGER_CONFIG[file]) {
        swaggerToApiDoc(file, SWAGGER_CONFIG[file].name, SWAGGER_CONFIG[file].path, SWAGGER_CONFIG[file].product);
    }
});
