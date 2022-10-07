const AdvertisingContract = require('../models/advertisingContract');

const advertisingContractController = {
    getAllAdvertisingContracts: async (req, res) => {
        try {
            const advertisingContract = await AdvertisingContract.find();
            res.status(200).json(advertisingContract);
        } catch (err) {
            res.status(500).json(advertisingContract);
        }
    },

    deleteAdvertisingContract: async (req, res) => {
        try {
            const advertisingContract = await AdvertisingContract.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAdvertisingContractById: async (req, res) => {
        try {
            const advertisingContract = await AdvertisingContract.findById(req.params.id);
            res.status(200).json(advertisingContract);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addAdvertisingContract: async (req, res) => {
        try {
            const newadvertisingContract = new AdvertisingContract({
                link: req.body.link,
                name: req.body.name
            });

            await newadvertisingContract.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateAdvertisingContract: async (req, res) => {
        try {
            const updateAdvertisingContract = req.body;
            const advertisingContract = await AdvertisingContract.findByIdAndUpdate(req.params.id, updateAdvertisingContract, {
                new: true,
            });

            if (!advertisingContract) {
                return res.status(404).json('Wrong updateProduct!');
            }
            res.status(200).json(advertisingContract);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = advertisingContractController;
