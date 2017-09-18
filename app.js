/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//
// The no bloatware MEAN stack
// Created by: Tommi Sullilvan
//
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Required Default imports for the MEAN stack:
var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	fs = require('fs'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	logger = require('winston')
chalk = require('chalk');
var exec = require('child_process').exec;

// Config Section & Exrepress Configs:
var c = require('./app/config.json');
var theme = chalk.bold.red;
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
app.use(express.static(__dirname + '/dist'));

// Database connection: (Change this to what your database URL is!)
var db = mongoose.createConnection('mongodb://localhost/default');
require('./app/database.js')(chalk, db);


/* This section is the database models and controllers, UNCOMMENT this section to use as a template
Database Models
var schemas = {};
var models = {
	mongoose: mongoose,
	items: require('./app/models/items.js')(mongoose, schemas),
};

//Controllers - database functions
var controller = {
	items: require('./app/controllers/items.js')(models, logger),
};
*/

// This is your socket connection file
if (c.connections.sockets)
	require('./app/socket.js')(app, exec, fs, io);

//This is your file for your routes to edit incomming connections
if (c.connections.routes)
	require('./app/routes.js')(app, exec, fs);

//Server connection
var server = require('./app/server.js')(http, 3000, theme);
