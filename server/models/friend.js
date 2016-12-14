// require mongoose
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
 first_name: {type: String, required: true, minlength: 1}, 
 last_name: {type: String, required: true, minlength: 1},
 dob: {type: Date, required: true}}, 
 {timestamps: true });

var Friend = mongoose.model('Friend', FriendSchema); 