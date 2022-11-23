const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    receiptid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Receipt"
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: Boolean
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);