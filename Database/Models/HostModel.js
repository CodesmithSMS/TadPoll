
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//host is not currently used, kept in app to be used in future features (e.g. authentication)
var hostSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

var Host = mongoose.model('Host', hostSchema);

module.exports = Host;
