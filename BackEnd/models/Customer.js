const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);