import swaggerToApiDoc from './swagger-to-api-doc';
import fs from 'fs';
import path from 'path';

const API_NAMES = {
    'avatax.yaml': 'avatax',
    'avatax-soap.yaml': 'avataxsoap',
    'communications.yaml': 'communications',
    'landedcost.json': 'landedcost',
    'onboarding.yaml': 'onboarding',
    'taxrates.yaml': 'taxrates',
    'trustfile.yaml': 'trustfile',
    'communications-geocoder.yaml': 'communicationsgeo'
};

fs.readdir(path.join(__dirname, 'swagger'), (err, files) => {
    if (err) {
        throw new Error('Could not read in the Swagger directory. :(');
    }

    files.forEach((file) => {
        if (!API_NAMES[file]) {
            throw new Error('Unexpected file found in Swagger directory: ' + file);
        }

        swaggerToApiDoc(file, API_NAMES[file]);
    });
});


