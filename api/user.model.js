const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    "email" : String,
    "password" : String
})

const LeagueModel = mongoose.model('user', TeamSchema);
module.exports = LeagueModel;