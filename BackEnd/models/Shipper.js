const mongoose = require("mongoose");

const shipperSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    middlename: {
        type: String
    },
    lastname: {
        type: String
    },
    number: {
        type: String
    },
    cardid: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Shipper", shipperSchema);