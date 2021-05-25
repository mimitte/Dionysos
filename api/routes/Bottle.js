const express = require('express');
const router = express.Router();
const bottleCtrl = require('../controllers/BottleController');

/**
 * Routes prefix "/api/bottle"
 */

router.route('/')
    .get(bottleCtrl.all)
    .post(bottleCtrl.create)
    .delete(bottleCtrl.deleteAll);

router.route('/:id')
    .get(bottleCtrl.find)
    .patch(bottleCtrl.edit)
    .delete(bottleCtrl.delete);

module.exports = router;
