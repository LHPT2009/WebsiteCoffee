const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: Number
    },
    discountid: {
        type: String
    },
    discountprice: {
        type: Number
    },
    statuspayment: {
        type: Boolean
    },
    statusdelivery: {
        type: Boolean
    },
    numberphone: {
        type: String
    },
    address: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model("Receipt", receiptSchema);