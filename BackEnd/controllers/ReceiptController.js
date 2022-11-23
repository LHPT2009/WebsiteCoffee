const Receipt = require('../models/receipt');
const ReceiptDetail = require('../models/receiptDetails');
const Rate = require('../models/rate');
const Notification = require('../models/Notification');

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

    getReceiptByUserId: async (req, res) => {
        try {
            const receipt = await Receipt.find({ userid: req.body.userid });
            res.status(200).json(receipt);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    getReceiptDetailById: async (req, res) => {
        try {
            const receiptDetail = await ReceiptDetail.find({ receiptid: req.params.id }).populate('productid', ['name']);
            // const receiptDetail = await ReceiptDetail.find().populate('productid');
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
                discountid: req.body.discountid,
                discountprice: req.body.discountprice,
                statuspayment: req.body.statuspayment,
                statusdelivery: req.body.statusdelivery,
                numberphone: req.body.numberphone,
                address: req.body.address,
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
            var productid = "";
            (req.body.products).forEach(ele => {
                if (productid != ele.id) {
                    const newRate = new Rate({
                        userid: req.body.userid,
                        productid: ele.id,
                        receiptid: newReceipt._id,
                        point: 0,
                        content: "",
                        status: false,
                        statusrate: false,
                    });
                    newRate.save();
                    productid = ele.id;
                }
            });

            const newNotification = new Notification({
                receiptid: newReceipt._id,
                status: false
            });
            await newNotification.save();
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