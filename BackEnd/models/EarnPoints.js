const mongoose = require("mongoose");

const earnpointsSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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