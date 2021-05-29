const express = require('express');
const router = express.Router();

const zoneCtrl = require('../controllers/ZoneController');

router.route('/api/zone')
  .get(zoneCtrl.all)
  .post(zoneCtrl.create)
  .delete(zoneCtrl.deleteAll);

router.route('/api/zone/:id')
  .get(zoneCtrl.find)
  .patch(zoneCtrl.edit)
  .delete(zoneCtrl.delete);

router.get('/api/zone/:id/bottle', zoneCtrl.findAllBottles);

module.exports = router;