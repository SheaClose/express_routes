const user = require('../../user.js');

module.exports = {
  getOccupations: function(req, res, next) {
    if (req.query.order) {
      var order = req.query.order;
      if (order == 'asc') {
        var filtered = user.occupations.reverse();
        return res.status(200).json(filtered);
      } else if (order == 'desc') {
        var filtered = user.occupations.sort();
        return res.status(200).json(filtered);
      }
    }
    return res.status(200).json(user.occupations);
  },
  getLatestOccupation: function(req, res, next) {
    return res.status(200).json({
      latestOccupation: user.occupations.pop()
    });
  },
  postNewOccupation: function(req, res, next) {
    var occupation = req.body;
    user.occupations.push(occupation);
    res.status(200).json(user.occupations);
  }
};
