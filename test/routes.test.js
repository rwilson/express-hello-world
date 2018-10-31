// Disable eslint warnings on vars injected by mocha
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server');

const should = chai.should();
chai.use(chaiHttp);

describe('/GET root', () => {
  it('Should respond with "Hello World!"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.text.should.equal('Hello World!');
        done();
      });
  });
});
