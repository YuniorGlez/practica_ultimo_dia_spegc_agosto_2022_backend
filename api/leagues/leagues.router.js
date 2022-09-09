const router = require('express').Router();
const controller = require('./leagues.controller')


router.get('/' ,  controller.getAll)
router.get('/:id' ,  controller.getOne)
router.post('' ,  controller.create)
router.put('/:id' ,  controller.editOne)
router.delete('/:id' ,  controller.deleteOne)


module.exports = router;