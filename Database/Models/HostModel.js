
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var hostSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
  meta: {
    age: Number,
    website: String,
    organization: String
  },
  created_at: Date,
  updated_at: Date
});

var Host = mongoose.model('Host', hostSchema);

module.exports = Host;
