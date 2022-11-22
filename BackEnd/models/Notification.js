const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    receiptid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Receipt"
    },
    status: {
        type: Boolean
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);