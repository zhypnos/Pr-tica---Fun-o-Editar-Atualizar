const Pizza = require('../models/Pizza');

// Existing functions (like visualize)

// Update pizza
exports.updatePizza = async (req, res) => {
    const { id } = req.params;
    const { name, ingredients, price } = req.body;

    try {
        const pizza = await Pizza.findById(id);
        if (!pizza) {
            return res.status(404).json({ message: 'Pizza not found' });
        }

        pizza.name = name || pizza.name;
        pizza.ingredients = ingredients || pizza.ingredients;
        pizza.price = price || pizza.price;

        await pizza.save();

        res.status(200).json({ message: 'Pizza updated successfully', pizza });
    } catch (error) {
        res.status(500).json({ message: 'Error updating pizza', error });
    }
};
