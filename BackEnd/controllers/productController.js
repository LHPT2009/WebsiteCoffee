const Product = require('../models/product');

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const product = await Product.find();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(product);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addProduct: async (req, res) => {
        try {
            const newProduct = new Product({
                categoryproductid: req.body.categoryproductid,
                name: req.body.name,
                price: req.body.price,
                image: req.body.image,
                describe: req.body.describe,
                status: req.body.status
            });

            await newProduct.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateProduct: async (req, res) => {
        try {
            const updateProduct = req.body;
            const product = await Product.findByIdAndUpdate(req.params.id, updateProduct, {
                new: true,
            });

            if (!product) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ProductController;
