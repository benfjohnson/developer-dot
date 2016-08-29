import SWAGGER_CONFIG from './SWAGGER_CONFIG';
import swaggerToApiDoc from './swagger-to-api-doc';

Object.keys(SWAGGER_CONFIG).forEach((file) => {
    swaggerToApiDoc(file, SWAGGER_CONFIG[file].name, SWAGGER_CONFIG[file].path, SWAGGER_CONFIG[file].product);
});
