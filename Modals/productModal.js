const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Title: String,
  File: String,
  Discription: String,
  Select: String,
  Rating: String,
  Cost: String,
  Ingredients: String,
});
module.exports = mongoose.model("products", productSchema);
