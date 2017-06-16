const nameRoutes = require('./features/name/nameRoutes');
const occupationsRoutes = require('./features/occupations/occupationsRoutes');

module.exports = app => {
  nameRoutes(app);
  occupationsRoutes(app);
};
