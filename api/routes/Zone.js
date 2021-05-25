const express = require('express');
const router = express.Router();
const zoneCtrl = require('../controllers/ZoneController');

/**
 * Routes prefix "/api/zone"
 */

router.route('/')
    .get(zoneCtrl.all)
    .post(zoneCtrl.create)
    .delete(zoneCtrl.deleteAll);

router.route('/:id')
    .get(zoneCtrl.find)
    .patch(zoneCtrl.edit)
    .delete(zoneCtrl.delete)

router.get('/:id/bottle', zoneCtrl.findAllBottles);

module.exports = router;
