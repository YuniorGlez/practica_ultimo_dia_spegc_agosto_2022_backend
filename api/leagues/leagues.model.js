const mongoose = require('mongoose');

const LeagueSchema = mongoose.Schema({
    "Nombre De La Liga" : String,
    Identificador : String,
    "Logo de la Liga" : String
})

const LeagueModel = mongoose.model('league', LeagueSchema);
module.exports = LeagueModel;