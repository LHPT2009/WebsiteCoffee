const SizeProduct = require('../models/SizeProduct');

const SizeProductController = {
    getAllSizeProduct: async (req, res) => {
        try {
            const sizeProduct = await SizeProduct.find();
            res.status(200).json(sizeProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteSizeProduct: async (req, res) => {
        try {
            const sizeProduct = await SizeProduct.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getSizeProductById: async (req, res) => {
        try {
            const sizeProduct = await SizeProduct.findById(req.params.id);
            res.status(200).json(sizeProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addSizeProduct: async (req, res) => {
        try {
            const newSizeProduct = new SizeProduct({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: req.roleId,
            });

            await newSizeProduct.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateSizeProduct: async (req, res) => {
        try {
            const updateSizeProduct = req.body;
            const sizeProduct = await User.findByIdAndUpdate(req.params.id, updateSizeProduct, {
                new: true,
            });

            if (!sizeProduct) {
                return res.status(404).json('Wrong updateSizeProduct!');
            }
            res.status(200).json(sizeProduct);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = SizeProductController;
