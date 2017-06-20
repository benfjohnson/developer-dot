/* eslint-env mocha */
/* eslint no-unused-expressions:0 */

import {expect} from 'chai';
import {traversePostBodyData} from '../../../dynamic/react/shared/reducers/apiConsoleReducer';

describe('React Unit Test > Shared > apiConsoleReducer', function() {
    describe('traversePostBodyData', function() {
        it('find lines array in Addresses or parent object', function() {
            const propertyPath = 'Addresses:[0]:lines';
            const state = {Addresses: [{}]};
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(failed).to.be.ok;
            expect(param).to.equal('lines');
            expect(val).to.deep.equal({});
        });

        it('simple access of base layer key', function() {
            const expected = 'bar';
            const propertyPath = 'foo';
            const state = {foo: expected};
            const {val} = traversePostBodyData(propertyPath, state);

            expect(val).to.deep.equal(expected);
        });

        it('traverse depth of 2', function() {
            const expected = {foo: 'bar'};
            const propertyPath = 'hello:[0]';
            const state = {hello: [expected]};
            const {val} = traversePostBodyData(propertyPath, state);

            expect(val).to.deep.equal(expected);
        });

        it('traverse to undefined value (array)', function() {
            const propertyPath = 'hello:[0]';
            const state = {hello: []};
            const expected = state.hello;
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(failed).to.be.ok;
            expect(param).to.equal(0);
            expect(val).to.deep.equal(expected);

            // return value `val` should reference object inside state
            val.push({foo: 'bar'});
            expect(val).to.deep.equal(expected);
        });

        it('traverse to undefined value (object)', function() {
            const propertyPath = 'hello:foo';
            const state = {hello: {num: 42, dev: 'dot'}};
            const expected = state.hello;
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(failed).to.be.ok;
            expect(param).to.equal('foo');
            expect(val).to.deep.equal(expected);
        });

        it('looking for OBJECT, but breaks because encounters undefined where base array should be', function() {
            const propertyPath = 'hello:[0]:foo';
            const state = {hello: []};
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(val).to.deep.equal({});
            expect(failed).to.be.ok;
            expect(param).to.equal('foo');

            val.foo = 'some value';
            expect(state.hello[0].foo).to.equal('some value');
        });

        it('looking for ARRAY, but breaks because encounters undefined where base array should be', function() {
            const propertyPath = 'hello:[0]:[0]';
            const state = {hello: []};
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(val).to.deep.equal([]);
            expect(failed).to.be.ok;
            expect(param).to.equal(0);

            val[param] = [];
            val[param].push(42);
            expect(state.hello[0][0][0]).to.equal(42);
        });

        it('looking for OBJECT, but breaks because encounters undefined where base object should be', function() {
            const propertyPath = 'hello:foo:bar';
            const state = {hello: {}};
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(val).to.deep.equal({});
            expect(failed).to.be.ok;
            expect(param).to.equal('bar');

            val[param] = 42;
            expect(state.hello.foo.bar).to.equal(42);
        });

        it('looking for ARRAY, but breaks because encounters undefined where base object should be', function() {
            const propertyPath = 'hello:foo:[0]';
            const state = {hello: {}};
            const {val, param, failed} = traversePostBodyData(propertyPath, state);

            expect(val).to.deep.equal([]);
            expect(failed).to.be.ok;
            expect(param).to.equal(0);

            val[param] = [];
            val[param].push(42);
            expect(state.hello.foo[0][0]).to.equal(42);
        });
    });
});
