const EarnPoints = require('../models/EarnPoints');

const earnPointsController = {
    getAllEarnPoints: async (req, res) => {
        try {
            const earnPoints = await EarnPoints.find();
            res.status(200).json(earnPoints);
        } catch (err) {
            res.status(500).json(earnPoints);
        }
    },

    deleteEarnPoints: async (req, res) => {
        try {
            const earnPoints = await EarnPoints.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getEarnPointsById: async (req, res) => {
        try {
            const earnPoints = await EarnPoints.findById(req.params.id);
            res.status(200).json(earnPoints);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addEarnPoints: async (req, res) => {
        try {
            const newEarnPoints = new EarnPoints({
                userid: req.body.userid,
                point: req.body.point,
                startdate: req.body.startdate,
                finaldate: req.body.finaldate
            });

            await newEarnPoints.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateEarnPoints: async (req, res) => {
        try {
            const updateEarnPoints = req.body;
            const earnPoints = await EarnPoints.findByIdAndUpdate(req.params.id, updateEarnPoints, {
                new: true,
            });

            if (!earnPoints) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(earnPoints);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = earnPointsController;
