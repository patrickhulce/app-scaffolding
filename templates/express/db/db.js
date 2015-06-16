'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var Columns = require('./columns.js');

var config = require('../config/config.json')[process.env.NODE_ENV || 'dev'].db;
var sequelize = new Sequelize(config.database, config.username, config.password, config);

var db = {};
var models = ['user'];
var modelDefs = [];

models.forEach(function (modelName) {
  var modelDef = require('./models/' + modelName + '.js');
  modelDefs.push(modelDef);
  var modelFriendly = modelName.replace(/_([a-z])/g, function (x) {
    return x.toUpperCase();
  }).replace(/^([a-z])/, function (x) { return x.toUpperCase(); });
  console.log(modelFriendly);
  var model = modelDef.define(sequelize, Columns);
  db[modelFriendly] = model;
});

Object.values(db).forEach(function (modelDef) {
  modelDef.associate(db);
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
