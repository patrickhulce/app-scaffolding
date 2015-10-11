var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(cookieParser());
app.use(bodyParser.json());

var config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
var db = require('./db/db.js')(config);
var auth = require('./auth.js')(config, app, db);
var router = require('./routes.js')(config, auth, db);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static('www-root'));

app.use('/', router);

app.listen(process.env.PORT || 3000);
