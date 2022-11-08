const DisCount = require('../models/discount');

const disCountController = {
    getAllDisCount: async (req, res) => {
        try {
            const disCount = await DisCount.find();
            res.status(200).json(disCount);
        } catch (err) {
            res.status(500).json(disCount);
        }
    },

    deleteDisCount: async (req, res) => {
        try {
            const disCount = await DisCount.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getDisCountById: async (req, res) => {
        try {
            const disCount = await DisCount.findById(req.params.id);
            res.status(200).json(disCount);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addDisCount: async (req, res) => {
        try {
            const newDisCount = new DisCount({
                name: req.body.name,
                price: req.body.price,
                startdate: req.body.startdate,
                enddate: req.body.enddate
            });

            await newDisCount.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateDisCount: async (req, res) => {
        try {
            const updateDisCount = req.body;
            const disCount = await DisCount.findByIdAndUpdate(req.params.id, updateDisCount, {
                new: true,
            });

            if (!disCount) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(disCount);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = disCountController;
