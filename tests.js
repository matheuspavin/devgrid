
global.chai = require('chai');
global.chai.use(require('chai-as-promised'));
global.expect = chai.expect;
process.env.NODE_ENV = 'test';

require('./server/tests/tests.js');