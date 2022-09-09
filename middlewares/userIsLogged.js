
function userIsLogged(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    const { verify } = require('jsonwebtoken');
    verify(token, "SECRET", (err, dataStored) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = dataStored;
        next()
    })
}


module.exports = userIsLogged