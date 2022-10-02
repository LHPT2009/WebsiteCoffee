const mongoose = require("mongoose");

const receiptingredientdetailsSchema = new mongoose.Schema({
    ingredientid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient"
    },
    receiptingredientid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReceiptIngredient"
    },
    amount: {
        type: Number
    }
}, { timestamps: true }
);

module.exports = mongoose.model("ReceiptIngredientDetails", receiptingredientdetailsSchema);