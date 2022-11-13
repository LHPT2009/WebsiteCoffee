const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    categoryproductid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoryProduct"
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    describe: {
        type: String
    },
    status: {
        type: Boolean
    }
}, { timestamps: true }
);
module.exports = mongoose.model("Products", productSchema);