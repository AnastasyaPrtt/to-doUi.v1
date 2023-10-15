const Router = require('express');
const taskController = require('../controllers/taskController');
const router = new Router()


router.post('/:id', taskController.create);
router.get('/:id', taskController.getAll);
router.delete('/:id', taskController.delete);
router.put('/:id', taskController.update);
router.get('/', taskController.filterToday);

module.exports = router;