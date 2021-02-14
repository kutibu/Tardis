// Imports
var app = require('./bin/express')(); 
var router = require('./bin/express-router')(); 
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var apiRouter   = require('./src/apiRouter').router;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.use('/', apiRouter);


// Enfin on lance notre serveur sur le port 5000
app.listen(5000);
console.log('Server launched on port 5000');