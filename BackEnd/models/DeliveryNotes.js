const mongoose = require("mongoose");

const deliverynotesSchema = new mongoose.Schema({
    shipperid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipper"
    },
    date: {
        type: Date
    },
}, { timestamps: true }
);

module.exports = mongoose.model("DeliveryNotes", deliverynotesSchema);