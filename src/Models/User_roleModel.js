const mongoose = require("mongoose");

const UserRoleSchema = new mongoose.Schema({
    Password: { type: Number, require: true },
    User_name: { type: String, require: true },
    First_name: { type: String, require: true },
    Middle_name: { type: String, require: true },
    last_name: { type: String, require: true },
    department: { type: String, require: true },
    User_role: { type: String, require: true },
    User_superior: { type: String, require: true },
    Byline: { type: String, require: true },
    display_name: { type: String, require: true },

}, { timestamps: true });

module.exports = mongoose.model("userrole", UserRoleSchema)