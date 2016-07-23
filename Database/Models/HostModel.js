
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var hostSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

var Host = mongoose.model('Host', hostSchema);

module.exports = Host;
