const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    confirmemail: {
        type: Boolean
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
    },
}, { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);