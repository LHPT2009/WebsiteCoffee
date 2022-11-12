const Role = require("../models/role");

const RoleController = {
    getAllRoles: async (req, res) => {
        try {
            const role = await Role.find();
            res.status(200).json(role);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getRoleUser: async (req, res) => {
        try {
            const role = await Role.findOne({ "rolename": "User" });
            res.status(200).json(role);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteRole: async (req, res) => {
        try {
            const role = await Role.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getRoleById: async (req, res) => {
        try {
            const role = await Role.findById(req.params.id);
            res.status(200).json(role);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addRole: async (req, res) => {
        try {
            const newRole = await new Role({
                rolename: req.body.rolename,
            });

            await newRole.save();
            res.status(200).json("Add successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateRole: async (req, res) => {
        try {
            const updateRole = req.body;
            const role = await Role.findByIdAndUpdate(
                req.params.id,
                updateRole,
                { new: true }
            );
            if (!role) {
                return res.status(404).json("Wrong updateRole!");
            }
            res.status(200).json(role);
        } catch (error) {
            console.log(error);
            res.status(500).json("Error!!!");
        }
    }
}

module.exports = RoleController;