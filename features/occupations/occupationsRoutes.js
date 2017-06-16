const occupationsCtrl = require('./occupationsCtrl');

module.exports = app => {
  app.get('/occupations', occupationsCtrl.getOccupations);
  app.get('/occupations/latest', occupationsCtrl.getLatestOccupation);
  app.post('/occupations', occupationsCtrl.postNewOccupation);
};
