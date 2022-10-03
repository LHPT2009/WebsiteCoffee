const mongoose = require("mongoose");

const advertisingContractSchema = new mongoose.Schema({
    link: {
        type: String
    },
    name: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model("AdvertisingContract", advertisingContractSchema);