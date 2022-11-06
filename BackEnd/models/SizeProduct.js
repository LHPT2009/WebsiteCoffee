const mongoose = require("mongoose");

const SizeProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    price: {
        type: Number
    },
}, { timestamps: true }
);

module.exports = mongoose.model("SizeProduct", SizeProductSchema);