const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  message: { type: String, required: true },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
