
const mongoose = require("mongoose");
const StateSchema = new mongoose.Schema({

    name :{ type: String, require:true}

}, { timestamps: true });

module.exports = mongoose.model("state-cities", StateSchema)