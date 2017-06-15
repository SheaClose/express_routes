var express = require('express')
var bodyParser = require('body-parser')
var middleware = require('./controllers/middleware.js')
var mainCtrl = require('./controllers/mainCtrl.js')
var app = express()


app.use(bodyParser.json())
app.use(middleware.addHeaders)




app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getLatestOccupation)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesByType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyByGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName)


app.put('/name', mainCtrl.putNewName)
app.put('/location', mainCtrl.putNewLocation)
app.post('/hobbies', mainCtrl.postNewHobby)
app.post('/occupations', mainCtrl.postNewOccupation)
app.post('/family', mainCtrl.postNewFamilyMember)
app.post('/restaurants', mainCtrl.postNewResaurant)

app.get('/skills', mainCtrl.getSkills)
app.post('/skills', middleware.addSkillsID, mainCtrl.postSkills)

app.get('/secrets/:username/:id', mainCtrl.getSecretsByUsernameAndId);




app.listen(3000, function(){
  console.log("I am listening")
})
