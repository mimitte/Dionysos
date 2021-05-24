const express = require('express');
const router = express.Router();
const cellarCtrl = require('../controllers/CellarController');

/**
 * Routes prefix "/api/cellar"
 */

router.route('/')
    .get(cellarCtrl.all)
    .post(cellarCtrl.create)
    .delete(cellarCtrl.deleteAll);

router.route('/:id')
    .get(cellarCtrl.find)
    .delete(cellarCtrl.delete);

router.get('/:id/zones', (req, res) => cellarCtrl.findAllZones);

router.route('/')
    .get(cellarCtrl.all)
    .post(cellarCtrl.create)
    .delete(cellarCtrl.deleteAll);

router.route('/:id')
    .get(cellarCtrl.find)
    .patch(cellarCtrl.edit)
    .delete(cellarCtrl.delete);

router.get('/:id/zones', () => cellarCtrl.findAllZones);

module.exports = router;
