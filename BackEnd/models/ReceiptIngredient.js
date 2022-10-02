const mongoose = require("mongoose");

const receiptingredientSchema = new mongoose.Schema({
    staffid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff"
    },
    date: {
        type: Date
    }
}, { timestamps: true }
);

module.exports = mongoose.model("ReceiptIngredient", receiptingredientSchema);