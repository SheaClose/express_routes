var user = require('../user.js')

module.exports = {

  getName : function(req, res, next){
    return res.status(200).json(user.name)
  },

  getLocation : function(req, res, next){
    return res.status(200).json(user.location)
  },

  getOccupations : function(req, res, next){
    return res.status(200).json(user.occupations)
  },

  getLatestOccupation : function(req, res, next){
    return res.status(200).json({latestOccupation: user.occupations.pop()})
  },

  getHobbies : function(req,res,next){
    return res.status(200).json({Hobbies: user.hobbies})
  }
}
