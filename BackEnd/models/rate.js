const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiptid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Receipt"
    },
    point: {
        type: Number
    },
    content: {
        type: String
    },
    status: {
        type: Boolean
    },
    statusrate: {
        type: Boolean
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Rate", rateSchema);