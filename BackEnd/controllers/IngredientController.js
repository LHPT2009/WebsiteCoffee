const Ingredient = require('../models/Ingredient');

const ingredientController = {
    getAllIngredientProducts: async (req, res) => {
        try {
            const ingredient = await Ingredient.find();
            res.status(200).json(ingredient);
        } catch (err) {
            res.status(500).json(ingredient);
        }
    },

    deleteIngredient: async (req, res) => {
        try {
            const ingredient = await ingredient.findByIdAndDelete(req.params.id);
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
            const newEarnPoints = new EarnPoints({
                name: req.body.name,
            });

            await newEarnPoints.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateEarnPoints: async (req, res) => {
        try {
            const updateEarnPoints = req.body;
            const earnPoints = await EarnPoints.findByIdAndUpdate(req.params.id, updateEarnPoints, {
                new: true,
            });

            if (!earnPoints) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(earnPoints);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ingredientController;
