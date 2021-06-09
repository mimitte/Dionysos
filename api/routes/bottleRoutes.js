const express = require('express');
const router = express.Router();

const bottleCtrl = require('../controllers/BottleController');

router.route('/')
  .get(bottleCtrl.findAll)
  .post(bottleCtrl.create)
  .delete(bottleCtrl.deleteAll);

router.route('/:id')
  .get(bottleCtrl.find)
  .patch(bottleCtrl.edit)
  .delete(bottleCtrl.delete);

router.route('/user:id')
  .get(bottleCtrl.findAllBottleByUserId);

module.exports = router;