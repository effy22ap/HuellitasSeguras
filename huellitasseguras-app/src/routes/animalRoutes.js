const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

//Mapeo
router.get('/', animalController.getAnimales);
router.post('/', animalController.createAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;