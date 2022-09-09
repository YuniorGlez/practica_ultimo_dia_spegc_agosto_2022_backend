const router = require('express').Router();
const controller = require('./teams.controller')
const userIsLogged = require('./../../middlewares/userIsLogged')
const isAdmin = require('./../../middlewares/isAdmin')

router.get('/',userIsLogged,  controller.getAll)
router.get('/:id',userIsLogged,  controller.getOne)
router.post('/',userIsLogged,  controller.create)
router.put('/:id', userIsLogged, controller.editOne)
// Esta estaría protegida tanto para logeados como para los que sean .role === "Admin"
router.delete('/:id',userIsLogged, isAdmin, controller.deleteOne)

module.exports = router;