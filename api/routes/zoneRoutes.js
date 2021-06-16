const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const zoneCtrl = require('../controllers/ZoneController');
const errorsCtrl = require('../controllers/ErrorsController');

router.route('/')
  .get(zoneCtrl.findAll)
  .post(zoneCtrl.create)
  .delete(zoneCtrl.deleteAll)
  .all(errorsCtrl.methodNotAllowed);

router.route('/:id')
  .get(zoneCtrl.find)
  .patch(auth, zoneCtrl.edit)
  .delete(auth, zoneCtrl.delete)
  .all(errorsCtrl.methodNotAllowed);

module.exports = router;