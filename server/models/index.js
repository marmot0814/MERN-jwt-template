const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.set('useNewUrlParser', true)
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

module.exports.User = require('./user');