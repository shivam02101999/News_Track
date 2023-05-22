const mongoose = require("mongoose");

const CheckBoxSchema = new mongoose.Schema({
    // id: { type: Number, require: true },
    Check_name: { type: String, require: true },

}, { timestamps: true });

module.exports = mongoose.model("CheckBox", CheckBoxSchema)