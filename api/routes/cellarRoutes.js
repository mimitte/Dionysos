const express = require('express');
const router = express.Router();

const cellarCtrl = require('../controllers/CellarController')

router.route('/')
 .get(cellarCtrl.findAll)
 .post(cellarCtrl.create)
 .delete(cellarCtrl.deleteAll);

router.route('/:id')
  .get(cellarCtrl.find)
  .delete(cellarCtrl.delete)
  .patch(cellarCtrl.edit);

module.exports = router;