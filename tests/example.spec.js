const { expect } = require('chai');
const sinon = require('sinon');

/**
 * This is to create a sandbox env to test
 */
const sandbox = sinon.createSandbox();

// const { 
//   someController 
// } = require('../modules/some.controller');

describe('This is a basic test example', () => {
  beforeEach(()=>{
    /**
     * This is where you prep the tests with data, beforeEach will run before each test.
     * You can mock / stub functions like below or add env variables.
     * 
     *  sandbox.stub(someController, 'someFunction').callsFake(async () => {
     *    return mockedData
     *  });
     * 
     * sandbox.stub(process, 'env').value({'mock' : 'data'})
     */
  })

  afterEach(() => {
    /**
     * This is where you reset mocks and anything that you have prepped before your tests
     * 
     * sandbox.restore();
     */
      sandbox.restore();
  });

  it('The actual test', () => {
    expect(1).to.equal(1)
  })
})