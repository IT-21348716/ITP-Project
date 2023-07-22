const express = require("express");
const router = express.Router();
const {
    saveTransaction,
    getTransactionById,
    getTransactions,
    updateTransaction,
    deleteTransaction,
    getTransactionsByUserId
} = require("../controllers/transaction.controller");

router.get("/", getTransactions);

router.get("/:id", getTransactionById);

router.get("/user/:userId", getTransactionsByUserId);

router.post("/", saveTransaction);

router.put("/:id", updateTransaction);

router.delete("/:id", deleteTransaction);
 
module.exports = router;