const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model("Receipt", receiptSchema);