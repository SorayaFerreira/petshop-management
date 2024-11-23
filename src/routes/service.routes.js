const express = require('express');
const serviceController = require('../controllers/service.controller');

const router = express.Router();

router.get('/services', serviceController.getAll);
router.get('/service/:id', serviceController.getById);
router.post('/service', serviceController.create);
router.put('/service/:id', serviceController.update);
router.delete('/service/:id', serviceController.delete);

module.exports = router;
