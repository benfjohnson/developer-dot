import swaggerToApiDoc from './swagger-to-api-doc';

if (!process.env.SWAGGER_FILE || !process.env.API_NAME) {
    throw new Error('`process.env.SWAGGER_FILE` and `process.env.API_NAME` required!');
}

swaggerToApiDoc(process.env.SWAGGER_FILE, process.env.API_NAME);
