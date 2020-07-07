const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
var app = express();

require('../database');

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(express.urlencoded({ extended: false }));

//routes
const home = require('../app/routes/home')(app);
const login = require('../app/routes/login')(app);
const contact = require('../app/routes/contact')(app);
const about = require('../app/routes/about')(app);



/*app.use('/login',login);
app.use('/contact',contact);
app.use('/about',about);
app.use('/',home);*/

module.exports = app;