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
// app.get('/hobbies/:type',)
// app.get('/family',)
// app.get('/family/:gender',)
// app.get('/restaurants',)
// app.get('/restaurants/:name',)


app.listen(3000, function(){
  console.log("I am listening")
})
