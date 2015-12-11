/* Written by Des */
var express = require('express'),
	cors = require('cors'),
	endpoints = require('./endpoints.json'),
	app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "accept, access-control-allow-origin, content-type, enservioauthorizationtoken, x-requested-with");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return next();
});

app.locals.endpoints = endpoints;

var routes = require('./routes')(app);

var server = app.listen(3000, function() {
	console.log("Mock endpoints available at http://localhost:3000/");
});