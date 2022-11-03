const Receipt = require('../models/Receipt');
const ReceiptDetail = require('../models/ReceiptDetails');
const ReceiptController = {
    getAllReceipts: async (req, res) => {
        try {
            const receipt = await Receipt.find();
            res.status(200).json(receipt);
        } catch (err) {
            res.status(500).json(receipt);
        }
    },

    deleteReceipt: async (req, res) => {
        try {
            const receipt = await Receipt.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getReceiptById: async (req, res) => {
        try {
            const receipt = await Receipt.findById(req.params.id);
            res.status(200).json(receipt);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addReceipt: async (req, res) => {
        try {
            const newReceipt = new Receipt({
                userid: req.body.userid,
                price: req.body.price,
            });
            await newReceipt.save();
            
            console.log(req.body.products);
            (req.body.products).forEach( ele => {
                const newReceiptDetail = new ReceiptDetail({
                    productid: ele.id,
                    receiptid: newReceipt._id,
                    amount: ele.amount
                });
                newReceiptDetail.save(); 
            });
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateReceipt: async (req, res) => {
        try {
            const updateReceipt = req.body;
            const receipt = await Receipt.findByIdAndUpdate(req.params.id, updateReceipt, {
                new: true,
            });

            if (!receipt) {
                return res.status(404).json('Wrong updateReceipt!');
            }
            res.status(200).json(receipt);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ReceiptController;