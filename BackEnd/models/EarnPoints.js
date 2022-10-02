const mongoose = require("mongoose");

const earnpointsSchema = new mongoose.Schema({
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    point: {
        type: Number
    },
    startdate: {
        type: Date
    },
    finaldate: {
        type: Date
    }
}, { timestamps: true }
);

module.exports = mongoose.model("EarnPoints", earnpointsSchema);