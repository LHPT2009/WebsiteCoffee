const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    point: {
        type: Number
    }
}, { timestamps: true }
);
module.exports = mongoose.model("Rate", rateSchema);