const express = require('express');
const appointmentController = require('../controllers/appointment.controller');

const router = express.Router();

router.get('/appointments', appointmentController.getAll);
router.get('/appointment/:id', appointmentController.getById);
router.post('/appointment', appointmentController.create);
router.put('/appointment/:id', appointmentController.update);
router.delete('/appointment/:id', appointmentController.delete);

module.exports = router;
