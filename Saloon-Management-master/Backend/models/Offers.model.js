const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offersSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Offer = mongoose.model("Offer", offersSchema);