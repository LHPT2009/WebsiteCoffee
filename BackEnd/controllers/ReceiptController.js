const Receipt = require('../models/receipt');
const ReceiptDetail = require('../models/receiptDetails');
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
            const receiptdetail = await ReceiptDetail.deleteMany({ receiptid: req.params.id });
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

    getReceiptDetailById: async (req, res) => {
        try {
            const receiptDetail = await ReceiptDetail.find({ receiptid: req.params.id }).populate('productid', ['name']);
            res.status(200).json(receiptDetail);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addReceipt: async (req, res) => {
        try {
            const newReceipt = new Receipt({
                userid: req.body.userid,
                price: req.body.price,
                statuspayment: req.body.statuspayment,
                statusdelivery: req.body.statusdelivery,
            });
            await newReceipt.save();

            (req.body.products).forEach(ele => {
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