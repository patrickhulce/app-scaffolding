
module.exports = function (config, auth, db) {
  var express = require('express');
  var router = express.Router();

  router.get('/', function (req, res) {
    res.render('index', { title: '<%= appName %>' });
  });

  router.get('/hello', function (req, res) {
    res.json({hello: 'world'});
  });

  router.get('/protected', auth.loginRequired, function (req, res) {
    res.json({status: 'success'});
  });

  var users = require('./controllers/users_controller.js')(auth, db);
  router.use('/users', users);

  return router;
};
