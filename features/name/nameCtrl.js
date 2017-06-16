var user = require('../../user.js');

module.exports = {
  getName: function(req, res, next) {
    return res.status(200).json(user.name);
  },
  putNewName: function(req, res, next) {
    user.name = req.body.name;
    res.json(user.name);
  }
};
