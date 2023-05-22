const mongoose = require("mongoose");

const MOUTermsSchema = new mongoose.Schema({
    RevenueShare: { type: String, require: true },
    AgreementStartDate: { type: String, require: true },
    AgreementENDDate: { type: String, require: true },
    AutoRenewal: { type: String, require: true },
    Refferal: { type: String, require: true },

}, { timestamps: true });

module.exports = mongoose.model("MOUTerms", MOUTermsSchema)