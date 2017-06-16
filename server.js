var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();
const masterRoutes = require('./masterRoutes');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

masterRoutes(app);

app.get('/location', mainCtrl.getLocation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);

app.put('/location', mainCtrl.putNewLocation);
app.post('/hobbies', mainCtrl.postNewHobby);
app.post('/family', mainCtrl.postNewFamilyMember);
app.post('/restaurants', mainCtrl.postNewResaurant);

app.get('/skills', mainCtrl.getSkills);
app.post('/skills', middleware.addSkillsID, mainCtrl.postSkills);

app.get('/secrets/:username/:id', mainCtrl.getSecretsByUsernameAndId);

app.listen(3000, function() {
  console.log('I am listening');
});
