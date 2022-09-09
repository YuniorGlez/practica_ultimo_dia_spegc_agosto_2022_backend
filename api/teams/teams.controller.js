
const TeamModel = require('./teams.model')
const cuid = require('cuid');


function getAll(req, res) {
    console.log(req.user)
    return TeamModel.find()
        .then(teams => {
            return res.send(teams);
        })
}
function getOne(req, res) {
    return TeamModel.findOne({ id: req.params.id })
        .then(team => {
            return res.send(team)
        })
}


function create(req, res) {
    const team = req.body;
    team.id = cuid()
    return TeamModel.create(team)
        .then(newteam => {
            return res.send(newteam)
        })
        .catch(err => {
            return res.status(400).send(err)
        })
}

function editOne(req, res) {
    return TeamModel.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(result => {
            return res.send(result);
        })
}

function deleteOne(req, res) {
    return TeamModel.findOneAndRemove({ id: req.params.id })
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