const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
    // id: { type: Number, require: true },
    User_status: { type: String, require: true },
    // country_Short_name: { type: String, require: true },

},
 { timestamps: true });

module.exports = mongoose.model("Status", StatusSchema)