const Recipe = require('../models/Recipe');

const RecipeController = {
    getAllRecipes: async (req, res) => {
        try {
            const recipe = await Recipe.find();
            res.status(200).json(recipe);
        } catch (err) {
            res.status(500).json(recipe);
        }
    },

    deleteRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getRecipeById: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.status(200).json(recipe);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addRecipe: async (req, res) => {
        try {
            const newRecipe = new Recipe({
                productid: req.body.productid,
                ingredientid: req.body.ingredientid,
                amount: req.body.amount,
                unit: req.body.unit
            });

            await newRecipe.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateRecipe: async (req, res) => {
        try {
            const updateRecipe = req.body;
            const recipe = await Recipe.findByIdAndUpdate(req.params.id, updateRecipe, {
                new: true,
            });

            if (!recipe) {
                return res.status(404).json('Wrong updateRecipe!');
            }
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = RecipeController;
