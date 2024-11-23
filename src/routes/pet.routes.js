const express = require('express');
const petController = require('../controllers/pet.controller');

const router = express.Router();

router.get('/pets', petController.getAll);
router.get('/pet/:id', petController.getById);
router.post('/pet', petController.create);
router.put('/pet/:id', petController.update);
router.delete('/pet/:id', petController.delete);

module.exports = router;
