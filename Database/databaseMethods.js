const mongoose = require('mongoose');
var db = mongoose.connection;

var host = require('../Database/Models/HostModel');
var poll = require('../Database/Models/PollModel');
//verifying
db.on('error', console.error);
db.once('open', function() {
  console.log('open!');
});

var dbMethods = {};

// Mongodb CRUD Operations

dbMethods.savePollInstance = function(pollToSave){
  var pollTemp = new poll(pollToSave);
  pollTemp.save(function(err, pollToSave) {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
}

dbMethods.deletePollInstance = function(pollToDelete_id){
  poll.findByIdAndRemove(pollToDelete_id, function(err, poll){
    console.log('removed ' poll);
  })
}








mongoose.connect('mongodb://localhost/tadpoll');

module.exports = dbMethods;
