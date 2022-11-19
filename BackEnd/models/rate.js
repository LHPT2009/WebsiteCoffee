const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    usertid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    point: {
        type: Number
    },
    content: {
        type: String
    },
    status: {
        type: Boolean
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Rate", rateSchema);