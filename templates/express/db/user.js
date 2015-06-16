module.exports = {
  define: function (sequelize, Columns) {
    return sequelize.define('user', {
      id: Columns.ID(),
      name: Columns.STRING(),
      email: Columns.STRING(),
      access: Columns.STRING()
    });
  },
  associate: function (db) {
    // db.User.hasMany(db.Project);
  }
};
