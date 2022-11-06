const Supplier = require('../models/Supplier');

const SupplierController = {
    getAllSupplier: async (req, res) => {
        try {
            const supplier = await Supplier.find();
            res.status(200).json(supplier);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteSupplier: async (req, res) => {
        try {
            const supplier = await Supplier.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getSupplierById: async (req, res) => {
        try {
            const supplier = await Supplier.findById(req.params.id);
            res.status(200).json(supplier);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addSupplier: async (req, res) => {
        try {
            const newSupplier = new Supplier({
                name: req.body.name
            });

            await newSupplier.save();
            res.status(200).json('Add successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateSupplier: async (req, res) => {
        try {
            const updateSupplier = req.body;
            const supplier = await Supplier.findByIdAndUpdate(req.params.id, updateSupplier, {
                new: true,
            });

            if (!supplier) {
                return res.status(404).json('Wrong updateSizeProduct!');
            }
            res.status(200).json(supplier);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = SupplierController;
