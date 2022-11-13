const Rate = require('../models/rate');

const RateController = {
    getAllRates: async (req, res) => {
        try {
            const rate = await Rate.find();
            res.status(200).json(rate);
        } catch (err) {
            res.status(500).json(rate);
        }
    },

    deleteRate: async (req, res) => {
        try {
            const rate = await Rate.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getRateByProductId: async (req, res) => {
        try {
            const rate = await Rate.find({ productid: req.params.id }).populate('usertid');
            res.status(200).json(rate);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addRate: async (req, res) => {
        try {
            const newRate = new Rate({
                productid: req.body.productid,
                usertid: req.body.usertid,
                point: req.body.point,
                content: req.body.content,
            });

            await newRate.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateRate: async (req, res) => {
        try {
            const updateRate = req.body;
            const rate = await DisCount.findByIdAndUpdate(req.params.id, updateRate, {
                new: true,
            });

            if (!rate) {
                return res.status(404).json('Wrong updaterate!');
            }
            res.status(200).json(rate);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = RateController;
