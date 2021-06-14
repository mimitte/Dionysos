const express = require('express');
const router = express.Router();

const bottleCtrl = require('../controllers/BottleController');
const errorsCtrl = require('../controllers/ErrorsController');

router.route('/')
  .get(bottleCtrl.findAll)
  .post(bottleCtrl.create)
  .delete(bottleCtrl.deleteAll)
  .all(errorsCtrl.methodNotAllowed);

router.route('/:id')
  .get(bottleCtrl.find)
  .patch(bottleCtrl.edit)
  .delete(bottleCtrl.delete)
  .all(errorsCtrl.methodNotAllowed);

router.route('/user/:id')
  .get(bottleCtrl.findAllBottleByUserId)
  .all(errorsCtrl.methodNotAllowed);

module.exports = router;