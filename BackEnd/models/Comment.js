const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    content: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
