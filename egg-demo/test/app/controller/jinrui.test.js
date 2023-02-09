'use strict';

const { app } = require('egg-mock/bootstrap');

describe('jinrui test', () => {
  it('jinrui index', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('Im jinrui');
  });
});
