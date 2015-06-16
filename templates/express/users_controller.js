module.exports = function (auth, db) {
  var express = require('express');
  var router = express.router();

  router.use(auth.loginRequired);

  router.get('/:userId', function (req, res) {
    db.User.find(req.params.userId).success(function (user) {
      res.json(user);
    });
  });

  return router;
};
