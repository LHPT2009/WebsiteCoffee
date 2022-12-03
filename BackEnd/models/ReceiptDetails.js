const mongoose = require("mongoose");

const receiptdetailsSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    receiptid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Receipt"
    },
    name: {
        type: String
    },
    amount: {
        type: Number
    },
    price: {
        type: Number
    }
}, { timestamps: true }
);

module.exports = mongoose.model("ReceiptDetails", receiptdetailsSchema);