const express = require('express');
const router = express.Router();

const zoneCtrl = require('../controllers/ZoneController');

router.route('/')
  .get(zoneCtrl.findAll)
  .post(zoneCtrl.create)
  .delete(zoneCtrl.deleteAll);

router.route('/:id')
  .get(zoneCtrl.find)
  .patch(zoneCtrl.edit)
  .delete(zoneCtrl.delete);

router.get('/:id/bottle', zoneCtrl.findAllBottlesByZoneId);

router.route('/user:id')
  .get(zoneCtrl.findAllZoneByUserId);

module.exports = router;