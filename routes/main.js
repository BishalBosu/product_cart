const express = require('express');

const mainController = require('../controllers/main')

const router = express.Router();

router.get('/electronics', mainController.getE)
router.get('/skincare', mainController.getS)
router.get('/food', mainController.getF)

router.post('/electronics', mainController.postE)
router.post('/skincare', mainController.postS)
router.post('/food', mainController.postF)

router.delete('/electronics/:id', mainController.deleteE)
router.delete('/skincare/:id', mainController.deleteS)
router.delete('/food/:id', mainController.deleteF)

module.exports = router;