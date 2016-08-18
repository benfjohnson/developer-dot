import SwaggerParser from 'swagger-parser';
import parseSwaggerUi from '../../parseSwaggerUI';
import recipeConfig from './avatax-recipes';
import path from 'path';

export default (filename, callback) => {
    const parser = new SwaggerParser();

    parser.dereference(path.join(__dirname, '..', '..', 'swagger', filename)).then((swaggerDoc) => {
        const state = parseSwaggerUi(swaggerDoc, null).apiEndpoints;
        const recipeState = state.filter((apiEndpoint) => recipeConfig[apiEndpoint.operationId]).map((endpoint) => {
            const recipe = recipeConfig[endpoint.operationId];

            return {...endpoint, postBody: recipe.recipeSchema, postBodyData: recipe.sampleRequest, postBodyDefaultData: recipe.sampleRequest, recipeDescription: recipe.description};
        });

        callback(recipeState);
    }).catch((err) => {
        /* eslint-disable no-console */
        console.error(err);
        /* eslint-enable no-console */
    });
};
