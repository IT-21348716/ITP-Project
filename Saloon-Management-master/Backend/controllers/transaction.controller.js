const Transaction = require("../models/Transaction.model");

const saveTransaction = async (req, res) => {
  const {
    userId,
    amount,
    description,
  } = req.body;

  const transaction = new Transaction({
    userId,
    amount,
    description,
  });

  //Save to mongodb database
  transaction
    .save()
    .then((savedData) => {
      res.json(savedData);
    })
    .catch((error) => res.status(500).send("Server Error" + error));
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getTransactionsByUserId = async (req, res) => {
  try {
    const transactions = await Transaction.find({userId: req.params.userId});
    res.json(transactions);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.json(transaction);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateTransaction = async (req, res) => {
    Transaction.findByIdAndUpdate(req.params.id)
    .then((existingData) => {
      existingData.amount = req.body.amount;
      existingData.description = req.body.description;
      //Save the changes from request to database
      existingData
        .save()
        .then((updatedData) => res.json(updatedData))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteTransaction = async (req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
    .then((deletedData) => {
      res.json(deletedData);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  saveTransaction,
  getTransactionById,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getTransactionsByUserId
};