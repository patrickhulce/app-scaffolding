var express = require('express');

var app = express();

var db = require('./db/db.js');
var auth = require('./auth.js')(app, db);
var router = require('./routes.js')(auth, db);

app.set('view engine', 'jade');
app.use(express.static('www-root'));
app.use('/', router);

app.listen(process.env.PORT || 3000);
