const rootController = require('../controller/root');

const _public = {};

_public.init = app => {
  app.get('/', rootController.get);
  return app;
};

module.exports = _public;
