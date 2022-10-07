const CategoryProduct = require('../models/categoryProduct');

const categoryProductController = {
    getAllCategoryProducts: async (req, res) => {
        try {
            const categoryProduct = await CategoryProduct.find();
            res.status(200).json(categoryProduct);
        } catch (err) {
            res.status(500).json(categoryProduct);
        }
    },

    deleteCategoryProduct: async (req, res) => {
        try {
            const categoryProduct = await CategoryProduct.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getCategoryProductById: async (req, res) => {
        try {
            const categoryProduct = await CategoryProduct.findById(req.params.id);
            res.status(200).json(categoryProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addCategoryProduct: async (req, res) => {
        try {
            const newCategoryProduct = new CategoryProduct({
                name: req.body.name,
            });

            await newCategoryProduct.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateCategoryProduct: async (req, res) => {
        try {
            const updateCategoryProduct = req.body;
            const categoryProduct = await CategoryProduct.findByIdAndUpdate(req.params.id, updateCategoryProduct, {
                new: true,
            });

            if (!categoryProduct) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(categoryProduct);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = categoryProductController;
