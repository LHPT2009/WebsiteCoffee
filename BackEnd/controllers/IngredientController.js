const Ingredient = require('../models/Ingredient');

const ingredientController = {
    getAllIngredient: async (req, res) => {
        try {
            const ingredient = await Ingredient.find();
            res.status(200).json(ingredient);
        } catch (err) {
            res.status(500).json(ingredient);
        }
    },

    deleteIngredient: async (req, res) => {
        try {
            const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getIngredientById: async (req, res) => {
        try {
            const ingredient = await Ingredient.findById(req.params.id);
            res.status(200).json(ingredient);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addIngredient: async (req, res) => {
        try {
            const newIngredient = new Ingredient({
                name: req.body.name,
            });

            await newIngredient.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateIngredient: async (req, res) => {
        try {
            const updateIngredient = req.body;
            const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, updateIngredient, {
                new: true,
            });

            if (!ingredient) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(ingredient);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ingredientController;
