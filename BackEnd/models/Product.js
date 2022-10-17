const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    categoryproductid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoryProduct"
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);