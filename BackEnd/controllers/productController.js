const Product = require('../models/Product');
const fs = require("fs");
const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const product = await Product.find().populate('categoryproductid');
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
            const product = await Product.findById(req.params.id).populate('categoryproductid');
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
                image: {
                    data: fs.readFileSync("uploads/" + req.file.filename),
                    contentType: "image/png",
                },
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
            if (req.body.changpicture == 0) {
                const updateProduct = {
                    categoryproductid: req.body.categoryproductid,
                    name: req.body.name,
                    price: req.body.price,
                    image: req.body.image,
                    describe: req.body.describe,
                    status: req.body.status
                };
                const product = await Product.findByIdAndUpdate(req.params.id, updateProduct, {
                    new: true,
                });
                if (!product) {
                    return res.status(404).json('Wrong updateProduct!');
                }
                res.status(200).json(product);
            } else {
                const updateProduct = {
                    categoryproductid: req.body.categoryproductid,
                    name: req.body.name,
                    price: req.body.price,
                    image: {
                        data: fs.readFileSync("uploads/" + req.file.filename),
                        contentType: "image/png",
                    },
                    describe: req.body.describe,
                    status: req.body.status
                };
                const product = await Product.findByIdAndUpdate(req.params.id, updateProduct, {
                    new: true,
                });
                if (!product) {
                    return res.status(404).json('Wrong updateProduct!');
                }
                res.status(200).json(product);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ProductController;
