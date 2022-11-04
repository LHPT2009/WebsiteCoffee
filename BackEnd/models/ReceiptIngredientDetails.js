const mongoose = require("mongoose");

const receiptingredientdetailsSchema = new mongoose.Schema({
    supplierid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    receiptingredientid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReceiptIngredient"
    },
    amount: {
        type: Number
    },
    unit: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model("ReceiptIngredientDetails", receiptingredientdetailsSchema);