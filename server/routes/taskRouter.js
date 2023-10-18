const Router = require('express');
const { create, getAll, remove, change } = require('../controllers/index');
const router = new Router()


router.post('/:id', create);
router.get('/', getAll);
router.delete('/:id', remove);
router.put('/:id', change);

module.exports = router;