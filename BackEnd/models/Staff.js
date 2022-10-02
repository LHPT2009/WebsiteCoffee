const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    middlename: {
        type: String
    },
    lastname: {
        type: String
    },
    address: {
        type: String
    },
    number: {
        type: String
    },
    cardid: {
        type: String
    },
    positionid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Position"
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema);