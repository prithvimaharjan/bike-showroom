const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    engine: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image_url: { type: String },
    details: String,
    year: Number,
    price: Number
  },
  {
    collection: "bikes",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    toObject: { virtuals: true },
    toJson: { virtuals: true }
  }
);

module.exports = mongoose.model("Bike", Schema);
