const express = require('express');
const router = express.Router();

const cellarCtrl = require('../controllers/CellarController')

router.route('/')
 .get(cellarCtrl.findAll)
 .post(cellarCtrl.create)
 .delete(cellarCtrl.deleteAll);

router.route('/:id/zones')
  .get(cellarCtrl.findAllZonesByCellarId);

router.route('/:id')
  .get(cellarCtrl.find)
  .delete(cellarCtrl.delete)
  .patch(cellarCtrl.edit);
  
router.route('/user/:id')
  .get(cellarCtrl.findAllCellarByUserId);

module.exports = router;