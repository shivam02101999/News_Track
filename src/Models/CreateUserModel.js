const mongoose = require("mongoose");

const CreateSchema = new mongoose.Schema({
    // id: { type: Number, require: true },
    name: { type: String, require: true },
    Phone: { type: Number, require: true },
    Password: { type: Number, require: true },
    Address: { type: String, require: true },
    email: { type: String, require: true },

}, { timestamps: true });

module.exports = mongoose.model("Create", CreateSchema)