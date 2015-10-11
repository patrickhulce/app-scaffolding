var config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];
var db = require('./db.js')(config);

db.sequelize.sync({force: true}).then(function () {
  db.User.create({
    name: 'John Doe',
    access: 'admin',
    email: 'john@example.com'
  });
});
