const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

// Route to get all pizzas
router.get('/pizzas', pizzaController.getAllPizzas);

// Route to visualize a specific pizza
router.get('/pizzas/:id', pizzaController.visualizePizza);

// Route to create a new pizza
router.post('/pizzas', pizzaController.createPizza);

// Route to update a pizza
router.put('/pizzas/:id', pizzaController.updatePizza);

// Route to delete a pizza
router.delete('/pizzas/:id', pizzaController.deletePizza);

module.exports = router;
