const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    "Nombre del equipo": String,
    "id": String,
    "Logo del Equipo": String,
    "Liga": String
})

const LeagueModel = mongoose.model('team', TeamSchema);
module.exports = LeagueModel;