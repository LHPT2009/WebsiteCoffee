const mongoose = require("mongoose");

const SizeProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number
    },
}, { timestamps: true }
);

module.exports = mongoose.model("SizeProduct", SizeProductSchema);