
const LeagueModel = require('./leagues.model')
const cuid = require('cuid');


function getAll(req, res) {
    return LeagueModel.find()
        .then(leagues => {
            return res.send(leagues);
        })
}
function getOne(req, res) {
    return LeagueModel.findOne({ Identificador: req.params.id })
        .then(league => {
            return res.send(league)
        })
}


function create(req, res) {
    const league = req.body;
    league.Identificador = cuid()
    return LeagueModel.create(league)
        .then(newLeague => {
            return res.send(newLeague)
        })
        .catch(err => {
            return res.status(400).send(err)
        })
}

function editOne(req, res) {
    return LeagueModel.findOneAndUpdate({ Identificador: req.params.id }, req.body)
        .then(result => {
            return res.send(result);
        })
}

function deleteOne(req, res) {
    return LeagueModel.findOneAndRemove({ Identificador: req.params.id })
        .then(result => {
            return res.send(result);
        })
}

module.exports = {
    getAll,
    getOne,
    create,
    editOne,
    deleteOne
}