
const mongoose = require("mongoose");
const SocialBioSchema = new mongoose.Schema({

    User_image: { type: Number, require: true },
    User_Bio: { type: String, require: true },
    Social_facebook: { type: Number, require: true },
    Social_Twitter: { type: String, require: true },
    Social_Instagram: { type: String, require: true },
    Social_Lindin: { type: String, require: true },
  




}, { timestamps: true });

module.exports = mongoose.model("SocialBio", SocialBioSchema)