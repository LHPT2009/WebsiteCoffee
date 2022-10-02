const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
    staffid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff"
    },
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    receiptappid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReceiptApp"
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model("Receipt", receiptSchema);