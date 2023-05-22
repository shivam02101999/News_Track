const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    plateform: { type: Number },
    categories: { type: Number },
    sub_categories: { type: Number },
    language: { type: Number },
    take_images: { type: String },
    date: { type: String },
    expiry_date: { type: String },
    agencies: { type: String },
    new_title: { type: String },
    meta_keywords: { type: String },
    heading: { type: String },
    short_details: { type: String },
    description: { type: String },


}, { timestamps: true });

module.exports = mongoose.model("Article", ArticleSchema)