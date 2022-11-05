const Position = require('../models/Position');

const positionController = {
    getAllPosition: async (req, res) => {
        try {
            const position = await Position.find();
            res.status(200).json(position);
        } catch (err) {
            res.status(500).json(position);
        }
    },

    deletePosition: async (req, res) => {
        try {
            const position = await Position.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getPositionById: async (req, res) => {
        try {
            const position = await Position.findById(req.params.id);
            res.status(200).json(position);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addPosition: async (req, res) => {
        try {
            const newPosition = new Position({
                name: req.body.name,
            });

            await newPosition.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updatePosition: async (req, res) => {
        try {
            const updatePosition = req.body;
            const position = await Position.findByIdAndUpdate(req.params.id, updatePosition, {
                new: true,
            });

            if (!position) {
                return res.status(404).json('Wrong updatePosition!');
            }
            res.status(200).json(position);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = positionController;
