const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
    startdate: {
        type: Date
    },
    enddate: {
        type: Date
    },
    contractid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AdvertisingContract",
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Advertisement", advertisementSchema);