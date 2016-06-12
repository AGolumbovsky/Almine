// require global modules
const express = require('express');
const mongoose = require('mongoose');

//require local modules
var config = require('./api/config');
var setupController = require('./api/controllers/setupController');
var apiController = require('./api/controllers/apiController');

// meet express
var app = express();

var port = process.env.PORT || 8777;

//serve static files
app.use('/', express.static(__dirname + '/public'));

//app.set('view engine', 'ejs');

// connect to mongoose using config data from modules
// !!!!!! config data is not encrypted and is only safe for nothing

mongoose.connect('mongodb://cartman:notfat@ds025603.mlab.com:25603/ddd');

// encoded connection string for mLab MongoDB
// mongoose.connect(config.getDBConnectionString());

setupController(app);
apiController(app);

// listen carefully
app.listen(port, function() {

    console.log("node listening on port: " + port);

});