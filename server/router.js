const router = require('express').Router();
const controller = require ('./controller');

// router decides what functions are used for which requests

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

module.exports = router;
