var express = require('express')
var bodyParser = require('body-parser')
var middleware = require('./controllers/middleware.js')
var mainCtrl = require('./controllers/mainCtrl.js')
var app = express()


app.use(bodyParser.json())
app.use(middleware.addHeaders)


app.get('/name', )
app.get('/location',)
app.get('/occupations',)
app.get('/occupations/latest',)
app.get('/hobbies',)
app.get('/hobbies/:type',)
app.get('/family',)
app.get('/family/:gender',)
app.get('/restaurants',)
app.get('/restaurants/:name',)
