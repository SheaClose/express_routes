const nameCtrl = require('./nameCtrl');

module.exports = app => {
  app.get('/name', nameCtrl.getName);
  app.put('/name', nameCtrl.putNewName);
};
