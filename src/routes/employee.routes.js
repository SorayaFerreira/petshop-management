const express = require('express');
const employeeController = require('../controllers/employee.controller');

const router = express.Router();

router.get('/employees', employeeController.getAll);
router.get('/employee/:id', employeeController.getById);
router.post('/employee', employeeController.create);
router.put('/employee/:id', employeeController.update);
router.delete('/employee/:id', employeeController.delete);

module.exports = router;
