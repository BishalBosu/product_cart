const express = require('express');

const mainController = require('../controllers/main')

const router = express.Router();

router.get('/electronics', mainController.getE)
router.get('/skincare', mainController.getS)
router.get('/food', mainController.getF)

router.post('/electronics', mainController.postE)
router.post('/skincare', mainController.postF)
router.post('/food', mainController.postS)

router.delete('/electronics/:id', mainController.deleteE)
router.delete('/skincare/:id', mainController.deleteF)
router.delete('/food/:id', mainController.deleteS)

module.exports = router;