const ReceiptIngredient = require('../models/ReceiptIngredient');

const ReceiptIngredientController = {
    getAllReceiptIngredient: async (req, res) => {
        try {
            const receiptIngredient = await ReceiptIngredient.find();
            res.status(200).json(receiptIngredient);
        } catch (err) {
            res.status(500).json(receiptIngredient);
        }
    },

    deleteReceiptIngredient: async (req, res) => {
        try {
            const receiptIngredient = await ReceiptIngredient.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getReceiptIngredientById: async (req, res) => {
        try {
            const receiptIngredient = await ReceiptIngredient.findById(req.params.id);
            res.status(200).json(receiptIngredient);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addReceiptIngredient: async (req, res) => {
        try {
            const newReceiptIngredient = new ReceiptIngredient({
                userid: req.body.userid,
                price: req.body.price,
            });
            await newReceiptIngredient.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateReceiptIngredient: async (req, res) => {
        try {
            const updateReceiptIngredient = req.body;
            const receiptIngredient = await ReceiptIngredient.findByIdAndUpdate(req.params.id, updateReceiptIngredient, {
                new: true,
            });

            if (!receiptIngredient) {
                return res.status(404).json('Wrong updateReceipt!');
            }
            res.status(200).json(receiptIngredient);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ReceiptIngredientController;