var user = require('../user.js')
var skills = require('../skills.js')
var secrets = require('../secrets.js')

module.exports = {

  getName : function(req, res, next){
    return res.status(200).json(user.name)
  },

  getLocation : function(req, res, next){
    return res.status(200).json(user.location)
  },

  getOccupations : function(req, res, next){
    if(req.query.order){
      var order = req.query.order
      if(order == 'asc'){
        var filtered = user.occupations.reverse()
        return res.status(200).json(filtered)
      } else if(order == 'desc'){
        var filtered = user.occupations.sort()
        return res.status(200).json(filtered)
      }
    }
    return res.status(200).json(user.occupations)
  },

  getLatestOccupation : function(req, res, next){
    return res.status(200).json({latestOccupation: user.occupations.pop()})
  },

  getHobbies : function(req, res, next){
    return res.status(200).json({Hobbies: user.hobbies})
  },

  getHobbiesByType : function(req, res, next){
    var type = req.params.type
    var filtered = user.hobbies.filter(function(hobby){
      return hobby.type == type
    })
    return res.status(200).json(filtered)
  },

  getFamily : function(req, res, next){
    if(req.query.relation) {
      var relation = req.query.relation
      var filtered = user.family.filter(function(member){
        return member.relation.toLowerCase() == relation
      })
      return res.status(200).json(filtered)
    } else {
        return res.status(200).json(user.family)
    }
  },

    getFamilyByGender : function (req, res, next){
      var gender = req.params.gender
      var filtered = user.family.filter(function(member){
        return member.gender == gender
      })
      return res.status(200).json(filtered)
    },

    getRestaurants : function(req, res, next){
      if(req.query.rating){
        var filtered = user.restaurants.filter(function(restaurant){
            return restaurant.rating >= 2
        })
        return res.status(200).json(filtered)
      } else {
        return res.status(200).json(user.restaurants)
      }
    },

    getRestaurantsByName : function(req, res, next){
      var name = req.params.name
      var filtered = user.restaurants.filter(function(restaurant){
        return restaurant.name.toLowerCase() == name
      })
      return res.status(200).json(filtered)
    },

    putNewName : function (req, res, next) {
      user.name = req.body.name
      res.json(user.name)
    },

    putNewLocation : function(req, res, next) {
      user.location = req.body.location
      res.status(200).json(user.location)
    },

    postNewHobby : function(req, res, next) {
      var hobby = req.body
      user.hobbies.push(hobby)
      res.status(200).json(user.hobbies)
    },

    postNewOccupation : function(req, res, next) {
      var occupation = req.body
      user.occupations.push(occupation)
      res.status(200).json(user.occupations)
    },

    postNewFamilyMember : function(req, res, next) {
      var member = req.body
      user.family.push(member)
      res.status(200).json(user.family)
    },

    postNewResaurant : function(req, res, next) {
      var restaurant = req.body
      user.restaurants.push(restaurant)
      res.status(200).json(user.restaurants)
    },

    getSkills : function(req, res, next) {
      if(req.query.experience){
        var experience = req.query.experience
        var filtered = skills.filter(function(skill){
          return skill.experience.toLowerCase() == experience
        })
        return res.status(200).json(filtered)
      } else {
        return res.status(200).json(skills)
      }
    },

    postSkills : function(req, res, next) {
      var newSkill = req.body
      skills.push(newSkill)  
      res.status(200).json(skills)
    },

    getSecretsByUsernameAndId : function(req, res, next) {
      var username = req.params.username
      var id = parseInt(req.params.id)
      var filtered = secrets.filter(function(secret){
        return secret.username == username && secret.id == id
      })
      if (!filtered.length) {
        return res.status(401).json("You lose")
      }
      return res.status(200).json(filtered)
    }


}
