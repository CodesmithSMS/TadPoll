const mongoose = require('mongoose');
var db = mongoose.connection;

var host = require('../Database/Models/HostModel');
var poll = require('../Database/Models/PollModel');

db.on('error', console.error);
db.once('open', function() {
  console.log('open!');
});

var dbMethods = {};

// Mongo CRUD Operations

dbMethods.savePoll = function(pollToSave){
  var pollTemp = new poll(pollToSave);
  pollTemp.save(function(err, pollToSave) {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
}

dbMethods.deletePoll = function(pollToDelete_id){
  poll.findByIdAndRemove(pollToDelete_id, function(err, poll){
    console.log(poll);
  })
}



mongoose.connect('mongodb://localhost/tadpoll');

module.exports = dbMethods;
