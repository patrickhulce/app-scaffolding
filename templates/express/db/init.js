var db = require('./db.js');

db.sequelize.sync({force: true}).then(function () {
  db.User.create({
    name: 'John Doe',
    access: 'admin',
    email: 'john@example.com'
  });
});
