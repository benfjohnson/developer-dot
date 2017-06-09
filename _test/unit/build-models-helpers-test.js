/* eslint-env mocha */

import {expect} from 'chai';
import {
    hashNewDefinitions,
    combineAllOf,
    concatenateName,
    isBasicType,
    getDefName,
    addMethodToDef,
    addMethodToAllDefs,
    setupDefMethodSets
} from '../../dynamic/build-models-helpers';

const landedCost = require('../../dynamic/swagger/landedcost.json');

describe('build-models-helpers', () => {
    describe('concatenateName', () => {
        it('prepends `>` and capitalizes', () => {
            const strToConcat = 'taxes';

            expect(concatenateName(strToConcat)).to.eql(' > Taxes');
        });
    });

    describe('isBasicType', () => {
        it('Returns false for array', () => {
            const UnitsResponse = landedCost.definitions.UnitsResponse;

            const isBasic = isBasicType(UnitsResponse);

            expect(isBasic).to.eql(false);
        });
        it('Returns false for object', () => {
            const calcBase = landedCost.definitions.CalculateBase;

            const isBasic = isBasicType(calcBase);

            expect(isBasic).to.eql(false);
        });
        it('Returns true for string enum', () => {
            const Region = landedCost.definitions.Region;

            const isBasic = isBasicType(Region);

            expect(isBasic).to.eql(true);
        });
    });

    describe('combineAllOf', () => {
        it('correctly combines multiple objects into one single one.', () => {
            const CalculateResponse = {
                allOf: [
                    {$ref: '#/definitions/CalculateBase'},
                    {
                        properties: {
                            items: {
                                type: 'string',
                                description: 'foo'
                            }
                        },
                        required: [
                            'items'
                        ]
                    }
                ]
            };

            const defs = {
                CalculateBase: {
                    type: 'object',
                    properties: {
                        charges: {
                            type: 'array',
                            items: {
                                type: 'string',
                                description: 'bar'
                            }
                        }
                    }
                }
            };

            const newCalcResponse = combineAllOf(CalculateResponse.allOf, defs);

            expect(newCalcResponse).to.be.deep.equal({
                properties: {
                    items: {
                        type: 'string',
                        description: 'foo'
                    },
                    charges: {
                        type: 'array',
                        items: {
                            type: 'string',
                            description: 'bar'
                        }
                    }
                }
            });
        });
    });

    describe('hashNewDefinitions', () => {
        it('converts inlined definitions into flat, $ref-based', () => {
            const CalculateResponse = landedCost.definitions.CalculateResponse;
            const accum = {};

            hashNewDefinitions(CalculateResponse, 'CalculateResponse', accum, landedCost.definitions);

            const expectedCalcResponse = {
                properties: {
                    charges: {
                        type: 'array',
                        items: {
                            type: 'string',
                            description: 'Charges to include',
                            enum: [
                                'duties',
                                'taxes',
                                'fees'
                            ],
                            example: 'duties'
                        }
                    },
                    date: {
                        type: 'string',
                        description: 'Transaction date in ISO 8601 format',
                        format: 'date-time',
                        example: '2016-01-01T00:00:00.000Z'
                    },
                    incoterms: {
                        type: 'string',
                        description: 'Terms of sale. Used to determine buyer obligations',
                        enum: [
                            'DAP',
                            'DDP'
                        ],
                        example: 'DAP'
                    },
                    source: {
                        $ref: '#/definitions/Source',
                        title: 'Source'
                    },
                    destination: {
                        $ref: '#/definitions/Destination',
                        title: 'Destination'
                    },
                    entityType: {
                        type: 'string',
                        description: 'Type of sale. Can be used to determine applicable tax types',
                        enum: [
                            'B2C',
                            'B2B'
                        ],
                        example: 'B2C'
                    },
                    currency: {
                        $ref: '#/definitions/Currency',
                        description: 'Currency, in ISO 4217 format'
                    },
                    shipping: {
                        $ref: '#/definitions/CalculateResponse > Shipping'
                    },
                    discount: {
                        $ref: '#/definitions/Discount'
                    },
                    items: {
                        type: 'array',
                        items: {
                            $ref: '#/definitions/CalculateResponse > Items'
                        }
                    },
                    taxesAndFees: {
                        $ref: '#/definitions/CalculateResponse > TaxesAndFees'
                    },
                    landedCost: {
                        $ref: '#/definitions/CalculateResponse > LandedCost'
                    },
                    status: {
                        $ref: '#/definitions/CalculateResponse > Status'
                    }
                }
            };

            // accum should now have CalcBase and any sub-definitions it had inlined as $refs.
            expect(accum.CalculateResponse).to.eql(expectedCalcResponse, 'CalcResponse is flat, converted to $refs');

            // the accum should now have the following CalculateResponse sub-property keys, now that we've flattened the refs
            const calcResponseRefKeys = [
                'CalculateResponse > Shipping',
                'CalculateResponse > Items',
                'CalculateResponse > LandedCost',
                'CalculateResponse > TaxesAndFees',
                'CalculateResponse > Status'
            ];

            const everySubPropKeyExists = calcResponseRefKeys.every((key) => accum[key]);

            expect(everySubPropKeyExists).to.eql(true);
        });
    });

    describe('getDefName', () => {
        it('returns just the unique part of the definition ref', () => {
            const ref = {
                $ref: '#/definitions/TransactionModel'
            };

            expect(getDefName(ref)).to.eql('TransactionModel');
        });
    });

    describe('addMethodToDef', () => {
        it('pushes method name correctly', () => {
            const schemaRef = {
                $ref: '#/definitions/TransactionModel'
            };

            const methodName = 'CreateTransaction';

            const defs = {
                TransactionModel: {
                    'properties': {
                        foo: 'bar'
                    },
                    'x-methods-used-in': new Set()
                }
            };

            const addResult = addMethodToDef(schemaRef, methodName, defs);

            expect(Array.from(addResult.TransactionModel['x-methods-used-in'])).to.be.deep.eq(['CreateTransaction']);
        });
    });

    describe('addMethodToAllDefs', () => {
        it('adds CreateTransaction method to def references in the request, 200 response and error response', () => {
            const method = landedCost.paths['/v3/calculate'].post;
            const defs = setupDefMethodSets(landedCost.definitions);

            const newDefs = addMethodToAllDefs(method, defs);
            const {CalculateRequest, CalculateResponse, Error} = newDefs;

            expect(Array.from(CalculateRequest['x-methods-used-in'])).to.be.deep.eq(['calculate']);
            expect(Array.from(CalculateResponse['x-methods-used-in'])).to.be.deep.eq(['calculate']);
            expect(Array.from(Error['x-methods-used-in'])).to.be.deep.eq(['calculate']);
        });
    });
});
