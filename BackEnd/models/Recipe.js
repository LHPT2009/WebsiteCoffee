const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    ingredientid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient"
    },
    amount: {
        type: Number
    },
    unit: {
        type: String
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);