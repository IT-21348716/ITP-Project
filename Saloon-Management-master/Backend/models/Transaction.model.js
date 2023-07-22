const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  description: {
    type: String,
  },
  amount: {
    type: String,
  },
  userId: {
    type: String,
  },
});

module.exports = Transaction = mongoose.model("Transaction", transactionSchema);