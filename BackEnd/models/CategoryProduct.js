const mongoose = require("mongoose");

const categoryProductSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model("CategoryProduct", categoryProductSchema);