const express = require('express');
const router = express.Router();

const cellarCtrl = require('../controllers/CellarController')

router.route('/api/cellar')
 .get(cellarCtrl.all)
 .post(cellarCtrl.create)
 .delete(cellarCtrl.deleteAll);

router.route('/api/cellar/:id')
 .get(cellarCtrl.find)
 .delete(cellarCtrl.delete);

router.get('/api/cellar/:id/zones', (req, res) => cellarCtrl.findAllZones);

router.route('/api/cellar')
  .get(cellarCtrl.all)
  .post(cellarCtrl.create)
  .delete(cellarCtrl.deleteAll);

router.route('/api/cellar/:id')
  .get(cellarCtrl.find)
  .patch(cellarCtrl.edit)
  .delete(cellarCtrl.delete);

router.get('/api/cellar/:id/zones', () => cellarCtrl.findAllZones);

module.exports = router;