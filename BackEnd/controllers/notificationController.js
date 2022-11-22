const Notification = require("../models/Notification");

const NotificationController = {
    getAllNotifications: async (req, res) => {
        try {
            const notification = await Notification.find();
            res.status(200).json(notification);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getNotificationById: async (req, res) => {
        try {
            const notification = await Notification.findById(req.params.id);
            res.status(200).json(notification);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addNotification: async (req, res) => {
        try {
            const newNotification = await new Notification({
                status: false,
            });
            await newNotification.save();
            res.status(200).json("Add successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateNotification: async (req, res) => {
        try {
            const updateNotification = {
                status: true,
            };
            const notification = await Notification.findOneAndUpdate(
                { receiptid: req.params.id },
                updateNotification,
                { new: true }
            );
            if (!notification) {
                return res.status(404).json("Wrong updateRole!");
            }
            res.status(200).json(notification);
        } catch (error) {
            console.log(error);
            res.status(500).json("Error!!!");
        }
    }
}

module.exports = NotificationController;