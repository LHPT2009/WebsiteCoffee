const Advertisement = require('../models/advertisement');

const advertisementController = {
    getAllAdvertisement: async (req, res) => {
        try {
            const advertisement = await Advertisement.find();
            res.status(200).json(advertisement);
        } catch (err) {
            res.status(500).json(advertisement);
        }
    },

    deleteAdvertisement: async (req, res) => {
        try {
            const advertisement = await Advertisement.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAdvertisementById: async (req, res) => {
        try {
            const advertisement = await Advertisement.findById(req.params.id);
            res.status(200).json(advertisement);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addAdvertisement: async (req, res) => {
        try {
            const newAdvertisement = new Advertisement({
                startdate: req.body.startdate,
                enddate: req.body.enddate,
                contractid: req.body.contractid
            });

            await newAdvertisement.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateAdvertisement: async (req, res) => {
        try {
            const updateAdvertisement = req.body;
            const advertisement = await Advertisement.findByIdAndUpdate(req.params.id, updateAdvertisement, {
                new: true,
            });

            if (!advertisement) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(advertisement);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = advertisementController;
