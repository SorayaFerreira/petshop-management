const express = require('express');
const clientController = require('../controllers/client.controller');

const router = express.Router();

router.get('/clients', clientController.getAll);
router.get('/client/:id', clientController.getById);
router.post('/client', clientController.create);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.delete);

module.exports = router;
