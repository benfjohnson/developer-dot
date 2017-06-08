import SWAGGER_CONFIG from './SWAGGER_CONFIG';
import swaggerToApiDoc from './swagger-to-api-doc';

Object.keys(SWAGGER_CONFIG).forEach((file) => {
    const path = 'api-reference/' + file.substring(0, file.lastIndexOf('.'));

    swaggerToApiDoc(file, SWAGGER_CONFIG[file].name, path, SWAGGER_CONFIG[file].product);
});
