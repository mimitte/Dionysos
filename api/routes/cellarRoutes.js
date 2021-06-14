const express = require('express');
const router = express.Router();

const cellarCtrl = require('../controllers/CellarController');
const errorsCtrl = require('../controllers/ErrorsController');

router.route('/')
 .get(cellarCtrl.findAll)
 .post(cellarCtrl.create)
 .delete(cellarCtrl.deleteAll)
  .all(errorsCtrl.methodNotAllowed);

router.route('/:id')
  .get(cellarCtrl.find)
  .delete(cellarCtrl.delete)
  .patch(cellarCtrl.edit)
  .all(errorsCtrl.methodNotAllowed);

router.route('/user/:id')
  .get(cellarCtrl.findAllByUser)
  .all(errorsCtrl.methodNotAllowed);

module.exports = router;