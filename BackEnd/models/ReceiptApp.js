const mongoose = require("mongoose");

const receiptappSchema = new mongoose.Schema({
    name: {
        type: String
    },
}, { timestamps: true }
);

module.exports = mongoose.model("ReceiptApp", receiptappSchema);