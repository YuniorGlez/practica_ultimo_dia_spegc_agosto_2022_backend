//const jwt = require('jsonwebtoken');

function isAdmin(req, res, next) {

    // Siempre y cuando primero hayan usado el otro middleware
    if(req.user.role === "Admin"){
        next()
    }else{
        return 
    }

    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    // if (token == null) return res.sendStatus(401)

    // jwt.verify(token, "SECRET", (err, dataStored) => {
    //     console.log(err)
    //     if (err) return res.sendStatus(403)
    //     if (dataStored.role === "Admin"){
    //         req.user = dataStored;
    //         next()
    //     }else{
    //         return res.sendStatus(403)
    //     }
    // })
}


module.exports = isAdmin