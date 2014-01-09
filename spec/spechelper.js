var chai = require('chai'),
    sinonChai = require("sinon-chai");

global.expect = chai.expect;
global.sinon = require('sinon');
chai.use(sinonChai);
