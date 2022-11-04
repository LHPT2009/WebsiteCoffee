const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmemail: {
        type: Boolean
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    numberphone: {
        type: String
    },
}, { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);