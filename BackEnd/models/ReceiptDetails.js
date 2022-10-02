const mongoose = require("mongoose");

const receiptdetailsSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    receiptid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Receipt"
    },
    amount: {
        type: Number
    }
}, { timestamps: true }
);

module.exports = mongoose.model("ReceiptDetails", receiptdetailsSchema);