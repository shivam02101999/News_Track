const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    Mobile_1: { type: Number, require: true },
    email_1: { type: String, require: true },
    mobile_2: { type: Number, require: true },
    email_2: { type: String, require: true },
    address: { type: String, require: true },
    State_city: { type: String, require: true },
    Pincode: { type: Number, require: true },




}, { timestamps: true });

module.exports = mongoose.model("Contact", ContactSchema)